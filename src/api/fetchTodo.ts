import { Todo } from "../types/types";
import { pipe } from 'fp-ts/lib/function'

const fetchTodos = () : Promise<Todo[]> => {
    return fetch("https://jsonplaceholder.typicode.com/todos/").then(result => result.json());
}

const PromiseStatus = {
    PENDING: "pending",
    SUCCESS: "success",
    ERROR: "error"
}

const dataResource = <T>(promise : Promise<T>) => {
    let status = PromiseStatus.PENDING;
    let result:T;

    const suspender = promise.then(
        data => {
            status = PromiseStatus.SUCCESS;
            result = data;
        }, 
        error => {
            status = PromiseStatus.ERROR;
            result = error;
        }
    )

    return {
        getData(){
            switch(status) {
                case PromiseStatus.SUCCESS: 
                    return result;
                case PromiseStatus.ERROR:
                    throw result;
                default: 
                    throw suspender;
            }  
        }
    }
}

export const fetchWrappedData = () => pipe(fetchTodos(), dataResource);
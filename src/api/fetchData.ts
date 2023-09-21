export type Article = {
    "userId": number
    "id": number
    "title": string
    "body": string
}

export function fetchData() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json());
}

const PromiseStatus = {
    PENDING: "Pending",
    SUCCESS: "Success",
    ERROR:"Error"
}

export const dataSource = <T>(promise: Promise<T>) => {
    let status = PromiseStatus.PENDING;
    let result: T;

    const suspender = promise.then(data => {
        status = PromiseStatus.SUCCESS;
        result = data;
    }, error => {
        status = PromiseStatus.ERROR;
        result = error;
    })

    return {
        read() {
            switch(status) {
                case PromiseStatus.PENDING: 
                    throw suspender;
                case PromiseStatus.ERROR: 
                    throw result;
                default : 
                    return result;
            }
        }
    }
}
  
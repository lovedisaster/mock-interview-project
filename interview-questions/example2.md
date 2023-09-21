You're given a frontend web application running on 
http://frontend-app.com and a backend API server running on http://backend-api.com/v1/todos/. The frontend needs to make AJAX requests to the backend to fetch and post data.

John made a fetchData function, that returns a Promise of data, and consumed this fetchData function in a UI component, do you see any potential problems of the code? 

```
async fetchData function(){
    const result = await fetch("http://backend-api.com/v1/todos");
    const data = await result.json();
    return data;
}
```






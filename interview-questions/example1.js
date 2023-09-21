export const sequenceFunc = () => {
    console.log('1. Start of main thread');

    setTimeout(() => {
        console.log('2. Inside setTimeout callback');
      }, 0);

    let promise = new Promise((resolve) => {
      console.log('3. Inside Promise executor');
      resolve('4. Promise resolved');
    });
    
    promise.then((message) => {
      console.log(message);
    });
}




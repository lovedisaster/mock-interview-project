export const fetchData = () => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('Data from API');
      }, 1000);
    });
  };
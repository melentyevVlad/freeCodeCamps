const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = false;
      
    makeServerRequest.catch(error => {
      console.log(error);
    })
  
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });
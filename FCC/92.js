const makeServerRequest = new Promise((resolve, reject) => {r
    let responseFromServer = true;
      
    makeServerRequest.then(
      result => console.log(result),
      error => console.log(error)
    );
  
  
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
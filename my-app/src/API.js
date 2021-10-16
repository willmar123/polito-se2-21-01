/**
 * All the API calls
 */
 import dayjs from 'dayjs';
const a=dayjs();
 
 const BASEURL = '/api';
 
 async function getSelectedType(){
  const url = '/api/client';
  const response = await fetch(url);
  const responseBody = await response.json();
  if (response.ok){
        return responseBody;
  } 
  else {
        throw responseBody;
  }
}
let i = 0
    
async function getTicket(serviceType){
  
  //JSON sent to backend
  // console.log(JSON.stringify({typeOfRequest: "customer", ID: "", serviceType: serviceType, startDate: "", endDate: ""}));
   return new Promise((resolve, reject) => {
     fetch(BASEURL , {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json',
       },
       body: JSON.stringify({typeOfRequest: "customer", id:serviceType, servicedType: serviceType, startDate:a }),
       }).then((response) => {
         if (response.ok) {
           resolve(10);//console.log(response.json()); //response: JSON with ticket number 
         } else {
           // analyze the cause of error
           response.json()
             .then((message) => { reject(message); }) // error message in the response body
             .catch(() => { reject({ error: "Cannot parse server response." }) }); // something else
        }
     }).catch(() => { reject({ error: "Cannot communicate with the server." }) }); // connection errors
  });
}

async function getNextCustomer(counterID){

  //JSON sent to backend
  console.log(JSON.stringify({typeOfRequest: "officer", ID: counterID, serviceType: "", startDate: dayjs.format("DD MM AAAA"), endDate: ""}));
  return new Promise((resolve, reject) => {
    fetch(BASEURL , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({typeOfRequest: "officer", ID: counterID, serviceType: "", startDate: "", endDate: ""}),
      }).then((response) => {
        if (response.ok) {
          console.log(response.json()); //response: JSON with number and servicetype to be served
        } else {
          // analyze the cause of error
          response.json()
            .then((message) => { reject(message); }) // error message in the response body
            .catch(() => { reject({ error: "Cannot parse server response." }) }); // something else
        }
    }).catch(() => { reject({ error: "Cannot communicate with the server." }) }); // connection errors
  });
}
    
async function getStatisticsForCounter(startDate, endDate, counterID){ //counterID can be null if manager asks for all counters
  //JSON sent to backend
  console.log(JSON.stringify({typeOfRequest: "manager", ID: counterID, serviceType: "", startDate: startDate, endDate: endDate}));
  return new Promise((resolve, reject) => {
    fetch(BASEURL , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({typeOfRequest: "manager", ID: counterID, serviceType: "", startDate: startDate, endDate: endDate}),
      }).then((response) => {
        if (response.ok) {
          console.log(response.json()); //response: JSON with query results
        } else {
          // analyze the cause of error
          response.json()
            .then((message) => { reject(message); }) // error message in the response body
            .catch(() => { reject({ error: "Cannot parse server response." }) }); // something else
        }
    }).catch(() => { reject({ error: "Cannot communicate with the server." }) }); // connection errors
  });
}

async function getStatisticsForServicetype(startDate, endDate, serviceType){ //counterID can be null if manager asks for all services
  //JSON sent to backend
  console.log(JSON.stringify({typeOfRequest: "manager", ID: "", serviceType: serviceType, startDate: startDate, endDate: endDate}));
  return new Promise((resolve, reject) => {
    fetch(BASEURL , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({typeOfRequest: "manager", ID: "", serviceType: serviceType, startDate: startDate, endDate: endDate}),
      }).then((response) => {
        if (response.ok) {
          console.log(response.json()); //response: JSON with query results
        } else {
          // analyze the cause of error
          response.json()
            .then((message) => { reject(message); }) // error message in the response body
            .catch(() => { reject({ error: "Cannot parse server response." }) }); // something else
        }
    }).catch(() => { reject({ error: "Cannot communicate with the server." }) }); // connection errors
  });
}

  /*  return new Promise((resolve, reject) => {
      fetch(BASEURL , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({code: e.value, score: e.label, date: 0}),
        }).then((response) => {
          if (response.ok) {
            resolve(null);
          } else {
            // analyze the cause of error
            response.json()
              .then((message) => { reject(message); }) // error message in the response body
              .catch(() => { reject({ error: "Cannot parse server response." }) }); // something else
          }
      }).catch(() => { reject({ error: "Cannot communicate with the server." }) }); // connection errors
    });
  }*/




  const API = {getSelectedType, getTicket};
export default API;
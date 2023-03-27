import { API_URL } from "../../../env";
import { Feeds } from "../../../models/Feeds";

function checkStatus(response) {
  if(response.ok) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  return response;
}

export const deleteFeedsById = async (id: number) => {
  return fetch(API_URL + '/api/feeds/' + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(checkStatus)
    .then((res) => {
      if(res.status < 500) {
        res.json()
      } else {
        console.error(res);
      }
    }).catch((err) => {
      err.response.json().then((res) => {
        console.log(res);
      });
    }).finally(() => {
       console.log('finished');
    })
}

export const getFeedsById = async (id: number) => {
  return fetch(API_URL + '/api/feeds/' + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(checkStatus)
    .then((res) => {
      if(res.status < 500) {
        res.json()
      }else{
        console.error(res);
      }
    }).catch((err) => {
      err.response.json().then((res) => {
        console.log(res);
      });
    }).finally(() => {
      console.log('finished');
    })
}

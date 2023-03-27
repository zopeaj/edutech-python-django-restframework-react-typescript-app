import { API_URL } from "../../../env";
import { Account } from "../../../models/Account";


function checkStatus(response) {
  if(response.ok) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  return Promise.reject(error);
}

export const getUserData = async (userData: any) => {
  return fetch(API_URL + "/api/account", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData);
  }).then(checkStatus)
      .then((res) => {
        if(res.status == 200) {
            return res.json()
        }
      }).then((data) => {
        console.log(data);
        })
          .catch((err) => {
            console.error(err);
          })
}

export const setIsLoggedInData = async () => {

}

export const setUsernameData = async () => {

}


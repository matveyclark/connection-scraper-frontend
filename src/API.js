// constants

const baseURI = 'http://localhost:3001/api/v1/users'
const loginURI = baseURI + '/login/success'

// api

const get = url => fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    }
  }).then(resp => resp.json())

// functions

exports.fetchUser = () => get(loginURI)
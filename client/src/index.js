import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import axios from "axios";

import "./style/main.scss";

import * as serviceWorker from "./serviceWorker";

axios.defaults.baseURL = "https://astralspace.herokuapp.com/api/";

let userData = JSON.parse(localStorage.getItem("userData"));
let token;
if (userData) {
  token = userData.token;
}

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    //  console.log(error);
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response);

    return Promise.reject(
      alert("Sorry, you entered the wrong email or password, please try again.")
    );
  }
);

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root"),
  document.querySelector(".app-wrapper")
);

serviceWorker.unregister();

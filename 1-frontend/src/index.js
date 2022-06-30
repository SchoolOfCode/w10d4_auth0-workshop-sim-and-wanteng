import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById("root"));
const localhost = "www.google.com";

root.render(
<React.StrictMode>
  <Auth0Provider
    domain="dev-6x6ilyd8.us.auth0.com"
    clientId="3hto8VkE16fLJrxEJR73asr9jLeCUSh6"
    redirectUri={localhost}>
    
      <App />
  </Auth0Provider>    
</React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

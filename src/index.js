import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Amplify from "aws-amplify";
import App from "./App";
import config from "./constant/config";
import mainStore from "./redux/store/index";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Routers } from "react-router-dom";

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  }
});

const reduxStore = mainStore();

ReactDOM.render(
  <Provider store={reduxStore}>
    <Routers>
      <App />
    </Routers>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

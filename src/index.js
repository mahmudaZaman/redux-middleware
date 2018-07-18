import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const initialState = {
  postId: null,
  postDetails: null
};

const rootReducer = (state = initialState, action) => {
  // console.log("[REDUCER] got and action...", action);
  // action.payload
  switch (action.type) {
    case "CHANGE_INPUT": {
      return {
        ...state,
        postId: action.payload.postId,
        postDetails: action.payload.postDetails
      };
    }
  }
  return state;
};
const mw = store => {
  return next => {
    return action => {
      if (typeof action === "function") {
        action(next);
      } else next(action);
    };
  };
};

// logger(store)(m[0])(action)();
const logger = store => {
  return next => {
    return action => {
      // console.log("[MIDDLEWARE] before going to reducer dispatching...");
      console.log("OLD STATE", action);
      action.payload
        .asyncFunc(action.payload.postId)
        .then(response => response.json())
        .then(json => {
          action.payload.postDetails = json;
          next(action);
        });
      // const result = next(action);
      // console.log(
      //   "[MIDDLEWARE] after updating state by reducer dispatching..."
      // );
      // console.log("NEW STATE", store.getState());
      // return result;
    };
  };
};
const store = createStore(rootReducer, applyMiddleware(logger));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

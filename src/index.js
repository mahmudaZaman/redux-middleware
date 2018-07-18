import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  fruits: [],
  fruit: null
};
const rootReducer = (state = initialState, action) => {
  console.log(action);
  // action.payload
  switch (action.type) {
    case "ADD_FRUIT": {
      return {
        ...state,
        fruits: [...state.fruits, action.payload.fruit],
        fruit: null
      };
    }
    case "CHANGE_INPUT": {
      return {
        ...state,
        fruit: action.payload.fruit
      };
    }
  }
  return state;
};
const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

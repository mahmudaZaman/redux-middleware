import React, { Component } from "react";
import { connect } from "react-redux";
import { addFruit, changeInput } from "./actions";
class App extends Component {
  handleChange = e => {
    this.props.changeInput(e.target.value);
  };
  render() {
    return (
      <div className="App">
        {JSON.stringify(this.props.postDetails)}
        <label> Enter PostId </label>
        <input
          value={this.props.postId || ""}
          onChange={this.handleChange}
          type="number"
        />
      </div>
    );
  }
}
const mapStateToProp = (state, prop) => {
  return {
    postId: state.postId,
    postDetails: state.postDetails
  };
};
const mapDispatchToProp = (dispatch, prop) => {
  return {
    changeInput: postId => dispatch(changeInput(postId))
  };
};
const AppWithRedux = connect(
  mapStateToProp,
  mapDispatchToProp
)(App);
export default AppWithRedux;

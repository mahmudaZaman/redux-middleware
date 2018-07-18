import React, { Component } from "react";
import { connect } from "react-redux";
import { addFruit, changeInput } from "./actions";
class App extends Component {
  addFruit = () => {
    if (!this.props.fruit) return;
    this.props.addFruit(this.props.fruit);
  };
  handleChange = e => {
    this.props.changeInput(e.target.value);
  };
  render() {
    return (
      <div className="App">
        {this.props.fruits.map((f, i) => <p key={i}>{f}</p>)}
        <label> Add fruits </label>
        <input
          value={this.props.fruit || ""}
          onChange={this.handleChange}
          type="text"
        />
        <button onClick={e => this.addFruit()}>Add</button>
      </div>
    );
  }
}
const mapStateToProp = (state, prop) => {
  return {
    fruits: state.fruits,
    fruit: state.fruit
  };
};
const mapDispatchToProp = (dispatch, prop) => {
  return {
    addFruit: fruit => dispatch(addFruit(fruit)),
    changeInput: fruit => dispatch(changeInput(fruit))
  };
};
const AppWithRedux = connect(
  mapStateToProp,
  mapDispatchToProp
)(App);
export default AppWithRedux;

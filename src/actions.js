export function addFruit(fruit) {
  return {
    type: "ADD_FRUIT",
    payload: {
      fruit
    }
  };
}

export function changeInput(fruit) {
  return {
    type: "CHANGE_INPUT",
    payload: {
      fruit
    }
  };
}

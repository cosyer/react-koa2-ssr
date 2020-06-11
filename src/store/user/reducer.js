import * as Types from "./actionTypes";

const initState = {
  name: "cosyer",
  age: 25,
  quotations: {},
};

export default (state = initState, action) => {
  switch (action.type) {
    case Types.SET_INCREMENT_AGE:
      return { ...state, age: state.age + 1 };
    case Types.GET_QUOTATIONS:
      return { ...state, quotations: action.payload };
    default:
      return { ...state };
  }
};

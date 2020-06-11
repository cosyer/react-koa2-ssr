import * as Types from "./actionTypes";

const initState = {
  name: "cosyer",
  age: 25,
  schoolList: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case Types.SET_INCREMENT_AGE:
      return { ...state, age: state.age + 1 };
    case Types.GET_SCHOOL_LIST:
      console.log(action);
      return { ...state, schoolList: action.payload };
    default:
      return { ...state };
  }
};

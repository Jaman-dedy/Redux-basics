import * as actionTypes from "./actions";

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  const { type } = action;
  const {
    INCREMENT,
    DECREMENT,
    SUBTRACT,
    STORE_RESULT,
    DELETE_RESULT,
    ADD
  } = actionTypes;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case ADD:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      };
    case STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
    case DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1)
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray
      };
    default:
      return state;
  }
};

export default reducer;

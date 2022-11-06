// declaring Reducer function that takes our initial state and the reducer function

export const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "setValue":
      return { count: action.payload };
    default:
      throw new Error();
  }
};

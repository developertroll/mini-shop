const ADD_COUNT = "TestReducer/ADD_COUNT";
const DECREASE_COUNT = "TestReducer/DECREASE_COUNT";
const SET_COUNT = "TestReducer/SET_COUNT";

const initialState = {
  count: 1,
};

export const addCount = () => ({
  type: ADD_COUNT,
});

export const decreaseCount = () => ({
  type: DECREASE_COUNT,
});

export const setCount = (count) => ({
  type: SET_COUNT,
  count,
});

export default function TestReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNT:
      return { ...state, count: state.count + 1 };
    case DECREASE_COUNT:
      return { ...state, count: state.count - 1 };
    case SET_COUNT:
      return { ...state, count: action.count };
    default:
      return state;
  }
}

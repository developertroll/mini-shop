const ADD_USER = "UserReducer/ADD_USER";
const REMOVE_USER = "UserReducer/REMOVE_USER";
const UPDATE_USER = "UserReducer/UPDATE_USER";

const initialState = [
  {
    index: 0,
    id: "KimCS",
    password: "1234",
    name: "김철수",
    age: 20,
    email: "dummy@dummy.test",
    phone: "010-1234-5678",
  },
  {
    index: 1,
    id: "ParkYH",
    password: "1234",
    name: "박영희",
    age: 21,
    email: "test@test.test",
    phone: "010-1234-5678",
  },
  {
    index: 2,
    id: "LeeMG",
    password: "1234",
    name: "이맹구",
    age: 22,
    email: "asdf@asdf.asdf",
    phone: "010-1234-5678",
  },
];

export const addUser = (user) => ({
  type: ADD_USER,
  user,
});

export const removeUser = (index) => ({
  type: REMOVE_USER,
  index,
});

export const updateUser = (index, user) => ({
  type: UPDATE_USER,
  index,
  user,
});

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return state.concat(action.user);
    case REMOVE_USER:
      return state.filter((user) => user.index !== action.index);
    case UPDATE_USER:
      return state.map((user) =>
        user.index === action.index ? action.user : user
      );
    default:
      return state;
  }
}

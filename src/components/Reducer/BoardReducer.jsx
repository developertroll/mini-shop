const ADD_BOARD = "BoardReducer/ADD_BOARD";
const REMOVE_BOARD = "BoardReducer/REMOVE_BOARD";
const UPDATE_BOARD = "BoardReducer/UPDATE_BOARD";
const SET_BOARD = "BoardReducer/SET_BOARD";

const initialState = [
  {
    index: 0,
    type: "notice",
    title: "공지",
    content: "게시판 기본 공지사항입니다",
    like: 0,
  },
];

export const addBoard = (board) => ({
  type: ADD_BOARD,
  board,
});

export const removeBoard = (index) => ({
  type: REMOVE_BOARD,
  index,
});

export const updateBoard = (index, board) => ({
  type: UPDATE_BOARD,
  index,
  board,
});

export const setBoard = (board) => ({
  type: SET_BOARD,
  board,
});
export default function BoardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOARD:
      return state.concat(action.board);
    case REMOVE_BOARD:
      return state.filter((board) => board.index !== action.index);
    case UPDATE_BOARD:
      return state.map((board) =>
        board.index === action.index ? action.board : board
      );
    case SET_BOARD:
      return action.board;
    default:
      return state;
  }
}

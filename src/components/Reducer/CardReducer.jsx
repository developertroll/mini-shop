const ADD_CARD = "CardReducer/ADD_CARD";
const REMOVE_CARD = "CardReducer/REMOVE_CARD";
const UPDATE_CARD = "CardReducer/UPDATE_CARD";
const LIKE_CARD = "CardReducer/LIKE_CARD";
const UNLIKE_CARD = "CardReducer/UNLIKE_CARD";
const ADD_VIEW = "CardReducer/ADD_VIEW";

const initialState = [
  {
    index: 0,
    img: "https://placeimg.com/64/64/any",
    type: "의류",
    title: "예시",
    content: "예시상품입니다",
    view: 0,
    like: 0,
    price: 10000,
  },
];

export const addCard = (card) => ({
  type: ADD_CARD,
  card,
});

export const removeCard = (index) => ({
  type: REMOVE_CARD,
  index,
});

export const updateCard = (index, card) => ({
  type: UPDATE_CARD,
  index,
  card,
});

export const likeCard = (index) => ({
  type: LIKE_CARD,
  index,
});

export const unlikeCard = (index) => ({
  type: UNLIKE_CARD,
  index,
});

export const addView = (index) => ({
  type: ADD_VIEW,
  index,
});

export default function CardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return state.concat(action.card);
    case REMOVE_CARD:
      return state.filter((card) => card.index !== action.index);
    case UPDATE_CARD:
      return state.map((card) =>
        card.index === action.index ? action.card : card
      );
    case LIKE_CARD:
      return state.map((card) =>
        card.index === action.index ? { ...card, like: card.like + 1 } : card
      );
    case UNLIKE_CARD:
      return state.map((card) =>
        card.index === action.index ? { ...card, like: card.like - 1 } : card
      );
    case ADD_VIEW:
      return state.map((card) =>
        card.index === action.index ? { ...card, view: card.view + 1 } : card
      );
    default:
      return state;
  }
}

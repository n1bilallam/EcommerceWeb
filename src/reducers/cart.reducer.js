import { cartConstants } from "../actions/constants";

const initState = {
  cartItems: {
    // 123: {
    //   _id: 12456,
    //   name: "samsaung s20",
    //   img: "none.png",
    //   price: 200,
    //   qty: 10,
    // },
  },
  updatingCart: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case cartConstants.ADD_TO_CART_REQUEST:
      state = {
        ...state,
        updatingCart: true,
      };
      break;
    case cartConstants.ADD_TO_CART_SUCCESS:
      state = {
        ...state,
        cartItems: action.payload.cartItems,
        updatingCart: false,
      };
      break;
    case cartConstants.ADD_TO_CART_FAILURE:
      state = {
        ...state,
        updatingCart: false,
        error: action.payload.error,
      };
      break;
    case cartConstants.RESET_CART:
      state = {
        ...initState,
      };
      break;
    default:
      break;
  }
  return state;
};

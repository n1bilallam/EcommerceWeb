import axios from "../helpers/axios";
import { categoryConstants } from "./constants";

export const getAllCategorys = () => {
  return async (dispatch) => {
    dispatch({
      type: categoryConstants.GET_ALL_CATEGORIES_REQUEST,
    });
    const res = await axios.get(`category/getcategories`);
    if (res.status === 200) {
      const { categoyList } = res.data;
      dispatch({
        type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
        payload: { categories: categoyList },
      });
    } else {
      dispatch({
        type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

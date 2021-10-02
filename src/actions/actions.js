import { GET_STACKOVERFLOW_INFO_REQUEST, GET_STACKOVERFLOW_INFO_SUCCESS, GET_STACKOVERFLOW_INFO_FAIL } from '../constants/constants'

export const getStackOverflowDetails = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_STACKOVERFLOW_INFO_REQUEST,
    });

    const data = {
      "bronze_badges": 14,
      "silver_badges": 2,
      "gold_badges": 1,
      "reputation": 155
    }

    dispatch({
      type: GET_STACKOVERFLOW_INFO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_STACKOVERFLOW_INFO_FAIL,
      payload: error
    });
  }
};
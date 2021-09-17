import {GET_STACKOVERFLOW_INFO_REQUEST, GET_STACKOVERFLOW_INFO_SUCCESS, GET_STACKOVERFLOW_INFO_FAIL} from '../constants/constants';

export const stackOverflowReducer = (
    state = { stackoverflow: {} },
    action
  ) => {
    switch (action.type) {
      case GET_STACKOVERFLOW_INFO_REQUEST:
        return { ...state, loading: true };
      case GET_STACKOVERFLOW_INFO_SUCCESS:
        return { ...state, loading: false, stackoverflow: action.payload };
      case GET_STACKOVERFLOW_INFO_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
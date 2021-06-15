import { get_Data, get_Natural, set_loading} from "../types";
// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case get_Data:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
      case get_Natural:
      return {
        ...state,
        natural: action.payload,
        loading: false,
      };
    case set_loading:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};


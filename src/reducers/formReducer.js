import { GET_IN_TOUCH_FAILURE, GET_IN_TOUCH_REQUEST, GET_IN_TOUCH_SUCCESS } from "../constants/formConstants";

export const formReducer = (
    state = { formApiResponse: {} },
    action
) => {
    switch (action.type) {
        case GET_IN_TOUCH_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_IN_TOUCH_SUCCESS:
            return {
                ...state,
                loading: false,
                success:true,
                formApiResponse:action.payload
            };
        case GET_IN_TOUCH_FAILURE:
            return {
                ...state,
                success:false,

                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};
//reducer 1. initial state
      //  2. action 
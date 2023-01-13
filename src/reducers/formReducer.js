import { GET_IN_TOUCH_FAILURE, GET_IN_TOUCH_REQUEST, GET_IN_TOUCH_SUCCESS } from "../constants/formConstants";

export const formReducer = (
    state = { formReducer: {} },
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
            };
        case GET_IN_TOUCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};
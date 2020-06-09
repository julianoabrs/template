import { SET_IS_LOADING, SET_DATA } from "./actions"

export const INITIAL_STATE = {
    isLoading: false,
    data: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case SET_DATA:
            return {
                ...state,
                data: action.data,
            }
        default:
            return state
    }
}

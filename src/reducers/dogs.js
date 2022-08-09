import { FETCH_ALL, CREATE, BOOP, UPDATE, DELETE, START_LOADING, END_LOADING, FETCH_DOG } from '../constants/actionTypes';

const reducers = ( state = {}, action ) => {
    switch(action.type){
        case FETCH_ALL:
            return {
                ...state, 
                dogs: action.payload.data
            }
        default: 
            return state
    }
}

export default reducers 
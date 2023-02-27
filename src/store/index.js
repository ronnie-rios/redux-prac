import { createStore } from 'redux';

const initialState = {
    count: 0,
    fetchData: []
};

const countReducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        case 'DECREMENT':
            return { ...state, count: state.count -1 }
        case 'FETCH':
            return { ...state, fetchData: action }
        default:
            return state
    }
}
//similar to a useReducer hook, took args
//first = reducer, second = initial state
const store = createStore(countReducer, initialState);

export default store
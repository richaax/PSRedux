import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action)  {   // name optional
  switch(action.type)  {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    //  return [...state, Object.assign({}, action.course)
        // es6 spread operator
        // - spread the array, new instance
        // - use object assign to create a new array of passed in
        // - return new array with extra value
    //  ];

    default:
      return state;
  }
}

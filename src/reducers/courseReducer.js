import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action)  {   // name optional
  switch(action.type)  {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    //  return [...state, Object.assign({}, action.course)
        // es6 spread operator
        // - spread the array, new instance
        // - use object assign to create a new array of passed in
        // - return new array with extra value
    //  ];
    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,       // spread operator, state is immutable.. so creates new. spreads out array/object, just as if type hered
        Object.assign({}, action.course)
      ];

      case types.UPDATE_COURSE_SUCCESS:
        return [
          ...state.filter(course => course.id !== action.course.id),  // spread creates copy, except the one being changed.  include new one in new array with rest
          Object.assign({}, action.course)
        ];

    default:
      return state;
  }
}

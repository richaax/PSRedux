import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS , courses};   //pre es6  course: course
}



export function loadCourses() {
  // promise then dispatch when done
  // thunk always returns a function that accepts a dispatch
  return function(dispatch) {
    // returns a promise
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

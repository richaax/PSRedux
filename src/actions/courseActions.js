import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS , courses};   //pre es6  course: course
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS , course};   //pre es6  course: course
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS , course};   //pre es6  course: course
}

export function loadCourses() {
  // promise then dispatch when done
  // thunk always returns a function that accepts a dispatch
  return function(dispatch) {
    dispatch(beginAjaxCall());
    // returns a promise
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());  // could go in our mock or real api
    // returns a promise
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
      dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    });
  };
}

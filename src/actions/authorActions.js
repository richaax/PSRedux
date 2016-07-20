import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS , authors};   //pre es6  course: course
}

export function loadAuthors() {
  // promise then dispatch when done
  // thunk always returns a function that accepts a dispatch
  return function(dispatch) {
    // returns a promise
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}

import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses: courses    // ES6 shorthand propery name lets you do just courses since same name
});

export default rootReducer;

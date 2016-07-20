import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses,   // ES6 shorthand propery name lets you do just courses since same name
  authors     // could be just authors.. examp.e
});

export default rootReducer;

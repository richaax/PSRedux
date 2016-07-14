// This componenet handles the App Template used on every page.
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';


// structure of a Component
// 5 main parts
// - constructor - init state and bind for this
// - child by render
// - render  -- nomrally calling a child componenet with markup
// - propt types with validation
// - redux connect and realted


class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

  //  this.state = {
  //    course: { title: "" }
  // };

  // this.onTitleChange = this.onTitleChange.bind(this);
  // this.onClickSave = this.onClickSave.bind(this);
}

// moved to managed course component. left here for notes
// onTitleChange(event) {
//   const course = this.state.course;
//   course.title = event.target.value;
//   this.setState({course: course });
// }

// onClickSave() {
  // alert('Saving ' + this.state.course.title);
  // alert('Now Saving ${this.state.course.title}');
//  this.props.dispatch(courseActions.createCourse(this.state.course));
//  this.props.createCourse(this.state.course);
//this.props.actions.createCourse(this.state.course);
// }

courseRow(course, index) {
  return <div key={index}>{course.title}</div>;
}

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,   only needed if we do not wrap with dispatch on connect
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps)   {

  return {
    courses: state.courses   // courses maps back to rootReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
  //  createCourse: course => dispatch(courseActions.createCourse(course))
  actions: bindActionCreators(courseActions, dispatch)   // will finde all courseActions and wrap in dispatch for me
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);  // connect returns a function which passes CoursesPage to that function

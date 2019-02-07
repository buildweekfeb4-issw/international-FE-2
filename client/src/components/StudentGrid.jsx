import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getStudents } from '../store/actions';

import StudentGridItem from './StudentGridItem';

class StudentGrid extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
    ).isRequired
  };

  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    return (
      <div className='studentsGrid'>
        {this.props.students.map(student => (
          <StudentGridItem key={student.id} student={student} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    students: state.studentDataReducer.students
  };
};

export default connect(
  mapStateToProps,
  {
    getStudents
  }
)(StudentGrid);

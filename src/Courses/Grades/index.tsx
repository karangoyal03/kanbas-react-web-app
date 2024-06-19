import { IoSettingsSharp } from "react-icons/io5";
import { FaFileExport } from "react-icons/fa6";
import { TbFileArrowLeft } from "react-icons/tb";
import { BsSearch } from 'react-icons/bs';
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiFilter } from "react-icons/ci";
import { useParams } from "react-router-dom";
import * as db from "../../Kanbas/Database";

export default function Grades() {
  const { cid } = useParams<{ cid: string }>();

  // Function to get enrollments for the specified course
  function getAssignmentsForCourse(cid: string) {
    return db.enrollments.filter(enrollment => enrollment.course === cid);
  }

  // Retrieve enrollments for the current course
  const results = getAssignmentsForCourse(cid + "");

  // Retrieve assignments list for the current course
  const assignmentsList = db.assignments.filter(assignment => assignment.course === cid);

  // Function to get the full name of a user based on user ID
  function getNameForUserId(uid: string) {
    const user = db.users.find(user => user._id === uid);
    return user ? `${user.firstName} ${user.lastName}` : "Unknown";
  }

  return (
    <div>
      <h2>Grades</h2>
      <div className="d-flex justify-content-end p-3">
        <button className="btn btn-light me-2 px-3 py-2 text-dark">
          <FaFileExport /> Import
        </button>
        <button className="btn btn-light me-2 px-3 py-2 text-dark">
          <TbFileArrowLeft /> Export
        </button>
        <button className="btn btn-light px-3 py-2 text-dark">
          <IoSettingsSharp />
        </button>
      </div>
      <div className="row">
        <div className="col-6">
          <h3>Student Names</h3>
          <div className="input-group">
            <span className="input-group-text">
              <BsSearch />
            </span>
            <input type="text" className="form-control" placeholder="Search for Students" id="wd-search-students" />
          </div>
          <br/>
          <button className="btn btn-light me-2 px-3 py-2 text-dark">
            <CiFilter /> Apply Filters
          </button>
        </div>
        <div className="col-6">
          <h3>Assignment Names</h3>
          <div className="input-group">
            <span className="input-group-text">
              <BsSearch />
            </span>
            <input type="text" className="form-control" placeholder="Search for Assignments" id="wd-search-assignments" />
          </div>
        </div>
      </div>
      <br/>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignmentsList.map((assignment, index) => (
                <th key={index}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.map((enrollment, enrollmentIndex) => (
              <tr key={enrollmentIndex}>
                <td style={{ color: 'red' }}>{getNameForUserId(enrollment._id)}</td>
                {assignmentsList.map((assignment, assignmentIndex) => {
                  const grade = db.grades.find(grade => grade.assignment === assignment._id && grade.student === enrollment.user);
                  return (
                    <td key={assignmentIndex}>
                      {grade ? `${grade.grade}%` : "Not Graded"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

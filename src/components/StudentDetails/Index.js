import MarksTable from "../MarksTable/Index";
import "./Index.css";

const StudentDetails = (props) => {
  const { studentDetails } = props;
  const {
    SchoolLogo,
    SchoolName,
    SchoolAddress,
    SchoolEmail,
    ClassName,
    DOB,
    FatherName,
    Name,
    RollNumber,
    MotherName,
    Attandence,
  } = studentDetails;

  /*const emptyArry = [];
  Attandence.map((each) => emptyArry.push(each.MonthWorking));

  const AttendedDays = emptyArry.reduce((sumOfDays, num) => sumOfDays + num, 0); */

  return (
    <div className="school-conatiner">
      <div className="school-details-conatiner">
        <div className="image-card">
          <img src={SchoolLogo} alt="schoollogo" style={{ width: "120px" }} />
        </div>
        <div className="school-details-card">
          <h1 className="school-name">{SchoolName}</h1>
          <p className="school-address">{SchoolAddress}</p>
          <p className="school-email">Visist us at: {SchoolEmail}</p>
        </div>
      </div>
      <h1 className="reportcard-heading">REPORT CARD</h1>
      <p className="academic-session">ACADAMIC SESSION: 2022-2023</p>
      <hr className="horizontal-line " />
      <ul className="student-details-container">
        <li className="student-item">
          <p className="student-detail-text">Scholar No </p>
          <span className="span-el">:-</span>
        </li>
        <li className="student-item">
          <p className="student-detail-text">Class </p>
          <span className="span-el">:- {ClassName}</span>
        </li>
        <li className="student-item">
          <p className="student-detail-text">Roll No </p>
          <span className="span-el">:-{RollNumber}</span>
        </li>
        <li className="student-item">
          <p className="student-detail-text">Name of Student </p>
          <span className="span-el">:-{Name}</span>
        </li>
        <li className="student-item">
          <p className="student-detail-text">Father's Name </p>
          <span className="span-el">:- {FatherName}</span>
        </li>
        <li className="student-item">
          <p className="student-detail-text">Mother's Name </p>
          <span className="span-el">:-{MotherName}</span>
        </li>
        <li className="student-item">
          <p className="student-detail-text">Attendance </p>
          <span className="span-el">:- {Attandence}</span>
        </li>
        <li className="student-item">
          <p className="student-detail-text">Date of Birth </p>
          <span className="span-el">:-{DOB}</span>
        </li>
      </ul>
      <MarksTable />
    </div>
  );
};

export default StudentDetails;

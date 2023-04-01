import { Component } from "react";

import StudentDetails from "./components/StudentDetails/Index";
// import MarksTable from "./components/MarksTable/Index";

import "./App.css";

//For your Information: -- i got student and school info from yesterday API, so developed as per yesterday details, but today's API student info is Empty list

const initialStudentInfo = [
  {
    StudentID: 181521,
    SchoolLogo:
      "https://res.cloudinary.com/dltxsj7yg/image/upload/v1680337936/dav-public-school-1495444810-1_wafcc4.jpg",
    SchoolName: "S.R.DAV Public School Ranchi",
    SchoolAddress:
      "9727+29J, Dibrugar,affiliation to CBSE, Jharkhand 834002,ph:9121221420",
    SchoolEmail: "www.srdavpublicschool.com",
    ClassName: "Class I",
    DOB: "20-06-2018",
    RollNumber: "4",
    Name: "Kiran Rijuju",
    FatherName: "Sanjeev Rijuju",
    MotherName: "Suchitra Rijuju",
    Attandence: "40 Days",
  },
];

class App extends Component {
  state = {
    studentInfo: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch(
      "http://stageapi.iguru.guru:222/api/ExamManagement/GetStudentProgressReports?schoolID=282&sectionID=2682&eXamMasID=8442&students=181521"
    );

    if (response.ok) {
      const fetchedData = await response.json();
      const fetchedList = fetchedData.Response.ProgressList;
      const fetchedStudentInfo = fetchedList.lstStudentInfo;
      if (fetchedStudentInfo.length !== 0) {
        this.setState({ studentInfo: fetchedStudentInfo });
      } else {
        this.setState({ studentInfo: initialStudentInfo });
      }
    } else {
      console.log("API Failed");
    }
  };

  render() {
    const { studentInfo } = this.state;

    return (
      <div className="App">
        {/*For your Information: -- i got student and school info from yesterday
        API, so developed as per yesterday details, but today's API student info
        is Empty list and no information of student marks details of each subject*/}

        {studentInfo.map((eachStudent) => (
          <StudentDetails
            studentDetails={eachStudent}
            key={eachStudent.StudentID}
          />
        ))}
      </div>
    );
  }
}

export default App;

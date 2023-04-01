import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Index.css";

// No marks datials in API

const MarksTable = () => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th className="subjects">Subjects</th>
          <th className="term" style={{ height: "15px", fontSize: "13px" }}>
            Term1
            <hr />
            <div className="term1">
              <p>
                Best Score PT1,PT2
                <br /> 20
              </p>
              <p>
                Term I
                <br /> 80
              </p>
              <p>
                Max.Marks Obtained <br />
                100
              </p>
            </div>
          </th>
          <th className="term" style={{ height: "15px", fontSize: "13px" }}>
            Term2
            <hr />
            <div className="term1">
              <p>
                Best Score PT3,PT4 <br />
                20
              </p>
              <p>
                Term II <br />
                80
              </p>
              <p>
                Max.Marks Obtained <br />
                100
              </p>
            </div>
          </th>
          <th className="term" style={{ height: "15px", fontSize: "13px" }}>
            Final Result
            <hr />
            <div className="term1">
              <p>
                T-I + T-II
                <br />
                200
              </p>
              <p>Grade</p>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ height: "5px", fontSize: "10px" }}>
          <td className="subject-name">ENGLISH</td>

          <td>
            <div className="term1">
              <p>Best Score PT1,PT2</p>
              <p>Term I</p>
              <p>Max.Marks Obtained</p>
            </div>
          </td>
          <td>
            <div className="term1">
              <p>Best Score PT3,PT4</p>
              <p>Term II</p>
              <p>Max.Marks Obtained</p>
            </div>
          </td>
          <td>
            <div className="term1">
              <p>Sum Score T1,T2</p>
              <p>Grade</p>
            </div>
          </td>
        </tr>
        <tr style={{ height: "5px", fontSize: "10px" }}>
          <td className="subject-name">HINDI</td>

          <td>
            <div className="term1">
              <p>Best Score PT1,PT2</p>
              <p>Term I</p>
              <p>Max.Marks Obtained</p>
            </div>
          </td>
          <td>
            <div className="term1">
              <p>Best Score PT3,PT4</p>
              <p>Term II</p>
              <p>Max.Marks Obtained</p>
            </div>
          </td>
          <td>
            <div className="term1">
              <p>Sum Score T1,T2</p>
              <p>Grade</p>
            </div>
          </td>
        </tr>
        <tr style={{ height: "5px", fontSize: "10px" }}>
          <td className="subject-name">MATHS</td>

          <td>
            <div className="term1">
              <p>Best Score PT1,PT2</p>
              <p>Term I</p>
              <p>Max.Marks Obtained</p>
            </div>
          </td>
          <td>
            <div className="term1">
              <p>Best Score PT2,PT3</p>
              <p>Term II</p>
              <p>Max.Marks Obtained</p>
            </div>
          </td>
          <td>
            <div className="term1">
              <p>Sum Score T1,T2</p>
              <p>Grade</p>
            </div>
          </td>
        </tr>
        <tr style={{ height: "5px", fontSize: "10px" }}>
          <td className="subject-name">Total</td>

          <td>
            <div
              className="term1"
              style={{ fontWeight: "bold", color: "black", fontSize: "9px" }}
            >
              <p>Tota score of Best PT1,PT2</p>
              <p>Term I</p>
              <p>Max.Marks Obtained</p>
            </div>
          </td>
          <td>
            <div
              className="term1"
              style={{ fontWeight: "bold", color: "black", fontSize: "9px" }}
            >
              <p>Total Scaore of Best Score PT2,PT3</p>
              <p>Term II</p>
              <p>Max.Marks Obtained</p>
            </div>
          </td>
          <td>
            <div
              className="term1"
              style={{ fontWeight: "bold", color: "black", fontSize: "9px" }}
            >
              <p>total score of T1 + T2</p>
              <p>Overal Grade</p>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={4}>
            <div className="result-card">
              <p>Result :-</p>
              <p>Percentage :-</p>
              <p>Grade :-</p>
            </div>
          </td>
        </tr>
        <tr style={{ fontFamily: "Roboto", fontWeight: "500" }}>
          <td colSpan={2} style={{ textAlign: "center" }}>
            Parents
          </td>
          <td style={{ textAlign: "center" }}>Class Teacher</td>
          <td style={{ textAlign: "center" }}>Principal</td>
        </tr>
        <tr>
          <td colSpan={2} style={{ textAlign: "center", height: "100px" }}></td>
          <td style={{ textAlign: "center", height: "100px" }}></td>
          <td style={{ textAlign: "center", height: "100px" }}></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default MarksTable;

//import { useState } from "react";
import "./App.css";
import { useState } from "react";
//import Forms from "./Forms";
import DetailsDisplay from "./Display";
//import person from "./person";
import ProfessionalExperience from "./ProfessionalExperience";
import EducationalEstablishment from "./Education";
import Qualification from "./Qualifications";
import Quali from "./classes/qualification";

function App() {
  const [person, setPerson] = useState({
    firstName: "",
    surName: "",
    phoneNumber: "",
    email: "",
    jobs: [],
    establishments: [],
    qualifications: [],
  });
  const [level, setLevel] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  //const [index, setIndex] = useState("0");

 /*  function handleLevelChange(e) {
    setLevel(e.target.value);
  } */

  function handleSubjectChange(e) {
    setSubject(e.target.value);
  }

  function handleGradeChange(e) {
    setGrade(e.target.value);
  }

  function addQualification(e) {
    e.preventDefault();
    const updatedDetails = {
      ...person,
      qualifications: person.qualifications
        .toSpliced(0, 0, new Quali(level, subject, grade))
        .reverse(),
    };
    setPerson(updatedDetails);
    console.log(updatedDetails);
  }

  return (
    <>
      <div>
        <ProfessionalExperience />
        <EducationalEstablishment />
        <Qualification
          levelChange={(e) => setLevel(e.target.value)}
          subjectChange={handleSubjectChange}
          gradeChange={handleGradeChange}
          onClick={addQualification}
        />
      </div>
      <div>
        <DetailsDisplay obj={person} />
      </div>
    </>
  );
}

export default App;

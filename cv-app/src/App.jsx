//import { useState } from "react";
import "./App.css";
import { useState } from "react";
//import Forms from "./Forms";
import DetailsDisplay from "./components/Display";
//import person from "./person";
import ProfessionalExperience from "./ProfessionalExperience";
import EducationalEstablishment from "./components/Education";
import Qualification from "./Qualifications";
import Quali from "./classes/qualification";
import Establishment from "./classes/establishment";
import Job from "./classes/job";

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

  const defaultValue = "";
  const [level, setLevel] = useState(defaultValue);
  const [subject, setSubject] = useState(defaultValue);
  const [grade, setGrade] = useState(defaultValue);
  const [estab, setEstab] = useState(defaultValue);
  const [estabStart, setEstatStart] = useState(new Date());
  const [estabEnd, setEstabEnd] = useState(defaultValue);
  const [jobPlace, setJobPlace] = useState(defaultValue);
  const [jobTitle, setJobTitle] = useState(defaultValue);
  const [jobDescription, setJobDesrciption] = useState(defaultValue);
  const [jobStart, setJobStart] = useState(defaultValue);
  const [jobEnd, setJobEnd] = useState(defaultValue);

  /* keep as anonymous functions unless we need validation */
  /* function handleSubjectChange(e) {
    setSubject(e.target.value);
  }

  function handleGradeChange(e) {
    setGrade(e.target.value);
  } */

  function addQualification() {
    //e.preventDefault();
    const updatedDetails = {
      ...person,
      qualifications: person.qualifications
        .toSpliced(0, 0, new Quali(level, subject, grade))
        .reverse(),
    };
    setPerson(updatedDetails);
    setLevel(defaultValue);
    setSubject(defaultValue);
    setGrade(defaultValue);
    console.log(updatedDetails);
  }

  function addEstablishment() {
    const updatedDetails = {
      ...person,
      establishments: person.establishments
        .toSpliced(0, 0, new Establishment(estab, estabStart, estabEnd))
        .reverse(),
    };
    setPerson(updatedDetails);
    setEstab(defaultValue);
    setEstatStart(new Date());
    setEstabEnd(defaultValue);
    console.log(updatedDetails);
  }

  function addJob() {
    const updatedDetails = {
      ...person,
      jobs: person.jobs
        .toSpliced(
          0,
          0,
          new Job(jobPlace, jobTitle, jobDescription, jobStart, jobEnd)
        )
        .reverse(),
    };

    setJobPlace(defaultValue);
    setJobTitle(defaultValue);
    setJobDesrciption(defaultValue);
    setJobStart(defaultValue);
    setJobEnd(defaultValue);
    console.log(updatedDetails);
    setPerson(updatedDetails);
  }

  return (
    <div className="whole">
      <div>
        <ProfessionalExperience
          jobPlace={jobPlace}
          handlePlaceChange={(e) => setJobPlace(e.target.value)}
          title={jobTitle}
          handleTitleChange={(e) => setJobTitle(e.target.value)}
          description={jobDescription}
          handleDescriptionChange={(e) => setJobDesrciption(e.target.value)}
          startDate={jobStart}
          startChange={(e) => setJobStart(e.target.value)}
          endDate={jobEnd}
          endChange={(e) => setJobEnd(e.target.value)}
          onClick={addJob}
        />
        <EducationalEstablishment
          handleEstablishmentChange={(e) => setEstab(e.target.value)}
          estabValue={estab}
          handleClick={addEstablishment}
          startChange={(date) => setEstatStart(date)}
          startDate={estabStart}
          endChange={(e) => setEstabEnd(e.target.value)}
          endDate={estabEnd}
        />
        <Qualification
          levelChange={(e) => setLevel(e.target.value)}
          subjectChange={(e) => setSubject(e.target.value)}
          gradeChange={(e) => setGrade(e.target.value)}
          onClick={addQualification}
          levelValue={level}
          subjectValue={subject}
          gradeValue={grade}
        />
      </div>
      <div className="preview">
        <DetailsDisplay obj={person} />
      </div>
    </div>
  );
}

export default App;

//import { useState } from "react";
import "./App.css";
import { useState } from "react";

//import DetailsDisplay from "./components/Display";

import ProfessionalExperience from "./ProfessionalExperience";
//import EducationalEstablishment from "./components/Education";
//import Qualification from "./Qualifications";
//import Quali from "./classes/qualification";
//import Establishment from "./classes/establishment";
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

  const [jobPlace, setJobPlace] = useState(defaultValue);
  const [jobTitle, setJobTitle] = useState(defaultValue);
  const [jobDescription, setJobDesrciption] = useState(defaultValue);
  const [jobStart, setJobStart] = useState(new Date());
  const [jobEnd, setJobEnd] = useState(new Date());

  function jobPlaceChange(e) {
    setJobPlace(e.target.value);
  }

  function jobTitleChange(e) {
    setJobTitle(e.target.value);
  }

  function jobDescriptionChange(e) {
    setJobDesrciption(e.target.value);
  }

  function addJob() {
    const updatedPerson = {
      ...person,
      jobs: person.jobs.toSpliced(
        0,
        0,
        new Job(jobPlace, jobTitle, jobDescription, jobStart, jobEnd)
      ),
    };
    setPerson(updatedPerson);
    console.log(person);
  }

  return (
    <div className="whole">
      <ProfessionalExperience
        jobPlace={jobPlace}
        handlePlaceChange={jobPlaceChange}
        title={jobTitle}
        handleTitleChange={jobTitleChange}
        description={jobDescription}
        handleDescriptionChange={jobDescriptionChange}
        startDate={jobStart}
        startChange={(date) => setJobStart(new Date(date))}
        endDate={jobEnd}
        endChange={(date) => setJobEnd(new Date(date))}
        onClick={addJob}
      />
    </div>
  );
}

export default App;

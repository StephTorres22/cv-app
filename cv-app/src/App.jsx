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

  const [activeIndex, setActiveIndex] = useState(2);

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

  function displayActive(num) {
    if (activeIndex === num) {
      setActiveIndex(null);
    } else {
      setActiveIndex(num);
    }
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
      <div className="form">
        <div className="form-legend">
          <legend>
            <u>Professional Experience</u>
            <div className="arrow-background">
              <input
                type="checkbox"
                className="arrow-toggle"
                id="arrow-toggle"
                name="professional-toggle"
               // onChange={() => displayActive(0)}
              />
              <label htmlFor="arrow-toggle" className="arrow-toggle-label" onClick={() => displayActive(0)}>
                <span className="arrow"></span>
              </label>
            </div>
          </legend>
        </div>
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
          isActive={activeIndex === 0}
        />
      </div>
      <div className="form">
        <div className="form-legend">
          <legend>
            <u>Professional Experience</u>
            <div className="arrow-background">
              <input
                type="checkbox"
                className="arrow-toggle"
                id="quali-arrow-toggle"
                name="quali-toggle"
                //onChange={() => setActiveIndex(2)}
              />
              <label htmlFor="arrow-toggle" className="arrow-toggle-label" onClick={() => displayActive(2)}>

                <span className="arrow"></span>
              </label>
            </div>
          </legend>
        </div>
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
          isActive={activeIndex === 2}
        />
      </div>
    </div>
  );
}

export default App;

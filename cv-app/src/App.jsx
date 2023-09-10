//import { useState } from "react";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

//import DetailsDisplay from "./components/Display";
import PeronsalInformation from "./components/PersonalInformation";
import ProfessionalExperience from "./ProfessionalExperience";
//import EducationalEstablishment from "./components/Education";
//import Qualification from "./Qualifications";
//import Quali from "./classes/qualification";
import Establishment from "./classes/establishment";
import Job from "./classes/job";
import Collapsable from "./components/Collapsable";
import EducationalEstablishment from "./components/Education";
import DetailsDisplay from "./components/Display";

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
  const defaultDate = new Date();

  /* PERSONAL INFO STATE */

  const [location, setLocation] = useState(defaultValue);
  const [aboutMe, setAboutMe] = useState(defaultValue);

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  function managePersonFirstName(e) {
    const updatedPerson = { ...person, firstName: e.target.value };
    setPerson(updatedPerson);
  }

  function managePersonSurname(e) {
    const updatedPerson = { ...person, surName: e.target.value };
    setPerson(updatedPerson);
  }

  function managePersonEmail(e) {
    const updatedPerson = { ...person, email: e.target.value };
    setPerson(updatedPerson);
  }

  function managePersonPhoneNumber(e) {
    const updatedPerson = { ...person, phoneNumber: e.target.value };
    setPerson(updatedPerson);
  }
  //const [activeIndex, setActiveIndex] = useState(2);

  /* JOB STATE */
  const [jobPlace, setJobPlace] = useState(defaultValue);
  const [jobTitle, setJobTitle] = useState(defaultValue);
  const [jobDescription, setJobDesrciption] = useState(defaultValue);
  const [jobStart, setJobStart] = useState(defaultDate);
  const [jobEnd, setJobEnd] = useState(defaultDate);

  function jobPlaceChange(e) {
    setJobPlace(e.target.value);
  }

  function jobTitleChange(e) {
    setJobTitle(e.target.value);
  }

  function jobDescriptionChange(e) {
    setJobDesrciption(e.target.value);
  }

  /*   function displayActive(num) {
    if (activeIndex === num) {
      setActiveIndex(null);
    } else {
      setActiveIndex(num);
    }
  } */

  function addJob() {
    const updatedPerson = {
      ...person,
      jobs: person.jobs.toSpliced(
        0,
        0,
        new Job(jobPlace, jobTitle, jobDescription, jobStart, jobEnd, uuidv4())
      ),
    };
    setPerson(updatedPerson);
    console.log(updatedPerson, person);
  }

  function removeJob(id) {
    /* const index = person.jobs.findIndex((job) => {
      return job.id === id;
    }); */

    const newJobs = person.jobs.filter((job) => job.id !== id);
    const updatedPerson = { ...person, jobs: newJobs };
    setPerson(updatedPerson);
    alert("Not working?");
    console.log(updatedPerson, person, id, newJobs);
  }

  /*  function handleJobRemove(id) {
    const updatedPerson = {
      ...person,
      jobs: person.jobs.filter((job) => job.id !== id),
    };
    setPerson(updatedPerson);
    alert("Not working?");
    console.log(person);
  } */

  /* ESTABLISHMENT STATE */
  const [estabPlace, setEstabPlace] = useState(defaultValue);
  const [estabStart, setEstabStart] = useState(defaultDate);
  const [estabEnd, setEstabEnd] = useState(defaultDate);

  function establishmentChange(e) {
    setEstabPlace(e.target.value);
  }

  function addEstablishment() {
    const updatedPerson = {
      ...person,
      establishments: person.establishments.toSpliced(
        0,
        0,
        new Establishment(estabPlace, estabStart, estabEnd, uuidv4())
      ),
    };
    setPerson(updatedPerson);
    console.log(person);
  }

  return (
    <div className="whole">
      <div className="left">
        <Collapsable title="Personal Information">
          <PeronsalInformation
            firstName={person.firstName}
            surname={person.surName}
            phoneNumber={person.phoneNumber}
            email={person.email}
            handleFirstNameChange={managePersonFirstName}
            handleSurnameChange={managePersonSurname}
            handleEmailChange={managePersonEmail}
            handlePhoneNumberChange={managePersonPhoneNumber}
            place={location}
            handlePlaceChange={handleLocationChange}
            description={aboutMe}
            handleDescriptionChange={(e) => setAboutMe(e.target.value)}
          />
        </Collapsable>
        <Collapsable title="Professional Experience">
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
        </Collapsable>
        <Collapsable title="Education">
          <EducationalEstablishment
            handleEstablishmentChange={establishmentChange}
            place={estabPlace}
            startDate={estabStart}
            startChange={(date) => setEstabStart(new Date(date))}
            endDate={estabEnd}
            endChange={(date) => setEstabEnd(new Date(date))}
            handleClick={addEstablishment}
          />
        </Collapsable>
      </div>
      <div className="right">
        <DetailsDisplay
          person={person}
          location={location}
          aboutMe={aboutMe}
          onJobRemove={
            removeJob
          } 
        />
      </div>
    </div>
  );
}

export default App;

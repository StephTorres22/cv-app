//import { useState } from "react";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

//import DetailsDisplay from "./components/Display";
import PeronsalInformation from "./components/PersonalInformation";
import ProfessionalExperience from "./ProfessionalExperience";
import Collapsable from "./components/Collapsable";
import EducationalEstablishment from "./components/Education";
import DetailsDisplay from "./components/Display";

function App() {
  /* PERSON STATE */
  const [person, setPerson] = useState({
    firstName: "",
    surName: "",
    phoneNumber: "",
    place: "",
    description: "",
    email: "",
    jobs: [],
    establishments: [],
    qualifications: [],
  });

  const defaultValue = "";
  const defaultDate = new Date();

  function handleInputChange(e) {
    const updatedPerson = {
      ...person,
      [e.target.name]: e.target.value,
    };

    setPerson(updatedPerson);
  }

  /* JOB STATES */
  const initailJob = {
    jobPlace: defaultValue,
    jobTitle: defaultValue,
    jobDescription: defaultValue,
    jobStart: defaultDate,
    jobEnd: defaultDate,
    id: defaultDate,
  };

  const [job, setJob] = useState(initailJob);

  function handleJobInfoChange(e) {
    const updatedJob = { ...job, [e.target.name]: e.target.value };
    setJob(updatedJob);
  }

  function addJob() {
    const updatedJob = { ...job, id: uuidv4() };
    const updatedPerson = {
      ...person,
      jobs: person.jobs.toSpliced(0, 0, updatedJob),
    };
    setPerson(updatedPerson);
    setJob(initailJob);
  }

  function removeJob(id) {
    const newJobs = person.jobs.filter((job) => job.id !== id);
    const updatedPerson = { ...person, jobs: newJobs };
    setPerson(updatedPerson);
  }

  /* ESTABLISHMENT STATE */

  const initialEstablisment = {
    place: defaultValue,
    qualifications: [],
    startDate: defaultDate,
    endDate: defaultDate,
    id: defaultValue,
  };

  const [establishment, setEstablisment] = useState(initialEstablisment);

  function handleEstablishmentChange(e) {
    const updatedEstablisment = {
      ...establishment,
      [e.target.name]: e.target.value,
    };
    setEstablisment(updatedEstablisment);
  }

  function addEstablishment() {
    const updatedEstablisment = { ...establishment, id: uuidv4() };
    const updatedPerson = {
      ...person,
      establishments: person.establishments.toSpliced(
        0,
        0,
        updatedEstablisment
      ),
    };
    setPerson(updatedPerson);
    setEstablisment(initialEstablisment);
    console.log(person);
  }

  function removeEstablishment(id) {
    const newEstablisments = person.establishments.filter(
      (place) => place.id !== id
    );
    const updatedPerson = { ...person, establishments: newEstablisments };
    setPerson(updatedPerson);
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
            place={person.place}
            description={person.description}
            handleChange={handleInputChange}
          />
        </Collapsable>
        <Collapsable title="Professional Experience">
          <ProfessionalExperience
            job={job}
            startChange={(date) => {
              const updatedJob = { ...job, jobStart: new Date(date) };
              setJob(updatedJob);
            }}
            endChange={(date) => {
              const updatedJob = { ...job, jobEnd: new Date(date) };
              setJob(updatedJob);
            }}
            onClick={addJob}
            onChange={handleJobInfoChange}
          />
        </Collapsable>
        <Collapsable title="Education">
          <EducationalEstablishment
            handleEstablishmentChange={handleEstablishmentChange}
            establisment={establishment}
            startChange={(date) => {
              const updatedEstablisment = {
                ...establishment,
                startDate: new Date(date),
              };
              setEstablisment(updatedEstablisment);
            }}
            endChange={(date) => {
              const updatedEstablisment = {
                ...establishment,
                endDate: new Date(date),
              };
              setEstablisment(updatedEstablisment);
            }}
            handleClick={addEstablishment}
          />
        </Collapsable>
      </div>
      <div className="right">
        <DetailsDisplay
          person={person}
          onJobRemove={removeJob}
          onEstablismentRemove={removeEstablishment}
        />
      </div>
    </div>
  );
}

export default App;

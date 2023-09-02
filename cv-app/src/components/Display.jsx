/* eslint-disable react/prop-types */
/* Display all the info passed into different inputs etc here */
import "../styles/preview.css";
// eslint-disable-next-line react/prop-types
function DetailsDisplay({ person, location, aboutMe }) {
  return (
    <div className="cv">
      <header className="header">
        <div className="header-left">
          <p>
            {person.firstName} {person.surName}
            <p>{location}</p>
          </p>
        </div>
        <div className="header-right">
          <p>{person.phoneNumber}</p>
          <p>{person.email}</p>
        </div>
      </header>
      <section className="about">
        <p>{aboutMe}</p>
      </section>
      <section className="professional">
        {person.jobs.map((job) => {
          return (
            <div key={job.id}>
              <div className="dates">
                <p>{job.startDate}</p>
                <p>{job.endDate}</p>
              </div>
              <p>{job.place}</p>
              <p>{job.title}</p>
              <p>{job.description}</p>
            </div>
          );
        })}
      </section>
      <section className="education">
        {person.establishments.map((place) => {
          return (
            <div key={place.id}>
              <h1>{place.name}</h1>
              <p>From: {place.startDate}</p>
              <p>Until: {place.endDate}</p>
            </div>
          );
        })}
      </section>
      <section className="qualifications">
        {person.qualifications.map((quali) => {
          return (
            <li key={quali.id}>
              {quali.level} {quali.title} {quali.grade}
            </li>
          );
        })}
      </section>
      <section className="references"></section>
    </div>
  );
}

export default DetailsDisplay;

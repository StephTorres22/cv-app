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
          </p>
          <p>{location}</p>
        </div>
        <div className="header-right">
          <p>{person.phoneNumber}</p>
          <p>{person.email}</p>
        </div>
      </header>
      <section className="about">
        <p>{aboutMe}</p>
      </section>
      <section className="professional-container">
        {person.jobs.map((job) => {
          return (
            <div className="professional" key={job.id}>
              <div className="professional-detatils">
                <p>{job.startDate.toLocaleDateString()} -</p>
                <p>{job.endDate.toLocaleDateString()}</p>

                <p>{job.place}</p>
                <p>{job.title}</p>
              </div>
              <div className="professional-description">
                <p>{job.description}</p>
              </div>
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

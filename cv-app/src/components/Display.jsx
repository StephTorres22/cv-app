/* eslint-disable react/prop-types */
/* Display all the info passed into different inputs etc here */
import "../styles/preview.css";

// eslint-disable-next-line react/prop-types

function DetailsDisplay({ person, onJobRemove, onEstablismentRemove }) {
  return (
    <div className="cv">
      <header className="header">
        <div className="header-left">
          <p>
            {person.firstName} {person.surName}
          </p>
          <p>{person.place}</p>
        </div>
        <div className="header-right">
          <p>{person.phoneNumber}</p>
          <p>{person.email}</p>
        </div>
      </header>
      <section className="about">
        <p>{person.description}</p>
      </section>
      <section className="professional-container">
        {person.jobs.map((job) => {
          return (
            <div className="professional" key={job.id}>
              <div className="professional-detatils">
                <span>{job.jobStart.toLocaleDateString()} -</span>
                <span>{job.jobEnd.toLocaleDateString()}</span>

                <p>{job.jobPlace}</p>
                <p>{job.jobTitle}</p>
              </div>
              <div className="professional-description">
                <p>{job.jobDescription}</p>
                <button
                  type="button"
                  className="hidden-button"
                  onClick={() => onJobRemove(job.id)}
                >
                  {/* for some reason need () =>, stops a bubbling call straight away..? 
                      also stop id becoming a syntheticevent(whatever that is) and actually using 
                      the correct string id for each indiviual job instance. 
                      might be a bit more confusing that just removing a standard list item as state is being lifted
                      into app, also remove is lifted and passed down as prop */}
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <section className="education-container">
        {person.establishments.map((place) => {
          return (
            <div className="education" key={place.id}>
              <h1>{place.name}</h1>
              <p>From: {place.startDate.toLocaleDateString()}</p>
              <p>Until: {place.endDate.toLocaleDateString()}</p>

              <button
                type="button"
                className="hidden-button"
                onClick={() => onEstablismentRemove(place.id)}
              >
                Delete
              </button>
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

/* eslint-disable react/prop-types */
/* Display all the info passed into different inputs etc here */

// eslint-disable-next-line react/prop-types
function DetailsDisplay({ obj }) {
  return (
    <div>
      <header className="header">
        {/* <h1>{firstName}</h1>
        <h1>{surName}</h1>
        <h1>{number}</h1>
        <h1>{email}</h1> */}
      </header>
      <section className="about"></section>
      <section className="professional"></section>
      <section className="education"></section>
      <section className="qualifications">
        {obj.qualifications.map((quali) => {
          return (
            <li key={quali.title}>
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

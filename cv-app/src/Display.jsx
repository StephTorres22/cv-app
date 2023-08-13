/* Display all the info passed into different inputs etc here */


// eslint-disable-next-line react/prop-types
function DetailsDisplay({firstName, surName, number, email}) {
  return (
    <div>
      <h1>{firstName}</h1>
      <h1>{surName}</h1>
      <h1>{number}</h1>
      <h1>{email}</h1>
    </div>
  );
}

export default DetailsDisplay;

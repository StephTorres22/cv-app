/* Make re-usable components, i.e inputs for name, surname, email, number, can i make one component and pass down the props from parent to children


Details should return a whole form, with inputs in

REMEMBER PROPS*/
import { useState } from "react";
import "./App.css";
import person from "./person";
import DetailsDisplay from "./Display";

function DetailsInput() {
  const [details, setDetails] = useState(person);

  function handleFirstNameChange(e) {
    const updatedPerson = { ...details, firstName: e.target.value };
    setDetails(updatedPerson);
  }

  function handleSurnameChange(e) {
    const updatedPerson = { ...details, surName: e.target.value };
    setDetails(updatedPerson);
  }

  function handleEmailChange(e) {
    const updatedPerson = { ...details, email: e.target.value };
    setDetails(updatedPerson);
  }

  function handleNumberChange(e) {
    const updatedPerson = { ...details, phoneNumber: e.target.value };
    setDetails(updatedPerson);
  }
  return (
    <div className="whole">
      <div className="left">
        <form action="" className="detailsForm">
          <legend>Personal Details</legend>
          <input
            type="text"
            className=""
            placeholder="Steph"
            onChange={handleFirstNameChange}
          />
          <input
            type="text"
            className=""
            placeholder="Torres"
            onChange={handleSurnameChange}
          />
          <input
            type="tel"
            className=""
            placeholder="00000000000"
            onChange={handleNumberChange}
          />
          <input
            type="email"
            className=""
            placeholder="address@example.com"
            onChange={handleEmailChange}
          />
        </form>
      </div>
      <div className="right">
        <DetailsDisplay
          firstName={details.firstName}
          surName={details.surName}
          number={details.phoneNumber}
          email={details.email}
        />
      </div>
      </div>
  );
}

export default DetailsInput;

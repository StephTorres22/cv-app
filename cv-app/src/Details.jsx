/* Make re-usable components, i.e inputs for name, surname, email, number, can i make one component and pass down the props from parent to children


Details should return a whole form, with inputs in

REMEMBER PROPS*/
import { useState } from "react";
import "./App.css";
import Input from "./Input";
import person from "./assets/person";
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
    <>
      <form action="" className="detailsForm">
        <h1>
          Can i REMEMBER how this works, or did I even KNOW in the first place
        </h1>
        <Input type="text" onChange={handleFirstNameChange} />
        <Input type="text" onChange={handleSurnameChange} />
        <Input type="email" onChange={handleEmailChange} />
        <Input type="number" onChange={handleNumberChange} />
      </form>
      <DetailsDisplay
        firstName={details.firstName}
        surName={details.surName}
        number={details.phoneNumber}
        email={details.email}
      />
    </>
  );
}

export default DetailsInput;

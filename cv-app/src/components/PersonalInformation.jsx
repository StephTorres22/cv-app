/* eslint-disable react/prop-types */

function PeronsalInformation({
  firstName,
  surname,
  phoneNumber,
  email,
  handleFirstNameChange,
  handleSurnameChange,
  handlePhoneNumberChange,
  handleEmailChange,
  place,
  handlePlaceChange,
  description,
  handleDescriptionChange
}) {
  return (
    <div className="forms-container">
      <form action="" className="forms">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          name="surname"
          id="surname"
          placeholder="Surname"
          value={surname}
          onChange={handleSurnameChange}
        />
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Location"
          value={place}
          onChange={handlePlaceChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          value={phoneNumber}
          placeholder="Phone number"
          onChange={handlePhoneNumberChange}
          pattern="[0-9]{5}-[0-9]{3}-[0-9]{3}"
          required
        />
        <textarea
         rows={4}
         style={{ resize: "none" }}
         name=""
         id=""
         className=""
         placeholder="About me"
         value={description}
         onChange={handleDescriptionChange}/>
      </form>
    </div>
  );
}

export default PeronsalInformation;

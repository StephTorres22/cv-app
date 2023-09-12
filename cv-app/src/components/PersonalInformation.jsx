/* eslint-disable react/prop-types */

function PeronsalInformation({
  firstName,
  surname,
  phoneNumber,
  email,
  place,
  description,
  handleChange,
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
          onChange={handleChange}
        />
        <input
          type="text"
          name="surName"
          id="surname"
          placeholder="Surname"
          value={surname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="place"
          id="place"
          placeholder="Location"
          value={place}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          value={phoneNumber}
          placeholder="Phone number"
          onChange={handleChange}
          pattern="[0-9]{5}-[0-9]{3}-[0-9]{3}"
          required
        />
        <textarea
          rows={4}
          style={{ resize: "none" }}
          name="description"
          id=""
          className=""
          placeholder="About me"
          value={description}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default PeronsalInformation;

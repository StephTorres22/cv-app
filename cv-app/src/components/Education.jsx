import "react-datepicker/dist/react-datepicker.css";
import DateSelector from "./DateSelector";
/* type="date"
name="startDate"
id="startDate" */

/* eslint-disable react/prop-types */
function EducationalEstablishment({
  handleEstablishmentChange,
  place,
  handleClick,
  startChange,
  startDate,
  endDate,
  endChange,
}) {
  return (
    <div className="forms-container">
      <form action="" className="forms">
        <input
          type="text"
          className=""
          placeholder="Establishment"
          value={place}
          onChange={handleEstablishmentChange}
        />
        <DateSelector
          startDate={startDate}
          endDate={endDate}
          handleStartChange={startChange}
          handleEndChange={endChange}
        />
      </form>
      <div className="preview">
        {place !== '' && (
          <div className="preview-dates">
            <p>
              {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
            </p>
          </div>
        )}
        <p>
          <u>{place}</u>
        </p>
      </div>
      <button type="button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

export default EducationalEstablishment;

import "react-datepicker/dist/react-datepicker.css";
import DateSelector from "./DateSelector";
/* type="date"
name="startDate"
id="startDate" */

/* eslint-disable react/prop-types */
function EducationalEstablishment({
  establisment,
  handleEstablishmentChange,
  handleClick,
  startChange,
  endChange,
}) {
  return (
    <div className="forms-container">
      <form action="" className="forms">
        <input
          type="text"
          name="place"
          className=""
          placeholder="Establishment"
          value={establisment.place}
          onChange={handleEstablishmentChange}
        />
        <DateSelector
          endName="endDate"
          startName="startDate"
          startDate={establisment.startDate}
          endDate={establisment.endDate}
          handleStartChange={startChange}
          handleEndChange={endChange}
        />
      </form>
      <div className="preview">
        {establisment.place !== "" && (
          <div className="preview-dates">
            <p>
              {establisment.startDate.toLocaleDateString()} -{" "}
              {establisment.endDate.toLocaleDateString()}
            </p>
          </div>
        )}
        <p>
          <u>{establisment.place}</u>
        </p>
      </div>
      <button type="button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

export default EducationalEstablishment;

import DateSelector from "./components/DateSelector";
import "./styles/forms.css";

/* eslint-disable react/prop-types */
function ProfessionalExperience({
  jobPlace,
  handlePlaceChange,
  title,
  handleTitleChange,
  description,
  handleDescriptionChange,
  startDate,
  startChange,
  endDate,
  endChange,
  onClick,
}) {
  return (
    <div className="forms-container">
      <form action="" className="forms">
        <input
          type="text"
          className=""
          name=""
          id=""
          placeholder="Company"
          value={jobPlace}
          onChange={handlePlaceChange}
        />
        <input
          type="text"
          name=""
          id=""
          className=""
          placeholder="Job title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          rows={4}
          style={{ resize: "none" }}
          name=""
          id=""
          className=""
          placeholder="Descritption"
          value={description}
          onChange={handleDescriptionChange}
        />
        <DateSelector
          startDate={startDate}
          endDate={endDate}
          handleEndChange={endChange}
          handleStartChange={startChange}
        />
      </form>
      <div className="preview">
        {jobPlace !== '' && (
          <div className="preview-dates">
            <p>
              {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
            </p>
          </div>
        )}
        {/* has a little bug, that if only one charater is introduced date and place show up then disappear */}
        <p>
          <u>{title}</u>
        </p>
        <p>{jobPlace}</p>

        <p>{description}</p>
      </div>
      <button type="button" onClick={onClick}>
        Add
      </button>
    </div>
  );
}

export default ProfessionalExperience;

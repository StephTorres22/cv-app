import DateSelector from "./components/DateSelector";
import "./styles/forms.css";

/* eslint-disable react/prop-types */
function ProfessionalExperience({
  job,

  startChange,

  endChange,
  onClick,
  onChange,
}) {
  return (
    <div className="forms-container">
      <form action="" className="forms">
        <input
          type="text"
          className=""
          name="jobPlace"
          id=""
          placeholder="Company"
          value={job.jobPlace}
          onChange={onChange}
        />
        <input
          type="text"
          name="jobTitle"
          id=""
          className=""
          placeholder="Job title"
          value={job.jobTitle}
          onChange={onChange}
        />
        <textarea
          rows={4}
          style={{ resize: "none" }}
          name="jobDescription"
          id=""
          className=""
          placeholder="Descritption"
          value={job.jobDescription}
          onChange={onChange}
        />
        <DateSelector
          startName="jobStart"
          endName="jobEnd"
          startDate={job.jobStart}
          endDate={job.jobEnd}
          handleEndChange={endChange}
          handleStartChange={startChange}
        />
      </form>
      <div className="preview">
        {job.jobPlace !== "" && (
          <div className="preview-dates">
            <p>
              {job.jobStart.toLocaleDateString()} -{" "}
              {job.jobEnd.toLocaleDateString()}
            </p>
          </div>
        )}
        {/* has a little bug, that if only one charater is introduced date and place show up then disappear */}
        <p>
          <u>{job.jobTitle}</u>
        </p>
        <p>{job.jobPlace}</p>

        <p>{job.jobDescription}</p>
      </div>
      <button type="button" onClick={onClick}>
        Add
      </button>
    </div>
  );
}

export default ProfessionalExperience;

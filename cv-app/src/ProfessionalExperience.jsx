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
    <div>
      <form action="" className="forms">
        <legend>Professional Experience</legend>
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
          style={{ resize: "none" }}
          name=""
          id=""
          className=""
          placeholder="Descritption"
          value={description}
          onChange={handleDescriptionChange}
        />
        <div className="dates">
          <div>
            <label htmlFor="startDate">Start Date: </label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              value={startDate}
              onChange={startChange}
            />
          </div>
          <div>
            <label htmlFor="endDate">End Date: </label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={endDate}
              onChange={endChange}
            />
          </div>
        </div>
        <button type="button" onClick={onClick}>
          Add
        </button>
      </form>
      <div className="preview">
        <div className="preview-dates">
          {startDate !== "" && (
            <p>
              {startDate} - {endDate}
            </p>
          )}
        </div>
        <p>{jobPlace}</p>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProfessionalExperience;

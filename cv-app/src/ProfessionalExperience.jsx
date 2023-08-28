import DateSelector from "./components/DateSelector";
import "./styles/forms.css";
import { CSSTransition } from "react-transition-group";

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
  isActive,
}) {
  return (
    <CSSTransition
      in={isActive}
      timeout={600}
      mountOnEnter={true}
      classNames="form-transition"
    >
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
          <button type="button" onClick={onClick}>
            Add
          </button>
        </form>
        <div className="preview">
          <div className="preview-dates">
            <p>
              {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
            </p>
          </div>
          <p>
            <u>{title}</u>
          </p>
          <p>{jobPlace}</p>

          <p>{description}</p>
        </div>
      </div>
    </CSSTransition>
  );
}

export default ProfessionalExperience;

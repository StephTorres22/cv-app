/* eslint-disable react/prop-types */
function FormLegend({ handleClick, title, isActive }) {
  return (
    <div className="form-legend">
      <legend>
        <u>{title}</u>
        <div className="arrow-background">
          <input
            type="checkbox"
            className={isActive ? "arrow-toggle-down" : "arrow-toggle   "}
            id="arrow-toggle"
            name="professional-toggle"
          />
          <label
            htmlFor="arrow-toggle"
            className="arrow-toggle-label"
            onClick={handleClick}
          >
            <span className="arrow"></span>
          </label>
        </div>
      </legend>
    </div>
  );
}

export default FormLegend;

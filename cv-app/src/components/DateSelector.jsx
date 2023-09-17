/* eslint-disable react/prop-types */
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateSelector({
  startDate,
  endDate,
  handleEndChange,
  handleStartChange,
  startName,
  endName
}) {
  return (
    <div className="dates">
      <div>
        Start Date:
        <ReactDatePicker
          name={startName}
          selected={startDate}
          onChange={handleStartChange}
          dateFormat={"dd/MM/yyyy"}
        />
      </div>
      <div>
        End Date:
        <ReactDatePicker
          name={endName}
          selected={endDate}
          onChange={handleEndChange}
          dateFormat={"dd/MM/yyyy"}
        />
      </div>
    </div>
  );
}

export default DateSelector;

/* eslint-disable react/prop-types */
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateSelector({
  startDate,
  endDate,
  handleEndChange,
  handleStartChange,
}) {
  return (
    <div className="dates">
      <div>
        Start Date:
        <ReactDatePicker
          selected={startDate}
          onChange={handleStartChange}
          dateFormat={"dd/MM/yyyy"}
        />
      </div>
      <div>
        End Date:
        <ReactDatePicker
          selected={endDate}
          onChange={handleEndChange}
          dateFormat={"dd/MM/yyyy"}
        />
      </div>
    </div>
  );
}

export default DateSelector;

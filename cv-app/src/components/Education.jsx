/* eslint-disable react/prop-types */
function EducationalEstablishment({
  handleEstablishmentChange,
  estabValue,
  handleClick,
  startChange,
  startDate,
  endDate,
  endChange,
}) {
  return (
    <div>
      <form action="">
        <legend>Educational Establsihments</legend>
        <input
          type="text"
          className=""
          placeholder="Establishment"
          value={estabValue}
          onChange={handleEstablishmentChange}
        />
        <label htmlFor="startDate">Start Date: </label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          onChange={startChange}
          value={startDate}
        />
        <label htmlFor="endDate">End Date: </label>
        <input
          type="date"
          name="endDate"
          id="endDate"
          value={endDate}
          onChange={endChange}
        />
        <button type="button" onClick={handleClick}>
          Add
        </button>
      </form>
    </div>
  );
}

export default EducationalEstablishment;

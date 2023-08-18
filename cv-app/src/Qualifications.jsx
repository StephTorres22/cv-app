/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Qualifications({
  levelChange,
  subjectChange,
  gradeChange,
  onClick,
  levelValue,
  subjectValue,
  gradeValue,
}) {
  return (
    <div>
      <form action="">
        <legend>Qualifications</legend>
        <input
          value={levelValue}
          type="text"
          className=""
          name="level"
          id="level"
          placeholder="Level"
          onChange={levelChange}
        />
        <input
          value={subjectValue}
          type="text"
          name="subject"
          id="subject"
          className=""
          placeholder="Subject"
          onChange={subjectChange}
        />
        <input
          value={gradeValue}
          type="text"
          className=""
          id="grade"
          name="grade"
          placeholder="Grade"
          onChange={gradeChange}
        />
        <button type="button" onClick={onClick}>
          Add
        </button>
      </form>
    </div>
  );
}

export default Qualifications;

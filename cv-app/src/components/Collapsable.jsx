/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import "../styles/collapsable.css";
import FormLegend from "./Legend";

function Collapsable({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  const inner = useRef(null);
  const currentHeight = isActive ? inner.current.clientHeight : 0;

  function handleToggle(e) {
    e.preventDefault();
    setIsActive(!isActive);
  }

  return (
    <div className="panel">
      <FormLegend
        title={title}
        handleClick={handleToggle}
        isActive={isActive}
      />
      <div className="panel-collapse" style={{ height: currentHeight + "px" }}>
        <div className="panel-body" ref={inner}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Collapsable;

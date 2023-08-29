/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import "../styles/collapsable.css";

function Collapsable({title, children}) {
   const [isActive, setIsActive] = useState(false);
  const inner = useRef(null);
  const currentHeight = isActive ? inner.current.clientHeight : 0;

  function handleToggle(e) {
    e.preventDefault();
    setIsActive(!isActive);
  }
 
  return (
     <div
      className={`panel ${isActive ? "is-expanded" : ""}`}
      onClick={(e) => handleToggle(e)}
    >
      <div className="panel-heading">
        <h2>{title}</h2>
      </div>
      <div className="panel-collapse" style={{ height: currentHeight + "px" }}>
        <div className="panel-body" ref={inner}>
          {children}
        </div>
      </div>
    </div> 
   
  );
}

export default Collapsable;

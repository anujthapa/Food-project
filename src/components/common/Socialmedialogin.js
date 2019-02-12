import React from "react";

const Socialmedialogin = ({ type, text, value, icon, className }) => {
  return (
    <div>
      <button type={type} className={className} value={value}>
        <i className={icon} />
        {text}
      </button>
    </div>
  );
};
export default Socialmedialogin;

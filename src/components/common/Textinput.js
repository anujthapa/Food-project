import React from "react";
import PropTypes from "prop-types";

const Textinput = ({ type, onChange, placeholder, value, name, error }) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend ">
        <input
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          name={name}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};
Textinput.propTypes = {
  name: PropTypes.string.isRequired,
  palceholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Textinput;

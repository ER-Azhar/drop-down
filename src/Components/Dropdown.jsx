import PropTypes from "prop-types";
import { useState } from "react";


const Dropdown = ({ options = [], onSelect }) => {
  // State To track option is open or not based on that we will show dropdown
  const [isOpen, setIsOpen] = useState(false);

  // State to hold the current selected option
  const [selectedOption, setSelectedOption] = useState(null);

  // function to handle when user selects any option
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div
      className="dorpdownContainer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="ddButton"
      >
        <span className="">
          {selectedOption ? selectedOption.label : "Select"}
        </span>
      </button>

      {isOpen && (
        <div className="ddOptionBox">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className=""
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Dropdown;

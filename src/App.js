
import { useState } from "react";
import "./App.css";
import Dropdown from "./Components/Dropdown";
import Header from "./Components/Header";
import { DROP_DOWN_OPTIONS } from "./constants/index"; // dropdown options

function App() {
  // State to store selected option
  const [selectedOption, setSelectedOption] = useState("");

  // function which will be called by dropdown component to lift up the selected option value
  const handleSelectDropdown = (value) => {
    setSelectedOption(value);
    console.log("Current Selected Option", value);
    console.log("Previous Selected Option", selectedOption);
  };

  return (
    <div className="App">
      <div>
        <Header />
      </div>

      <div>
        <Dropdown
          options={DROP_DOWN_OPTIONS}
          onSelect={handleSelectDropdown}
        />
      </div>
    </div>
  );
}

export default App;



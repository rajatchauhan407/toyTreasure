import {useState} from "react";
import "./index.scss";

export default function ComponentDropdown({options,field}){
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    

    const handleCheckboxChange = (e,option)=>{
        console.log(e.target.value);
        const { checked } = e.target;
        console.log(selectedOptions);
    // Update selectedOptions array based on checkbox state
    if (checked) {
      setSelectedOptions((prevOptions) => [...prevOptions, option]);
    } else {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((selectedOption) => selectedOption.id !== option.id)
      );
    }
    }
    const toggleDropdown = (e) => {
        e.preventDefault();
        setDropdownOpen(!dropdownOpen);
      };
   
 return (
    <div>  
        <div className="dropdown">
        <button onClick={toggleDropdown}>Toggle Dropdown</button>
        {dropdownOpen && (
          <div className="dropdown-content">
            {options.map((option) => (
              <label key={option.id}>
                <input
                  type="checkbox"
                  id={option.id}
                  onChange={(e) => handleCheckboxChange(e, option)}
                  checked={selectedOptions.some((selectedOption) => selectedOption.id === option.id)}
                value={option[field]}
                
                />
                {option[field]}
              </label>
            ))}
          </div>
        )}
      </div>
      {/* <p>Selected Options: {selectedOptions.map((option) => option[field]).join(", ")}</p> */}
    </div>
 );
}
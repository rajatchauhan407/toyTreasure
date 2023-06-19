import React, { useState } from 'react';
import Select from 'react-select';
import './index.scss'
const MultiSelector = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  return (
    <Select
      options={options}
      isMulti
      value={selectedOptions}
      onChange={handleSelectChange}
    />
  );
};

export default MultiSelector;


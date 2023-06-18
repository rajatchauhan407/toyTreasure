import React, { useState } from 'react';

const MultiSelectDropdown = () => {
  const deliveryMethods = ['Drop-off', 'Pick-up'];
  const availabilityDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const availabilityTimes = ['9:00 - 11:00', '11:00 - 13:00', '13:00 - 15:00', '15:00 - 17:00', '17:00 - 19:00'];

  const [selectedDeliveryMethods, setSelectedDeliveryMethods] = useState([]);
  const [selectedAvailabilityDays, setSelectedAvailabilityDays] = useState([]);
  const [selectedAvailabilityTimes, setSelectedAvailabilityTimes] = useState([]);

  const handleDeliveryMethodChange = (event) => {
    setSelectedDeliveryMethods(Array.from(event.target.selectedOptions, (option) => option.value));
  };

  const handleAvailabilityDaysChange = (event) => {
    setSelectedAvailabilityDays(Array.from(event.target.selectedOptions, (option) => option.value));
  };

  const handleAvailabilityTimesChange = (event) => {
    setSelectedAvailabilityTimes(Array.from(event.target.selectedOptions, (option) => option.value));
  };

  return (
    <div className="MultiSelectDropdown">
      <label htmlFor="deliveryMethod">Donation Delivery Method:</label>
      <select id="deliveryMethod" multiple onChange={handleDeliveryMethodChange}>
        {deliveryMethods.map((method) => (
          <option key={method} value={method}>
            {method}
          </option>
        ))}
      </select>

      <label htmlFor="availabilityDays">Availability Days:</label>
      <select id="availabilityDays" multiple onChange={handleAvailabilityDaysChange}>
        {availabilityDays.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>

      <label htmlFor="availabilityTimes">Availability Time:</label>
      <select id="availabilityTimes" multiple onChange={handleAvailabilityTimesChange}>
        {availabilityTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <div>
        <h3>Selected Options:</h3>
        <p>Delivery Methods: {selectedDeliveryMethods.join(', ')}</p>
        <p>Availability Days: {selectedAvailabilityDays.join(', ')}</p>
        <p>Availability Times: {selectedAvailabilityTimes.join(', ')}</p>
      </div>
    </div>
  );
};

export default MultiSelectDropdown;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !city || !gender) {
      setErrorMessage('All fields are required.');
      setRegistrationMessage('');
    } else {
      setErrorMessage('');
      setRegistrationMessage('Registration Successful');
      // You can handle form submission here, for example, send the data to an API
      console.log('Submitted:', { firstName, lastName, city, gender });
    }
  };

  return (
    <div className="App">
      <h1>User Information Form</h1>
      {registrationMessage && <p className="success">{registrationMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {registrationMessage && (
        <div className="registration-details">
          <h2>Registration Details</h2>
          <p>
            <strong>First Name:</strong> {firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {lastName}
          </p>
          <p>
            <strong>City:</strong> {city}
          </p>
          <p>
            <strong>Gender:</strong> {gender}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;

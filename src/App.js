import React, { useState } from 'react';
import './App.css';
import FlightSearchForm from './FlightSearchForm';
import FlightResults from './FlightResults';
import UserAuth from './UserAuth';

function App() {
  const [setSearchResults, kullanıcıBilgileri ] = useState([]);

  const flightResults = [
    "uçuşlar"
  ];

  return (
    <div className="App">
      <h1>Flight Search Application</h1>
      <UserAuth kullanıcıBilgileri= {kullanıcıBilgileri} />
      <FlightSearchForm setSearchResults={setSearchResults} />
      
      <FlightResults results={flightResults} />
    </div>
  );
}

export default App;

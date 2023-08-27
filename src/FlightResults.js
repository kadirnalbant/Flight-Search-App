import React from 'react';

const FlightResults = ({ results }) => {
  if (results.length === 0) {
    return <p>Uçuş sonuçları bulunamadı.</p>;
  }

  return (
    <div>
      <h2>Uçuş Sonuçları</h2>
      <table>
        <thead>
          <tr>
            <th>Havayolu</th>
            <th>Kalkış Saati</th>
            <th>Varış Saati</th>
            <th>Uçuş Uzunluğu</th>
            <th>Fiyat</th>
            <th>Kalkış Yeri</th>
            <th>Varış Yeri</th>
          </tr>
        </thead>
        <tbody>
          {results.map((flight, index) => (
            <tr key={index}>
              <td>{flight.airline}</td>
              <td>{flight.departureTime}</td>
              <td>{flight.arrivalTime}</td>
              <td>{flight.duration}</td>
              <td>{flight.price}</td>
              <td>{flight.departureCity}</td>
              <td>{flight.arrivalCity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightResults;

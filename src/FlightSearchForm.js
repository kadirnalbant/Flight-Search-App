import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FlightResults from './FlightResults'; // FlightResults bileşenini import ediyoruz


const FlightSearchForm = ({ setSearchResults }) => {
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date()); // Bugünün tarihi
  const [oneWay, setOneWay] = useState(true);
  const [filteredDepartureAirports, setFilteredDepartureAirports] = useState([]);
  const [filteredArrivalAirports, setFilteredArrivalAirports] = useState([]);
  const [selectedDepartureAirport, setSelectedDepartureAirport] = useState(null); // Seçilen kalkış havaalanı
  const [selectedArrivalAirport, setSelectedArrivalAirport] = useState(null); // Seçilen varış havaalanı
  const [showResults, setShowResults] = useState(false); // Arama sonuçlarını gösterme durumu
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]); // Uçuş sonuçlarını tutan durum

  
  const airportData = [
    { code: 'IST', name: 'İstanbul Havalimanı', city: 'İstanbul' },
    { code: 'ESB', name: 'Esenboğa Havalimanı', city: 'Ankara' },
    { code: 'AYT', name: 'Antalya Havalimanı', city: 'Antalya' },
    { code: 'ADB', name: 'Adnan Menderes Havalimanı', city: 'İzmir' },
    { code: 'EZS', name: 'Elazığ Havalimanı', city: 'Elazığ' },
  ];

  useEffect(() => {
    // Kalkış havaalanları için filtreleme
    const filteredDepartures = airportData.filter(airport =>
      airport.name.toLowerCase().includes(departureAirport.toLowerCase())
    );
    setFilteredDepartureAirports(filteredDepartures);

    // Varış havaalanları için filtreleme
    const filteredArrivals = airportData.filter(airport =>
      airport.name.toLowerCase().includes(arrivalAirport.toLowerCase())
    );
    setFilteredArrivalAirports(filteredArrivals);
    if (showResults) {
      setLoading(false);
    }
  
  }, [departureAirport, arrivalAirport, showResults]);

  const handleDepartureAirportSelect = (airport) => {
    setSelectedDepartureAirport(airport);
    setDepartureAirport(airport.name); // Seçilen havaalanının adını input'a yazıyoruz
  };

  const handleArrivalAirportSelect = (airport) => {
    setSelectedArrivalAirport(airport);
    setArrivalAirport(airport.name);
  };


  const handleSearch = () => {
    if (!selectedDepartureAirport || !selectedArrivalAirport) {
      alert("Lütfen kalkış ve varış havaalanlarını seçin.");
      return;
    }
    

    setLoading(true);
    // Simüle edilmiş uçuş sonuçları
    const mockResults = [
        { airline: "Turkish Airlines",
        departureTime: "08:00",
        arrivalTime: "09:00",
        duration: "1 hour",
        price: "1000 TL",
        departureAirport: "IST", 
        arrivalAirport: "ESB", 
        departureCity: "Istanbul", 
        arrivalCity: "Ankara",  
      }, 
      { airline: "Pegasus",
        departureTime: "13:35",
        arrivalTime: "14:45",
        duration: "1 hour 10 minutes",
        price: "850 TL",
        departureAirport: "IST", 
        arrivalAirport: "ESB", 
        departureCity: "Istanbul", 
        arrivalCity: "Ankara",  
      }, 
      { airline: "Turkish Airlines",
        departureTime: "15:40",
        arrivalTime: "16:45",
        duration: "1 hour 5 minutes",
        price: "1050 TL",
        departureAirport: "ESB", 
        arrivalAirport: "IST", 
        departureCity: "Ankara", 
        arrivalCity: "Istanbul",  
      }, 
      { airline: "Pegasus",
        departureTime: "09:00",
        arrivalTime: "10:00",
        duration: "1 hour",
        price: "780 TL",
        departureAirport: "ESB", 
        arrivalAirport: "IST", 
        departureCity: "Ankara", 
        arrivalCity: "Istanbul",   
      }, 
      { airline: "Turkish Airlines",
        departureTime: "08:00 ",
        arrivalTime: "10:00 ",
        duration: "2 hours",
        price: "800 TL",
        departureAirport: "IST", 
        arrivalAirport: "ESB", 
        departureCity: "Istanbul", 
        arrivalCity: "Ankara",  
      }, 
      { airline: "Pegasus",
        departureTime: "08:00 ",
        arrivalTime: "10:00 ",
        duration: "2 hours",
        price: "550 TL",
        departureAirport: "IST", 
        arrivalAirport: "ESB", 
        departureCity: "Istanbul", 
        arrivalCity: "Ankara",  
      }, 
      


     { airline: "SunExpress",
      departureTime: "14:30",
      arrivalTime: "16:00",
      duration: "1 hour 30 minutes",
      price: "450 TL",
      departureAirport: "EZS",
      arrivalAirport: "AYT",
      departureCity: "Elazığ",
      arrivalCity: "Antalya",
    },

      {airline: "Turkish Airlines",
      departureTime: "11:15",
      arrivalTime: "12:45",
      duration: "1 hour 30 minutes",
      price: "620 TL",
      departureAirport: "AYT",
      arrivalAirport: "IST",
      departureCity: "Antalya",
      arrivalCity: "Istanbul"},


      {airline: "Pegasus",
      departureTime: "08:45",
      arrivalTime: "09:45",
      duration: "1 hour",
      price: "550 TL",
      departureAirport: "IST",
      arrivalAirport: "ESB",
      departureCity: "Istanbul",
      arrivalCity: "Ankara"},


      {airline: "AnadoluJet",
      departureTime: "15:20",
      arrivalTime: "16:20",
      duration: "1 hour",
      price: "320 TL",
      departureAirport: "ESB",
      arrivalAirport: "EZS",
      departureCity: "Ankara",
      arrivalCity: "Elazığ"},


      {airline: "Pegasus",
      departureTime: "10:00",
      arrivalTime: "11:30",
      duration: "1 hour 30 minutes",
      price: "590 TL",
      departureAirport: "IST",
      arrivalAirport: "AYT",
      departureCity: "Istanbul",
      arrivalCity: "Antalya"},


      {airline: "SunExpress",
      departureTime: "12:45",
      arrivalTime: "14:15",
      duration: "1 hour 30 minutes",
      price: "420 TL",
      departureAirport: "AYT",
      arrivalAirport: "EZS",
      departureCity: "Antalya",
      arrivalCity: "Elazığ"},

      {airline: "Turkish Airlines",
      departureTime: "09:30",
      arrivalTime: "11:00",
      duration: "1 hour 30 minutes",
      price: "670 TL",
      departureAirport: "IST",
      arrivalAirport: "AYT",
      departureCity: "Istanbul",
      arrivalCity: "Antalya"
      },

      {airline: "AnadoluJet",
      departureTime: "14:15",
      arrivalTime: "15:15",
      duration: "1 hour",
      price: "530 TL",
      departureAirport: "ESB",
      arrivalAirport: "IST",
      departureCity: "Ankara",
      arrivalCity: "Istanbul"},

      {airline: "Pegasus",
      departureTime: "11:45",
      arrivalTime: "13:15",
      duration: "1 hour 30 minutes",
      price: "580 TL",
      departureAirport: "EZS",
      arrivalAirport: "IST",
      departureCity: "Elazığ",
      arrivalCity: "Istanbul"},


      {airline: "Turkish Airlines",
      departureTime: "17:30",
      arrivalTime: "18:30",
      duration: "1 hour",
      price: "600 TL",
      departureAirport: "IST",
      arrivalAirport: "ESB",
      departureCity: "Istanbul",
      arrivalCity: "Ankara"},


      {airline: "SunExpress",
      departureTime: "16:45",
      arrivalTime: "18:15",
      duration: "1 hour 30 minutes",
      price: "430 TL",
      departureAirport: "AYT",
      arrivalAirport: "EZS",
      departureCity: "Antalya",
      arrivalCity: "Elazığ"},


      {airline: "Pegasus",
      departureTime: "13:00",
      arrivalTime: "14:00",
      duration: "1 hour",
      price: "520 TL",
      departureAirport: "AYT",
      arrivalAirport: "ESB",
      departureCity: "Antalya",
      arrivalCity: "Ankara"},



      {airline: "Turkish Airlines",
      departureTime: "09:30",
      arrivalTime: "11:00",
      duration: "1 hour 30 minutes",
      price: "670 TL",
      departureAirport: "IST",
      arrivalAirport: "AYT",
      departureCity: "Istanbul",
      arrivalCity: "Antalya"},


      {airline: "Pegasus",
      departureTime: "14:45",
      arrivalTime: "16:15",
      duration: "1 hour 30 minutes",
      price: "610 TL",
      departureAirport: "AYT",
      arrivalAirport: "IST",
      departureCity: "Antalya",
      arrivalCity: "Istanbul"},


      {airline: "AnadoluJet",
      departureTime: "10:15",
      arrivalTime: "11:30",
      duration: "1 hour 15 minutes",
      price: "450 TL",
      departureAirport: "ESB",
      arrivalAirport: "ADB",
      departureCity: "Ankara",
      arrivalCity: "Izmir"},

      {airline: "AnadoluJet",
      departureTime: "10:15",
      arrivalTime: "11:30",
      duration: "1 hour 15 minutes",
      price: "450 TL",
      departureAirport: "IST",
      arrivalAirport: "ADB",
      departureCity: "Istanbul",
      arrivalCity: "Izmir"},

      {airline: "AnadoluJet",
      departureTime: "10:15",
      arrivalTime: "11:30",
      duration: "1 hour 15 minutes",
      price: "450 TL",
      departureAirport: "ADB",
      arrivalAirport: "IST",
      departureCity: "Izmir",
      arrivalCity: "Istanbul"},


      {airline: "SunExpress",
      departureTime: "16:00",
      arrivalTime: "17:15",
      duration: "1 hour 15 minutes",
      price: "490 TL",
      departureAirport: "ADB",
      arrivalAirport: "ESB",
      departureCity: "Izmir",
      arrivalCity: "Ankara"},


      {airline: "Turkish Airlines",
      departureTime: "08:00",
      arrivalTime: "09:15",
      duration: "1 hour 15 minutes",
      price: "550 TL",
      departureAirport: "ESB",
      arrivalAirport: "IST",
      departureCity: "Ankara",
      arrivalCity: "Istanbul"},


      {airline: "Pegasus",
      departureTime: "17:30",
      arrivalTime: "18:45",
      duration: "1 hour 15 minutes",
      price: "580 TL",
      departureAirport: "IST",
      arrivalAirport: "ESB",
      departureCity: "Istanbul",
      arrivalCity: "Ankara"},


      {airline: "SunExpress",
      departureTime: "10:45",
      arrivalTime: "12:15",
      duration: "1 hour 30 minutes",
      price: "600 TL",
      departureAirport: "IST",
      arrivalAirport: "AYT",
      departureCity: "Istanbul",
      arrivalCity: "Antalya"},


      {airline: "Turkish Airlines",
      departureTime: "14:30",
      arrivalTime: "16:00",
      duration: "1 hour 30 minutes",
      price: "620 TL",
      departureAirport: "AYT",
      arrivalAirport: "IST",
      departureCity: "Antalya",
      arrivalCity: "Istanbul"},


      {airline: "Pegasus",
      departureTime: "13:15",
      arrivalTime: "14:45",
      duration: "1 hour 30 minutes",
      price: "450 TL",
      departureAirport: "EZS",
      arrivalAirport: "AYT",
      departureCity: "Elazığ",
      arrivalCity: "Antalya"},


      {airline: "AnadoluJet",
      departureTime: "15:30",
      arrivalTime: "17:00",
      duration: "1 hour 30 minutes",
      price: "430 TL",
      departureAirport: "AYT",
      arrivalAirport: "EZS",
      departureCity: "Antalya",
      arrivalCity: "Elazığ"},

      {airline: "Pegasus",
      departureTime: "09:00",
      arrivalTime: "10:15",
      duration: "1 hour 15 minutes",
      price: "500 TL",
      departureAirport: "ESB",
      arrivalAirport: "IST",
      departureCity: "Ankara",
      arrivalCity: "Istanbul"},

      {airline: "Pegasus",
      departureTime: "18:30",
      arrivalTime: "19:45",
      duration: "1 hour 15 minutes",
      price: "520 TL",
      departureAirport: "IST",
      arrivalAirport: "ESB",
      departureCity: "Istanbul",
      arrivalCity: "Ankara"},

      {airline: "Turkish Airlines",
      departureTime: "11:30",
      arrivalTime: "12:45",
      duration: "1 hour 15 minutes",
      price: "580 TL",
      departureAirport: "AYT",
      arrivalAirport: "IST",
      departureCity: "Antalya",
      arrivalCity: "Istanbul"},


      {airline: "Turkish Airlines",
      departureTime: "20:00",
      arrivalTime: "21:15",
      duration: "1 hour 15 minutes",
      price: "600 TL",
      departureAirport: "IST",
      arrivalAirport: "AYT",
      departureCity: "Istanbul",
      arrivalCity: "Antalya"},

    ];

    const filteredResults = mockResults.filter(flight => 
      flight.departureAirport === selectedDepartureAirport.code &&
      flight.arrivalAirport === selectedArrivalAirport.code
    );

  

    setResults(filteredResults);
    setLoading(false);
    setShowResults(true); // Arama sonuçlarını gösterir
  };

  return (
    <div>
      <h2>Uçuş Arama</h2>
      <div>
        <label>Kalkış Havaalanı:</label>
        <input
          type="text"
          value={departureAirport}
          onChange={(e) => setDepartureAirport(e.target.value)}
          placeholder="Kalkış Havaalanı"
        />
        <ul>
        {departureAirport && filteredDepartureAirports.map(airport => (
          <li key={airport.code} onClick={() => handleDepartureAirportSelect(airport)}>
            {airport.name} - {airport.city}
          </li>
        ))}
      </ul>
      </div>
      <div>
        <label>Varış Havaalanı:</label>
        <input
          type="text"
          value={arrivalAirport}
          onChange={(e) => setArrivalAirport(e.target.value)}
          placeholder="Varış Havaalanı"
        />
         <ul>
        {arrivalAirport && filteredArrivalAirports.map(airport => (
          <li key={airport.code} onClick={() => handleArrivalAirportSelect(airport)}>
            {airport.name} - {airport.city}
          </li>
        ))}
      </ul>
      </div>
      <div>
        <label>Kalkış Tarihi:</label>
        <DatePicker
          selected={departureDate}
          onChange={(date) => setDepartureDate(date)}
        />
      </div>
      {!oneWay && (
        <div>
          <label>Varış Tarihi:</label>
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
          />
        </div>
      )}
      <div>
        <label>Tek Yönlü Uçuş:</label>
        <input
          type="checkbox"
          checked={oneWay}
          onChange={() => setOneWay(!oneWay)}
        />
      </div>
      <button onClick={handleSearch}>Ara</button>
      {loading && <p>Yükleniyor...</p>}
      
      {/* Uçuş sonuçlarını gösterir */}
      {showResults && (
      <FlightResults results={results} />
    )}
    </div>
  );
};

export default FlightSearchForm;

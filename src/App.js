// import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import Countries from './components/Countries/Countries';
// import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}

      {/*   <Countries></Countries>
      <Header></Header> */}
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>

    </div>
  );
}







/* function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h1>Visiting Every Country Of the world.</h1>
      <h3>Available Countries: {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    <div>
      <h2>Country Name:<span className="country-name">{props.name}</span></h2>
      <h2>Population:<span className="country-name">{props.population}</span></h2>
    </div>
  )
} */

export default App;

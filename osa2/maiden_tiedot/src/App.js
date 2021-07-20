import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterForm from './components/FilterForm'
import Country from './components/Country'
import './App.css'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countryResults, setCountryResults] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <center>
      <div className="App">
        <h1><img className="globe" src="globe.png" height="50" alt="globe" /> CountryPedia 9000</h1>
        <table width="250">
          <tbody>
            <tr>
              <td>
                <FilterForm countries={countries} setCountryResults={setCountryResults} />
              </td>
            </tr>
            <tr>
              <td>
                <Country results={countryResults} setResults={setCountryResults} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </center>
  );
}

export default App
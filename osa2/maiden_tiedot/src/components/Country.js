import React from 'react'
import Weather from './Weather'

const Country = ({ results, setResults }) => {
  if (results !== undefined && results.length > 0) {
    if (results.length > 1) {
      return (
        <div>
          {results.map(r => <div key={r.name}>- {r.name} <button key={r.name} onClick={() => setResults([r])}>show</button></div>)}
        </div>
      )
    } else if (results.length === 1) {
      const population = new Intl.NumberFormat().format(results[0].population)
      const area = new Intl.NumberFormat().format(results[0].area)
      const alt = `Flag of ${results[0].name}`

      return (
        <div>
          <h1>
            {results[0].name}
          </h1>

          <img border="1" alt={alt} src={results[0].flag} width="222" /><br />

          <ul>
            <b>{results[0].altSpellings.map((name) => <li key={name}>{name}</li>)}</b>
          </ul>

          <b>Demonym</b>: {results[0].demonym}<br />
          <b>Region</b>: {results[0].subregion}<br />
          <b>Capital</b>: {results[0].capital}<br />
          <b>Population</b>: {population}<br />
          <b>Area</b>: {area} km<sup>2</sup><br />
          <b>Domain</b>: {results[0].topLevelDomain[0]}<br />
          <b>Languages</b>:
          {results[0].languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
          <b>Calling code(s)</b>:
          {results[0].callingCodes.map(cc => <li key={cc}>+{cc}</li>)}
          <b>Currencies</b>: {results[0].currencies.map((c, i) =>
            c.name === null ?
              <div key={i}></div> :
              <div key={i}><li key={c.name}>Name: {c.name}</li><li key={c.symbol}>Symbol: {c.symbol}</li></div>)}
          <b>Timezone(s)</b>: {results[0].timezones.map((tz) => <li key={tz}>{tz}</li>)}

          <Weather capital={results[0].capital} />
          
        </div>
      )
    }
  } else {
    return (<div>Start searching for a country! <img className="ladybug" src="ladybug.png" alt="ladybug"/></div>)
  }
}

export default Country
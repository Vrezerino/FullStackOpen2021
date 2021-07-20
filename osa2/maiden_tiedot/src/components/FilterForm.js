import React from 'react'

const FilterForm = ({ countries, setCountryResults }) => {
  const filterCountries = (event) => {
    const input = event.target.value.toLowerCase().trim()
    if (input.length > 0) {
        setCountryResults(
            countries.filter((country) => 
                country.name.toLowerCase().includes(input) || country.name.toLowerCase() === input,
            ),
        )
    } else {
      setCountryResults([])
    }
}

  return(
    <input onChange={filterCountries}/>
  )
}

export default FilterForm
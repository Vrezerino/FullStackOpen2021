import React from 'react'

const FilterForm = ({ people, setFilterResults }) => {
  const filterPeople = (event) => {
    const value = event.target.value.trim()
    if (value.length > 0) {
      setFilterResults(
        people.filter((person) =>
          person.name.toLowerCase().includes(value.toLowerCase()),
        ),
      );
    } else {
      setFilterResults([...people]);
    }
  }
  return (
    <input onChange={filterPeople} />
  )
}

export default FilterForm
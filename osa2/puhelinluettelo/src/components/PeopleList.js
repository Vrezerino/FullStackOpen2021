import React from 'react'
import Person from './Person'
import personService from '../services/personService'

const PeopleList = ({ people, filterResults, setPeople, setMessage }) => {
  const deletePerson = (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      personService.deletePerson(id)
      .then(r => {
        setPeople(people.filter(p => p.id !== id))
        })
      .then(r => {
        setMessage(`Removed ${people.find(p => p.id === id).name}!`)
      })
      .catch(e => {
        if (e.response) {
          setMessage(`Couldn't find ${people.find(p => p.id === id).name}!`)
        } else if (e.request) {
          setMessage(`Server didn't respond!`)
        } else {
          setMessage(`Unknown error.`)
        }
      })
      setTimeout(() => {
      setMessage(null)
      }, 4000)
    } else {
      return
    }
  }

  if (people.length === 0 ) {
    return (
      <div>No entries in the phonebook.</div>
    )
  }

  if (filterResults.length === 0) {
    return (
      <div>
        {people.map(p => <Person key={p.id} id={p.id} name={p.name} number={p.number} deletePerson={deletePerson}/>)} 
      </div>
    )
  }

  return (
    <div>
      {filterResults.map(p => <Person key={p.id} id={p.id} name={p.name} number={p.number} deletePerson={deletePerson}/>)}
    </div>
  )
}

export default PeopleList
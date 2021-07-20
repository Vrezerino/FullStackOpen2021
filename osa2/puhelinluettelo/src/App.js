import React, { useState, useEffect } from 'react'
import PeopleList from './components/PeopleList'
import FilterForm from './components/FilterForm'
import NewPersonForm from './components/NewPersonForm'
import Message from './components/Message'
import personService from './services/personService'
import './App.css'

const App = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    personService.getAll()
    .then(response => {
      setPeople(response)
    })
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState('')
  const [filterResults, setFilterResults] = useState([])

  return (
    <center>
      <div>
        <h1>Phonebook <img alt="telephone icon" src="phone.png"/></h1>
        <h4>Search entries</h4>
        <FilterForm people={people} setNewName={setNewName} setNewNumber={setNewNumber} setPeople={setPeople} setFilterResults={setFilterResults}/>

        <h4>Add a new entry</h4>
        <NewPersonForm people={people} setPeople={setPeople} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}  message={message} setMessage={setMessage}/>

        <h2>Numbers</h2>
        <PeopleList people={people} setPeople={setPeople} filterResults={filterResults} setMessage={setMessage}/>
        <Message message={message}/>
      </div>
    </center>
  )
}

export default App
import React from 'react'
import personService from '../services/personService'

const NewPersonForm = ({ people, newName, newNumber, setNewName, setNewNumber, setPeople, setMessage }) => {
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (newName.length === 0 || newNumber.length === 0) {
      alert("A field can not be empty!")
      return
    }

    if (newName.length !== 0 || newNumber.length !== 0) {
      for (let i = 0; i < people.length; i++) {
        if (people[i].name.toLowerCase() === (newName.toLowerCase()) && people[i].number !== newNumber) {
          if (window.confirm(`${newName} is already in the phonebook, replace the old number with a new one?`)) {
            personService
              .updateNumber(people[i].id, { ...people[i], number: newNumber })
              .then(r => setPeople(people.map(person => person.id === r.id ? r : person)))
              .then(r => {
                setMessage(`Updated ${newName}'s phone number!`)
              })
              .catch(e => {
                if (e.response) {
                  setMessage(`Couldn't update ${newName}! Check if they were removed from the phonebook.`)
                } else if (e.request) {
                  setMessage(`Server didn't respond!`)
                } else {
                  setMessage(`Unknown error.`)
                }
              })
              setTimeout(() => {
                setMessage(null)
                }, 4000)
            exists = true
            break
          } else {
            return
          }
        } else if (people[i].name.toLowerCase() === (newName.toLowerCase()) && people[i].number === newNumber) {
            setMessage(`${newName} already has this phone number!`)
            setTimeout(() => {
            setMessage(null)
          }, 2000)
          exists = true
        }
      }

      if (!exists) {
        personService
          .createPerson(personObject)
          .then(response => {
            setPeople(people.concat(response))
            setMessage(`Added ${newName}!`)
          })
          .catch(e => {
            if (e.response) {
              setMessage(`Couldn't add ${newName}!`)
            } else if (e.request) {
              setMessage(`Server didn't respond!`)
            } else {
              setMessage(`Unknown error.`)
            }
          })
          setTimeout(() => {
          setMessage(null)
        }, 2000)
      }
      setNewName('')
      setNewNumber('')
    }
  }

  const personObject = {
    name: newName,
    number: newNumber,
  }

  let exists = false

  return (
    <div>
      <form onSubmit={addPerson}>
        <table width="200">
          <tbody>
            <tr>
              <td>
                Name: <input value={newName} onChange={handleNameChange} />
              </td>
              <td>
                Phone number: <input type="tel" value={newNumber} onChange={handleNumberChange} />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button type="submit">Add to phonebook!</button>

        </div>
      </form>
    </div>
  )
}

export default NewPersonForm
import React from 'react'

const Person = ({ id, name, number, deletePerson }) => {
  return(
    <div key={id}><b>{name}</b>, tel: {number} <img alt="delete person" onClick={() => deletePerson(id)} src="x.png"/></div>
  )
}

export default Person
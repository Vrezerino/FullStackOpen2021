import React from 'react'

const Part = ({ name, exercises }) => (
  <li><i>{name}</i>, {exercises} exercises</li>
)

export default Part
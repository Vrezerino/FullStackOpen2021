import React, { useState } from 'react'

const Button = ({ text, func }) => (
  <button onClick={func}>{text}</button>
)

const App = () => {
  const [selected, setSelected] = useState(0)
  const [anecdotes, setAnecdotes] = useState([
    {
      anecdote: 'If it hurts, do it more often',
      votes: 0
    },
    {
      anecdote: 'Adding manpower to a late software project makes it later!',
      votes: 0
    },
    {
      anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0
    },
    {
      anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0
    },
    {
      anecdote: 'Premature optimization is the root of all evil.',
      votes: 0
    },
    {
      anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0
    }
  ])

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))

  }

  const vote = () => {
    const anecdotesCopy = [...anecdotes];
    anecdotesCopy[selected].votes = anecdotesCopy[selected].votes + 1;
    setAnecdotes(anecdotesCopy);
  }

  const mostVotes = () => {
    let biggest = 0
    let index = 0
    for (let i = 0; i < anecdotes.length; i++) {
      if (biggest < anecdotes[i].votes) {
        biggest = anecdotes[i].votes
        index = i
      }
    }

    if (biggest === 0) {
      return(
        <div><i>None of the anecdotes have been voted on!</i></div>
      )
    }

    return(
      <div>
        <p> ~ {anecdotes[index].anecdote} ~ </p>
        <i>This anecdote has {biggest} votes.</i>
      </div>
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p> ~ {anecdotes[selected].anecdote} ~ </p>
      <i>This anecdote has {anecdotes[selected].votes} votes.</i><br />

      <Button func={vote} text="Vote!" />
      <Button func={randomAnecdote} text="Next anecdote" />

      <h1>Anecdote with the most votes</h1>
      {mostVotes()}

    </div>
  )
}

export default App

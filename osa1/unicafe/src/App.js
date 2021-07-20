import React, { useState } from 'react'

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)


const Statistics = (props) => {
  /*
  Need to compound absolute values when checking if no feedback was given i.e if
  all values in the array are 0. Otherwise an array like [0, 0, 1, -1, 0] would
  obviously sum up to 0.
  */
  if ((props.values.reduce((a, b) => Math.abs(a) + Math.abs(b))) === 0) {
    return(
      <div>No feedback given!</div>
    )
  }

  return(
    <table>
      <tbody>
        <StatisticLine text="Good: " value={props.values[0]} />
        <StatisticLine text="Neutral: " value={props.values[1]} />
        <StatisticLine text="Bad: " value={props.values[2]} />
        <StatisticLine text="All: " value={props.values[0] + props.values[1] + props.values[2]} />
        <StatisticLine text="Average: " value={props.values[3]} />
        <StatisticLine text="Positive: " value={props.values[4] + " %"}/>
      </tbody>
    </table>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [points, setPoints] = useState([])

  const handleGood = () => {
    setPoints(points.concat(1))
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setPoints(points.concat(0))
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setPoints(points.concat(-1))
    setBad(bad + 1)
  }

  const average = () => {
    if (points.length > 0) {
      return points.reduce((a, b) => (a + b)) / points.length
    }
    return 0
  }

  const positivity = () => {
    const positives = points.reduce((a, b) => (b === 1 ? a + 1 : a), 0)
    return points.length > 0 ? (positives / points.length) * 100 : 0
  }

  return (
    <div>
      <div>
        <h1>Give us some feedback!</h1>
        <Button handleClick={handleGood} text='Good' />
        <Button handleClick={handleNeutral} text='Neutral' />
        <Button handleClick={handleBad} text='Bad' />

        <h1>Statistics</h1>
        <Statistics values={[good, neutral, bad, average(), positivity()]} />
      </div>
    </div>
  )
}
export default App

import { useState } from 'react'

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.name}</button>
    </>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text={"good"} value={props.good}/>
          <StatisticLine text={"neutral"} value={props.neutral}/>
          <StatisticLine text={"bad"} value={props.bad}/>
          <StatisticLine text={"all"} value={props.all}/>
          <StatisticLine text={"average"} value={props.average}/>
          <StatisticLine text={"positive"} value={props.positive}/>  
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const UpdateGood = () => setGood(good + 1)
  const UpdateNeutral = () => setNeutral(neutral + 1)
  const UpdateBad = () => setBad(bad + 1)

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100 + "%"

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={UpdateGood} name={"good"}></Button>
      <Button onClick={UpdateNeutral} name={"neutral"}></Button>
      <Button onClick={UpdateBad} name={"bad"}></Button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App
import React, { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  let parsedValue;
  parsedValue = parseInt(good, 10);
  const goodInt = Number.isInteger(parsedValue) ? parsedValue : 0;
  parsedValue = parseInt(neutral, 10);
  const neutralInt = Number.isInteger(parsedValue) ? parsedValue : 0;
  parsedValue = parseInt(bad, 10);
  const badInt = Number.isInteger(parsedValue) ? parsedValue : 0;
  const all = goodInt + neutralInt + badInt;
  const avg = all > 0 ? ((goodInt - badInt) / all).toFixed(2) : 0;
  const positivePercentage = all > 0 ? ((goodInt / all) * 100).toFixed(2) : 0;

  return all > 0 ? (
    <table>
      <thead>
        <tr>
          <th colSpan="2">
            <h2>
              <strong>statistics</strong>
            </h2>
          </th>
        </tr>
      </thead>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={avg} />
        <StatisticLine text="positive" value={`${positivePercentage}%`} />
      </tbody>
    </table>
  ) : (
    <p>No feedback given</p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <>
      <h1>give feedback</h1>
      <Button
        text="good"
        handleClick={() => {
          setGood(good + 1);
        }}
      />
      <Button
        text="neutral"
        handleClick={() => {
          setNeutral(neutral + 1);
        }}
      />
      <Button
        text="bad"
        handleClick={() => {
          setBad(bad + 1);
        }}
      />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  );
};

export default App;

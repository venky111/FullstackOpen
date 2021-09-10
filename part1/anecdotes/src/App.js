import React, { useState } from 'react';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const Quote = ({ title, quote, votes }) => (
  <>
    <h2>{title}</h2>
    {quote}
    <p>has {votes} votes</p>
  </>
);
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];

  const [votesArray, setVotesArray] = useState(Array(anecdotes.length).fill(0));

  const [selected, setSelected] = useState(0);

  const indexOfHighestVote = votesArray.indexOf(Math.max(...votesArray));

  return (
    <div>
      <Quote
        title=""
        quote={anecdotes[selected]}
        votes={votesArray[selected]}
      />
      <Button
        text="vote"
        onClick={() => {
          const newArray = [...votesArray];
          newArray[selected] += 1;
          setVotesArray(newArray);
        }}
      />
      <Button
        text="nextAnecdote"
        onClick={() => setSelected(getRandomInt(7))}
      />
      <Quote
        title="Anecdote with highest votes"
        quote={anecdotes[indexOfHighestVote]}
        votes={votesArray[indexOfHighestVote]}
      />
    </div>
  );
};

export default App;

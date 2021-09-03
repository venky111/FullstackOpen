import React from 'react';

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;
  const exercises = { exercises1, exercises2, exercises3 };
  const content = [
    { id: 0, part: part1, noOfExercises: exercises1 },
    { id: 1, part: part2, noOfExercises: exercises2 },
    { id: 2, part: part3, noOfExercises: exercises3 },
  ];

  return (
    <div>
      <Header name={course} />
      <Content content={content} />
      <Total {...exercises} />
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Part = (props) => {
  const { part, noOfExercises } = props;
  return (
    <p>
      {part} {noOfExercises}
    </p>
  );
};

const Content = (props) => {
  const { content } = props;
  const partsArray = content.map((part) => <Part key={part.id} {...part} />);
  return <>{partsArray}</>;
};

const Total = (props) => {
  const { exercises1, exercises2, exercises3 } = props;
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
};

export default App;

import React from 'react';

const App = () => {
  const course = 'Half Stack application development';
  const content = [
    { id: 0, part: 'Fundamentals of React', noOfExercises: 10 },
    { id: 1, part: 'Using props to pass data', noOfExercises: 7 },
    { id: 2, part: 'State of a component', noOfExercises: 14 },
  ];

  return (
    <div>
      <Header name={course} />
      <Content content={content} />
      <Total content={content} />
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
  const { content } = props;
  const noOfExercisesArray = content.map((part) => part.noOfExercises);
  const sum = noOfExercisesArray.reduce(
    (current, previous) => current + previous,
    0
  );
  return <p>Number of exercises {sum}</p>;
};

export default App;

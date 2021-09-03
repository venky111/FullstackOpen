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
  const parts = { part1, part2, part3 };
  const content = { parts, exercises };
  return (
    <div>
      <Header name={course} />
      <Content {...content} />
      <Total {...exercises} />
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Content = (props) => {
  const { parts, exercises } = props;
  const { part1, part2, part3 } = parts;
  const { exercises1, exercises2, exercises3 } = exercises;
  return (
    <>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </>
  );
};

const Total = (props) => {
  const { exercises1, exercises2, exercises3 } = props;
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
};
export default App;

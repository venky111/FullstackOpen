import React from 'react';
import Course from './components/Course';

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        { id: 1, name: 'Fundamentals of React', noOfExercises: 10 },
        { id: 2, name: 'Using props to pass data', noOfExercises: 7 },
        { id: 3, name: 'State of a component', noOfExercises: 14 },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          noOfExercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          noOfExercises: 7,
          id: 2,
        },
      ],
    },
  ];
  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header name={course.name} />
            <Course parts={course.parts} />
            <Total course={course.parts} />
          </div>
        );
      })}
    </>
  );
};

const Header = ({ name }) => {
  return <h2>{name}</h2>;
};

const Total = ({ course }) => {
  const noOfExercisesArray = course.map((part) => part.noOfExercises);
  const sum = noOfExercisesArray.reduce(
    (current, previous) => current + previous,
    0
  );
  return <p>total of {sum} exercises</p>;
};

export default App;

import React from 'react';

const Part = ({ name, noOfExercises }) => {
  return (
    <p>
      {name} {noOfExercises}
    </p>
  );
};

const Course = ({ parts }) => {
  const partsArray = parts.map((part) => <Part key={part.id} {...part} />);
  return <>{partsArray}</>;
};

export default Course;

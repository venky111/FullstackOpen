import React, { useState } from 'react';

const PersonForm = ({ addPerson }) => {
  const [person, setPerson] = useState({ name: '', number: '' });
  const handleChange = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addPerson(person);
        setPerson({ name: '', number: '' });
      }}
    >
      <div>
        name:{' '}
        <input
          type="text"
          name="name"
          value={person.name}
          onChange={handleChange}
        />
      </div>
      <div>
        number:{' '}
        <input
          value={person.number}
          name="number"
          onChange={handleChange}
          type="text"
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;

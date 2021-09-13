import React, { useEffect, useState } from 'react';

const PersonFilter = ({ persons, setFilteredPersons }) => {
  const [newName, setNewName] = useState('');
  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  useEffect(() => {
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(newName.toLowerCase())
    );
    console.log(filteredPersons, 'from filter', newName, 'name');
    setFilteredPersons(filteredPersons);
  }, [newName, setFilteredPersons, persons]);
  return (
    <div>
      filter shown with{' '}
      <input
        value={newName}
        name="newName"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default PersonFilter;

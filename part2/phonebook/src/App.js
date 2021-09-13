import React, { useState } from 'react';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import PersonFilter from './components/PersonFilter';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);

  const [filteredPersons, setFilteredPersons] = useState([]);

  const addPerson = ({ name, number }) => {
    setPersons(persons.concat({ name, number, id: persons.length + 1 }));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonFilter persons={persons} setFilteredPersons={setFilteredPersons} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} />
      <h2>Numbers</h2>
      {filteredPersons.length > 0 ? (
        <Persons persons={filteredPersons} />
      ) : (
        <Persons persons={persons} />
      )}
    </div>
  );
};

export default App;

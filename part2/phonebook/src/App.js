import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import PersonFilter from './components/PersonFilter';

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setPersons(response.data);
    });
  }, []);

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

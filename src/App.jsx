import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import TaskList from './components/TaskList';
import UserForm from './UserForm';

const App = () => {
  const [users, setUsers] = useState([]);

  // Cargar usuarios desde tu MockAPI
  useEffect(() => {
    fetch('https://6840f0e4d48516d1d359cc82.mockapi.io/api/v1/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Error al cargar usuarios:', err));
  }, []);

  // Agregar usuario a través de MockAPI
  const addUser = async (newUser) => {
    try {
      const response = await fetch('https://6840f0e4d48516d1d359cc82.mockapi.io/api/v1/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        const data = await response.json();
        setUsers([...users, data]);
      } else {
        console.error('Error en la solicitud');
      }
    } catch (error) {
      console.error('Error en el servidor:', error);
    }
  };

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={
          <div>
            <h1>Lista de Usuarios</h1>
            <UserForm addUser={addUser} />
            <ul>
              {users.map((user, index) => (
                <li key={index}>{user.name} - {user.email}</li>
              ))}
            </ul>

            {/* Tareas desde otro componente */}
            <TaskList />
          </div>
        } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;



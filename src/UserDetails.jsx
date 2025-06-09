import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const UserDetails = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://URL_DE_TU_API/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error("Error al obtener usuario:", err));
  }, [id]);

  return (
    <div>
      <h1>Detalles de Usuario</h1>
      <p>ID: {user.id}</p>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      <Link to={`/delete/${user.id}`}>Eliminar</Link> | 
      <Link to={`/edit/${user.id}`}>Editar</Link> | 
      <Link to="/">Volver</Link>
    </div>
  );
};

export default UserDetails;

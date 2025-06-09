import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserEdit = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://URL_DE_TU_API/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setName(data.name);
        setEmail(data.email);
      })
      .catch(err => console.error("Error al obtener usuario:", err));
  }, [id]);

  const handleUpdate = async () => {
    try {
      const res = await fetch(`https://URL_DE_TU_API/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      });
      if (res.ok) {
        navigate(`/users/${id}`);
      } else {
        console.error('Error al actualizar usuario');
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Editar Usuario</h1>
      <label>Nombre:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <button onClick={handleUpdate}>Actualizar</button>
    </div>
  );
};

export default UserEdit;

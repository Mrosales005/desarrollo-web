import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteUser = async () => {
      try {
        const response = await fetch(`https://6840f0e4d48516d1d359cc82.mockapi.io/api/v1/users/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          navigate('/');
        } else {
          console.error('Error al eliminar el usuario');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    deleteUser();
  }, [id, navigate]);

  return <p>Eliminando usuario...</p>;
};

export default UserDelete;

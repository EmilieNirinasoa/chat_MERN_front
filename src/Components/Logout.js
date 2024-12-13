import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Supprimer les données spécifiques du localStorage
    localStorage.removeItem('userData'); // Remplacez 'userData' par la clé spécifique à supprimer

    // Rediriger vers la page de connexion
    navigate('/');
  };

  return (
  
      <IconButton
        color="error" // Couleur rouge pour indiquer une action importante
        onClick={handleLogout}
        title="Déconnexion" // Tooltip affiché au survol
        size="large" // Taille de l'icône
        style={{ fontSize: '32px' }}
      >
        <LogoutIcon />
      </IconButton>
   
  );
}

import React from 'react';
import { Container } from 'react-bootstrap';

function ProfilePage() {
  const handleLogout = () => {
    alert('User has logged out');
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1>User Profile</h1>
      <button onClick={handleLogout} className="btn btn-primary">Logout</button>
    </Container>
  );
}

export default ProfilePage;

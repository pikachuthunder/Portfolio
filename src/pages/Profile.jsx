import React from 'react';
import { Container, Image } from 'react-bootstrap';
import ProfilePic from '../assests/ProfilePic.png'; // Add your profile image
import './Profile.css'; 
function Profile() {
  return (
    <section className="profile-section text-center py-5">
      <Container>
        <Image src={ProfilePic} roundedCircle className="profile-img" />
        <h2 className="display-4 text-light mt-3">Hasna Fathima</h2>
        <h3 className="text-accent">Python Django Full-Stack Developer</h3>
      </Container>
    </section>
  );
}

export default Profile;

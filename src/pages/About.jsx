import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub  } from 'react-icons/fa';
import profile from '../assests/profile.png';

function About() {
  return (
    <section id="about" className="about bg-dark text-light py-5">
      <Container>
        <Row className="align-items-center">
          {/* Right Side - Image */}
          <Col md={3} className="text-center d-flex justify-content-center align-items-center" style={{ marginRight: '50px' }}>
            <div className="profile-image-box position-relative d-inline-block p-2 bg-gradient rounded-4 shadow-lg">
              <img src={profile} alt="Profile" className="profile-image rounded-4 border border-3" style={{ width: '350px', height: '450px' }} />
            </div>
          </Col>

          {/* Left Side - About Me */}
          <Col md={6} className="text-md-start">
            <h1 className='text-md-start'>About Me</h1>
            <p>
            I am a passionate Python Django Full Stack Developer with a strong specialization in backend development, focusing on Python and Django. With a commitment to writing clean, efficient code, I excel in problem-solving and developing robust solutions. Currently, I am expanding my skill set by pursuing advanced knowledge in Python, Django, SQL, REST APIs, React, JavaScript, and Bootstrap.
            </p>
            <p>
            I am based in Dubai with a valid residency visa and am actively looking to leverage my technical expertise in a dynamic work environment. Always eager to learn and grow, I am dedicated to delivering high-quality, scalable applications that drive success.
            </p>

            <div className="mt-3">
              <FaEnvelope size={20} className="me-2" />
              <span>hasnafathima289@gmail.com</span>
            </div>
            <div className="mt-2">
              <FaPhone size={20} className="me-2" />
              <span>+971 0564516833</span>
            </div>
            <div className="mb-2">
                <FaLinkedin size={20} className="me-2" />
                <a href="https://www.linkedin.com/in/hasna-fathima/" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  LinkedIn
                </a>
              </div>
              <div>
                <FaGithub size={20} className="me-2" />
                <a href="https://github.com/pikachuthunder" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  GitHub
                </a>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;

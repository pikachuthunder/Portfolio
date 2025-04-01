import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Ekart from '../assests/Ekart.png';
import garage from '../assests/garage.png';
import todo from '../assests/todo.png';
import vivah from '../assests/vivah.png';


function Projects() {
  const projects = [
    { title: 'Ekart E-Commerce App', img: Ekart, description: 'Designed and developed a user-friendly e-commerce platform using Django, HTML, CSS, and Bootstrap. Users can browse items, manage orders, and place purchases effortlessly.' },
    { title: 'Garage App', img: garage, description: 'Developed a garage management system using Django, React, REST API, and Bootstrap for seamless service booking and tracking.' },
    { title: 'Todo Application', img: todo, description: 'A simple and intuitive task management application built with Django, React, and REST API, helping users organize their daily activities efficiently.' },
    { title: 'Vivah Wedding Planning App', img: vivah, description: 'A wedding planning platform built with Django, HTML, CSS, and Bootstrap. It allows users to browse venues, manage guest lists, and connect with vendors.' }
  ];

  return (
    <section id="projects" className="projects py-5">
      <Container>
        <h2 className="text-center mb-4 text-neon">My Projects</h2>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col md={6} lg={6} key={index} className="mb-4">
              <Card className="project-card h-100 shadow-lg">
                <div className="card-image-wrapper">
                  <Card.Img variant="top" src={project.img} className="card-img-custom" />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-neon text-center">{project.title}</Card.Title>
                  <Card.Text className="flex-grow-1 text-muted">{project.description}</Card.Text>
                  <Button variant="outline-light" className="mt-auto neon-button">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
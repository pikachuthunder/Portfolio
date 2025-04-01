import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function ExperienceEducation() {
  return (
    <section id="experience-education" className="py-5" style={{ background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', color: 'white' }}>
      <Container>
        <h2 className="text-center mb-4" style={{ color: '#0ef' }}>Experience, Education & Certifications</h2>
        <Row>
          <Col md={6}>
            <Card className="p-3 shadow-lg h-100" style={{ backgroundColor: '#1b2838', border: '1px solid #0ef', color: 'white' }}>
              <Card.Body>
                <h3 className="text-center" style={{ color: '#0ef' }}>Experience</h3>
                <Card.Title>Python Developer Intern</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Luminar Technolab | 6 Months</Card.Subtitle>
                <Card.Text>
                  - Developed backend solutions using Django.<br/>
                  - Integrated REST APIs and database optimizations.<br/>
                </Card.Text>
                <Card.Title>Data Analyst Intern</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Excelerate Talent Management</Card.Subtitle>
                <Card.Text>
                  - Worked as a project manager who is efficient in managing the team.<br/>
                  - Worked on Google Data Studio to create data analysis.<br/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={6}>
            <Card className="p-3 shadow-lg h-100 d-flex flex-column" style={{ backgroundColor: '#1b2838', border: '1px solid #0ef', color: 'white' }}>
              <Card.Body className="d-flex flex-column">
                <h3 className="text-center" style={{ color: '#0ef' }}>Education</h3>
                <Card.Title>B.Tech in IT</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">APJ Abdul Kalam University</Card.Subtitle>
                <hr style={{ borderColor: '#0ef' }}/>
                <Card.Title>B.A. Hindi</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Dakshin Bharat Hindi Prachar Sabha</Card.Subtitle>
              </Card.Body>
              <Card.Body className="d-flex flex-column">
                <h3 className="text-center" style={{ color: '#0ef' }}>Certifications</h3>
                <Card.Text>
                  ✅ AZ-204 DevOps Training <br/>
                  ✅ AI & ML Certification <br/>
                  ✅ Technical Quiz Coordinator (Teranis) <br/>
                  ✅ Media Lead (Tinkerhub Community)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}



export { ExperienceEducation};

import React from 'react';
import { Container, Row, Col, Badge, Card } from "react-bootstrap";
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiFastapi, SiTensorflow, SiPytorch } from "react-icons/si";

function Skills() {
    const skills = [
        { name: "Python", icon: <FaPython size={30} color="#3776AB" /> },
        { name: "Django", icon: <SiDjango size={30} color="#092E20" /> },
        { name: "React", icon: <FaReact size={30} color="#61DAFB" /> },
        { name: "REST API", icon: <SiFastapi size={30} color="#009688" /> },
        { name: "HTML", icon: <FaHtml5 size={30} color="#E34F26" /> },
        { name: "CSS", icon: <FaCss3Alt size={30} color="#1572B6" /> },
        { name: "Bootstrap", icon: <FaBootstrap size={30} color="#7952B3" /> },
        { name: "AI/ML", icon: <SiTensorflow size={30} color="#FF6F00" /> },
        { name: "Deep Learning", icon: <SiPytorch size={30} color="#EE4C2C" /> },
    ];

    return (
        <section id="skills" className="py-5" style={{ color: 'white' }}>
            <Container>
                <h2 className="text-center mb-4" >Technical Skills</h2>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Card className="p-3 shadow-lg" style={{ backgroundColor: '#1b2838', border: '1px solid #0ef' }}>
                            <Row className="text-center">
                                {skills.map((skill, index) => (
                                    <Col xs={6} md={4} className="mb-3" key={index}>
                                        <div className="d-flex flex-column align-items-center">
                                            {skill.icon}
                                            <Badge bg="dark" className="mt-2" style={{ border: '1px solid #0ef', color: '#0ef', padding: '8px' }}>{skill.name}</Badge>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;
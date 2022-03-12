import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { AppBar } from './../../components/appbar';
import LoginBanner from './../../assets/images/login-banner.png';

function LoginPage(props) {
    let navigation = useNavigate();

    // JS
    function onHandleSubmit(e) {
        e.preventDefault();
        // check the inputs email and password
        // firebase auth signInWithEmailAndPassword
        // true -> Dashboard
        // false -> resubmit
        navigation('/dashboard');
    }
    return (
        <>
            <AppBar />

            <Container>
                <Row className="mt-5">
                    <Col className="bg-dark text-light p-4">
                        <h1 className="fs-1">Welcome to Best Bud,</h1>
                        <p className="fs-3 mb-3">Please Login Bud</p>
                        <img alt="" src={LoginBanner} />
                    </Col>
                    <Col className="bg-light py-5">
                        <Form onSubmit={onHandleSubmit}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    id="email"
                                    type="email"
                                    placeholder="Email@example.com"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    required
                                />
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default LoginPage;

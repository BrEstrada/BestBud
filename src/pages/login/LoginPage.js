import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './../../libs/firebase';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { AppBar } from './../../components/appbar';
import LoginBanner from './../../assets/images/login-banner.png';

function LoginPage(props) {
    let navigation = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // JS
    function onHandleSubmit(e) {
        e.preventDefault();
        // check the inputs email and password
        // firebase auth signInWithEmailAndPassword
        // true -> Dashboard
        // false -> resubmit
        // navigation('/dashboard');
        console.log(email, password);
    }
    return (
        <>
            <AppBar />

            <Container>
                <Row className="mt-5">
                    <Col className="bg-dark text-light p-4">
                        <h1 className="fs-1">Welcome to Best Bud,</h1>
                        <p className="fs-3 mb-3">Please Login Bud</p>
                        <img alt="Login Banner" src={LoginBanner} />
                    </Col>
                    <Col className="bg-light py-5">
                        <Form onSubmit={onHandleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    id="email"
                                    type="email"
                                    placeholder="Email@example.com"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    required
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
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

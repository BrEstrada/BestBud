import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiError } from 'react-icons/bi';

import { LoginPageStyles } from './styles';
import { auth } from 'libs/firebase';
import LoginBanner from 'assets/images/login-banner.png';

function LoginPage(props) {
    const navigator = useNavigate();

    // State declarations
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const notify = (error) =>
        toast.error(error.code, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            icon: <BiError />,
        });

    function onHandleSubmit(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // move to dashboard page
                // useNavigate() react router
                navigator('dashboard');
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
                notify(error);
            });
    }
    return (
        <>
            <LoginPageStyles>
                <Container>
                    <Row className="mt-5">
                        <ToastContainer />
                        <Col className="bg-dark text-light p-4">
                            <h1 className="fs-1">Welcome to Best Bud,</h1>
                            <p className="fs-3 mb-3">Please Login Bud!</p>
                            <img alt="Login Banner" src={LoginBanner} />
                        </Col>
                        <Col sm="4" lg="5" className="bg-light py-5">
                            <Form onSubmit={onHandleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        id="email"
                                        type="text"
                                        placeholder="Email@example.com"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        id="password"
                                        type="text"
                                        placeholder="Password"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Button variant="success" type="submit">
                                    Login
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </LoginPageStyles>
        </>
    );
}

export default LoginPage;

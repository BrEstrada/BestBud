import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'libs/firebase';

import { Container, Row, Button } from 'react-bootstrap';
import LoginBanner from './../../assets/images/login-banner.png';

function PageNotFound(props) {
    const [isUser, setIsUser] = useState(false);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsUser(true);
        } else {
            setIsUser(false);
        }
    });

    return (
        <>
            <Container>
                <Row className="bg-dark text-light py-5 my-5 text-center">
                    <h1 className="fs-1">Uh Oh Sorry Bud, Page Not Found!</h1>
                    <h2 className="fs-2">That's a 404.</h2>
                    <img alt="404 banner" src={LoginBanner} />
                    {isUser ? (
                        <Link to="dashboard">
                            <Button variant="success">Back to Safety</Button>
                        </Link>
                    ) : (
                        <Link to="/">
                            <Button variant="success">Back to Safety</Button>
                        </Link>
                    )}
                </Row>
            </Container>
        </>
    );
}

export default PageNotFound;

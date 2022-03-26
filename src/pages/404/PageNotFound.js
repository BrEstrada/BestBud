import React from 'react';

import { AppBar } from './../../components/appbar';

import { Container, Row } from 'react-bootstrap';
import LoginBanner from './../../assets/images/login-banner.png';

function PageNotFound(props) {
    return (
        <>
            <AppBar />

            <Container>
                <Row className="bg-dark text-light py-5 my-5 text-center">
                    <h1 className="fs-1">Uh Oh Sorry Bud, Page Not Found!</h1>
                    <h2 className="fs-2">That's a 404.</h2>
                    <img alt="404 banner" src={LoginBanner} />
                </Row>
            </Container>
        </>
    );
}

export default PageNotFound;

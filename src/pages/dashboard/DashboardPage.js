import React, { useState } from 'react';
import { AppBar } from './../../components/appbar';
import { Outlet, useNavigate } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'libs/firebase';

import { Container, Row, Col } from 'react-bootstrap';
import { SideBar } from '../../components/sidebar';
import { DashboardPageStyles } from './styles';

function DashboardPage(props) {
    const [isUser, setIsUser] = useState(false);
    const navigator = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsUser(true);
        } else {
            setIsUser(false);
            // login page
            navigator('/');
        }
    });

    if (isUser) {
        return (
            <>
                <AppBar />

                <Container fluid>
                    <Row>
                        <Col lg="3" md="3">
                            <DashboardPageStyles>
                                <SideBar />
                            </DashboardPageStyles>
                        </Col>
                        <Col>
                            <Outlet />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    } else {
        return null;
    }
}

export default DashboardPage;

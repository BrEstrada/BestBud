import React from 'react';
import { AppBar } from './../../components/appbar';
import { Panels } from '../../components/panels';

import { Container, Row, Col } from 'react-bootstrap';
import { SideBar } from '../../components/sidebar';

function DashboardPage(props) {
    return (
        <>
            <AppBar />

            <Container fluid>
                <Row>
                    <Col md={2}>
                        <SideBar />
                    </Col>
                    <Col>
                        <Panels />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default DashboardPage;

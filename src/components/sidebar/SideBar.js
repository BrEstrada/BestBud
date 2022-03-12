import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {
    IoBagOutline,
    IoGridOutline,
    IoPeopleOutline,
    IoQrCodeOutline,
    IoReaderOutline,
    IoCodeOutline,
    IoExitOutline,
} from 'react-icons/io5';

function SideBar(props) {
    return (
        <>
            <ListGroup>
                <ListGroup.Item className="nav-item">
                    <Link className="nav-link link-danger" to="/">
                        <IoExitOutline /> Sign Out
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                        <IoGridOutline /> Products
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item className="nav-item">
                    <Link className="nav-link" to="">
                        <IoBagOutline /> Orders
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item className="nav-item">
                    <Link className="nav-link" to="">
                        <IoPeopleOutline /> Users
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item className="nav-item">
                    <Link className="nav-link" to="">
                        <IoQrCodeOutline /> Authentication
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item className="nav-item">
                    <Link className="nav-link" to="">
                        <IoReaderOutline /> Vendors
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item className="nav-item">
                    <Link className="nav-link" to="">
                        <IoCodeOutline /> Other Pages
                    </Link>
                </ListGroup.Item>
            </ListGroup>
        </>
    );
}

export default SideBar;

import React from 'react';
import styled from 'styled-components';

import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {
    IoBagOutline,
    IoGridOutline,
    IoPeopleOutline,
    IoQrCodeOutline,
    IoReaderOutline,
    IoCodeOutline,
    IoAdd,
    IoPencil,
} from 'react-icons/io5';

const ProductOptionStyles = styled.div``;

function ProductOptions(props) {
    return (
        <ProductOptionStyles>
            <ListGroup.Item className="nav-item">
                <Link className="nav-link" to="/dashboard">
                    <IoGridOutline /> View All Products
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="nav-item">
                <Link className="nav-link" to="add">
                    <IoAdd /> Add Products
                </Link>
            </ListGroup.Item>
            <ListGroup.Item className="nav-item">
                <Link className="nav-link" to="edit">
                    <IoPencil /> Edit Products
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
        </ProductOptionStyles>
    );
}

export default ProductOptions;

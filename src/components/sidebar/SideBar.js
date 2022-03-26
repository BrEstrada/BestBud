import React from 'react';

import { signOut } from 'firebase/auth';
import { auth } from 'libs/firebase';
import { ListGroup, Button } from 'react-bootstrap';
import { SidebarStyles } from './styles';

import { IoExitOutline } from 'react-icons/io5';
import ProductOptions from './ProductOptions';

function SideBar(props) {
    function onLogoutRequest(e) {
        signOut(auth);
    }

    return (
        <>
            <SidebarStyles>
                <ListGroup>
                    <ListGroup.Item>
                        <Button
                            variant="outline-danger"
                            onClick={onLogoutRequest}
                        >
                            <IoExitOutline /> Sign Out
                        </Button>
                    </ListGroup.Item>
                    <ProductOptions />
                </ListGroup>
            </SidebarStyles>
        </>
    );
}

export default SideBar;

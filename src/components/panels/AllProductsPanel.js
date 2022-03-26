import React from 'react';

import { PanelStyles, PanelBody, PanelHeader } from './styles';
import { Row } from 'react-bootstrap';

function AllProductsPanel({ title, ...props }) {
    return (
        <>
            <PanelStyles>
                <PanelHeader>
                    <h2 className="fs-2">{title || 'Display Panel'}</h2>
                </PanelHeader>
                <PanelBody>
                    <div className="album">
                        <div className="container">
                            <Row></Row>
                        </div>
                    </div>
                </PanelBody>
            </PanelStyles>
        </>
    );
}

export default AllProductsPanel;

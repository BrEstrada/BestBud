import React from 'react';

import { PanelStyles, PanelBody, PanelHeader } from './styles';
import { Row } from 'react-bootstrap';
import { ProductCard } from 'components/products';

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
                            <Row>
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                            </Row>
                        </div>
                    </div>
                </PanelBody>
            </PanelStyles>
        </>
    );
}

export default AllProductsPanel;

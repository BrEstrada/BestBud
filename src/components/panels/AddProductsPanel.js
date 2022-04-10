import React from 'react';

import { PanelStyles, PanelBody, PanelHeader } from './styles';

import { AddProduct } from 'components/widgets/AddProduct';

function AddProductsPanel({ title, ...props }) {
    return (
        <>
            <PanelStyles>
                <PanelHeader>
                    <h2 className="fs-2">{title || 'Display Panel'}</h2>
                </PanelHeader>
                <PanelBody>
                    <AddProduct />
                </PanelBody>
            </PanelStyles>
        </>
    );
}

export default AddProductsPanel;

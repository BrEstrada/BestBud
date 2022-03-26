import React from 'react';

import { PanelStyles, PanelBody, PanelHeader } from './styles';

function EditProductsPanel({ title, ...props }) {
    return (
        <>
            <PanelStyles>
                <PanelHeader>
                    <h2 className="fs-2">{title || 'Display Panel'}</h2>
                </PanelHeader>
                <PanelBody></PanelBody>
            </PanelStyles>
        </>
    );
}

export default EditProductsPanel;

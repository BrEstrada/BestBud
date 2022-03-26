import React from 'react';
import ProductCardPlaceholder from './../../assets/images/ProductCardImage.png';

function ProductCard(props) {
    return (
        <>
            <div className="col-md-4">
                <div className="card mb-3">
                    <img src={ProductCardPlaceholder} alt="" />
                    <div className="card-body">
                        <h3 className="fs-3">$29.99</h3>
                        <p className="card-text">
                            Example Card Description Text.
                        </p>
                        <p className="card-text text-muted">
                            Indica/Sativa/Hybrid
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;

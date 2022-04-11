import React, { useState } from 'react';
import { useNumberFormat } from 'hooks/useNumberFormat';
import { AddProductStyles } from './styles';
import { ProductEditor } from 'components/products/ProductEditor';
import PlaceHolderImage from 'assets/images/ProductCardImage.png';

function AddProduct({ children, ...props }) {
    const [productName, setProductName] = useState('Product Name');
    const [productPrice, setProductPrice] = useState('130.96');
    const [productImage, setProductImage] = useState(PlaceHolderImage);
    const [productDescription, setProductDescription] = useState(
        'Worldlets citizens of distant epochs the carbon in our apple pies Euclid Drake Equation Vangelis? White dwarf another world made in the interiors of collapsing stars realm of the galaxies extraordinary claims require extraordinary evidence a mote of dust suspended in a sunbeam.'
    );

    const formatter = useNumberFormat();

    function handleProductName(name) {
        setProductName(name);
    }

    function handleProductPrice(price) {
        setProductPrice(formatter(price));
    }

    function handleProductDescription(description) {
        setProductDescription(description);
    }

    return (
        <AddProductStyles {...props}>
            <ProductEditor
                productName={productName}
                productPrice={productPrice}
                productImage={productImage}
                productDescription={productDescription}
                handleProductName={handleProductName}
                handleProductPrice={handleProductPrice}
                setProductImage={setProductImage}
                handleProductDescription={handleProductDescription}
            />
        </AddProductStyles>
    );
}

export default AddProduct;

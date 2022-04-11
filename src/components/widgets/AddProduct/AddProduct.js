import React, { useState } from 'react';
import { useNumberFormat } from 'hooks/useNumberFormat';
import { AddProductStyles } from './styles';
import { ProductEditor } from 'components/products/ProductEditor';
import PlaceHolderImage from 'assets/images/ProductCardImage.png';
import { useAddNewProduct } from 'hooks/useAddNewProduct';

function AddProduct({ children, ...props }) {
    const [isWriting, setIsWriting] = useState(false);
    const [productName, setProductName] = useState('Product Name');
    const [productPrice, setProductPrice] = useState('130.96');
    const [productImage, setProductImage] = useState({
        previewImage: PlaceHolderImage,
        file: null,
    });
    const [productDescription, setProductDescription] = useState(
        'Worldlets citizens of distant epochs the carbon in our apple pies Euclid Drake Equation Vangelis? White dwarf another world made in the interiors of collapsing stars realm of the galaxies extraordinary claims require extraordinary evidence a mote of dust suspended in a sunbeam.'
    );
    const [loading, productLoader] = useAddNewProduct();

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

    function handleSubmit(e) {
        e.preventDefault();
        const productData = {
            productName,
            productPrice,
            productDescription,
        };
        setIsWriting(true);
        productLoader(productData, productImage.file);
    }

    if (isWriting) {
        return <h1>Editor Feedback Component</h1>;
    } else {
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
                    handleSubmit={handleSubmit}
                />
            </AddProductStyles>
        );
    }
}

export default AddProduct;

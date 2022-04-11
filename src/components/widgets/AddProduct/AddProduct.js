import React, { useState } from 'react';
import { useNumberFormat } from 'hooks/useNumberFormat';
import { AddProductStyles } from './styles';
import { ProductEditor } from 'components/products/ProductEditor';
import PlaceHolderImage from 'assets/images/ProductCardImage.png';
import { useAddNewProduct } from 'hooks/useAddNewProduct';
import { EditorFeedback } from 'components/products/EditorFeedback';

const defaults = {
    description:
        'Worldlets citizens of distant epochs the carbon in our apple pies Euclid Drake Equation Vangelis? White dwarf another world made in the interiors of collapsing stars realm of the galaxies extraordinary claims require extraordinary evidence a mote of dust suspended in a sunbeam.',
    name: 'Product Name',
    price: 230.96,
};

function AddProduct({ children, ...props }) {
    const [isWriting, setIsWriting] = useState(false);
    const [productName, setProductName] = useState(defaults.name);
    const [productPrice, setProductPrice] = useState(defaults.price);
    const [productImage, setProductImage] = useState({
        previewImage: PlaceHolderImage,
        file: null,
    });
    const [productDescription, setProductDescription] = useState(
        defaults.description
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

        setProductDescription(defaults.description);
        setProductImage({ previewImage: PlaceHolderImage, file: null });
        setProductName(defaults.name);
        setProductPrice(defaults.price);
    }

    if (isWriting) {
        return (
            <EditorFeedback status={loading} writeCompleted={setIsWriting} />
        );
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

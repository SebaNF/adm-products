import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductFormFormik from '../components/ProductFormFormik';
import {simplePost} from '../services/simplePost';

const CreateProduct = () => {

    const product = {
        title: "",
        price: "",
        description: ""
    }
    const navigate = useNavigate();

    const createProduct = async(values) =>{
        const newProduct = await simplePost("http://localhost:8080/api/product/new", values);
        navigate('/');
        console.log ("nuevo producto", newProduct);
    }

    return (
        <div>
            <ProductFormFormik product={product} onSubmitProp={createProduct}/>
        </div>
    );
}

export default CreateProduct;

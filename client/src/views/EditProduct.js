import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductFormFormik from '../components/ProductFormFormik';
import { simpleGet } from '../services/simpleGet';
import { simplePut } from '../services/simplePut';

const EditProduct = () => {

    const {id} = useParams()
    const [product, setProduct] = useState();
    const navigate = useNavigate();


    const getProduct = async() =>{
        try{
            const response = await simpleGet('http://localhost:8080/api/product/'+id);
            console.log (response.data.Product);
            setProduct(response.data.Product);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getProduct();
    }, []);

    const editProduct = async(values) =>{
        try{
            const response = await simplePut('http://localhost:8080/api/product/edit/'+id, values)
            navigate('/');
            console.log(response.data)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <h2>Editar Producto</h2>
            {product && 
            <ProductFormFormik product={product} onSubmitProp={editProduct}/>
            }
        </div>
    );
}

export default EditProduct;

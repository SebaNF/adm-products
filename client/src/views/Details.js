import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { simpleGet } from '../services/simpleGet';
import DeleteButton from '../components/DeleteButton';

const Details = () => {

    const {id} = useParams();
    

    const [product, setProduct] = useState();

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

    return (
        <div>
            <h2>Detalles del producto</h2>

            {product &&  
            <div>
                <p>{product.title}</p>
                <p>Precio: ${product.price}</p>
                <p>{product.description}</p>
                <p>ID: {product._id}</p>
                <DeleteButton id={product._id}/>
            </div>
            }    
        </div>
    );
}

export default Details;

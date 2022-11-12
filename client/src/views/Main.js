import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { simpleGet } from '../services/simpleGet';
import DeleteButton from '../components/DeleteButton';

const Main = () => {

    const [products, setProducts] = useState();

    const getProducts = async() =>{
        try{
            const response = await simpleGet('http://localhost:8080/api/product');
            console.log(response.data.products);
            setProducts(response.data.products)
        }catch(err){
            console.log(err)
        }
    }

    const removeFromDom = (id) =>{
        setProducts(products.filter(product=> product._id !== id));
    }

    useEffect(() => {
        getProducts();
    }, []);


    return (
        <div>
            <h2>Productos</h2>
            <ul className='lista'>
                {products?.map((product)=> <li key={product._id}><Link to={`/${product._id}`}>{product.title}</Link><Link to={`/edit/${product._id}`}><button>Edit</button></Link><DeleteButton id={product._id} removeProp={()=>removeFromDom(product._id)}/></li>)}
            </ul>
        </div>
    );
}

export default Main;

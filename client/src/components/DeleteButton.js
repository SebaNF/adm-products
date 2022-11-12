import React from 'react';
import { useNavigate } from 'react-router-dom';
import { simpleDelete } from '../services/simpleDelete';

const DeleteButton = (props) => {

    const {id, removeProp} = props;
    const navigate = useNavigate();

    const deleteProduct = async(id) =>{
        try{
            const response = await simpleDelete('http://localhost:8080/api/product/delete/'+id);
            console.log(response);
            navigate('/');
            removeProp();
            
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div>
            <button onClick={()=>deleteProduct(id)}>Delete</button>
        </div>
    );
}

export default DeleteButton;

import React from 'react';
import {Formik, Field, Form} from "formik";
import * as Yup from "yup";

const ProductFormFormik = (props) => {

    const {product, onSubmitProp} = props;


    return (
        <div>
            <Formik
                initialValues={{
                    title: product.title,
                    price: product.price,
                    description: product.description
                }}
            validationSchema={
                Yup.object().shape({
                    title: Yup
                        .string()
                        .min(3, "el titulo es muy corto")
                        .required("debe ingresar un titulo"),
                    price: Yup
                        .number()
                        .min(1, "precio debe ser mayor a 1")
                        .required("debe ingresar un precio"),
                    description: Yup
                        .string()
                        .min(3, "descripcion debe tener al menos 3 caracteres") 
                        .required("debe agregar una descripcion")       
                })
            }
            
            onSubmit={(values,{setSubmitting})=>{
                onSubmitProp(values);
            }}
            >
            {({errors, touched, handleSubmit})=>{
                return(
                    <div className=''>
                        <h1>Product Manager</h1>
                        <Form>
                            <div className='form-group'>
                                <label htmlFor='title'>Title</label>
                                <Field type="text" name="title" className="form-control" ></Field>
                                {errors.title && touched.title && <p className=''> {errors.title} </p>}
                            </div>
                            <div className=''>
                                <label htmlFor='price'>Price</label>
                                <Field type="number" name="price" className="form-control" ></Field>
                                {errors.price && touched.price && <p className=''> {errors.price} </p>}
                            </div>
                            <div className=''>
                            <label htmlFor='description'>Description</label>
                            <Field type="text" name="description" className="form-control" ></Field>
                            {errors.description && touched.description && <p className=''> {errors.description} </p>}
                            </div>
                            <button id='formik-button' type='submit'>Enviar</button>
                        </Form>
                        
                    </div>
                )
            }}
            </Formik>
        </div>
    );
}

export default ProductFormFormik;

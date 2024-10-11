'use client'

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import colombia from "../colombia.json";

export default function Form() {
    const getInitialValues = () => ({
        name: undefined,
        lastname: undefined,
        document: undefined,
        department: undefined,
        city: undefined,
        cellphone: undefined,
        email: undefined, 
        accept: false 
    });

    const getValidationSchema = () => {
        return Yup.lazy(() =>
              
            Yup.object().shape({
                name: Yup.string().required("Campo Obligatorio"),
                lastname: Yup.string().required("Campo Obligatorio"),
                document: Yup.number().required("Campo Obligatorio"),
                department: Yup.string().required("Campo Obligatorio"),
                city: Yup.string().required("Campo Obligatorio"),
                cellphone: Yup.number()
                .required("Campo Obligatorio")
                .test('valid-length', 'El número debe tener 10 dígitos', (value) => {
                    let char = value ? value.toString() : '';
                    return value ? char.length === 10 : false; 
                  }),
                email: Yup.string().email("Debes ingresar un email valido").required("Campo Obligatorio"),
                accept: Yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones'),   
             })
      
         );
         
      
    }

    return (
        <Formik
        validateOnBlur = {true}

        initialValues = {getInitialValues()}

        validationSchema = {getValidationSchema()}

        onSubmit = {(values, errors) => {
          alert(JSON.stringify(values, null, 2));
        }}
        >
        {({ handleSubmit, handleChange, values, errors, touched, handleBlur, setFieldValue }) => (
        <form onSubmit={handleSubmit} className='border text-sm rounded-2xl p-5 max-w-sm m-auto'>
            <div className='flex flex-col mb-4'>
                <label htmlFor="name" className='block text-sm font-medium leading-6 text-gray-900 mb-1.5'>Nombre</label>
                <input
                    id="name"
                    className='block flex-1 border rounded bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6'
                    placeholder='Ingrese su nombre'
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={values.name}
                    onBlur={(e) => {
                        handleBlur(e);
                    }}
                    required
                />
                {errors.name && touched.name ? (
                    <div className='mt-2 text-red-600'>{errors.name}</div>
                ) : null}
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor="lastname" className='block text-sm font-medium leading-6 text-gray-900 mb-1.5'>Apellido</label>
                <input
                    id="lastname"
                    className='block flex-1 border rounded bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6'
                    placeholder='Ingrese su apellido'
                    name="lastname"
                    type="text"
                    onChange={handleChange}
                    value={values.lastname}
                    onBlur={(e) => {
                        handleBlur(e);
                    }}
                    required
                />
                {errors.lastname && touched.lastname ? (
                    <div className='mt-2 text-red-600'>{errors.lastname}</div>
                ) : null}
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor="document" className='block text-sm font-medium leading-6 text-gray-900 mb-1.5'>Cédula</label>
                <input
                    id="document"
                    className='block flex-1 border rounded bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6'
                    placeholder='Ingrese su numero de documento'
                    name="document"
                    type="number"
                    onChange={handleChange}
                    value={values.document}
                    onBlur={(e) => {
                        handleBlur(e);
                    }}
                    onWheel={(e) => e.target.blur()}
                    required
                    
                />
                {errors.document && touched.document ? (
                    <div className='mt-2 text-red-600'>{errors.document}</div>
                ) : null}
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor="department" className='block text-sm font-medium leading-6 text-gray-900 mb-1.5'>Departamento</label>
                <select 
                    id="department" 
                    className='block flex-1 border rounded bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6'
                    onChange={(e) => {
                        const selectedDept = e.target.value;
                        setFieldValue('department', selectedDept);
                        setFieldValue('city', '');
                    }}
                    onBlur={(e) => {
                        handleBlur(e);
                    }}
                >
                    <option value="">Seleccione un departamento</option>
                    {colombia.map((d) => (
                    <option key={d.departamento} value={d.departamento}>
                        {d.departamento}
                    </option>
                    ))}
                </select>
                {errors.department && touched.department ? (
                    <div className='mt-2 text-red-600'>{errors.department}</div>
                ) : null}
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor="city" className='block text-sm font-medium leading-6 text-gray-900 mb-1.5'>Ciudad</label>
                <select 
                    disabled={!values.department} 
                    id="city" 
                    className='block flex-1 border rounded bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6' 
                    onChange={handleChange}
                    onBlur={(e) => {
                        handleBlur(e);
                    }}
                >
                    <option value="">Seleccione una ciudad/municipio</option>
                    {colombia
                    .find((d) => d.departamento === values.department)?.ciudades.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                    ))}
                </select>
                {errors.city && touched.city ? (
                    <div className='mt-2 text-red-600'>{errors.city}</div>
                ) : null}
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor="cellphone" className='block text-sm font-medium leading-6 text-gray-900 mb-1.5'>Celular</label>
                <input
                    id="cellphone"
                    className='block flex-1 border rounded bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6'
                    placeholder='Ingrese su numero de teléfono'
                    name="cellphone"
                    type="number"
                    onChange={handleChange}
                    value={values.cellphone}
                    onBlur={(e) => {
                        handleBlur(e);
                    }}
                    onWheel={(e) => e.target.blur()}
                    required   
                />
                {errors.cellphone && touched.cellphone ? (
                    <div className='mt-2 text-red-600'>{errors.cellphone}</div>
                ) : null}
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor="email" className='block text-sm font-medium leading-6 text-gray-900 mb-1.5'>Correo electrónico</label>
                <input
                    id="email"
                    className='block flex-1 border rounded bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6'
                    placeholder='Ingrese su email'
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={(e) => {
                        handleBlur(e);
                    }}
                    required
                />
                {errors.email && touched.email ? (
                    <div className='mt-2 text-red-600'>{errors.email}</div>
                ) : null}
            </div>
            <div className='flex mb-4'>
                <input
                    id="accept"
                    type='checkbox'
                    className='mr-3'
                    onChange={handleChange}
                    checked={values.accept}
                    
                    
                />
                <p>Autorizo el tratamiento de mis datos de acuerdo con la finalidad establecida en la <span className='text-[#2062e7] cursor-pointer underline'>política de protección de datos personales</span></p>
            </div>
            {errors.accept && touched.accept ? (
                <div className='mt-2 text-red-600'>{errors.accept}</div>
            ) : null}
            <button type="submit" className='py-2.5 px-5 rounded bg-[#9A7600] text-white my-3'>Enviar</button>
        </form>
        )}
        </Formik>
    );
};
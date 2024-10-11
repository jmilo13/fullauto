'use client'

import React from 'react';
import { Formik } from 'formik';
import colombia from "../colombia.json";

export default function Form() {
    const initialValues = { email: "", password: "" };
  return (
    <>
    <Formik
    initialValues={initialValues}
    onSubmit={(values) => console.log(values)}
>
    {({ handleSubmit, handleChange, handleBlur, values }) => (
        <form onSubmit={handleSubmit} className='border text-sm rounded-2xl p-5 max-w-sm m-auto'>
            <div className='flex flex-col mb-4'>
                <label htmlFor="name" className='block text-sm font-medium leading-6 text-gray-900 mb-1.5'>Nombre</label>
                <input
                    id="name"
                    className='block flex-1 border rounded bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6'
                    placeholder='Ingrese su nombre'
                    name="name"
                    type="text"
                    required
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor="lastname" className='block text-sm font-medium leading-6 text-gray-900 mb-1.5'>Apellido</label>
                <input
                    id="lastname"
                    className='block flex-1 border rounded bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6'
                    placeholder='Ingrese su apellido'
                    name="lastname"
                    type="text"
                    required
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor="document" className='block text-sm font-medium leading-6 text-gray-900 mb-1.5'>Cédula</label>
                <input
                    id="document"
                    className='block flex-1 border rounded bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6'
                    placeholder='Ingrese su numero de documento'
                    name="document"
                    type="number"
                    required
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor="departamento">Departamento</label>
                <select id="departamento" className='block flex-1 border rounded bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6'>
                    <option value="">Seleccione un departamento</option>
                    {colombia.map((d) => (
                    <option key={d.departamento} value={d.departamento}>
                        {d.departamento}
                    </option>
                    ))}
                </select>
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor="departamento">Ciudad</label>
                <select id="departamento" className='block flex-1 border rounded bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6'>
                    <option value="">Seleccione una ciudad/municipio</option>
                    {colombia.map((d) => (
                    <option key={d.departamento} value={d.departamento}>
                        {d.departamento}
                    </option>
                    ))}
                </select>
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor="cellphone" className='block text-sm font-medium leading-6 text-gray-900 mb-1.5'>Cédula</label>
                <input
                    id="cellphone"
                    className='block flex-1 border rounded bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6'
                    placeholder='Ingrese su numero de teléfono'
                    name="cellphone"
                    type="number"
                    required
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor="email" className='block text-sm font-medium leading-6 text-gray-900 mb-1.5'>Correo electrónico</label>
                <input
                    id="email"
                    className='block flex-1 border rounded bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-1 sm:text-sm sm:leading-6'
                    placeholder='Ingrese su email'
                    name="email"
                    type="email"
                    required
                />
            </div>
            <div className='flex mb-4'>
                <input
                    id="accept"
                    type='checkbox'
                    className='mr-3'
                />
                <p>Autorizo el tratamiento de mis datos de acuerdo con la finalidad establecida en la <span className='text-[#2062e7] cursor-pointer underline'>política de protección de datos personales</span></p>
            </div>
            <button type="submit" className='py-2.5 px-5 rounded bg-[#9A7600] text-white my-3'>Enviar</button>
        </form>
    )}
</Formik>
</>
  );
};
'use client';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

const ContactForm = () => {
  const initialValues: ContactData = {
    firstName: '',
    secondName: '',
    mail: '',
    company: '',
    country: '',
    phone: '',
    category: '',
    message: '',
  };
  const { register, handleSubmit } = useForm({
    defaultValues: initialValues,
  });

  type ContactData = {
    firstName: string;
    secondName: string;
    mail: string;
    company: string;
    country: string;
    phone: string;
    category: string;
    message: string;
  };
  const onSubmit = (data: ContactData) => {
    console.log(data);
    fetch('http://localhost:3000/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to send message');
        return res.json();
      })
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div className="w-full flex flex-col justify- items-center text-center m-4 ">
        <h2 className="text-4xl font-bold">Contactate con nosotros!</h2>
        <p className="text-2xl tracking-wide">
          Nos interesa saber sobre tu proyecto!
        </p>
      </div>
      <form className="flex flex-col form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row-doble">
          <input {...register('firstName')} placeholder="Nombre" />
          <input {...register('secondName')} placeholder="Apellido" />
        </div>
        <div className="row-doble">
          <input {...register('mail')} placeholder="Email" />
          <input {...register('company')} placeholder="Compañia" />
        </div>
        <div className="row-doble">
          <input {...register('country')} placeholder="País" />
          <input {...register('phone')} placeholder="Teléfono" />
        </div>
        <select {...register('category')}>
          <option value="">Como nos conociste?</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>
        <textarea
          className="h-[20vh] p-4"
          {...register('message')}
          placeholder="Tu mensaje"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;

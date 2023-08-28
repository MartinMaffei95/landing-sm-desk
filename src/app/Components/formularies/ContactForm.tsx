'use client';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { ContactData } from '@/interfaces';
import { FaSpinner } from 'react-icons/fa';
import { sendEmail } from '@/app/services/send-email';
import { useSnackbar } from 'notistack';
import { zodResolver } from '@hookform/resolvers/zod';
import { validateContactRequest } from '@/app/api/validations/mail.validate';
import ErrorComponent from '@/app/Components/ErrorComponents/ErrorsComponent';
const ContactForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState<boolean>(false);
  const toggleLoading = (state: boolean) => {
    setLoading(() => state);
  };
  const initialValues: ContactData = {
    firstName: '',
    secondName: '',
    mail: '',
    company: '',
    country: '',
    phone: '',
    message: '',
  };
  const schema = validateContactRequest();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactData) => {
    toggleLoading(true);
    try {
      await sendEmail(data);
      enqueueSnackbar({
        className: 'font-sans tracking-widest text-2xl font-bold',
        message: 'Mensaje enviado. Pronto nos pondremos en contacto',
        variant: 'success',
        persist: false,
        autoHideDuration: 2000,
      });
      reset();
    } catch (error) {
      enqueueSnackbar({
        className: 'font-sans tracking-widest text-2xl font-bold',
        message: 'No pudimos enviar tu mensaje :(',
        variant: 'error',
        persist: false,
        autoHideDuration: 2000,
      });
    } finally {
      toggleLoading(false);
    }
  };
  return (
    <>
      <div className="w-full flex flex-col justify- items-center text-center m-4 ">
        <h2 className="text-4xl font-bold">Contactate con nosotros!</h2>
        <p className="text-2xl tracking-wide">
          Nos interesa saber sobre tu proyecto!
        </p>
      </div>
      <form className="flex flex-col form  " onSubmit={handleSubmit(onSubmit)}>
        <div className="row-doble">
          <div className="inputContainer">
            <input {...register('firstName')} placeholder="Nombre" />
            {errors.firstName ? (
              <ErrorComponent text={errors?.firstName?.message || ''} />
            ) : null}
          </div>
          <div className="inputContainer">
            <input {...register('secondName')} placeholder="Apellido" />
            {errors.secondName ? (
              <ErrorComponent text={errors?.secondName?.message || ''} />
            ) : null}
          </div>
        </div>
        <div className="row-doble">
          <div className="inputContainer">
            <input {...register('mail')} placeholder="Email" />
            {errors.mail ? (
              <ErrorComponent text={errors?.mail?.message || ''} />
            ) : null}
          </div>
          <div className="inputContainer">
            <input {...register('company')} placeholder="Compañia" />
            {errors.company ? (
              <ErrorComponent text={errors?.company?.message || ''} />
            ) : null}
          </div>
        </div>
        <div className="row-doble">
          <div className="inputContainer">
            <input {...register('country')} placeholder="País" />
            {errors.country ? (
              <ErrorComponent text={errors?.country?.message || ''} />
            ) : null}
          </div>
          <div className="inputContainer">
            <input {...register('phone')} placeholder="Teléfono" />
            {errors.phone ? (
              <ErrorComponent text={errors?.phone?.message || ''} />
            ) : null}
          </div>
        </div>

        <textarea
          className="h-[20vh] p-4"
          {...register('message')}
          placeholder="Tu mensaje"
        />
        {errors.message ? (
          <ErrorComponent text={errors?.message?.message || ''} />
        ) : null}
        {/* <input type="submit" /> */}
        <button
          disabled={loading}
          type="submit"
          className="duration-300 flex items-center justify-center gap-4 hover:bg-green-600 text-xl bg-green-500 text-neutral-200 font-bold tracking-wider py-4 rounded
          disabled:bg-neutral-400
          "
        >
          {loading ? <FaSpinner className="text-3xl animate-spin" /> : null}{' '}
          Enviar
        </button>
      </form>
    </>
  );
};

export default ContactForm;

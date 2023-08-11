import { ContactData } from '@/interfaces';

export const htmlTemplate = ({
  company,
  country,
  firstName,
  mail,
  message,
  phone,
  secondName,
}: ContactData) => `
     <div
      style="
        margin: auto;
        box-sizing: border-box;
        padding: 0.5rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
          sans-serif;
          font-size:1.25rem;
        display: block;
        width: 80%;
      "
    >
      <div
        style="display: block; text-align: center; margin-block: 0.5rem 1rem"
      >
        <h2 style="margin: 0; font-size: 2rem">Solicitud de contacto</h2>
        <span style="font-style: italic; font-weight: 100"
          >Enviado desde socialmedia1989.com.ar</span
        >
      </div>

      <div style="display: block; margin-bottom:2rem;">
        <div
          style="
            background-color: #fdfcfc;
            padding: 0.5rem;
            border-radius: 0.25rem;
            box-shadow: 0.25rem 0.25rem 0.25rem 0.25rem #b5b5b5;
          "
        >
          <p style="font-weight: bold; display: flex; gap: 0.25rem">
            Enviado por: <span>${firstName} ${secondName}</span>
          </p>
          <p style="font-weight: bold; display: flex; gap: 0.25rem">
            Teléfono:
            <span>${phone}</span>
          </p>
          <p style="font-weight: bold; display: flex; gap: 0.25rem">
            Mail: <span>${mail}</span>
          </p>
          <p style="font-weight: bold; display: flex; gap: 0.25rem">
            Empresa:
            <span>${company}</span>
          </p>
          <p style="font-weight: bold; display: flex; gap: 0.25rem">
            País: <span>${country}</span>
          </p>
        </div>
        <div
          style="
            background-color: #fdfcfc;
            padding: 0.5rem;
            border-radius: 0.25rem;
            box-shadow: 0.25rem 0.25rem 0.25rem 0.25rem #b5b5b5;
          "
        >
        <pre style="margin:0;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
          sans-serif;">

          ${message}
          </pre>
        </div>
      </div>
    </div>


`;

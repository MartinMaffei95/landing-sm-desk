import nodemailer from 'nodemailer';
import keys from './keys.nodemailer.json';

const email = process.env.EMAIL_ADRESS;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: email, // Your email address
    serviceClient: keys.client_id,
    privateKey: keys.private_key,
    accessUrl: keys.token_uri,
  },
});

const mailOptions = {
  from: '"Fred Foo 👻" <foo@example.com>', // sender address
  to: 'bar@example.com, baz@example.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world?', // plain text body
  html: '<b>Hello world?</b>', // html body
};

export const sendEmail = async () => {
  try {
    // Verify your transporter
    await transporter.verify();
    const info = await transporter.sendMail(mailOptions);

    console.log(`Message sent: ${info.messageId}`);
  } catch (error) {
    console.log(error);
  }
};

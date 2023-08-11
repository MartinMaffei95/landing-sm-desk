import { htmlTemplate } from '@/app/api/mail/template/create-template';
import { validateContactRequest } from '@/app/api/validations/mail.validate';
import { ContactData } from '@/interfaces';
import { NextRequest, NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';

// export async function POST(req: Request) {
//   console.log(req);
//   const data = await req.json();
//   let proccesedData = { ...data, accepted: true };

//   return NextResponse.json(proccesedData);
// }

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const request: ContactData = await req.json();
    const schema = validateContactRequest();
    const { company, country, firstName, mail, message, phone, secondName } =
      schema.parse(request);

    const transporter = createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: 'mmaffei@socialmedia1989.com.ar',
        pass: 'dyntcvramzjirwhs',
      },
      secure: true,
      options: {
        from: 'noanswer@noanswer.com',
      },
    });

    const mailData = {
      from: 'noreply@socialmedia1989.com.ar <donotreply@bar.com>',
      to: 'josemensi@socialmedia1989.com.ar',
      subject: `Nuevo contacto de ${firstName} ${secondName} ${
        company.length > 0 ? ' | ' + company : null
      }`,
      text: message + ' | Enviado por: ' + mail,
      html: htmlTemplate({
        company,
        country,
        firstName,
        mail,
        message,
        phone,
        secondName,
      }),
    };
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        throw new Error();
      }
    });
    return new Response('SUCCESS', { status: 200 });
  } catch (error) {
    return new Response('ERROR', { status: 500 });
  }
}

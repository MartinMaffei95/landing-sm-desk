import { NextRequest, NextResponse } from 'next/server'
import { createTransport } from 'nodemailer'

// export async function POST(req: Request) {
//   console.log(req);
//   const data = await req.json();
//   let proccesedData = { ...data, accepted: true };

//   return NextResponse.json(proccesedData);
// }
export async function POST(req: NextRequest, res: NextResponse) {
  const transporter = createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'demo@demo.gmail',
      pass: 'password',
    },
    secure: true,
  })
  console.log('rq.BODY', req.body)

  // const mailData = {
  //   from: 'demo email',
  //   to: 'your email',
  //   subject: `Message From ${req?.body?.name}`,
  //   text: req?.body.message + ' | Sent from: ' + req?.body.email,
  //   html: `<div>${req?.body.message}</div><p>Sent from:
  //   ${req?.body.email}</p>`,
  // }
  // transporter.sendMail(mailData, function (err, info) {
  //   if (err) console.log(err)
  //   else console.log(info)
  // })
  return NextResponse.json('ok')
}

import nodemailer from 'nodemailer'

import config from './config'

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    ...config
  }
});

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from,
    to: 'react.nodemailer@gmail.com',
    subject: `New message from ${from} at portfolio`,
    text,
    replyTo: from
  };

  console.log{message};

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

export default send
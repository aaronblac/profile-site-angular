const sgMail = require('@sendgrid/mail')
const { appendFile } = require('fs')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'aaron.black.dev@gmail.com', // Change to your recipient
  from: 'aaronblack@aaron-black.com', // Change to your verified sender
  subject: 'Website Contact form',
  text: `${this.FormData}`
}

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
    return("success");
  })
  .catch((error) => {
    console.error(error)
    return(error);
  })

  module.exports = app;

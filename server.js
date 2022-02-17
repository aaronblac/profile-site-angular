//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const sgMail = require('@sendgrid/mail')
const { appendFile } = require('fs')
const passwrd = sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const msg = {
//   to: 'aaron.black.dev@gmail.com', // Change to your recipient
//   from: 'aaronblack@aaron-black.com', // Change to your verified sender
//   subject: 'Website Contact form',
//   text: `${this.FormData}`
// }

// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//     return("success");
//   })
//   .catch((error) => {
//     console.error(error)
//     return(error);
//   })


// create a new Express application instance
const app = express();

//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors({origin: "*" }));
app.use(bodyParser.json());

//start application server on port 3000
app.listen(3000, () => {
  console.log("The server started on port 3000");
});

// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, (err, info) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({ error: "Failed to send email" });
    } else {
      console.log("Email has been sent");
      res.send(info);
    }
  });
});

const sendMail = (user, callback) => {
  transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth: {
      user: "apikey",
      pass: passwrd
    }
  });
}

const mailOptions = {
  from: `"Porfolio Contact Form", "aaronblack@aaron-black.com"`,
  to: `"aaron.black.dev@gmail.com"`,
  subject: "Website Contact",
  html: `<h1>${user.name}</h1>`
};

let info = await transporter.sendMail(mailOptions);

callback(info);

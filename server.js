// server.js
const express = require("express");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(bodyParser.json());

app.post("/api/contact", (req, res) => {
  const { FirstName, LastName, email, PhoneNumber, Subject, Message } =
    req.body;

  const msg = {
    to: "karunarathnawgnk.21@itfac.mrt.ac.lk", // Change to your recipient
    from: "nimeshkavindaofficial@gmail.com", // Change to your verified sender
    subject: `New Contact Form Submission: ${Subject}`,
    text: `
      First Name: ${FirstName}
      Last Name: ${LastName}
      Email: ${email}
      Phone Number: ${PhoneNumber}
      Message: ${Message}
    `,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      res.status(200).send("Message sent successfully!");
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).send("Failed to send message.");
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

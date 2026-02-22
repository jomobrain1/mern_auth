const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const handlebars = require("handlebars");

const verifyEmail = async (token, email) => {
  const emailTemplateSource = fs.readFileSync(
    path.join(__dirname, "template.hbs"),
    "utf-8",
  );

  const template = handlebars.compile(emailTemplateSource);
  const htmlToSend = template({ token: encodeURIComponent(token) });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  const mailConfigurations = {
    from: process.env.MAIL_USER,
    to: email,
    subject: "Verify Email",
    html: htmlToSend,
  };
  transporter.sendMail(mailConfigurations, function (error, info) {
    if (error) {
      throw new Error(error);
    }
    console.log("Email sent successfully");
    console.log(info);
  });
};
module.exports = { verifyEmail };

"use strict";

const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({
  origin: true,
});

exports.cotizacion = functions.https.onRequest(async (req, res) => {
  const data = req.body;
  const name = data.name;
  const email = data.email;
  const phone = data.phone;
  const message = data.message;
  const file = data.file;
  console.log(name, email, phone, message);
  const A = await mail(name, email, phone, message, file);
  console.log(A);
  return cors(req, res, () => {
    res.send({ res: 200 });
  });
});

async function mail(name, email, phone, message, file) {
  return new Promise(async (resolve, req) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.ionos.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "no-responder@flashcopias.com", // generated ethereal user
        pass: "dokgyw-mazNi2-pidqyb", // generated ethereal password
      },
    });
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `<no-responder@flashcopias.com>`, // sender address
      to: "flashcopias@hotmail.com", // list of receivers
      subject: "Flashcopias", // Subject line
      attachments: [
        {
          path: file,
        },
      ],
      text: "Nueva Cotizacion", // plain text body
      html:
        `<b> Nombre : </b>` +
        name +
        ` <br><b> Correo : </b>` +
        email +
        ` <br><b> Telefono : </b>` +
        phone +
        ` <br><b> Mensaje : </b>` +
        message,
    });
    resolve(info);
  });
}

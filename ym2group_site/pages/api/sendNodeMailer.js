import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { getEnv } from 'vercel';

dotenv.config();

export default async function (req, res) {
    const { nombre, correo, mensaje } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.titan.email",
        port: 465,
        secure: true,
        auth: {
            user: getEnv('EMAIL_ADDRESS'), //process.env.EMAIL_ADDRESS,
            pass: getEnv('EMAIL_PASSWORD'),//process.env.EMAIL_PASSWORD,
        },
    });

    transporter.sendMail({

        from: process.env.EMAIL_ADDRESS,
        to: process.env.EMAIL_ADDRESS,
        subject: `Mensaje enviado por: ${nombre}`,
        html: `<html><body><p>Nombre: ${nombre}</p><p>Correo electrónico: ${correo}</p><p>Mensaje: ${mensaje}</p><p style="color:#bbbbbb">Mensaje enviado desde www.ym2papeleria.com | Formulario de contacto</p></body></html>`,

    }).then(function(data) {
        console.log('API sendTransacEmail call successful. Email ID: ' + data.messageId);
        res.status(200).send('Mensaje enviado satisfactoriamente');
      }, function(error) {
        console.error(error);
        res.status(400).send(error);
      });

}
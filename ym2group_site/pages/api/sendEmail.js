const SENDINBLUE_API_KEY = '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';
const MY_EMAIL_ADDRESS = 'ventas@ym2papeleria.com';
const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = SENDINBLUE_API_KEY;

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

export default async function (req, res) {
  const { nombre, correo, mensaje } = req.body;
  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.subject = `Mensaje enviado por ${nombre}`;
  sendSmtpEmail.htmlContent = `<html><body><p>Nombre: ${nombre}</p><p>Correo electrónico: ${correo}</p><p>Mensaje: ${mensaje}</p></body></html>`;
  sendSmtpEmail.sender = { name: "Remitente", email: MY_EMAIL_ADDRESS };
  sendSmtpEmail.to = [{ email: MY_EMAIL_ADDRESS }];

  sendSmtpEmail.replyTo = { email: correo };

  apiInstance.sendTransacEmail(sendSmtpEmail)
    .then(function(data) {
      console.log('API sendTransacEmail call successful. Email ID: ' + data.messageId);
      res.status(200).send('Mensaje enviado');
    }, function(error) {
      console.error(error);
      res.status(400).send(error);
    });
}

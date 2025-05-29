// netlify/functions/send-email.js
require('dotenv').config(); // Para carregar variáveis de ambiente localmente (opcional para Netlify, mas bom para teste)
const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
    // Permite apenas requisições POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405, // Method Not Allowed
            body: JSON.stringify({ success: false, message: 'Apenas requisições POST são permitidas.' }),
            headers: { 'Allow': 'POST' }
        };
    }

    try {
        // Os dados do formulário virão no corpo (body) do evento (event)
        const data = JSON.parse(event.body);
        const { name, email, subject, message } = data;

        // Validação simples dos campos
        if (!name || !email || !message) {
            return {
                statusCode: 400, // Bad Request
                body: JSON.stringify({ success: false, message: 'Todos os campos obrigatórios (nome, email, mensagem) devem ser preenchidos.' })
            };
        }

        // Configuração do Nodemailer (igual ao seu server.js)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Virá das variáveis de ambiente do Netlify
                pass: process.env.EMAIL_PASS  // Virá das variáveis de ambiente do Netlify
            }
        });

        // Opções do e-mail
        const mailOptions = {
            from: `"${process.env.EMAIL_FROM_NAME || name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,       // Para quem o e-mail será enviado
            replyTo: email,                 // Para quem você responderá
            subject: subject || `Nova mensagem de contato de ${name} (Portfólio)`,
            html: `
                <h2>Nova mensagem do formulário de contato do Portfólio</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Assunto:</strong> ${subject || 'Não informado'}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        };

        // Envia o e-mail
        await transporter.sendMail(mailOptions);

        return {
            statusCode: 200, // OK
            body: JSON.stringify({ success: true, message: 'Mensagem enviada com sucesso!' })
        };

    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return {
            statusCode: 500, // Internal Server Error
            body: JSON.stringify({ success: false, message: 'Erro ao enviar a mensagem. Tente novamente mais tarde.' })
        };
    }
};
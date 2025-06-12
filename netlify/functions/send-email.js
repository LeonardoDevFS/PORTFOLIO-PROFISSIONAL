require('dotenv').config();
const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ success: false, message: 'Apenas requisições POST são permitidas.' }),
            headers: { 'Allow': 'POST' }
        };
    }

    try {
        const data = JSON.parse(event.body);
        const { name, email, subject, message } = data;

        if (!name || !email || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ success: false, message: 'Nome, email e mensagem são obrigatórios.' })
            };
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Variável de ambiente no Netlify
                pass: process.env.EMAIL_PASS  // Variável de ambiente no Netlify
            }
        });

        await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: subject || `Contato via Portfólio de ${name}`,
            html: `
                <h2>Nova mensagem do Portfólio</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Assunto:</strong> ${subject || 'Não informado'}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: 'Mensagem enviada com sucesso!' })
        };

    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: 'Erro interno ao enviar a mensagem.' })
        };
    }
};
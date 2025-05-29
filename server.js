// server.js
require('dotenv').config(); // Carrega variáveis do .env para process.env
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000; // Porta para o servidor backend

// === Middlewares ===
app.use(cors()); // Permite requisições de diferentes origens (seu frontend)
app.use(bodyParser.urlencoded({ extended: true })); // Para dados de formulário x-www-form-urlencoded
app.use(bodyParser.json()); // Para dados JSON (se você enviar como JSON do frontend)

// === Configuração do Nodemailer ===
// Usando Gmail como exemplo. Adapte para outros provedores.
const transporter = nodemailer.createTransport({
    service: 'gmail', // Ou configure host, port, secure se não for Gmail
    auth: {
        user: process.env.EMAIL_USER, // Seu email do .env
        pass: process.env.EMAIL_PASS  // Sua senha do .env
    }
});

transporter.verify((error, success) => {
    if (error) {
        console.error('Erro ao conectar com o serviço de email:', error);
    } else {
        console.log('Serviço de email conectado e pronto para enviar mensagens.');
    }
});


// === Rota para Envio de Email ===
app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validação simples dos campos
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Todos os campos obrigatórios (nome, email, mensagem) devem ser preenchidos.' });
    }

    const mailOptions = {
        from: `"${process.env.EMAIL_FROM_NAME || name}" <${process.env.EMAIL_USER}>`, // Remetente (pode ser seu email ou o email do formulário)
        to: process.env.EMAIL_TO, // Destinatário (seu email para receber as mensagens)
        replyTo: email, // Para que você possa responder diretamente ao remetente do formulário
        subject: subject || `Nova mensagem de contato de ${name}`, // Assunto do email
        html: `
            <h2>Nova mensagem do formulário de contato do Portfólio</h2>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Assunto:</strong> ${subject || 'Não informado'}</p>
            <p><strong>Mensagem:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar email:', error);
            return res.status(500).json({ success: false, message: 'Erro ao enviar a mensagem. Tente novamente mais tarde.' });
        }
        console.log('Email enviado: ' + info.response);
        res.status(200).json({ success: true, message: 'Mensagem enviada com sucesso!' });
    });
});

// === Iniciar o Servidor ===
app.listen(PORT, () => {
    console.log(`Servidor backend rodando na porta ${PORT}`);
    console.log(`Frontend deve enviar requisições para http://localhost:${PORT}/send-email`);
});
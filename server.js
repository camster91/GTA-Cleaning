import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// SMTP transporter configuration
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.titan.email',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_SECURE !== 'false',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const FROM_EMAIL = process.env.FROM_EMAIL || process.env.SMTP_USER;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || FROM_EMAIL;

app.post('/api/contact', async (req, res) => {
    const { name, email, phone, service, propertyType, frequency, message } = req.body;

    
    if (!name || !name.trim()) {
        return res.status(400).json({ error: 'Name is required.' });
    }

    const hasEmail = email && email.trim();
    const hasPhone = phone && phone.trim();

    if (!hasEmail && !hasPhone) {
        return res.status(400).json({ error: 'Email or phone number is required.' });
    }

    if (hasEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'Invalid email address.' });
    }

    if (!message || !message.trim()) {
        return res.status(400).json({ error: 'Message is required.' });
    }

    
    const emailBody = [
        `New contact form submission from GTA City Cleaning website:`,
        ``,
        `Name: ${name}`,
        `Company Name: ${req.body.companyName || 'N/A'}`,
        hasEmail ? `Email: ${email}` : null,
        hasPhone ? `Phone: ${phone}` : null,
        service ? `Service: ${service}` : null,
        propertyType ? `Property Type: ${propertyType}` : null,
        frequency ? `Frequency: ${frequency}` : null,
        ``,
        `Message:`,
        message,
    ]
        .filter(Boolean)
        .join('\n');

    console.log('Sending email to:', NOTIFY_EMAIL, 'subject:', `New Lead: ${name} - ${service || 'General Inquiry'}`);

    try {
        await transporter.sendMail({
            from: `GTA Cleaning Website <${FROM_EMAIL}>`,
            to: NOTIFY_EMAIL,
            replyTo: hasEmail ? email : undefined,
            subject: `New Lead: ${name} - ${service || 'General Inquiry'}`,
            text: emailBody,
        });

        res.json({ success: true, message: 'Your message has been sent successfully.' });
    } catch (error) {
        console.error('SMTP error:', error);
        res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
});

app.use(express.static(path.join(__dirname, 'dist')));

app.all(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`GTA Cleaning server running on port ${PORT}`);
});
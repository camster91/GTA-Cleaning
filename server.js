import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import Mailgun from 'mailgun.js';
import formData from 'form-data';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Mailgun setup
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || 'key-placeholder',
});

const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || 'yourdomain.com';
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'info@yourdomain.com';

// Contact form API endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, service, propertyType, frequency, message } = req.body;

    // Server-side validation
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

    // Build email body
    const emailBody = [
        `New contact form submission from GTA City Cleaning website:`,
        ``,
        `Name: ${name}`,
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

    try {
        await mg.messages.create(MAILGUN_DOMAIN, {
            from: `GTA Cleaning Website <noreply@${MAILGUN_DOMAIN}>`,
            to: [NOTIFY_EMAIL],
            subject: `New Lead: ${name} - ${service || 'General Inquiry'}`,
            text: emailBody,
            'h:Reply-To': hasEmail ? email : undefined,
        });

        res.json({ success: true, message: 'Your message has been sent successfully.' });
    } catch (error) {
        console.error('Mailgun error:', error);
        res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
});

// Serve static files from Vite build
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback - serve index.html for all non-API routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`GTA Cleaning server running on port ${PORT}`);
});

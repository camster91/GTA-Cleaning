import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.titan.email',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_SECURE !== 'false',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

async function main() {
    console.log('Sending test email...');
    try {
        const info = await transporter.sendMail({
            from: `"Test User" <${process.env.SMTP_USER}>`,
            to: process.env.NOTIFY_EMAIL || process.env.SMTP_USER,
            subject: 'GTA Cleaning - SMTP Test',
            text: 'This is a test email to verify SMTP configuration.',
        });
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending test email:', error);
    }
}

main();
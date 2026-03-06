# GTA City Cleaning - Deployment Guide

## Hostinger Node.js Deployment

### Prerequisites
1. Hostinger VPS or Business Hosting with Node.js support
2. Domain configured and pointed to Hostinger
3. Titan Email account with SMTP credentials

### Step 1: Prepare Environment

Create `.env` file in project root:

```bash
# SMTP Configuration for Titan Email
SMTP_HOST=smtp.titan.email
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=contact@gtacitycleaningservices.ca
SMTP_PASS=your_titan_password

# Email addresses
FROM_EMAIL=contact@gtacitycleaningservices.ca
NOTIFY_EMAIL=contact@gtacitycleaningservices.ca

# Server Configuration
PORT=3000
NODE_ENV=production
```

### Step 2: Build the Application

```bash
npm run deploy:build
```

This will:
1. Install dependencies
2. Build the Vite frontend to `dist/`
3. Copy server files to `dist/`

### Step 3: Upload to Hostinger

1. **Upload files**: Upload all contents of `dist/` folder to your Hostinger `public_html` directory
2. **SSH into your server** (for VPS):
   ```bash
   ssh username@your-server-ip
   cd ~/public_html
   ```

### Step 4: Configure Node.js on Hostinger

1. Go to Hostinger Panel → Advanced → Node.js
2. **Application Root**: `public_html`
3. **Application URL**: `https://yourdomain.com`
4. **Application Startup File**: `server.js`
5. Click "Create"

### Step 5: Set Environment Variables

In Hostinger panel, set these environment variables:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `FROM_EMAIL`
- `NOTIFY_EMAIL`
- `NODE_ENV=production`

### Step 6: Configure SSL (HTTPS)

1. Go to SSL section in Hostinger
2. Install SSL certificate for your domain
3. Ensure HTTPS redirect is enabled

### Alternative: Static Hosting Only

If you don't need form submission functionality:

1. Build: `npm run build`
2. Upload only the `dist/` folder contents
3. Upload `.htaccess` file for SPA routing
4. Forms will need alternative (Formspree, Netlify Forms, etc.)

## SMTP Configuration (Titan Email)

The application uses Nodemailer with SMTP. Ensure your Titan email account allows SMTP access. Use the following server settings:

- **Incoming server (IMAP)**: imap.titan.email:993 (SSL/TLS)
- **Outgoing server (SMTP)**: smtp.titan.email:465 (SSL/TLS)
- **Username**: Your full email address (e.g., contact@gtacitycleaningservices.ca)
- **Password**: Your Titan email password

## Troubleshooting

### Forms not sending
- Check SMTP credentials are correct
- Verify Titan email account allows SMTP access
- Check Hostinger logs: `tail -f ~/.pm2/logs/*`
- Ensure SMTP port 465 is not blocked by firewall

### 404 errors on refresh
- Ensure `.htaccess` is uploaded
- Check Apache/Nginx rewrite rules

### CORS errors
- Server.js already includes CORS
- Check domain matches in `BASE_URL` in SEO.jsx

### SMTP Authentication errors
- Verify username and password are correct
- Try using port 587 with STARTTLS (set `SMTP_PORT=587`, `SMTP_SECURE=false`)
- Ensure your Titan email account is active

## Maintenance

### Update application:
```bash
npm run deploy:build
# Re-upload dist/ folder
# Restart Node.js app in Hostinger panel
```

### View logs:
```bash
# SSH to server
tail -f ~/.pm2/logs/*.log
```

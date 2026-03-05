# GTA City Cleaning - Deployment Guide

## Hostinger Node.js Deployment

### Prerequisites
1. Hostinger VPS or Business Hosting with Node.js support
2. Domain configured and pointed to Hostinger
3. Mailgun account with verified domain

### Step 1: Prepare Environment

Create `.env` file in project root:

```bash
MAILGUN_API_KEY=your_mailgun_api_key_here
MAILGUN_DOMAIN=mg.yourdomain.com
NOTIFY_EMAIL=info@yourdomain.com
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
- `MAILGUN_API_KEY`
- `MAILGUN_DOMAIN`
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

## Mailgun Setup

1. Sign up at [mailgun.com](https://www.mailgun.com)
2. Add your domain (e.g., `mg.yourdomain.com`)
3. Verify domain via DNS records (add to Hostinger DNS)
4. Copy API key to your `.env` file

## Domain DNS Records for Mailgun

Add these DNS records in Hostinger:

| Type  | Hostname          | Value                                      |
|-------|-------------------|--------------------------------------------|
| TXT   | @                 | v=spf1 include:mailgun.org ~all            |
| TXT   | pic._domainkey    | [from Mailgun]                             |
| TXT   | @                 | v=DMARC1; p=none;                          |
| MX    | @                 | mxa.mailgun.org (priority 10)              |
| MX    | @                 | mxb.mailgun.org (priority 10)              |

## Troubleshooting

### Forms not sending
- Check `MAILGUN_API_KEY` is correct
- Verify domain is active in Mailgun dashboard
- Check Hostinger logs: `tail -f ~/.pm2/logs/*`

### 404 errors on refresh
- Ensure `.htaccess` is uploaded
- Check Apache/Nginx rewrite rules

### CORS errors
- Server.js already includes CORS
- Check domain matches in `BASE_URL` in SEO.jsx

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

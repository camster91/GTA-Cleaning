# GTA City Cleaning Services

Professional commercial cleaning company website for the Greater Toronto Area. Built with React, Vite, and Express.

## Features

- ✅ **SEO Optimized**: React Helmet, Open Graph, JSON-LD structured data
- ✅ **Contact Forms**: SMTP email integration for lead capture
- ✅ **Responsive Design**: Mobile-first, works on all devices
- ✅ **Smooth Animations**: Scroll-triggered reveals, smooth anchor scrolling
- ✅ **Accessibility**: ARIA labels, skip links, keyboard navigation
- ✅ **Performance**: Lazy loading images, code splitting ready
- ✅ **404 Page**: Custom not found page
- ✅ **Back to Top**: Floating button on scroll

## Tech Stack

- **Frontend**: React 19 + React Router DOM + Vite
- **Backend**: Express.js + Nodemailer (SMTP)
- **Styling**: CSS Modules + Custom properties
- **SEO**: React Helmet Async + JSON-LD
- **Icons**: Lucide React
- **Build**: Vite

## Quick Start

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Start server (production)
npm start
```

## Environment Variables

Create `.env` file:

```env
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

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed Hostinger deployment instructions.

Quick deploy:
```bash
npm run deploy:build
# Upload dist/ folder to Hostinger
```

## Project Structure

```
├── public/              # Static assets (favicon, robots.txt, sitemap)
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   ├── App.jsx          # Main app with routing
│   └── main.jsx         # Entry point
├── server.js            # Express server with SMTP email
├── deploy.sh            # Deployment script
└── .htaccess            # Apache config for SPA routing
```

## SEO Features

- Per-page meta titles and descriptions
- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD structured data (LocalBusiness, WebSite)
- XML Sitemap
- Robots.txt
- Canonical URLs
- Geo tags for local SEO

## Contact Form

Forms submit to `/api/contact` endpoint which sends email via SMTP (Titan Email). Includes:
- Client-side validation
- Server-side validation
- Success/error states
- ARIA accessibility

## License

Private - GTA City Cleaning Services Inc.

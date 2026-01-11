# Deployment Guide - Pantech Marine Services

## 🚀 Deployment Options

### Option 1: Vercel (Recommended for Frontend)

Vercel is the easiest way to deploy React applications.

#### Steps:
1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Or use Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Import your Git repository
   - Configure build settings:
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`

4. **Environment Variables**:
   - Add `VITE_API_URL` in Vercel dashboard
   - Set to your backend API URL

#### Backend Deployment:
- Deploy backend separately (see Backend Deployment section)
- Update `VITE_API_URL` to point to your backend

---

### Option 2: Netlify

#### Steps:
1. **Install Netlify CLI**:
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

3. **Or use Netlify Dashboard**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your `dist` folder
   - Or connect your Git repository

4. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

5. **Environment Variables**:
   - Add `VITE_API_URL` in Netlify dashboard

---

### Option 3: Traditional Hosting (cPanel, FTP)

#### Steps:
1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload `dist` folder**:
   - Upload all contents of `dist` folder to your web server
   - Usually to `public_html` or `www` directory

3. **Configure**:
   - Ensure your server supports SPA routing
   - Add `.htaccess` file for Apache (see below)

#### Apache `.htaccess` (for SPA routing):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🔧 Backend Deployment

### Option 1: Railway

1. Go to [railway.app](https://railway.app)
2. Create new project
3. Connect your repository
4. Add Node.js service
5. Set start command: `node ./backend/server.js`
6. Add environment variables:
   - `PORT` (optional, defaults to 3000)
   - `NODE_ENV=production`

### Option 2: Render

1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect repository
4. Configure:
   - Build Command: `npm install`
   - Start Command: `node ./backend/server.js`
5. Add environment variables

### Option 3: Heroku

1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Deploy: `git push heroku main`
5. Set environment variables:
   ```bash
   heroku config:set NODE_ENV=production
   ```

### Option 4: DigitalOcean App Platform

1. Go to [digitalocean.com](https://digitalocean.com)
2. Create new App
3. Connect repository
4. Configure build and run commands
5. Add environment variables

### Option 5: VPS (Ubuntu/Debian)

1. **SSH into your server**
2. **Install Node.js**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Install PM2** (process manager):
   ```bash
   sudo npm install -g pm2
   ```

4. **Clone your repository**:
   ```bash
   git clone your-repo-url
   cd marine
   npm install
   ```

5. **Create PM2 ecosystem file** (`ecosystem.config.js`):
   ```javascript
   module.exports = {
     apps: [{
       name: 'pantech-backend',
       script: './backend/server.js',
       instances: 1,
       exec_mode: 'cluster',
       env: {
         NODE_ENV: 'production',
         PORT: 3000
       }
     }]
   }
   ```

6. **Start with PM2**:
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

7. **Setup Nginx reverse proxy**:
   ```nginx
   server {
     listen 80;
     server_name your-domain.com;

     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

8. **Setup SSL with Let's Encrypt**:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

---

## 📦 Production Build

### Build Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# The dist folder contains your production build
```

### Build Output

- `dist/` folder contains optimized production build
- All assets are minified and optimized
- Source maps can be generated if needed

---

## 🔐 Environment Variables

### Frontend (.env)
```env
VITE_API_URL=https://your-backend-api.com
```

### Backend (.env)
```env
PORT=3000
NODE_ENV=production
```

**Important**: Never commit `.env` files to Git!

---

## ✅ Pre-Deployment Checklist

### Frontend
- [ ] Build completes without errors
- [ ] All environment variables set
- [ ] API URLs point to production backend
- [ ] Images and assets load correctly
- [ ] All routes work (test SPA routing)
- [ ] Mobile responsive design verified
- [ ] SEO meta tags present
- [ ] Favicon configured

### Backend
- [ ] Server starts without errors
- [ ] CORS configured for production domain
- [ ] Environment variables set
- [ ] Health check endpoint works
- [ ] API endpoints tested
- [ ] Error handling works
- [ ] Logging configured

### Testing
- [ ] All features tested in production-like environment
- [ ] Chatbot works with production API
- [ ] Contact form submits successfully
- [ ] Error handling verified
- [ ] Mobile devices tested
- [ ] Cross-browser compatibility checked

---

## 🚨 Post-Deployment

### Monitoring
- Monitor server logs
- Check error rates
- Monitor API response times
- Set up uptime monitoring

### Performance
- Test page load times
- Check API response times
- Monitor bundle sizes
- Optimize images

### Security
- Ensure HTTPS is enabled
- Check CORS settings
- Verify environment variables are secure
- Review error messages (don't expose sensitive info)

---

## 📊 Analytics Setup (Optional)

### Google Analytics
Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🔄 Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 🆘 Troubleshooting

### Common Issues

1. **404 errors on routes**
   - Ensure SPA routing is configured
   - Check `.htaccess` or server configuration

2. **API connection errors**
   - Verify `VITE_API_URL` is set correctly
   - Check CORS settings on backend
   - Verify backend is running

3. **Build errors**
   - Check Node.js version (18+)
   - Clear `node_modules` and reinstall
   - Check for TypeScript errors

4. **Performance issues**
   - Enable gzip compression
   - Optimize images
   - Check bundle size

---

## 📞 Support

For deployment issues, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Railway Documentation](https://docs.railway.app)

---

**Ready to deploy!** 🚀


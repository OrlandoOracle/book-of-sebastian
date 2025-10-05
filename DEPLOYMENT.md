# Deployment Guide - The Book of Sebastian

Quick deployment instructions for launching your landing page.

## 🚀 Deploy to Vercel (Recommended - 5 minutes)

Vercel is the easiest option for Next.js deployments.

### Steps:

1. **Push to GitHub**
   ```bash
   cd bookofsebastian
   git add .
   git commit -m "Initial commit - The Book of Sebastian landing page"
   git remote add origin https://github.com/yourusername/bookofsebastian.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js settings - **just click Deploy**
   - Wait 2-3 minutes for build to complete

3. **Add Custom Domain**
   - In Vercel dashboard, go to "Settings" → "Domains"
   - Add `bookofsebastian.com`
   - Follow DNS configuration instructions
   - Add these records to your domain provider:
     - A record: `76.76.21.21`
     - CNAME record: `www` → `cname.vercel-dns.com`

4. **Done!** Your site is live at `https://bookofsebastian.com`

### Environment Variables (Optional)

If you add analytics later:
- Go to Vercel Settings → Environment Variables
- Add: `NEXT_PUBLIC_GA_ID` = your Google Analytics ID

---

## 🌐 Deploy to Netlify (Alternative)

### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repo
   - Build settings (auto-detected):
     - **Build command:** `npm run build`
     - **Publish directory:** `.next`
   - Click "Deploy"

3. **Add Custom Domain**
   - Go to "Domain settings"
   - Add custom domain: `bookofsebastian.com`
   - Configure DNS with your domain provider:
     - CNAME record: `www` → `your-site.netlify.app`
     - A record: Use Netlify's load balancer IP

---

## 📦 Deploy to GitHub Pages (Static Export)

For a free static hosting option.

### Steps:

1. **Update next.config.ts** for static export:
   ```typescript
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
     basePath: '/bookofsebastian', // Only if not using custom domain
   };
   ```

2. **Build static site**:
   ```bash
   npm run build
   ```

3. **Deploy `out/` folder**:
   - Use GitHub Actions (recommended) or manual upload
   - The `out/` directory contains your static site

4. **GitHub Actions** (automated):
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '20'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

5. **Configure GitHub Pages**:
   - Go to repo Settings → Pages
   - Source: Deploy from branch `gh-pages`
   - Custom domain: `bookofsebastian.com`

---

## ⚙️ Pre-Deployment Checklist

Before deploying, verify:

- [ ] All Substack links work correctly
- [ ] Social media links updated in Footer and Connect page
- [ ] Author bio finalized (placeholder text replaced)
- [ ] Email address configured: `sebastian@bookofsebastian.com`
- [ ] Images added (if available) in `public/images/`
- [ ] Sitemap.xml updated with correct domain
- [ ] robots.txt configured
- [ ] Meta descriptions review
- [ ] Test on mobile devices (responsive design)

---

## 🔧 Post-Deployment Tasks

After your first deployment:

1. **Test All Pages**
   - [ ] Home page loads
   - [ ] All navigation links work
   - [ ] All CTAs redirect correctly to Substack
   - [ ] Footer links functional
   - [ ] Mobile responsive

2. **SEO Setup**
   - [ ] Submit sitemap to Google Search Console: `https://bookofsebastian.com/sitemap.xml`
   - [ ] Verify domain ownership
   - [ ] Check Open Graph tags (use [opengraph.xyz](https://www.opengraph.xyz/))
   - [ ] Test Twitter Card (use Twitter Card Validator)

3. **Analytics** (Optional)
   - [ ] Add Google Analytics tracking code
   - [ ] Configure UTM parameters tracking
   - [ ] Set up conversion goals (newsletter signups)

4. **Performance**
   - [ ] Run Lighthouse audit (aim for 90+ score)
   - [ ] Check PageSpeed Insights
   - [ ] Optimize images if needed

---

## 🚨 Troubleshooting

### Build Fails
- Check ESLint errors: `npm run lint`
- Verify all imports are correct
- Ensure `components` folder is in `src/`

### Links Not Working
- Verify Substack URL: `https://bookofsebastian.substack.com`
- Check UTM parameters are formatted correctly
- Test external links in new tab

### Styling Issues
- Ensure Tailwind config includes all custom colors
- Verify Google Fonts are loading
- Check `globals.css` for syntax errors

### Custom Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Use [dnschecker.org](https://dnschecker.org) to verify

---

## 📞 Support

If you encounter issues:
- Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Netlify Support: [docs.netlify.com](https://docs.netlify.com)

---

## 🎉 Launch Checklist

Final steps before going live:

- [ ] Domain configured and working
- [ ] SSL certificate active (HTTPS)
- [ ] All placeholder content replaced with real content
- [ ] Test newsletter signup flow
- [ ] Share on social media
- [ ] Email list announcement
- [ ] Monitor analytics first week

**You're ready to launch The Book of Sebastian! 🚀**

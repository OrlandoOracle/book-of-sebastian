# Deploy to Netlify

## Quick Deploy (Recommended)

### Option 1: Deploy via Netlify Dashboard

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Select repository: `OrlandoOracle/book-of-sebastian`
5. Configure build settings:
   - **Branch to deploy**: main
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Framework**: Next.js
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy to production
netlify deploy --prod
```

## Connect Custom Domain

After deployment:

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter: `bookofsebastian.com`
4. Follow DNS configuration instructions:
   ```
   Type: A
   Name: @
   Value: [Netlify's IP - shown in dashboard]

   Type: CNAME
   Name: www
   Value: [your-site].netlify.app
   ```
5. SSL certificate will be automatically provisioned via Let's Encrypt

## Environment Variables

Set in Netlify dashboard under Site settings → Environment variables:

```
NEXT_PUBLIC_SITE_URL=https://bookofsebastian.com
NEXT_PUBLIC_SUBSTACK_URL=https://bookofsebastian.substack.com
```

## Automatic Deployments

Netlify automatically deploys:

- **Production**: Every push to `main` branch
- **Deploy previews**: Every pull request

## Build Settings (Important for Next.js)

Configuration is set in `netlify.toml` file (already included in repository).

## Deployment Checklist

- [x] GitHub repository created
- [x] Code pushed to GitHub
- [x] Netlify configuration file created
- [ ] Netlify site created
- [ ] Custom domain connected
- [ ] SSL certificate active
- [ ] Environment variables configured
- [ ] Site accessible at bookofsebastian.com

## Repository

**GitHub**: https://github.com/OrlandoOracle/book-of-sebastian

## Support

For deployment issues:

- [Netlify Next.js Docs](https://docs.netlify.com/frameworks/next-js/overview/)
- [Netlify Support](https://www.netlify.com/support/)

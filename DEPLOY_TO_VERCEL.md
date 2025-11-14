# Deploy to Vercel - Quick Guide

## Prerequisites
- GitHub account
- Vercel account (free tier is fine)
- Git initialized in your project

## Method 1: Using Vercel Dashboard (Recommended for First Time)

### Step 1: Push to GitHub
```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Enhanced landing page with About and Contact pages"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/diabetes-revolution.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Import your `diabetes-revolution` repository
5. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

### Step 3: Environment Variables (Optional)
If you add any environment variables later (e.g., for contact form, database), add them in:
- Settings → Environment Variables

### Step 4: Deploy
1. Click "Deploy"
2. Wait 1-2 minutes
3. Your site is live! 🎉

## Method 2: Using Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Login
```bash
vercel login
```

### Step 3: Deploy
```bash
# First deployment (interactive)
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: diabetes-revolution
# - In which directory? ./
# - Override settings? N
```

### Step 4: Production Deployment
```bash
# Deploy to production
vercel --prod
```

## Post-Deployment Checklist

### ✅ Immediate Actions
- [ ] Visit your live site
- [ ] Test all navigation links
- [ ] Test on mobile device
- [ ] Verify all 20 quiz pages work
- [ ] Test contact form
- [ ] Check page load speeds

### ✅ Custom Domain (Optional)
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain (e.g., diabetesrevolution.com)
3. Configure DNS records as shown
4. Wait for DNS propagation (can take up to 48 hours)

### ✅ SEO Setup
- [ ] Add `robots.txt` to `public/`
- [ ] Generate `sitemap.xml`
- [ ] Set up Google Analytics
- [ ] Set up Google Search Console
- [ ] Submit sitemap to Google

### ✅ Performance Optimization
- [ ] Add Open Graph images for social sharing
- [ ] Optimize images (convert to WebP)
- [ ] Enable Vercel Analytics (free tier available)
- [ ] Set up Vercel Speed Insights

## Updating Your Site

### Automatic Deployments (via GitHub)
Every time you push to your `main` branch, Vercel will automatically:
1. Build your project
2. Run tests (if configured)
3. Deploy to production
4. Update your live site

```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main
# Vercel deploys automatically!
```

### Manual Deployments (via CLI)
```bash
# Preview deployment (staging)
vercel

# Production deployment
vercel --prod
```

## Configuration Tips

### Update next.config.ts for Vercel
Since you're using Vercel, you can remove the static export config:

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Remove this line for Vercel deployment
  // output: 'export',
  
  images: {
    // Only needed if using static export
    // unoptimized: true,
  },
};

export default nextConfig;
```

This allows you to use all of Vercel's features including:
- Image optimization
- Server-side rendering (if needed later)
- API routes
- Edge functions

### Environment Variables Example
If you add features later, create `.env.local`:

```env
# Database
DATABASE_URL=your_database_url

# Authentication
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=https://your-domain.vercel.app

# Email (for contact form)
RESEND_API_KEY=your_api_key
EMAIL_FROM=noreply@diabetesrevolution.com

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

**Important**: Add these same variables in Vercel Dashboard → Settings → Environment Variables

## Troubleshooting

### Build Fails
1. Check build logs in Vercel dashboard
2. Ensure `npm run build` works locally
3. Check for TypeScript errors
4. Verify all imports are correct

### 404 Errors on Routes
- Ensure all pages are in the `app/` directory
- Check that file names are correct
- Verify dynamic routes have `generateStaticParams`

### Images Not Loading
- Check image paths are correct
- If using external images, add domains to `next.config.ts`:
```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'example.com',
    },
  ],
},
```

### Slow Performance
1. Enable Vercel Analytics
2. Check Lighthouse scores
3. Optimize images
4. Use `next/image` component
5. Enable caching headers

## Monitoring Your Site

### Vercel Analytics (Free)
1. Go to your project in Vercel
2. Click "Analytics" tab
3. Enable Web Analytics
4. View real-time traffic data

### Vercel Speed Insights (Free)
1. Install package:
```bash
npm install @vercel/speed-insights
```

2. Add to `app/layout.tsx`:
```typescript
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

## Getting Help

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: support@vercel.com
- **Vercel Discord**: https://vercel.com/discord

## Cost Estimate

### Free Tier Includes:
- Unlimited deployments
- 100 GB bandwidth/month
- Automatic HTTPS
- Edge Network (CDN)
- Serverless Functions
- Basic Analytics

Perfect for this project! 🎉

You'll only need paid plans if:
- You exceed 100 GB bandwidth/month
- You need priority support
- You want advanced analytics

---

**Ready to deploy?** Run `vercel` in your terminal! 🚀

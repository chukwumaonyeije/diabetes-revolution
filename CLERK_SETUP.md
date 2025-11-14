# Clerk Authentication Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create Clerk Account
1. Go to https://clerk.com
2. Click "Start Building For Free"
3. Sign up with Google, GitHub, or email

### Step 2: Create Application
1. After signing in, click "Create Application"
2. Name it: **Diabetes Revolution**
3. Choose sign-in options (recommended):
   - ✅ Email
   - ✅ Google
   - ✅ GitHub (optional)
4. Click "Create Application"

### Step 3: Get Your API Keys
1. You'll see your API keys immediately after creating the app
2. Or go to: **Dashboard → API Keys**
3. Copy these two keys:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (starts with `pk_test_...`)
   - `CLERK_SECRET_KEY` (starts with `sk_test_...`)

### Step 4: Add Keys to Your Project
1. Open `.env.local` in your project root
2. Replace the placeholder values:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
CLERK_SECRET_KEY=sk_test_YOUR_KEY_HERE
```

### Step 5: Configure URLs (Already Done!)
In Clerk Dashboard → **Paths**:
- Sign-in URL: `/sign-in`
- Sign-up URL: `/sign-up`
- After sign-in URL: `/`
- After sign-up URL: `/`

These match your `.env.local` settings.

### Step 6: Test Locally
```bash
npm run dev
```

Visit http://localhost:3000 and:
1. Click "Get Started" or "Sign In"
2. Create a test account
3. You should be redirected to the homepage, logged in!

## Deploy to Vercel

### Step 1: Add Environment Variables to Vercel
1. Go to your Vercel dashboard
2. Select **diabetes-revolution** project
3. Go to **Settings → Environment Variables**
4. Add these variables:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | `pk_test_...` (from Clerk) |
| `CLERK_SECRET_KEY` | `sk_test_...` (from Clerk) |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | `/sign-in` |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | `/sign-up` |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | `/` |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | `/` |

5. Select **Production**, **Preview**, and **Development**
6. Click "Save"

### Step 2: Update Clerk Domain
1. In Clerk Dashboard → **Domains**
2. Add your Vercel domain:
   - `your-project.vercel.app`
   - And your custom domain (if you have one)

### Step 3: Deploy
```bash
git add .
git commit -m "Add Clerk authentication"
git push origin main
```

Vercel will automatically deploy! 🚀

## Features Now Available

### For Users:
- ✅ Sign up with email or Google
- ✅ Sign in securely
- ✅ Access personalized dashboard
- ✅ User profile management (via Clerk's UserButton)
- ✅ Password reset
- ✅ Email verification

### For You:
- ✅ User management dashboard at https://dashboard.clerk.com
- ✅ See all registered users
- ✅ View user activity
- ✅ Ban/unban users if needed
- ✅ Send emails to users

## Next Steps (Future)

### Phase 1: Database Integration
Once you add a database (Supabase/Vercel Postgres), you can:
- Save quiz progress
- Track user performance
- Store quiz history
- Generate analytics

### Phase 2: Premium Features
When you're ready to monetize:
- Check user subscription status via Clerk
- Gate premium content
- Offer trials
- Manage billing with Stripe + Clerk

## Troubleshooting

### "Invalid API Key" Error
- Make sure you copied the full key (they're long!)
- Check there are no extra spaces
- Verify you're using `pk_test_` for publishable key
- Verify you're using `sk_test_` for secret key

### Can't See Sign-In Button
- Clear browser cache
- Restart dev server (`npm run dev`)
- Check `.env.local` file exists and has correct keys

### Sign-In Page Not Found
- Make sure folders are named correctly:
  - `app/sign-in/[[...sign-in]]/page.tsx`
  - `app/sign-up/[[...sign-up]]/page.tsx`
- Note the double brackets: `[[...sign-in]]`

### Redirect Loop
- Check your environment variables match:
  - `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/`
  - `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/`

## Free Tier Limits

Clerk's free tier includes:
- ✅ 10,000 monthly active users
- ✅ Unlimited sign-ins
- ✅ Email + Social logins
- ✅ User management dashboard
- ✅ Email support

More than enough for your launch! 🎉

## Support Resources

- **Clerk Docs**: https://clerk.com/docs
- **Next.js Integration**: https://clerk.com/docs/quickstarts/nextjs
- **Support**: support@clerk.com
- **Discord**: https://clerk.com/discord

---

**Questions?** Check the Clerk docs or reach out to their support team—they're very responsive!

**Ready to test?** Run `npm run dev` and try creating an account! 🚀

# Resend Email Setup Guide

## Quick Setup (5 minutes)

Your contact form is now ready to send emails! You just need to get your API key from Resend.

### Step 1: Create Resend Account
1. Go to: https://resend.com
2. Click **"Start Building"** or **"Sign Up"**
3. Sign up with GitHub or email (GitHub is faster)

### Step 2: Get Your API Key
1. After signing in, you'll see the dashboard
2. Click **"API Keys"** in the left sidebar
3. Click **"Create API Key"**
4. Name it: **Diabetes Revolution**
5. Click **"Create"**
6. **Copy the API key** (starts with `re_...`)
   - ⚠️ You'll only see this once!

### Step 3: Add to .env.local
1. Open `.env.local` in your project
2. Find the line: `RESEND_API_KEY=YOUR_RESEND_API_KEY_HERE`
3. Replace with your actual key:
   ```
   RESEND_API_KEY=re_your_actual_key_here
   ```
4. **Save the file**

### Step 4: Test Locally
```bash
npm run dev
```

1. Go to http://localhost:3000/contact
2. Fill out the contact form
3. Click **"Send Message"**
4. Check your email at **info@codecraftmd.com** ✅

### Step 5: Deploy to Vercel
1. Go to Vercel Dashboard: https://vercel.com/dashboard
2. Click your **diabetes-revolution** project
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Key**: `RESEND_API_KEY`
   - **Value**: `re_your_key_here`
   - **Environments**: ✅ Production, ✅ Preview, ✅ Development
5. Click **"Save"**
6. Go to **Deployments** tab
7. Click **"Redeploy"** on the latest deployment

---

## What You Get Free

Resend's free tier includes:
- ✅ **3,000 emails/month**
- ✅ **100 emails/day**
- ✅ **Unlimited API calls**
- ✅ **No credit card required**
- ✅ **Email from onboarding@resend.dev**

Perfect for contact forms! 🎉

---

## How It Works

### What Happens When Someone Submits:
1. User fills out contact form
2. Form sends data to `/api/contact` (your API)
3. API uses Resend to send email
4. Email arrives at **info@codecraftmd.com**
5. You can reply directly from your email
6. User sees success message

### Email Format:
```
From: Diabetes Revolution <onboarding@resend.dev>
To: info@codecraftmd.com
Reply-To: user@email.com (whoever submitted)
Subject: Contact Form: [Subject they chose]

New Contact Form Submission

From: John Doe
Email: john@example.com
Subject: General Inquiry
Message:
[Their message here]
```

---

## Upgrading (Optional - Later)

### Use Your Own Domain (Future)
When you get a custom domain (like `diabetesrevolution.com`):

1. Add domain to Resend
2. Update DNS records (they'll guide you)
3. Change email from: `noreply@diabetesrevolution.com`

**Benefits:**
- More professional
- Better deliverability
- Custom branding

### Pro Plan ($20/month)
Only needed if you exceed:
- 3,000 emails/month
- 100 emails/day

You'll get a warning before hitting limits.

---

## Troubleshooting

### "Invalid API Key" Error
- Make sure you copied the full key (starts with `re_`)
- Check there are no extra spaces
- Verify it's in `.env.local` on the line: `RESEND_API_KEY=`

### Form Submits But No Email
1. Check Resend dashboard → "Logs"
2. See if email was sent
3. Check your spam folder
4. Verify `info@codecraftmd.com` is correct in `app/api/contact/route.ts`

### "Failed to send message" Error
- Check browser console for details
- Make sure API key is set
- Restart dev server after adding API key

### Not Working on Production
- Verify you added `RESEND_API_KEY` to Vercel environment variables
- Make sure you redeployed after adding the variable
- Check Vercel logs for errors

---

## Free Tier Limits

### What Counts as an Email:
- Each contact form submission = 1 email
- Reply-To automatically set to sender's email

### Typical Usage:
- **10 contacts/day** = 300 emails/month (well within free tier)
- **100 contacts/day** = 3,000 emails/month (max free tier)

You'd need **100+ daily submissions** to exceed free tier! 🚀

---

## Support Resources

- **Resend Docs**: https://resend.com/docs
- **API Reference**: https://resend.com/docs/api-reference
- **Support**: support@resend.com
- **Status**: https://status.resend.com

---

## Security Notes

### API Key Safety:
- ✅ Stored in `.env.local` (not committed to Git)
- ✅ `.gitignore` prevents accidental commits
- ✅ Only accessible server-side (API route)
- ✅ Never exposed to browser

### Email Validation:
- Form validates email format
- Resend validates recipient
- Server-side validation in API route

---

## Next Steps

### Once Working:
1. ✅ Test the contact form
2. ✅ Confirm emails arrive
3. ✅ Deploy to production
4. ✅ Test on live site
5. ✅ Monitor Resend dashboard

### Future Enhancements:
- Add honeypot spam protection
- Implement rate limiting
- Send confirmation email to user
- Add email templates
- Set up auto-responder

---

**Ready to test?** Get your API key and let's make that contact form work! 🚀

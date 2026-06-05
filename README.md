# Portfolio SaaS - AI-Powered Tools Platform

A full-stack SaaS platform with 12 AI-powered tools, mobile app, and monetization system. Built with Next.js, React Native, Clerk auth, Stripe payments, and Anthropic Claude API.

**Live Demo**: https://portfolio-n9uqiggrl-signalinput25-s-projects.vercel.app  
**GitHub**: https://github.com/PabloPratt/portfolio

## 🚀 Quick Start

### Web App
```bash
cd /Users/regalia/portfolio
npm install
npm run dev
# Open http://localhost:3000
```

### Mobile App
```bash
cd /Users/regalia/portfolio-mobile
npm install
npm run web    # Test on browser
npm run ios    # iOS simulator
npm run android # Android emulator
```

## 📦 Features

### 🤖 12 AI-Powered Premium Tools
Resume Scorer • Business Validator • Cold Email Generator • Invoice Generator • Content Generator • Competitor Analyzer • Pitch Deck Generator • Code Reviewer • LinkedIn Posts • Creative Writer • SEO Analyzer • AI Chat Widget

### 🛠️ 6 Utility Tools (Free)
JSON Formatter • Timestamp Converter • Base64 Encoder • Color Contrast Checker • Word Counter • Regex Tester

### 💰 3 Pricing Tiers
- **Free**: $0, 100 uses/month, limited AI
- **Pro**: $29/mo, unlimited uses, full access
- **Enterprise**: $99/mo, team workspace, full API

## 🏗️ Tech Stack

**Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS, Clerk Auth  
**Backend**: Next.js API Routes, Anthropic Claude, Supabase PostgreSQL  
**Mobile**: React Native, Expo, React Navigation, Clerk Expo  
**Payments**: Stripe integration with webhooks  
**Deployment**: Vercel (web), EAS Build (mobile)

## 🔐 Security & Accessibility

✅ WCAG 2.1 AA compliant  
✅ Clerk handles all authentication  
✅ Stripe webhook verification  
✅ Row-level security on database  
✅ Responsive mobile-first design  
✅ Semantic HTML with ARIA labels  

## 📊 Database

```
user_profiles: id, email, name, plan, stripe_customer_id, usage, created_at
tool_usage: id, user_id, tool, input_tokens, output_tokens, created_at
```

## 🔧 Environment Variables Required

ANTHROPIC_API_KEY, CLERK keys, SUPABASE keys, STRIPE keys

## 🚀 Deployment

**Web**: `git push origin main` (auto-deploys to Vercel)  
**Mobile**: `eas build --platform ios/android`

## 📈 Monetization

- Pro subscriptions: $29/mo
- Enterprise: $99/mo  
- API usage: $0.001 per 1K tokens
- Premium integrations & white-label licensing

## 🎯 Status

✅ Web app live and fully functional  
✅ 14 AI agent endpoints deployed  
✅ Mobile app skeleton with full navigation  
✅ Stripe payments integrated  
✅ Clerk authentication working  
⏳ Mobile: ready for iOS/Android build  

---

Built with ❤️ by Pablo Pratt | Powered by Claude AI

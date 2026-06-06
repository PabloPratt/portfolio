# Portfolio SaaS Architecture

## Quick Summary

This is a **full-stack SaaS application** with web and mobile clients, AI-powered tools, and a monetization system.

**Status**: Web app LIVE on Vercel. Mobile app (React Native) skeleton created.

## Web Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Auth**: Clerk (sign-in, sign-up, protected routes)
- **Database**: Supabase PostgreSQL
- **Payments**: Stripe (monthly subscriptions)
- **AI**: Anthropic Claude API
- **Hosting**: Vercel

### Live URL
https://portfolio-zeta-green-62.vercel.app

### GitHub
https://github.com/PabloPratt/portfolio

## Tools & Features (15 Total)

### 🤖 AI-Powered Tools (Premium - $29/mo)
1. **Resume Scorer** - AI match analysis vs job descriptions
2. **Business Validator** - Market viability scoring (0-100)
3. **Cold Email Generator** - Personalized outreach + follow-ups
4. **Invoice Generator** - Professional invoices
5. **Content Generator** - Blog posts, social media, newsletters
6. **SEO Analyzer** - Keyword research, optimization
7. **Code Reviewer** - AI code review with security checks
8. **LinkedIn Post Generator** - Viral professional content
9. **Creative Writer** - Screenplays, stories, creative content
10. **AI Chat Widget** - Floating assistant on all pages

### 🛠️ Utility Tools (Free)
11. **JSON Formatter** - Format & validate JSON
12. **Timestamp Converter** - Epoch ↔ human dates
13. **Base64 Encoder** - Encode/decode Base64
14. **Color Contrast Checker** - WCAG AA/AAA compliance
15. **Word Counter** - Words, characters, reading time
16. **Regex Tester** - Live regex matching

## Pricing Tiers

| Plan | Price | Features |
|------|-------|----------|
| Free | $0 | 100 uses/month, 6 utility tools, limited AI (2 uses/month) |
| Pro | $29/mo | Unlimited uses, all 16 tools, full API access |
| Enterprise | $99/mo | Team workspace, API, SSO, dedicated support |

## Key Pages

### Web
- `/` - Home with project showcase
- `/pricing` - Plans with Stripe checkout
- `/tools` - Tool directory (10 AI + 6 utilities)
- `/tools/[tool-name]` - Individual tool pages
- `/dashboard` - User dashboard with usage analytics
- `/sign-in`, `/sign-up` - Clerk auth pages

### Mobile (To Build)
- Tabbed navigation (Home, Tools, Dashboard, Profile)
- Tool UIs ported to React Native
- Stripe mobile payments
- Cloud sync

## Database Schema (Supabase)

```sql
-- User profiles
table user_profiles (
  id uuid PRIMARY KEY,
  email text,
  name text,
  plan enum ('free' | 'pro' | 'enterprise'),
  stripe_customer_id text,
  usage jsonb,
  created_at timestamp
)

-- Tool usage tracking
table tool_usage (
  id uuid PRIMARY KEY,
  user_id uuid,
  tool text,
  input_tokens int,
  output_tokens int,
  created_at timestamp
)
```

## API Endpoints

### AI Agents
- `POST /api/agents/chat` - Portfolio assistant chat
- `POST /api/agents/resume` - Resume scorer
- `POST /api/agents/business` - Business validator
- `POST /api/agents/cold-email` - Email generator
- `POST /api/agents/invoice` - Invoice generator
- `POST /api/agents/content` - Content generator
- `POST /api/agents/seo` - SEO analyzer
- `POST /api/agents/code-review` - Code reviewer
- `POST /api/agents/linkedin` - LinkedIn post generator
- `POST /api/agents/creative` - Creative writer

### Payments
- `POST /api/stripe/create-checkout` - Stripe checkout session
- `POST /api/stripe/webhook` - Stripe webhook handler

## Environment Variables

```bash
# Anthropic
ANTHROPIC_API_KEY

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/pricing

# Supabase
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
STRIPE_PRICE_PRO
STRIPE_PRICE_ENTERPRISE
```

## Next Steps (For Mobile)

1. Set up Expo React Native project ✅ (skeleton created)
2. Add React Navigation (bottom tabs + stack)
3. Port tool UIs to React Native
4. Integrate Clerk auth for mobile
5. Add Stripe mobile payments
6. Create mobile-specific API client
7. Build iOS app (Xcode)
8. Build Android app (Android Studio)
9. Deploy to App Store & Google Play

## Getting Started

### Web Dev
```bash
cd /Users/regalia/portfolio
npm install
npm run dev
# Open http://localhost:3000
```

### Mobile Dev
```bash
cd /Users/regalia/portfolio-mobile
npm install
npm run web # Test on web first
npm run ios # iOS simulator
npm run android # Android emulator
```

## Monetization Strategy

**Revenue Streams:**
1. **Recurring subscriptions**: Pro ($29/mo) & Enterprise ($99/mo)
2. **API credits**: Teams can use API for $0.001 per 1K tokens
3. **Premium integrations**: Zapier, Slack, Teams apps ($99/mo)
4. **White-label licensing**: Enterprise ($999/mo)

**Expected Unit Economics:**
- Cost per API call: $0.001-0.01 (Claude)
- Revenue per Pro user: $29/mo
- Payback period: 1-2 months (assuming 10+ tools used)

## Security

- ✅ Clerk handles auth (no passwords stored)
- ✅ Supabase row-level security (RLS) on tables
- ✅ Stripe handles PCI compliance
- ✅ API keys stored in environment variables
- ⚠️ TODO: Add rate limiting per user
- ⚠️ TODO: Add audit logs
- ⚠️ TODO: Add email verification

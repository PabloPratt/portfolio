# Portfolio content cleanup

Content-only removal; no CSS, dependencies, commits, pushes, or deployment changes. Existing backup files were preserved and are not served by Next.js. No environment or credential files were opened or changed.

## Removed

- All active references to the 14 deleted projects named in the task. Projects absent from active source needed no edits.
- Mobile Threat Observatory, including its reference inside Argus.
- Argus, MotorMind, and Paradox Algo/Shifu cards: hardcoded telemetry, test counts, community figures, and execution metrics were presented as verified live data. Related home/about/venture promotions were removed.
- Austin Microgreens Harvest and the unlinked microgreens venture.
- Work-page physical-project cards without direct application links; the separate studio, services, photography, and press pages remain.
- All 20 specialized utility pages plus their directory, all 14 AI demo API routes, the floating chat widget, pricing, fake-usage dashboard, and tools-only account pages.
- Unsupported system counts and HTTP-200/verified-live guarantees.

Loki keeps its original application and repository URLs, with the display title set to Loki. AUTONOMY and Loki are external applications, not in-site debt/archive demo widgets.

## Remaining project applications (HTTP status pending owner verification)

- Janus: https://janus-eta.vercel.app
- AUTONOMY: https://autonomy-wheat.vercel.app
- Loki: https://before-you-get-cancelled.vercel.app
- DOOOD: https://doood-claude.vercel.app
- ATX Services Scout: https://atx-services-scout.vercel.app

## All remaining external page, repository, profile, and metadata URLs

- https://atx-services-scout.vercel.app
- https://autonomy-wheat.vercel.app
- https://before-you-get-cancelled.vercel.app
- https://cbsaustin.com/news/local/austin-borrowers-warns-of-stress-as-federal-student-loan-plans-shift-automatically
- https://doood-claude.vercel.app
- https://fineartamerica.com/profiles/pablo-pratt
- https://github.com/PabloPratt
- https://github.com/PabloPratt/atx-services-scout
- https://github.com/PabloPratt/autonomy
- https://github.com/PabloPratt/before-you-get-cancelled
- https://janus-eta.vercel.app
- https://liberalarts.utexas.edu/irg/beyond-the-classroom/alumni-perspectives.html
- https://otherwords.org/the-value-of-community-college/
- https://pablo-projects-hub.vercel.app
- https://portfolio-zeta-green-62.vercel.app
- https://thedailytexan.com/2021/12/15/utpd-plans-long-term-improvements-to-west-campus-safety-following-shooting-other-incidents/
- https://tnoys.org/tnoys-at-the-texas-capitol-highlights-from-march/
- https://www.linkedin.com/in/pablopratt
- https://www.telemundo52.com/tu-dinero/opciones-pago-deuda-estudiantil/2808422/
- https://www.usatoday.com/story/life/health-wellness/2025/09/03/gen-z-student-loan-financial-anxiety-stress/85724653007/
- https://www.wisn.com/article/consumer-reports-student-loan-delinquency-and-default/70406067
- https://younginvincibles.org/2023/07/10/alumni-highlight-pablo-pratt/

## Remaining external image URLs

- https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80
- https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80
- https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80
- https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80
- https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=80
- https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85
- https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80
- https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80
- https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80
- https://images.unsplash.com/photo-1516321310764-8d8b6d5f5f7b?auto=format&fit=crop&w=1200&q=80
- https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80
- https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80
- https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80
- https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80
- https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80
- https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80
- https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80
- https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80

Email links are retained and have no HTTP status. SVG namespace identifiers are not outbound links. No external HTTP checks were attempted, per the requested handoff. Application functionality and claims require owner verification; no remaining link is claimed verified.

## Commands and results

- `npm run lint`: PowerShell blocked npm.ps1; used npm.cmd thereafter.
- `npm.cmd run lint`: failed on two existing errors in untouched files: forbidden require import in app/api/stripe/create-checkout/route.ts:14 and synchronous state update in components/TravelJournal.tsx:50. Also reported existing image-element warnings.
- `npm.cmd run build`: failed because the restricted network could not fetch JetBrains Mono and Plus Jakarta Sans from fonts.googleapis.com. Fonts/design were preserved. A production build pass remains unresolved.
- `npx.cmd next typegen` and `npx.cmd tsc --noEmit`: passed.
- Targeted ESLint on all 10 edited TSX files: passed with six existing image-element warnings, zero errors.
- Final content assertions: passed (five retained cards, removed names/routes absent, Loki URL retained, no CSS/dependency/backup changes).
- No test script or test files exist.
- Targeted source scan found no remaining named dead-project references in active app/components source. Backup files were excluded.
- React review: remaining lists use stable keys; filtering remains derived from search/category state; available category tabs derive from retained data.

## Files changed

- ARCHITECTURE.md
- app/api/agents/business/route.ts
- app/api/agents/chat/route.ts
- app/api/agents/code-review/route.ts
- app/api/agents/cold-email/route.ts
- app/api/agents/competitor/route.ts
- app/api/agents/content/route.ts
- app/api/agents/creative/route.ts
- app/api/agents/document/route.ts
- app/api/agents/invoice/route.ts
- app/api/agents/linkedin/route.ts
- app/api/agents/pitch/route.ts
- app/api/agents/resume/route.ts
- app/api/agents/seo/route.ts
- app/api/agents/tweet/route.ts
- app/dashboard/page.tsx
- app/layout.tsx
- app/page.tsx
- app/pricing/page.tsx
- app/sign-in/page.tsx
- app/sign-up/page.tsx
- app/tools/base64/page.tsx
- app/tools/business-validator/page.tsx
- app/tools/cold-email/page.tsx
- app/tools/color-contrast/page.tsx
- app/tools/competitor-analyzer/page.tsx
- app/tools/content-generator/page.tsx
- app/tools/data-classifier/page.tsx
- app/tools/donation-calculator/page.tsx
- app/tools/grant-finder/page.tsx
- app/tools/invoice-generator/page.tsx
- app/tools/json-formatter/page.tsx
- app/tools/nonprofit-budget/page.tsx
- app/tools/owasp-checker/page.tsx
- app/tools/page.tsx
- app/tools/password-checker/page.tsx
- app/tools/pitch-generator/page.tsx
- app/tools/regex-tester/page.tsx
- app/tools/resume-scorer/page.tsx
- app/tools/timestamp-converter/page.tsx
- app/tools/word-counter/page.tsx
- app/work/page.tsx
- components/About.tsx
- components/AiChatWidget.tsx
- components/Contact.tsx
- components/Footer.tsx
- components/Header.tsx
- components/Now.tsx
- components/Projects.tsx
- components/Ventures.tsx
- ARCHITECTURE.md updated to reflect the retained portfolio.
- CONTENT-CLEANUP.md (this report).

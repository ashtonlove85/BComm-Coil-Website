# LocalPass (Next.js 14)

Premium local discovery app scaffold built with:

- Next.js 14 App Router + TypeScript
- Tailwind CSS + Framer Motion
- Mapbox GL JS
- Prisma + PostgreSQL
- NextAuth.js

## Quick Start

1. Install deps:
   - `npm install`
2. Copy env:
   - `cp .env.example .env`
3. Generate Prisma client:
   - `npm run prisma:generate`
4. Run migrations:
   - `npm run prisma:migrate`
5. Seed sample data:
   - `npm run prisma:seed`
6. Start dev server:
   - `npm run dev`

## Routes

- `/` landing page
- `/explore` split map/list discovery page
- `/spot/[id]` dynamic spot detail page
- `/city/[slug]` dynamic city page
- `/profile` user dashboard
- `/auth/signin`, `/auth/signup`, `/onboarding`
- API: `/api/spots`, `/api/cities`, `/api/users/[id]/saved`

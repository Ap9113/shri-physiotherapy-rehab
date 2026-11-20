# Stage 4 — Local testing, GitHub and Vercel deployment

## A. Install prerequisites

Install:
- Node.js LTS
- Git
- VS Code (recommended)

Check:
```bash
node -v
npm -v
git --version
```

## B. Run locally

Extract the Stage 4 ZIP and open the project folder in VS Code.

```bash
npm install
npm run dev
```

Open:
http://localhost:3000

Test these pages:
- /
- /about
- /services
- /team
- /clinic
- /reviews
- /faq
- /contact
- /privacy
- /terms

Also test several service pages.

## C. Add photographs

Put:
- public/images/clinic-hero.jpg
- public/images/clinic-interior.jpg (if available)
- public/doctors/dr-akshay.jpg
- public/doctors/dr-bhavya.jpg

Do not use placeholder filenames.

## D. Production build

Run:
```bash
npm run build
```

If successful:
```bash
npm start
```

Open:
http://localhost:3000

## E. Git

```bash
git init
git add .
git commit -m "Build Shri Physiotherapy clinic website"
git branch -M main
```

Create an empty GitHub repository, then:
```bash
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## F. Vercel

1. Sign in to Vercel.
2. Import the GitHub repository.
3. Let Vercel detect Next.js.
4. Deploy.
5. Open the generated `vercel.app` URL.
6. Test every page and CTA.

## G. Final domain

Only after the Vercel version works:
1. Buy/choose the final domain.
2. Add it in Vercel.
3. Follow Vercel's DNS instructions.
4. Wait for DNS propagation.
5. Confirm HTTPS works.

## H. Before Google indexing

Replace every `example.com` reference in:
- app/layout.tsx
- app/sitemap.ts
- app/robots.ts

with the real domain.

Then deploy again.

## I. Search Console

After the real domain is live:
1. Add the domain/property to Google Search Console.
2. Verify ownership.
3. Submit `/sitemap.xml`.
4. Inspect the homepage.
5. Request indexing.

## J. Final QA checklist

- [ ] Phone links work
- [ ] WhatsApp opens correctly
- [ ] Google Maps opens correct clinic location
- [ ] Appointment form opens WhatsApp with entered details
- [ ] Doctor photos load
- [ ] Clinic photos load
- [ ] No fake reviews
- [ ] Fees are correct
- [ ] Hours are correct
- [ ] Address is correct
- [ ] Domain is correct in metadata/sitemap/robots
- [ ] Privacy and terms reviewed
- [ ] `npm run build` succeeds
- [ ] Mobile navigation works
- [ ] 404 page works

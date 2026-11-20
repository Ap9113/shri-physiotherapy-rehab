# Shri Physiotherapy & Rehab Clinic — Stage 3

A production-oriented Next.js starter for Shri Physiotherapy & Rehab Clinic, Patna.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Image locations

Put the clinic photos in `public/images/` and the doctor photos in `public/doctors/`.
See `public/README.txt` for exact filenames.

## Stage 3 pages

- `/`
- `/about`
- `/services`
- `/services/[slug]`
- `/team`
- `/clinic`
- `/reviews`
- `/faq`
- `/contact`

## Important before production

1. Replace `example.com` in metadata/sitemap/robots with the final domain.
2. Verify the doctor credentials and abbreviations with the clinic.
3. Add only genuine patient reviews.
4. Confirm the Google Maps destination opens at the correct clinic location.
5. Connect the appointment workflow to a production notification/backend if required.
6. Add a privacy policy and terms appropriate for the final data-collection workflow.
7. Test all phone, WhatsApp and map links.
8. Run `npm run build` before deployment.

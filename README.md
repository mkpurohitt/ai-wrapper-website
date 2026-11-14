# AI Wrapper

Marketing site for AI Wrapper: AI automation, premium development and new-age digital marketing (viral content, SEO, AEO, GEO, social and paid media).

Built with Next.js (App Router), Tailwind CSS v4 and Framer Motion.

## Develop

```bash
npm install
npm run dev
```

## Structure

- `lib/site.ts`: all service, FAQ and company copy. Edit content here.
- `app/`: pages: home, `/services`, `/services/[slug]`, `/about`, `/portfolio`, `/contact`, `/admin`.
- `components/`: header, footer, contact form and shared UI.

## Environment variables

| Variable | Used for |
| --- | --- |
| `NEXT_PUBLIC_FIREBASE_*` | Firestore, which stores portfolio projects |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`, `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` | Project image uploads from `/admin` |
| `ADMIN_PASSWORD` | Required to publish projects from `/admin` |

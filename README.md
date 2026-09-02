# Piper’s Pals Pet Rescue 🐾

A simple website to showcase rescued dogs for adoption, with a private admin page for uploading photos and descriptions.

- **index.html** — public adoption gallery (anyone can view).
- **admin.html** — private dashboard to add/edit/delete dogs and upload photos (only you can edit).

## How it works
- Data + photos live in Supabase (project `ianacrjyiqariazpxhoh`).
- Anyone can *view* dogs; only `alexis.almeida@icloud.com` and `yvette@yalmeida.com` can *edit*, enforced by database Row-Level Security.
- Styling uses the **Miami Vein "Spanish Villa Spa" design system** (`colors_and_type.css` + `fonts/`).

## First-time setup
1. Open `admin.html`.
2. Click **Create account** (email is pre-filled). Choose a password.
3. You're in — start adding dogs.

## Deploy
Drag this whole folder onto https://app.netlify.com/drop, or connect it as a new Netlify site. No build step needed.

## Run locally
Open `index.html` in a browser, or serve the folder: `python3 -m http.server`.

# Bhagat Jee Tax Associates & Company — Website

A responsive, static five-page website for GitHub Pages or any static web host.

## Pages
- `index.html` — Homepage
- `about.html` — Company and director introduction
- `services.html` — Services overview
- `pricing.html` — Selected advertised starting prices
- `contact.html` — Phone, WhatsApp, email, and enquiry form

## Before publishing
1. Review all text and confirm the service descriptions and prices with the client.
2. Replace the Swati Bhagat portrait placeholder with an approved professional photo, if available. See below.
3. Confirm the address, phone, email and business/qualification descriptions are correct.
4. Check all contact links on desktop and mobile.

## Add the director's portrait
The current design intentionally uses a portrait placeholder. To replace it:
1. Put the approved image in `assets/` and name it `swati-bhagat.jpg`.
2. In `index.html`, find `<div class="portrait-placeholder"> ... </div>` inside `.portrait-frame` and replace that placeholder block with:
   `<img class="director-photo" src="assets/swati-bhagat.jpg" alt="Swati Bhagat, Director of Bhagat Jee Tax Associates & Company">`
3. In `about.html`, replace the `<div class="portrait-placeholder about-placeholder"> ... </div>` with the same image tag.
4. Add this to the end of `css/style.css`:
   `.director-photo{position:relative;z-index:1;width:100%;height:100%;object-fit:cover;object-position:center top;border-radius:inherit}`

If the photo has a different filename, update the `src` paths accordingly.

## Free publishing using GitHub Pages
1. Sign in to GitHub or create an account at https://github.com/.
2. Create a new **public** repository, for example `bhagat-jee-website`.
3. Upload the contents of this folder (not just the ZIP file) into the repository. `index.html` should be at the repository root.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then click **Save**.
7. Wait a few minutes and revisit the Pages section for the published URL. It normally looks like `https://YOUR-USERNAME.github.io/bhagat-jee-website/`.
8. Open the URL on a phone and desktop and test every page, phone link, WhatsApp link and email link.

GitHub Pages settings and labels can change; use GitHub's current documentation if your screen differs:
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Contact form behavior
This is a static site, so the contact form opens the visitor's default email app with a prepared message. It does not store submissions or send them automatically from a server. If you need reliable form submissions without the visitor's email app, connect a form service or backend later.

## Notes
- The logo is a simple original SVG placeholder and can be replaced with the client's official logo.
- Prices are copied from the supplied promotional posters and should be reconfirmed before publication.
- The website does not claim that a professional qualification or statutory authorisation exists. Please confirm any regulated service wording with the client before publishing.
- The site loads Google Fonts from Google Fonts; if a visitor is offline, fallback fonts will be used.

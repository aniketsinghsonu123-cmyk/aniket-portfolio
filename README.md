# Aniket Kumar Singh — Digital Marketing Portfolio

A modern, responsive static portfolio website built with HTML, CSS, and JavaScript. It is designed for free hosting on GitHub Pages.

## Files
- `index.html` — portfolio content and sections
- `style.css` — responsive styling and animations
- `script.js` — mobile navigation, photo placeholder, copy-email button, active navigation
- `assets/profile.jpg` — add your portrait here (see below)

## Add your profile photo
1. Choose a clear, professional photo.
2. Rename it to `profile.jpg`.
3. Put it inside the `assets` folder, so the path is `assets/profile.jpg`.
4. Refresh the website. The placeholder will automatically be replaced by your photo.

Recommended: a portrait-oriented image, ideally at least 700 px tall. The page crops the photo to fit its frame.

## Replace portfolio placeholders
In `index.html`, find the `SELECTED WORK` section. Replace the four placeholder artwork blocks with your real project images and descriptions when ready. You can add image files to `assets/` and use HTML like:
```html
<img src="assets/clinic-poster.jpg" alt="Healthcare campaign poster">
```
Only add campaign results or performance figures if you have verified data.

## Publish free using GitHub Pages
1. Sign in or create an account at https://github.com/.
2. Click **New repository**. Name it `aniket-portfolio` (or another name), choose **Public**, and create it.
3. On the repository page, choose **Add file → Upload files**.
4. Upload `index.html`, `style.css`, and `script.js`, plus the `assets` folder. Keep the same folder structure.
5. Click **Commit changes**.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**.
8. Select branch `main` and folder `/(root)`, then click **Save**.
9. Wait a few minutes. GitHub Pages will show your published URL in the Pages settings. It will usually look like:
   `https://YOUR-USERNAME.github.io/aniket-portfolio/`

## Update the website later
Edit a file locally or directly on GitHub, then commit the changes. GitHub Pages automatically republishes the site.

## Important
- The site uses a Google Fonts CDN; if unavailable, it falls back to system fonts.
- This is a static portfolio. It does not include a server-side contact form. Email and phone links work directly.
- Current job and experience details are based on the information provided. Confirm job dates and role wording before publishing publicly.

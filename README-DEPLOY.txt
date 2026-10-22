GMP SERVICES WEBSITE UPDATE — CONTACT + LOGO FIX

Package contents: index.html, assets/gmp-logo.png, privacy.html, terms.html, thank-you.html, robots.txt, sitemap.xml.

IMPORTANT SAFETY
- Keep your existing netlify/functions/temp-mail.js and netlify.toml. Do not delete or replace them.
- This package keeps the existing homepage API calls to /.netlify/functions/temp-mail.
- The provided GMP logo is included at assets/gmp-logo.png and referenced by the homepage and favicon.

UPLOAD
1. Extract this ZIP.
2. In your existing GitHub repository, upload/replace index.html at the repository root.
3. Upload assets/gmp-logo.png so the exact path is assets/gmp-logo.png. Upload privacy.html, terms.html, thank-you.html, robots.txt, and sitemap.xml to the root if they are not already there.
4. Do not upload or replace netlify/functions/temp-mail.js or netlify.toml. Commit changes and wait for Netlify deploy to finish.
5. Test https://gmp-services.org/assets/gmp-logo.png directly, then test the homepage and create/refresh inbox.

CONTACT FORM (REQUIRED NETLIFY SETUP)
The HTML form is a Netlify Forms form. A code change alone cannot activate Netlify's form processing or email notifications. After deploying:
1. Open Netlify and select the site magenta-narwhal-8340b8.
2. Open Forms. Check that a form named contact has been detected. If Forms is disabled, enable form detection in the site's Forms settings and trigger a new deploy.
3. After deployment, submit a test message from the live website.
4. In Forms / form notifications, add an email notification to arshaddreshak786@gmail.com.
5. If it still says temporary unavailable, check Netlify deploy logs and Forms settings; do not change the temporary email API function.

Contact details included in this version:
Email: arshaddreshak786@gmail.com
Phone / WhatsApp: +92 336 746 2522
LinkedIn: https://www.linkedin.com/in/ar2522/

NOTE: Google AdSense ad slots are placeholders, not live ads. Add the real AdSense publisher code only from your approved AdSense account. No package can guarantee AdSense approval or Google ranking.

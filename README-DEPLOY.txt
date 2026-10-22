GMP SERVICES WEBSITE UPDATE — READ FIRST

This package updates the public website without replacing the existing Netlify function.
Files:
- index.html (redesigned homepage; retains existing /.netlify/functions/temp-mail API actions)
- assets/gmp-logo.png (provided GMP logo, if the uploaded logo was available)
- privacy.html
- terms.html
- thank-you.html
- robots.txt
- sitemap.xml

IMPORTANT:
1. Do NOT delete or replace netlify/functions/temp-mail.js or netlify.toml.
2. Upload/replace index.html in the GitHub repository root.
3. Upload the assets folder and the four root files listed above to the repository root.
4. Netlify Forms: after deployment, open Netlify > Forms and check that a form named "contact" appears. Then configure form submission email notifications to arshaddreshak786@gmail.com. The first submission may be needed for detection; check Forms after deploy.
5. Phone/WhatsApp and LinkedIn URL were not found in the supplied current project/context, so this version does NOT invent them. The contact section explicitly says to add verified public details. Replace that line after providing the correct public phone number and LinkedIn URL.
6. Ad slots are placeholders only. Do not paste ads or claim AdSense approval. Apply for AdSense separately, add the real publisher code only after approval, and ensure privacy/cookie disclosures match the services actually enabled.
7. SEO foundations are included (title, description, canonical, Open Graph, structured organization data, sitemap, robots, responsive layout). No file can guarantee a high Google ranking; useful original content, site performance, indexing, and trust matter.
8. Existing temporary inbox behavior depends on the current Netlify function and TRY... API environment variable. The UI calls the same endpoint/actions as before.

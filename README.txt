RAJA CHAMUNDA MANDAP SERVICE — OPTIMIZED WEBSITE
================================================

Pages:
- index.html      Home
- about.html      About
- services.html   Services
- gallery.html    Gallery
- contact.html    Contact
- style.css       Shared responsive styling
- script.js       Mobile navigation
- _headers        Netlify caching and security headers

Performance improvements:
- Kept all 8 supplied photos and converted them to WebP.
- Replaced remote Unsplash hero backgrounds with the supplied local photos.
- Gallery uses real image elements with lazy loading and async decoding.
- Added image dimensions to reduce layout shift.
- Added font preconnect and moved font loading out of CSS @import.
- Deferred the shared JavaScript.
- Reduced sticky navigation blur work.
- Added long-lived caching for WebP images via Netlify _headers.

Deploy:
1. Extract this ZIP.
2. Upload the contents of this folder to your Netlify site, or push the contents to your GitHub repository.
3. Keep _headers in the published site root so Netlify applies caching rules.

All five HTML pages and the original site content/design structure are retained.

# Nathaphat Portfolio Website

Static English portfolio. Open `index.html`, or serve this folder with a local static web server.

## Content

- Introduction and education
- One Klangone internship and four academic projects
- Expandable project context, contribution, and output
- Full-size project image links
- Tools, languages, and contact details
- Downloads: original Portfolio PDF, Resume PDF, internship certificate PNG, and graduation certificate PDF

## Sources and editorial decisions

Project content and dates follow the supplied Portfolio. The internship company name is supported by the Resume and internship certificate. Graduation is updated to 7 May 2026 using the official graduation certificate. The study module is described as a module, not an officially declared major. No numerical performance claims, testimonials, live demo URLs, or proficiency levels were invented.

The source Resume still uses an expected April 2026 graduation date, June–October 2024 for the debt project, and January–March 2026 for the rice project. Its download is an unchanged copy; those differences need correction in a future document revision. The Portfolio is also unchanged and contains personal information omitted from the web page. Review the downloadable documents before public deployment. The transcript and background-check document are not included in the website.

## Verification

Checked desktop (1440px) and mobile (390px): no horizontal overflow or JavaScript errors; project detail disclosures and full-size image links work; all four document downloads succeed; mobile menu opens and closes with Escape. All six displayed images load. Navigation has keyboard focus indicators and reduced-motion support. No dependency installation or build step is needed.

## Wording review

Website copy has been reviewed against the supplied sources for grammar, clarity, personal versus team contributions, and unsupported claims. External review in the user-specified “ตรวจสอบคำของ Ai” destination remains pending identification of that chat or tool. Do not describe it as completed until the review is received and applied.


## Full project documents

Added unmodified source copies under `documents/`: Household Debt Magazine (25 pages), Germinated Brown Rice Presentation (28 pages), and International Air Travel Demand Presentation (54 pages). Each matching project has separate read and download links, with file size and page count. The original filenames are retained in the project root. The EV infographic PDF was subsequently added from `final inter.pdf`; the household debt infographic PNG was also added with an inline preview and separate full-size/download links. A standalone chatbot export/demo has not been found; the workflow image remains available.


## Logo, color, and motion refresh

The editable SVG monogram is `assets/logo-nl.svg`, also used as the favicon and footer mark. The header uses the same geometry inline for a brief line-drawing animation. Violet remains the primary action color; sage, warm paper, and deep teal distinguish supporting sections. Headings use the locally bundled Archivo font. The tools marquee can be paused on touch and desktop, retains that pause when scrolling away and back, and respects reduced motion. Hover effects and logo motion are disabled when reduced motion is requested. This revision is a local preview and has not yet replaced the deployed version.


## Vercel Web Analytics

Installed the official static HTML integration: the `window.va` queue and deferred `/_vercel/insights/script.js` loader in `index.html`. No framework or package build is required. Deployed to production on 22 October 2026 (deployment `dpl_B2t38o7QnkVhKiDLoQccw4yLkEEm`). Verified that the production analytics script returns 200 with no page JavaScript errors. The Vercel-served script intentionally excludes automated/headless browsers; automated checks therefore do not establish a counted page view. Dashboard counts were not independently confirmed.


## FLAVOGEN client project (2026-11-18)

Added the FLAVOGEN agricultural product website (from `bn-web-agriculture`) as a client project between the chatbot case study and the academic project grid. The screenshot `assets/flavogen-website.jpg` is the site's home page at 1440 × 900. The section heading and About text now say one internship, one client website, and four academic projects. Checked locally at desktop and 375px mobile: no horizontal overflow, image loads. The downloadable resume was replaced with `bn-portfolio/resume/resume-nathaphat-lappanopakorn-v003.pdf` (old copy in the same archive folder). Deployed to production on 18 November 2026 (deployment `dpl_2HfsJvTgGz9FTqUsYQDJUUELrbGo`) and verified at https://nathaphat-portfolio.vercel.app. The pre-change `index.html`, `styles.css`, `script.js`, and README are in `bn-portfolio/_archive/2026-11-18-portfolio-site-before-flavogen/`.

Later the same day the FLAVOGEN entry was reduced from a full-width feature block to a regular card at the start of the project grid, so only the chatbot internship is featured. The wide version is kept as `index-with-wide-flavogen.html` in the same archive folder. FLAVOGEN is confirmed as a paid client project. The downloadable resume was replaced with v004. Deployed to production on 18 November 2026 (deployment `dpl_GJsMiJjXEVVj2ZCuNCyMTKmNvW68`) and verified.

Full portfolio PDF and live link (2026-11-18): `Portfolio_Nathaphat_lappanopakorn.pdf` is now `bn-portfolio/portfolio/portfolio-nathaphat-lappanopakorn-v002.pdf`, the original Canva PDF with a new page 5 "Client project" for FLAVOGEN (clickable link and QR code to https://flavogen-th.vercel.app/), so 6 pages. The page source is `bn-portfolio/portfolio/flavogen-page-v001.html`. The FLAVOGEN card has a "Visit live website" link, and the downloadable resume is v005, which adds the same link. The original PDF is in the archive folder. Deployed to production on 18 November 2026 (deployment `dpl_39gRfepwJmHrvRdsmPv7NPAJigMj`) and verified.

FLAVOGEN domain change (2026-11-19): the FLAVOGEN live link, card text, downloadable resume (now `bn-portfolio/resume/resume-nathaphat-lappanopakorn-v006.pdf`) and full portfolio PDF (now `bn-portfolio/portfolio/portfolio-nathaphat-lappanopakorn-v003.pdf`) point to https://flavogenthailand.com/ instead of flavogen-th.vercel.app.

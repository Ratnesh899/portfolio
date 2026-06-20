# Ratnesh Mishra | Full Stack Developer Portfolio

A premium dark-themed portfolio website with 3D tilt effects, glassmorphism design, and an interactive chatbot. Built with pure HTML, CSS, and vanilla JavaScript — no frameworks, no build tools.

## Features

- Dark premium theme with glassmorphism cards
- 3D tilt effects on project cards and profile photo
- Typing animation for role headlines
- Floating particles background
- Animated skill progress bars
- Scroll reveal animations
- Animated stat counters
- Fully responsive (mobile, tablet, desktop)
- Glassmorphism navbar with active-link tracking
- Contact form with toast notification
- One-click email copy
- Resume preview modal
- Offline chatbot with predefined FAQ responses
- SEO-optimized metadata and Open Graph tags
- Keyboard accessible with visible focus states

## Projects

| Project | Stack | GitHub |
|---------|-------|--------|
| Gym Management Full-Stack SaaS | React, Vite, Tailwind CSS, Node.js, Express, PostgreSQL, Drizzle ORM, Socket.IO, Groq AI | [View](https://github.com/Ratnesh899/gym-fullstack-management-website) |
| Gym Management API | Node.js, Express, PostgreSQL, Drizzle ORM, Docker | [View](https://github.com/Ratnesh899/gym-management-api) |
| Express Book Store API | Node.js, Express, PostgreSQL, Drizzle ORM | [View](https://github.com/Ratnesh899/express-book-store) |
| Pacman Java Game | Java, Swing/AWT, OOP | [View](https://github.com/Ratnesh899/pacman-java-game) |
| Diabetes Prediction Web App | Python, Flask, scikit-learn, Pandas | [View](https://github.com/Ratnesh899) |

## Folder Structure

```
portfolio/
├── index.html          # Main HTML (all sections)
├── style.css           # All styles
├── script.js           # JavaScript (typing, tilt, counters, filters)
├── chatbot.js          # Offline chatbot with FAQ responses
├── chatbot.css         # Chatbot widget styles
├── 404.html            # Custom 404 page for static hosting
├── robots.txt          # SEO crawling rules
├── sitemap.xml         # XML sitemap for search engines
├── netlify.toml        # Netlify config (security headers, redirects)
├── .gitignore
├── assets/
│   ├── Ratnesh.jpg     # Profile photo
│   ├── resume.pdf      # Downloadable resume
│   ├── gym-management.svg
│   ├── gym-management-api.svg
│   ├── book-store.svg
│   ├── pacman.svg
│   ├── diabetes-prediction.svg
│   └── ... (other SVG assets)
├── server/             # Optional local Node.js dev server
│   ├── index.js
│   └── package.json
└── README.md
```

## How to Run Locally

### Option 1 — Open directly (recommended)

Open `index.html` in any modern browser. No server required.

### Option 2 — Local dev server (for chatbot API)

```bash
cd server
npm install
npm start
```

Visit `http://localhost:3001`.

> Note: The portfolio works fully without the server. The chatbot uses offline predefined responses when running as a static site.

---

## Deployment

### Deploy to Netlify (from GitHub)

1. Push this repo to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/Ratnesh899/portfolio.git
   git push -u origin main
   ```

2. Go to [https://app.netlify.com](https://app.netlify.com) and log in with GitHub.

3. Click **"Add new site" → "Import an existing project"**.

4. Select your GitHub repository.

5. Netlify auto-detects the static site — no build command needed.
   - **Publish directory:** `.` (root)
   - No build command required.

6. Click **"Deploy site"**.

7. Your site will be live at `https://<random-name>.netlify.app`.

8. To set a custom domain:
   - Go to **Site settings → Domain management**.
   - Add your custom domain (e.g., `ratneshmishra.dev`).
   - Update your domain's DNS with the Netlify-provided records.

**Netlify features included:**
- `netlify.toml` provides security headers (CSP, X-Frame-Options, etc.)
- `404.html` handles missing pages
- `_redirects`-free: all redirects defined in `netlify.toml`

### Deploy to GitHub Pages

1. Push your repo to GitHub.

2. Go to **Settings → Pages** in your repository.

3. Under **"Build and deployment"**, select:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or `master`)
   - **Folder:** `/ (root)`

4. Click **"Save"**.

5. Your site will be live at `https://Ratnesh899.github.io/portfolio/` (or your custom domain).

6. If using a custom domain, set it in the **Pages** settings and add a `CNAME` file (or configure via DNS).

### Deploy to Vercel

1. Push your repo to GitHub.

2. Go to [https://vercel.com](https://vercel.com) and log in with GitHub.

3. Click **"Add New Project"** → import your GitHub repository.

4. **Framework preset:** Leave as "Other" (static site detected automatically).

5. **Build command:** Leave blank.
   **Output directory:** Leave as default.

6. Click **"Deploy"**.

7. Your site will be live at `https://portfolio-<random>.vercel.app`.

### Custom Domain (any platform)

1. Buy a domain from any registrar (e.g., Namecheap, GoDaddy).

2. Follow the hosting platform's DNS setup:
   - **Netlify:** Add custom domain in Site settings → Domain management.
   - **GitHub Pages:** Add in Settings → Pages → Custom domain.
   - **Vercel:** Add in Project settings → Domains.

3. Configure DNS records:
   - `A` record pointing to the hosting platform's IP.
   - `CNAME` record for `www` subdomain.

4. Wait for DNS propagation (up to 48 hours).

---

## Security Checklist

Before pushing to GitHub, verify:

- [ ] No API keys, `.env` values, or tokens in any frontend file
- [ ] All external links use `target="_blank" rel="noopener noreferrer"`
- [ ] User input in chatbot uses `textContent` (not `innerHTML`) to prevent XSS
- [ ] No `eval()`, `new Function()`, or unsafe dynamic code execution
- [ ] `.env` and `node_modules` listed in `.gitignore`
- [ ] Only relative paths used (no `E:\`, `localhost`, or absolute Windows paths)
- [ ] All image paths use `./assets/` prefix
- [ ] Resume PDF paths use `./assets/resume.pdf`
- [ ] `server/.env` is gitignored if it exists
- [ ] No hardcoded credentials anywhere

> **Warning:** Never commit `.env` files, API keys, or secrets to GitHub. If you suspect a secret was committed, revoke it immediately and use [GitHub secret scanning](https://docs.github.com/en/code-security/secret-scanning).

---

## Tech Stack

- HTML5 (semantic landmarks)
- CSS3 (custom properties, Flexbox, Grid, animations, glassmorphism)
- Vanilla JavaScript (ES6+)
- SVG for icons and placeholder images
- No external dependencies or CDN scripts

## Author

**Ratnesh Mishra**
- GitHub: [https://github.com/Ratnesh899](https://github.com/Ratnesh899)
- LinkedIn: [https://www.linkedin.com/in/ratnesh-mishra-595a00312/](https://www.linkedin.com/in/ratnesh-mishra-595a00312/)
- Email: ratneshmishra497@gmail.com
- Portfolio: [https://ratnesh-mishra-portfolio.netlify.app](https://ratnesh-mishra-portfolio.netlify.app)

# Nitin Solanki — Portfolio (React + Vite)

## 🚀 Quick Start

```bash
# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev


# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

---

## 🎨 Two Theme Vibes

| Dark Mode 🌑 | Light Mode ☀️ |
|---|---|
| Deep black `#030810` bg | Sky blue `#C1E8FF` bg |
| Electric cyan `#00E5FF` primary | Deep navy `#021024` primary |
| Green `#00FF88` secondary | Blue `#052659` secondary |
| Cyberpunk / Space feel | Premium blue professional feel |

Toggle between themes using the button in the navbar.

---

## 📁 Project Structure

```
nitin-portfolio/
├── public/
│   ├── favicon.svg
│   ├── photo.jpg                ← Add your photo here (optional)
│   └── Nitin_Solanki_Resume.pdf ← Your CV (already included)
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            Navigation bar with theme toggle
│   │   ├── Navbar.module.css     Navbar styles
│   │   ├── Hero.jsx              Hero section with particles & typing
│   │   ├── Hero.module.css       Hero styles
│   │   ├── About.jsx             About section with info
│   │   ├── About.module.css      About styles
│   │   ├── Skills.jsx            Tech stack cards
│   │   ├── Skills.module.css     Skills styles
│   │   ├── Internship.jsx        Timeline of internships
│   │   ├── Internship.module.css Internship styles
│   │   ├── Projects.jsx          Project cards grid
│   │   ├── Projects.module.css   Projects styles
│   │   ├── Contact.jsx           Contact form (Web3Forms)
│   │   ├── Contact.module.css    Contact styles
│   │   ├── Footer.jsx            Footer with social links
│   │   ├── Footer.module.css     Footer styles
│   │   ├── ScrollToTop.jsx       Floating scroll-to-top button
│   │   ├── ScrollToTop.module.css
│   │   ├── WaveDivider.jsx       Animated SVG wave between sections
│   │   └── WaveDivider.module.css
│   │
│   ├── hooks/
│   │   └── useReveal.jsx         Scroll reveal animation hook
│   │
│   ├── data.js                   ✏️ ALL your content lives here
│   ├── App.jsx                   Root component, theme logic
│   ├── main.jsx                  React entry point
│   └── index.css                 Global CSS variables & base styles
│
├── index.html
├── vite.config.js
└── package.json
```

---

## ✏️ How to Edit Content

**Everything is in `src/data.js` — edit there only:**

| What to change | Where in data.js |
|---|---|
| Name, email, phone | `PERSONAL` object |
| Bio paragraphs | `PERSONAL.bio` array |
| Tagline typing text | `PERSONAL.taglines` array |
| Skills categories | `SKILLS` array |
| Internship details | `INTERNSHIPS` array |
| Projects | `PROJECTS` array |
| Contact form key | `WEB3FORMS_KEY` |

---

## 📷 Add Your Profile Photo

1. Copy your photo file to: `public/photo.jpg`
2. Open `src/data.js`
3. Find this line and uncomment it:
   ```js
   // photo: "/photo.jpg",
   ```
   Change to:
   ```js
   photo: "/photo.jpg",
   ```
4. Save — photo appears instantly in dev server

---

## ➕ Add a New Project

Open `src/data.js` and add to the `PROJECTS` array:

```js
{
  id:         "04",
  title:      "Your Project Name",
  desc:       "Short description of what it does.",
  highlights: ["Key feature 1", "Key feature 2", "Key feature 3"],
  tags:       ["React", "Node.js", "MySQL"],
  githubUrl:  "https://github.com/NitinSolanki-11/your-repo",
  hostedUrl:  "",   // Leave "" for "Coming Soon", or add live URL
},
```

---

## 📧 Contact Form (Web3Forms)

The form uses Web3Forms. Your access key is already configured in `data.js`:

```js
export const WEB3FORMS_KEY = "df82fe78-cefb-4b8a-8d73-fee45f325ccb"
```

Messages go to: **nitin5115solanki@gmail.com**

---

## 🌐 Deploy for Free

### Netlify (easiest)
```bash
npm run build
# Upload the dist/ folder to netlify.com/drop
```

### Vercel
```bash
npm i -g vercel
vercel
# Follow prompts — auto detects Vite
```

### GitHub Pages
```bash
# In vite.config.js add: base: '/your-repo-name/'
npm run build
# Push dist/ folder to gh-pages branch
```

---

## 💡 Features

- ✅ Dark/Light theme (completely different visual styles)
- ✅ Animated particle background (canvas)
- ✅ Typing animation in hero
- ✅ SVG wave dividers between all sections
- ✅ Scroll reveal animations on all sections
- ✅ Bigger profile photo with rotating rings
- ✅ Download CV button
- ✅ Scroll-to-top button
- ✅ Working contact form (Web3Forms)
- ✅ WhatsApp button
- ✅ Glowing nav border on scroll
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ CSS Modules — every component has its own .css file

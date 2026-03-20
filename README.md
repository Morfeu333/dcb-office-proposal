# DCB Office AI Automation - Proposal Site

Complete proposal application with frames and transcripts, ready to deploy on GitHub Pages.

## 🚀 Quick Deploy to GitHub Pages

### Method 1: Automatic Deploy (Recommended)

1. **Create a GitHub repository**
   ```bash
   cd dcb-office-proposal-site
   git init
   git add .
   git commit -m "Initial commit: DCB Office AI Automation Proposal"
   ```

2. **Push to GitHub**
   ```bash
   # Replace with your actual repository URL
   git remote add origin https://github.com/YOUR_USERNAME/dcb-office-proposal.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Select **/ (root)** folder
   - Click **Save**

4. **Your site will be live at:**
   ```
   https://YOUR_USERNAME.github.io/dcb-office-proposal/
   ```

### Method 2: Deploy with GitHub Actions (Auto-deploy on push)

Already configured! The `.github/workflows/deploy.yml` file is included.

Just push to `main` branch and it deploys automatically.

---

## 📁 Project Structure

```
dcb-office-proposal-site/
├── index.html          # Main proposal page
├── frames.html         # Meeting frames gallery
├── transcript.html     # Meeting transcripts
├── css/
│   └── styles.css      # Complete stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── assets/             # Images, icons (add as needed)
├── frames/             # Meeting frame images (add as needed)
├── .github/
│   └── workflows/
│       └── deploy.yml  # Auto-deploy configuration
└── README.md           # This file
```

---

## ✨ Features

- ✅ **Fully responsive** (mobile, tablet, desktop)
- ✅ **Modern dark theme** with Inter + JetBrains Mono fonts
- ✅ **Smooth animations** and scroll effects
- ✅ **Interactive frames gallery** with modal lightbox
- ✅ **Multi-tab transcripts** (March 18, March 9, 30 Q&A)
- ✅ **Payment integration** (Stripe button)
- ✅ **SEO optimized** meta tags
- ✅ **Fast loading** (minimal dependencies)

---

## 🛠 Local Development

### Prerequisites
- None! Pure HTML/CSS/JS (no build step required)

### Run Locally
Simply open `index.html` in your browser:

```bash
# Option 1: Direct open
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux

# Option 2: Local server (recommended)
python3 -m http.server 8000
# Then visit: http://localhost:8000

# Option 3: PHP server
php -S localhost:8000

# Option 4: Node.js server
npx http-server -p 8000
```

---

## 🎨 Customization

### Update Payment Link
Edit `index.html` and search for:
```html
https://buy.stripe.com/test_4gw5ng0dBca37O89AB
```
Replace with your production Stripe link.

### Add Real Meeting Frames
1. Add frame images to `frames/` directory
2. Update `frames.html`:
   ```html
   <div class="frame-image" style="background-image: url('frames/frame-01.jpg');"></div>
   ```

### Change Colors
Edit `css/styles.css` → `:root` variables:
```css
:root {
    --accent: #3b82f6;     /* Blue */
    --success: #22c55e;    /* Green */
    --danger: #ef4444;     /* Red */
    /* etc. */
}
```

### Update Content
- **Phases:** Edit the phase cards in `index.html`
- **Transcripts:** Edit `transcript.html` sections
- **Meta tags:** Update `<meta>` tags in `<head>`

---

## 📊 Analytics (Optional)

Add Google Analytics or Plausible:

```html
<!-- Add to <head> of index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🔗 Link Sharing

### Create Short URLs
Use [bit.ly](https://bit.ly) or [short.io](https://short.io) to create a memorable link:

```
https://dcb.ai/proposal
↓
https://YOUR_USERNAME.github.io/dcb-office-proposal/
```

### Social Media Preview
The site includes Open Graph meta tags. When shared on:
- **Telegram/WhatsApp:** Shows title + description
- **Facebook/LinkedIn:** Shows preview card
- **Twitter:** Shows summary card

---

## 🐛 Troubleshooting

### GitHub Pages not deploying?
1. Check repository is **public** (or you have GitHub Pro for private repos)
2. Ensure GitHub Pages is enabled in **Settings → Pages**
3. Wait 2-3 minutes after first push for DNS propagation
4. Check **Actions** tab for build errors

### Images not loading?
- Use **relative paths** (e.g., `images/logo.png` not `/images/logo.png`)
- Ensure file names match exactly (case-sensitive on Linux/GitHub)

### Stripe button not working?
- Check link is correct (no test mode in production)
- Verify Stripe account is active
- Test in incognito to rule out ad blockers

---

## 📝 Maintenance Checklist

### Before sending to Nadeer:
- [ ] Update Stripe link to production (remove `test_`)
- [ ] Add real meeting frame images
- [ ] Verify all links work (NotebookLM, Telegram, etc.)
- [ ] Test on mobile device
- [ ] Test payment flow
- [ ] Spell-check all content
- [ ] Update "Valid until" date if needed

### After Nadeer approves:
- [ ] Add Google Analytics (optional)
- [ ] Set up domain redirect (optional)
- [ ] Archive proposal after project completion

---

## 🎯 Next Steps

1. **Test locally** — Open `index.html` and click through everything
2. **Push to GitHub** — Follow Quick Deploy steps above
3. **Send to Nadeer** — Share the GitHub Pages URL
4. **Monitor** — Check if payment button is clicked (Stripe dashboard)

---

## 📞 Support

Built by **Automatrix** (Lucas + Gustavo)

Questions? [Telegram: @lucasautomatrix](https://t.me/lucasautomatrix)

---

**License:** Private (for DCB Office only)  
**Last Updated:** March 19, 2026

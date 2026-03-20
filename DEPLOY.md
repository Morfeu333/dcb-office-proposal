# 🚀 Deploy Instructions for GitHub Pages

## Step-by-Step Guide

### 1. Create GitHub Repository

Go to [github.com/new](https://github.com/new) and create a repository:
- **Name:** `dcb-office-proposal` (or any name you prefer)
- **Visibility:** Public (required for free GitHub Pages)
- **Initialize:** Leave empty (we'll push our code)

### 2. Push Code to GitHub

```bash
cd dcb-office-proposal-site

# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: DCB Office AI Automation Proposal"

# Add remote (replace with your actual URL)
git remote add origin https://github.com/YOUR_USERNAME/dcb-office-proposal.git

# Push to main
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source:** Deploy from a branch
   - **Branch:** main
   - **Folder:** / (root)
5. Click **Save**

### 4. Wait for Deployment

GitHub will build and deploy your site. This takes 2-5 minutes.

Check the **Actions** tab to see deployment progress.

### 5. Access Your Site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/dcb-office-proposal/
```

Example:
```
https://lucasautomatrix.github.io/dcb-office-proposal/
```

---

## 🎯 Quick Commands

```bash
# Clone this directory
cd dcb-office-proposal-site

# Initialize and push
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/dcb-office-proposal.git
git push -u origin main

# Done! GitHub Pages will auto-deploy
```

---

## 🔄 Updates After Initial Deploy

Whenever you make changes:

```bash
git add .
git commit -m "Update proposal content"
git push
```

GitHub Actions will automatically redeploy (see `.github/workflows/deploy.yml`).

---

## 🌐 Custom Domain (Optional)

### If you want `proposal.dcboffice.com` instead of GitHub Pages URL:

1. Buy domain or use existing
2. Add CNAME record:
   ```
   proposal.dcboffice.com → YOUR_USERNAME.github.io
   ```
3. In GitHub repository:
   - Go to **Settings → Pages**
   - Under "Custom domain", enter `proposal.dcboffice.com`
   - Click **Save**
4. Wait for DNS propagation (5-60 minutes)
5. Enable "Enforce HTTPS"

---

## ✅ Pre-Flight Checklist

Before pushing to GitHub:

- [ ] **Update Stripe link** — Replace `test_` with production link
- [ ] **Test locally** — Open `index.html` in browser
- [ ] **Verify all links** — Click through every link
- [ ] **Mobile test** — Check on phone
- [ ] **Spell-check** — Review all text
- [ ] **Update contact info** — Verify Telegram link works

---

## 🎨 Alternative: Deploy to Vercel/Netlify

If you prefer Vercel or Netlify instead of GitHub Pages:

### Vercel
```bash
npx vercel --prod
```

### Netlify
Drag the `dcb-office-proposal-site` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

Both provide:
- Faster builds
- Better analytics
- Custom domains (easier setup)
- Form handling (if you add contact forms)

---

## 📊 Track Visits (Optional)

### Add Plausible Analytics (Privacy-friendly)

1. Sign up at [plausible.io](https://plausible.io)
2. Add this to `<head>` in `index.html`:

```html
<script defer data-domain="YOUR_DOMAIN.github.io" src="https://plausible.io/js/script.js"></script>
```

### Or Google Analytics

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🐛 Common Issues

### "404 - File not found"
- Check GitHub Pages is enabled
- Verify branch is `main` and folder is `/`
- Wait 2-3 minutes after first push

### "Your site is ready to be published at..."
- This means it's still building — wait 2-5 minutes
- Refresh the Settings → Pages page

### Images not loading
- Use **relative paths**: `images/logo.png` ✅
- NOT absolute: `/images/logo.png` ❌
- GitHub Pages serves from subdirectory: `/dcb-office-proposal/`

### CSS/JS not loading
- Check file names match exactly (case-sensitive)
- Verify paths in `index.html` (`css/styles.css`, `js/main.js`)

---

## 💡 Pro Tips

1. **Test with Python server first**
   ```bash
   python3 -m http.server 8000
   ```
   Then visit http://localhost:8000

2. **Use browser DevTools**
   - Press F12 to check for errors
   - Look in Console tab for issues

3. **Validate HTML**
   - Visit [validator.w3.org](https://validator.w3.org)
   - Paste your GitHub Pages URL

4. **Check mobile**
   - Chrome DevTools → Toggle device toolbar (Cmd+Shift+M)
   - Test iPhone, iPad, Android viewports

---

## 📞 Need Help?

Message Lucas: [t.me/lucasautomatrix](https://t.me/lucasautomatrix)

---

**Last Updated:** March 19, 2026

# personal-website

A sleek, modern, static portfolio for **Chloe Lim**. No build step required.

## Local preview
Open `index.html` in a browser, or use a simple HTTP server:

```bash
# Python 3
python -m http.server 8080
```

Visit http://localhost:8080

## Deploy on GitHub Pages (free)

### Option A — Project Pages (keep repo name `personal-website`)
1. Create a new public repo named **personal-website** on GitHub.
2. Push this code (commands below).
3. In the repo: **Settings → Pages**.
   - **Build and deployment**: choose **Deploy from a branch**.
   - **Branch**: `main` / `/ (root)`.
4. Pages URL will be: `https://<your-username>.github.io/personal-website/`

### Option B — User/Org Pages (root domain)
If you want the root URL (no `/personal-website` suffix), create a repo named **<your-username>.github.io** and push this code there. Then Pages URL is `https://<your-username>.github.io/`.

### Custom domain (optional)
If you own a domain (e.g., `chloelim.me`), set a CNAME in **Settings → Pages** and add the required DNS records. You can also add a `CNAME` file at the repo root with your domain inside.

## Push commands

```bash
# from the local folder containing this README
git init
git add .
git commit -m "Initial commit: personal website"
git branch -M main
git remote add origin git@github.com:<your-username>/personal-website.git
git push -u origin main
```

> If you prefer GitHub Actions for deployment instead of "Deploy from a branch", keep the default branch `main` and enable Pages with Actions. A workflow is included under `.github/workflows/pages.yml`.

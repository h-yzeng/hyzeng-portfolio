# GitHub Actions Setup

Simple guide to deploy your portfolio to Vercel automatically when you push to GitHub.

## 🔐 Setup GitHub Secret

You only need **one secret** for automatic deployment:

### VERCEL_TOKEN

1. Go to [Vercel Account Settings → Tokens](https://vercel.com/account/tokens)
2. Click **"Create Token"**
3. Give it a name (e.g., `GitHub Actions`)
4. Copy the generated token
5. Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions**
6. Click **"New repository secret"**
7. Name: `VERCEL_TOKEN`
8. Paste your token and save

## 🚀 How It Works

The workflow automatically:

- ✅ Runs type checking
- ✅ Builds your portfolio
- ✅ Deploys to Vercel

**Triggers:** Every push to the `main` branch

## 🔧 Alternative: Use Vercel's GitHub Integration

If you prefer a simpler setup without GitHub Actions:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Deploy!

Vercel will automatically deploy on every push. You can delete the `.github/workflows` folder if you use this method.

## 📚 Resources

- [Vercel Docs](https://vercel.com/docs)
- [SvelteKit on Vercel](https://kit.svelte.dev/docs/adapter-vercel)

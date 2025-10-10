# Abo Ameen Portfolio Website

> A modern, responsive portfolio website showcasing teaching expertise and development projects.

## 🚀 Live Site
- **Main Site**: Coming soon on GitHub Pages
- **Repository**: https://github.com/menoo20/AmeenS

## 📋 Features

- ✨ Modern, animated UI with Framer Motion
- 🎨 Beautiful gradient designs and glassmorphism effects
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎓 Teaching portfolio and educational projects
- 💻 Developer portfolio with project showcases
- 📜 Interactive certificates gallery
- 🌟 3D visualizations and animations
- ⚡ Fast, static-generated pages
- 🔍 SEO optimized

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js
- **Icons**: Lucide React, React Icons
- **Deployment**: GitHub Pages

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/menoo20/AmeenS.git

# Navigate to project directory
cd AmeenS

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build & Deploy

### Local Build
```bash
npm run build
```
The static site will be generated in the `out/` folder.

### Deploy to GitHub Pages

#### Option 1: Automatic (Recommended)
1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Wait 2-3 minutes for deployment to complete

#### Option 2: Manual
```bash
npm run deploy
```

### GitHub Repository Settings
1. Go to your repository **Settings**
2. Navigate to **Pages** (left sidebar)
3. Under **Source**, select:
   - Source: **GitHub Actions**
4. Save and wait for deployment

## 📁 Project Structure

```
abo-ameen-fullstack/
├── public/              # Static assets
│   ├── assets/         # Images, documents
│   └── .nojekyll       # GitHub Pages config
├── src/
│   ├── app/            # Next.js pages
│   │   ├── about/     # About page
│   │   ├── developer/ # Developer portfolio
│   │   └── teaching/  # Teaching portfolio
│   ├── components/     # React components
│   └── data/          # Data files
├── .github/
│   └── workflows/     # GitHub Actions
└── next.config.js     # Next.js configuration
```

## 🎯 Pages

- `/` - Homepage with dual portfolio navigation
- `/about` - Personal story and expertise
- `/developer` - Development projects and skills
- `/teaching` - Teaching experience and services

## 🔧 Configuration

### Custom Domain (Optional)
1. Add `CNAME` file to `public/` folder:
   ```
   yourdomain.com
   ```
2. Configure DNS with your domain provider
3. Update GitHub Pages settings

### Base Path (if deploying to username.github.io/repo-name)
Update `next.config.js`:
```javascript
module.exports = {
  basePath: '/repo-name',
  assetPrefix: '/repo-name/',
  // ... rest of config
}
```

## 📊 Performance

- ✅ All pages are static and pre-rendered
- ✅ Optimized images and assets
- ✅ Code splitting and lazy loading
- ✅ Average page size: ~105 KB
- ✅ Fast initial load and navigation

## 🤝 Contributing

This is a personal portfolio website. If you find any bugs or have suggestions, feel free to open an issue.

## 📝 License

This project is private and proprietary. All rights reserved © 2025 Mohammed Mahmoud Ameen.

## 📧 Contact

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [@menoo20](https://github.com/menoo20)

---

Built with ❤️ by Abo Ameen

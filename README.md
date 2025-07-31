# Kaizen Construction - Vision

A modern, responsive website for Kaizen Construction showcasing their services, team, gallery, and contact information.

## 🏗️ About

Kaizen Construction is a professional construction company dedicated to delivering high-quality construction services. This website serves as their digital presence, featuring:

- **Hero Section**: Eye-catching introduction with call-to-action
- **Services Section**: Detailed overview of construction services offered
- **About Section**: Company information and values
- **Gallery Section**: Portfolio of completed projects
- **Team Section**: Meet the construction professionals
- **Contact Section**: Easy ways to get in touch

## 🚀 Technologies Used

This project is built with modern web technologies:

- **React 18** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful icons

## 📦 Installation & Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd kaizen-builds-vision
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the website

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn/ui)
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── GallerySection.tsx
│   ├── HeroSection.tsx
│   ├── Navigation.tsx
│   ├── ServicesSection.tsx
│   └── TeamSection.tsx
├── assets/             # Images and static assets
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── main.tsx           # Application entry point
```

## 🎨 Customization

### Adding New Team Members

1. Add team member photos to `src/assets/`
2. Update the team data in `TeamSection.tsx`

### Updating Gallery

1. Add project images to `src/assets/`
2. Update the gallery data in `GallerySection.tsx`

### Modifying Services

Edit the services data in `ServicesSection.tsx` to reflect your current offerings.

## 🌐 Deployment

### Firebase Hosting (Recommended)

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase (if not already done):
   ```bash
   firebase init hosting
   ```

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

### Other Deployment Options

- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the `dist` folder after building
- **GitHub Pages**: Use GitHub Actions for automatic deployment


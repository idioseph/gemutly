# 🍽️ Gemutly

**Where Passion Meets Plate** - A modern platform connecting local chefs with diners for unforgettable private dining experiences.

## 🌟 About

Gemutly is a beautifully designed landing page for a platform that bridges the gap between passionate chefs and food lovers. The platform enables chefs to share their culinary expertise and earn flexible income while providing diners with unique, personalized dining experiences in their local communities.

## ✨ Features

### 🎨 Design & UX

- **Modern, Clean Design**: Light theme with elegant typography using Playfair Display and Inter fonts
- **Responsive Layout**: Fully responsive design that works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion powered animations for engaging user interactions
- **Interactive Elements**: Hover effects, transitions, and micro-interactions throughout

### 🏗️ Architecture

- **Component-Based**: Modular, reusable components for maintainable code
- **TypeScript**: Full type safety for better development experience
- **Performance Optimized**: Next.js 15 with Turbopack for fast development and builds
- **SEO Ready**: Optimized meta tags and semantic HTML structure

### 📱 Sections

- **Hero Section**: Compelling headline with chef and food gallery
- **How It Works**: Step-by-step process explanation
- **For Chefs**: Benefits and features for culinary professionals
- **For Diners**: Information for food enthusiasts
- **Community**: Social proof and testimonials
- **Call-to-Action**: Clear conversion points
- **Footer**: Comprehensive site navigation and contact information

## 🛠️ Tech Stack

### Core Technologies

- **Next.js 15.4.1** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework

### UI & Animation

- **Framer Motion 12.23.6** - Production-ready motion library
- **Lucide React 0.525.0** - Beautiful, customizable icons
- **Custom Fonts** - Playfair Display & Inter for typography

### Development Tools

- **ESLint** - Code linting and formatting
- **Turbopack** - Fast bundler for development
- **PostCSS** - CSS processing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/gemutly.git
   cd gemutly
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
gemutly/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── Navigation.tsx     # Navigation bar
│   │   └── ui/               # UI components
│   │       └── Button.tsx    # Custom button component
│   ├── constants/            # App constants
│   │   ├── AnimationSettings.ts # Framer Motion configs
│   │   └── Fonts.ts          # Font configurations
│   └── containers/           # Page sections
│       └── home-page/        # Home page sections
│           ├── hero-section/     # Hero section
│           ├── how-it-works/     # How it works section
│           ├── for-chefs/        # For chefs section
│           ├── for-diners/       # For diners section
│           ├── community/        # Community section
│           ├── cta/              # Call-to-action section
│           └── footer/           # Footer section
├── public/                   # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎯 Key Components

### Navigation (`src/components/Navigation.tsx`)

- Fixed navigation bar with scroll effects
- Mobile-responsive hamburger menu
- Smooth transitions and animations
- Call-to-action buttons

### Hero Section (`src/containers/home-page/hero-section/`)

- Compelling headline with gradient text effects
- Chef and food gallery with real images
- Trust indicators with user avatars
- Call-to-action buttons

### Button Component (`src/components/ui/Button.tsx`)

- Multiple variants (primary, secondary, outline)
- Different sizes (sm, md, lg)
- Icon support
- Framer Motion animations
- Hover effects and shimmer animations

## 🎨 Design System

### Colors

- **Primary**: Amber/Orange gradient (`from-amber-600 to-orange-600`)
- **Secondary**: Rose/Pink gradient for food elements
- **Background**: Light stone/gray gradients
- **Text**: Gray scale for readability

### Typography

- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)
- **Responsive scaling**: Text sizes adapt to screen size

### Animations

- **Fade In Up**: For content sections
- **Stagger Container**: For grouped elements
- **Hover Effects**: Scale and shadow transitions
- **Shimmer Effects**: Button hover animations

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:

- Mobile-first navigation with hamburger menu
- Flexible grid layouts
- Responsive typography scaling
- Touch-friendly interactive elements

## 🔧 Customization

### Adding New Sections

1. Create a new folder in `src/containers/home-page/`
2. Add your component with proper TypeScript types
3. Import and add to `src/app/page.tsx`

### Modifying Colors

Update the color scheme in:

- `src/components/ui/Button.tsx` for button colors
- Individual section components for section-specific colors
- `src/app/globals.css` for global color variables

### Adding Animations

Use the predefined animation variants in `src/constants/AnimationSettings.ts`:

- `fadeInUp` - Content fade in from bottom
- `staggerContainer` - Staggered animation for groups
- `fadeInRight` - Content fade in from right

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Unsplash** for beautiful food and chef images
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons
- **Tailwind CSS** for utility-first styling

## 📞 Contact

For questions or support, please reach out to:

- **Email**: contact@gemutly.com
- **Website**: [gemutly.com](https://gemutly.com)

---

**Built with ❤️ for the culinary community**

# AutoPrompt Clone - AI Prompt Generator

A complete 1:1 replica of the AutoPrompt.cc website - a free automatic AI prompt generator that transforms simple ideas into optimized prompts for various AI models including ChatGPT, Claude, Midjourney, and more.

![AutoPrompt Clone Screenshot](https://via.placeholder.com/800x400/dc2626/ffffff?text=AutoPrompt+Clone)

## 🌟 Features

- **Automatic Prompt Generation**: Transform simple questions into professional, optimized prompts
- **Multi-Model Support**: Compatible with ChatGPT, Claude, Midjourney, Stable Diffusion, and more
- **One-Click Copy**: Instantly copy generated prompts to clipboard
- **Context-Aware Creation**: AI intelligently adapts to your input's context
- **Responsive Design**: Fully responsive design that works on all devices
- **Real-time Generation**: See your prompts generated in real-time
- **Example Gallery**: Browse pre-built prompt templates for various use cases

## 🚀 Live Demo

Visit the live demo: [AutoPrompt Clone](https://your-deployment-url.com)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui components
- **State Management**: React Hooks (useState, useEffect)
- **Icons**: Lucide React
- **Notifications**: Sonner (toast notifications)
- **Routing**: React Router DOM

## 📦 Installation

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/autoprompt-clone.git
   cd autoprompt-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to see the application running.

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎨 Design System

The project uses a comprehensive design system with:

- **Brand Colors**: Custom red (#dc2626) with proper HSL values
- **Typography**: Tailwind's default font stack optimized for readability
- **Spacing**: Consistent spacing scale following Tailwind conventions
- **Components**: Reusable UI components built with shadcn/ui
- **Gradients**: Beautiful gradient backgrounds for enhanced visual appeal
- **Shadows**: Carefully crafted shadow system for depth and hierarchy

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui base components
│   ├── Header.tsx       # Main navigation header
│   ├── HeroSection.tsx  # Hero section with prompt generator
│   ├── ExampleCards.tsx # Example prompt gallery
│   ├── FeatureSection.tsx # Features and benefits
│   ├── HowItWorks.tsx   # How it works section
│   ├── Testimonials.tsx # User testimonials
│   ├── FAQ.tsx          # Frequently asked questions
│   └── Footer.tsx       # Footer with CTA
├── pages/               # Page components
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 error page
├── lib/                 # Utility libraries
│   └── utils.ts         # Common utility functions
├── hooks/               # Custom React hooks
│   ├── use-mobile.tsx   # Mobile detection hook
│   └── use-toast.ts     # Toast notification hook
├── index.css           # Global styles and design system
└── main.tsx            # Application entry point
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Add any environment variables here
VITE_APP_TITLE=AutoPrompt Clone
```

### Tailwind Configuration

The project uses a custom Tailwind configuration with:
- Extended color palette for the AutoPrompt brand
- Custom gradients and shadows
- Responsive breakpoints
- Animation utilities

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to a GitHub repository
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with default settings

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to [Netlify](https://netlify.com)
3. Configure redirects for React Router

### Deploy to Other Platforms

The built application is a static site that can be deployed to any hosting platform that supports static files:
- GitHub Pages
- AWS S3 + CloudFront
- Google Cloud Storage
- Firebase Hosting

## 🎯 Key Features Implementation

### Prompt Generator Engine

The core prompt generation functionality simulates an AI-powered system that:
- Analyzes user input for context and intent
- Applies model-specific optimization techniques
- Formats prompts for maximum effectiveness
- Provides instant results with copy functionality

### Responsive Design

The application is fully responsive with:
- Mobile-first design approach
- Tablet and desktop optimizations
- Touch-friendly interactive elements
- Accessible navigation and forms

### Performance Optimizations

- Component-level code splitting
- Optimized image loading
- Efficient re-rendering with React hooks
- Minimized bundle size with tree shaking

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use semantic commit messages
- Ensure all components are fully typed
- Write responsive, accessible code
- Test on multiple devices and browsers

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original design inspiration from [AutoPrompt.cc](https://www.autoprompt.cc)
- [shadcn/ui](https://ui.shadcn.com) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Lucide](https://lucide.dev) for the icon set

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/autoprompt-clone/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

## 🔮 Future Enhancements

- [ ] Backend integration for real AI prompt generation
- [ ] User authentication and prompt history
- [ ] Advanced prompt customization options
- [ ] Integration with popular AI APIs
- [ ] Prompt template marketplace
- [ ] Analytics and usage tracking
- [ ] Multi-language support
- [ ] Dark/light theme toggle

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
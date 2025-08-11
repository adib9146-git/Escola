# React + Vite + Tailwind CSS Project

A modern React-based project utilizing the latest frontend technologies and tools for building responsive web applications.

## 🚀 Features

- **React 18** - React version with improved rendering and concurrent features
- **Vite** - Lightning-fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework with extensive customization
- **React Router** - Declarative routing for React applications

## 📋 Prerequisites

- Node.js (v14.x or higher)
- npm or yarn
- VS Code (recommended)

## 🛠️ VS Code Setup & Installation

### 1. Clone or Download the Project
Download or clone this project to your local machine.

### 2. Open in VS Code
```bash
# Navigate to project directory
cd your-project-folder

# Open in VS Code
code .
```

### 3. Install Dependencies
Open the integrated terminal in VS Code (`Ctrl + ` ` or `Cmd + ` `) and run:
```bash
npm install
# or
yarn install
```

### 4. Start Development Server
Run the Vite development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:4028`

### 5. Recommended VS Code Extensions
For the best development experience, install these VS Code extensions:
- **ES7+ React/Redux/React-Native snippets** - Essential React snippets
- **Prettier - Code formatter** - Automatic code formatting
- **Tailwind CSS IntelliSense** - Tailwind class autocompletion
- **Auto Rename Tag** - Automatically rename paired HTML/JSX tags
- **Bracket Pair Colorizer** - Color matching brackets
- **GitLens** - Enhanced Git capabilities

## 📦 Available Scripts

- `npm run dev` - Start development server (recommended for local development)
- `npm run start` - Alternative start command
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run format` - Format code with Prettier

## 📁 Project Structure

```
/
├── public/              # Static assets and images
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/         # Basic UI components (Button, EditText, etc.)
│   │   └── common/     # Common components (Header, Footer)
│   ├── pages/           # Page components
│   │   └── Home/       # Home page
│   ├── styles/          # Global styles and Tailwind configuration
│   │   ├── index.css   # Global CSS imports
│   │   └── tailwind.css # Tailwind directives
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── Routes.jsx       # Application routes
├── .env                 # Environment variables
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration for Tailwind
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## 🔧 Development Workflow

1. **Make Changes**: Edit files in the `src/` directory
2. **Hot Reload**: Vite automatically updates the browser when you save files
3. **Add Components**: Create new components in `src/components/`
4. **Add Pages**: Create new pages in `src/pages/`
5. **Update Routes**: Modify `src/Routes.jsx` to add new routes
6. **Format Code**: Use `npm run format` or enable format on save in VS Code

## 🧩 Adding Routes

To add new routes to the application, update the `Routes.jsx` file:

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration includes:

- Utility-first approach for rapid development
- Custom theme configuration in `tailwind.config.js`
- Responsive design utilities
- PostCSS and Autoprefixer integration

### Tailwind IntelliSense
With the Tailwind CSS IntelliSense extension, you'll get:
- Class name autocompletion
- CSS property previews
- Linting for class names

## 🔥 Vite Benefits

- **Lightning Fast**: Instant server start
- **Hot Module Replacement (HMR)**: See changes instantly
- **Optimized Builds**: Fast production builds with Rollup
- **Modern JavaScript**: Native ES modules support

## 📦 Building for Production

Build the application for production:

```bash
npm run build
```

The build output will be in the `build/` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🐛 Troubleshooting

### Port Already in Use
If port 4028 is already in use, Vite will automatically try the next available port.

### Dependencies Issues
If you encounter dependency issues:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### VS Code Integration Issues
- Ensure the workspace is opened at the project root
- Restart VS Code if extensions aren't working
- Check that Node.js is properly installed

## 🙏 Acknowledgments

- Built with [Rocket.new](https://rocket.new)
- Powered by React and Vite
- Styled with Tailwind CSS

Built with ❤️ on Rocket.new
# Tech Stack

## Build Tools

**Primary:** Vite (most projects)
- Modern, fast build tool for frontend development
- Used for vanilla JS, React, and TypeScript projects

**Legacy:** Webpack (some older exercises)
- Configured with Babel for React transpilation

## Frontend Technologies

- **HTML5** - Semantic markup, accessibility-focused
- **CSS3** - Flexbox, Grid, responsive design
- **JavaScript (ES6+)** - Modern syntax, async/await, modules
- **React** (v19.0.0-rc) - Component-based UI development
- **TypeScript** - Type-safe JavaScript
- **Next.js** - React framework with SSR/SSG

## Backend Technologies

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **SQL** - Database queries and management

## Other Technologies

- **REST APIs** - HTTP methods, endpoints, JSON
- **AI/ML** - OpenAI integration, RAG, vector databases
- **Testing** - Unit and integration testing
- **Git/GitHub** - Version control

## Common Commands

### Vite Projects (Most Common)
```bash
npm install          # Install dependencies
npm start            # Start dev server (alias for npm run dev)
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Webpack Projects (Legacy)
```bash
npm install          # Install dependencies
npm start            # Start dev server
```

### Node.js/Express Projects
```bash
npm install          # Install dependencies
node server.js       # Start server
npm start            # Start server (if configured)
```

## Project Setup Pattern

Each exercise/project is self-contained with:
- `package.json` - Dependencies and scripts
- `index.html` - Entry HTML file
- `index.css` - Styles
- `index.js` or `index.jsx` - Main JavaScript/React entry
- `vite.config.js` or `webpack.config.js` - Build configuration
- `README.md` - Project instructions

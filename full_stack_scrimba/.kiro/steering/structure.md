# Project Structure

## Repository Organization

The repository follows a **numbered curriculum structure** where each top-level folder represents a course module:

```
01. Introduction/
02. HTML and CSS Fundamentals/
03. JavaScript Fundamentals/
04. Tools of the Trade/
05. Accessible Development/
06. Essential CSS/
07. Essential JavaScript/
08. Responsive Design/
09. APIs and Async JavaScript/
10. AI Engineering/
11. Node.js/
12. Databases/
13. Express.js/
14. User Interface Design/
15. React.js Fundamentals/
16. Testing/
17. Advanced React.js/
18. TypeScript/
19. Next.js/
20. Launching Your Career/
```

## Module Structure

Each module contains:
- **Numbered subfolders** - Individual lessons/exercises in learning order
- **Project folders** - Larger capstone or solo projects
- **Exercise variations** - Some lessons have multiple exercises or parts

## Individual Project Structure

Each exercise/project is **self-contained** with its own:

### Standard Files
- `index.html` - Main HTML entry point
- `index.css` - Stylesheet
- `index.js` or `index.jsx` - JavaScript/React entry
- `package.json` - Dependencies and npm scripts
- `README.md` - Instructions and context
- Build config (`vite.config.js` or `webpack.config.js`)

### React Projects
- `App.jsx` - Main React component
- `index.jsx` - React DOM render entry point
- Component files in root or `components/` folder
- `images/` folder for assets

### Node.js/Express Projects
- `server.js` - Server entry point
- `data/` or `database/` - Data files
- `utils/` - Utility functions
- Modular route handlers

### Common Patterns
- `images/` - Image assets
- `data/` - JSON or static data files
- `components/` - React components (when organized)
- `utils/` or `helpers/` - Utility functions

## Naming Conventions

- **Folders:** Numbered with descriptive names (e.g., "01. Introduction")
- **Files:** Lowercase with extensions (`.html`, `.css`, `.js`, `.jsx`)
- **React components:** PascalCase for component files (e.g., `App.jsx`)
- **Underscores in names:** Used for readability in folder names (e.g., "Let_s Make a Cake")

## Navigation

When working in this repository:
- Each project is **independent** - navigate to specific exercise folder
- Run commands from within the project directory
- No shared dependencies between projects
- Each has its own `node_modules/` after `npm install`

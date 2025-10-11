# 🎨 CrisJumbo Component Library

A modern React component library built with TypeScript and styled-components, designed for consistent UI development across all CrisJumbo projects.

[![npm version](https://badge.fury.io/js/crisjumbo-component.svg)](https://badge.fury.io/js/crisjumbo-component)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📦 Installation

```bash
# Using npm
npm install crisjumbo-component

# Using yarn
yarn add crisjumbo-component
```

### Peer Dependencies

This library requires the following peer dependencies:

```bash
npm install react react-dom styled-components
```

## 🚀 Quick Start

```jsx
import React from 'react';
import { Button, Input } from 'crisjumbo-component';

function App() {
  return (
    <div>
      <Button onClick={() => console.log('Clicked!')}>Click me</Button>
      <Input placeholder="Enter your name" />
    </div>
  );
}

export default App;
```

## 📚 Available Components

| Component    | Description                | Type     | States                               | Status         |
| ------------ | -------------------------- | -------- | ------------------------------------ | -------------- |
| **Button**   | Interactive button element | Atom     | `hover`, `click`, `disabled`         | ✅ Ready       |
| **Input**    | Text input element         | Atom     | `focus`, `blur`, `empty`, `disabled` | ✅ Ready       |
| **Link**     | Navigation link element    | Atom     | `click`, `hover`                     | ✅ Ready       |
| **Searcher** | Search input component     | Molecule | `search`, `clear`                    | 🚧 In Progress |

## 🛠️ Development

### Prerequisites

- Node.js >= 16
- Yarn >= 1.22

### Getting Started

1. **Clone and install dependencies:**

   ```bash
   git clone <repository-url>
   cd crisjumbo-component
   yarn install
   ```

2. **Start development:**

   ```bash
   # Build and watch for changes
   yarn build:watch

   # View components in Storybook
   yarn storybook
   ```

3. **Link for local development:**

   ```bash
   # Publish to yalc for local development
   yalc publish

   # In your consuming project
   yalc add crisjumbo-component
   ```

### Available Scripts

| Script                 | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `yarn build`           | Build the library for production                  |
| `yarn build:watch`     | Build and watch for changes, auto-publish to yalc |
| `yarn clean`           | Remove the dist folder                            |
| `yarn clean:build`     | Clean and build                                   |
| `yarn storybook`       | Start Storybook development server                |
| `yarn build:storybook` | Build Storybook for production                    |
| `yarn format`          | Format code with Prettier                         |

## 📖 Documentation

- **Storybook**: Run `yarn storybook` to view component documentation and examples
- **TypeScript**: Full TypeScript support with type definitions included

## 🔄 CI/CD

This project uses GitHub Actions for automated publishing:

- **Automatic versioning**: On merge to main, the library version is automatically bumped
- **NPM publishing**: New versions are automatically published to NPM
- **Pull after deployment**: Always pull latest changes after CI/CD completes

### Important Notes

> ⚠️ **Deprecated Warning**: The `::set-output` command in GitHub Actions is deprecated. Consider updating to environment files.

## 🧪 Testing

```bash
# Run unit tests
yarn test

# Run tests in watch mode
yarn test --watch
```

**Note**: Complex integration tests should be implemented in the consuming applications.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-component`
3. Make your changes and add tests
4. Format your code: `yarn format`
5. Commit your changes: `git commit -m 'Add new component'`
6. Push to the branch: `git push origin feature/new-component`
7. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Cris Jumbo**

- GitHub: [@crisjumbo](https://github.com/crisjumbo)
- Website: [crisjumbo.me](https://crisjumbo.me/)

---

Made with ❤️ by [Cris Jumbo](https://github.com/crisjumbo)

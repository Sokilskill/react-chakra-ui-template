# React + Vite + Husky + ESLint

A template for quickly setting up a React project using Vite, Husky, and ESLint. This is suitable for creating new projects with essential tools for code quality control and commit automation.

## Project Overview

1. **Vite** - A fast development bundler with hot reloading.
2. **React** - Set up for component-based development.
3. **Husky** - Configured with a pre-commit hook to run ESLint before commits to ensure code quality.
4. **ESLint** - Configured with basic rules, which can be modified as needed in `eslint.config.js`.

## Project Setup

1. **Installation and Running**

   - To install dependencies, run:
     ```bash
     npm install
     ```
   - To start the project in development mode:
     ```bash
     npm run dev
     ```
   - To build the project:
     ```bash
     npm run build
     ```

2. **Setting up **

   - Replace `"name": "vite-react-template"` in `package.json` with your project’s name.
   - Replace `"base: "/vite-react-template/"` in `vite.config.js` with your base url.

3. **Editing `index.html`**

   - Update the page `title`.
   - Add your favicon (you can use [Real Favicon Generator](https://realfavicongenerator.net/)).
   - Add meta tags for SEO and social media.
   - Link fonts:
     - Add Google Fonts link directly in `index.html`;
     - Or download fonts to `/public/fonts` using [Google Webfonts Helper](https://gwfh.mranftl.com/fonts/roboto?subsets=latin) and include them via CSS `@font-face`;
     - Or install fonts via npm with [Fontsource](https://fontsource.org/).

4. **Configuring ESLint**
   - If needed, add or modify rules in `eslint.config.js`.

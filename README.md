# 📰 ArticleHub

ArticleHub is a article discovery platform built with **React**, **TypeScript**, and **Vite**. The application features dynamic filtering, a custom-built theme engine, and optimized pagination.

**🔗 Live Demo:** [article-hub-one.vercel.app](https://article-hub-one.vercel.app/)

---

## ✨ Features

- **Glassmorphism UI**: A floating, transparent navigation bar with backdrop-blur effects and responsive transitions.
- **Dynamic Discovery**: Real-time search and category filtering with a smart "+ More" dropdown for overflow categories.
- **Smart Pagination**: Efficiently browse collections with an interactive pagination system.
- **Type Safety**: 100% TypeScript for robust code quality and developer experience.

---

## 🚀 Getting Started

## Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm** or **yarn**

## 1. Installation

Clone the repository and install dependencies:

Bash

`git clone https://github.com/iamsukhe/article-hub
cd article-hub
npm install`

## 2. Running the Application

- **`npm run dev`**: Starts the Vite development server with Hot Module Replacement (HMR).
- **`npm run build`**: Compiles TypeScript and builds the production-ready app to `/dist`.

## 3. Running Tests

This project uses **Vitest** and **React Testing Library** for high-confidence unit and integration testing.

- **`npm run test`**: Runs the test suite in interactive watch mode.
- **`npx vitest run`**: Runs tests once

---

## 🛠 Technical Implementation Notes

## Theme Management (Dark Mode)

Unlike standard Tailwind implementations that rely on the `dark:` selector globally, this project uses a **Single-Prop State Strategy**.

- **State Control**: The `isDarkMode` state is managed at the root (`App.tsx`).
- **Prop Drilling**: The state is passed down to components, allowing for granular control over complex background transitions and specific hex-code swaps (e.g., the primary Green `#668077` vs. the Yellow accent `#FFC44D`).

## Testing Architecture

- **Mocking**: We use `vi.mock` to intercept calls to the `fetchArticles` service. This ensures tests are deterministic and do not fail due to network issues.
- **User Simulation**: We utilize `@testing-library/user-event` rather than simple fireEvents to more accurately simulate real human interaction (typing, clicking, and focusing).
- **Setup**: The `src/setupTests.ts` file extends Vitest's `expect` with `jest-dom` matchers, enabling readable assertions like `.toBeInTheDocument()`.

---

## 🌐 API Configuration

To switch between your local backend and the production API, modify the `API_BASE_URL` in `src/services/api.ts`:

- **Local Backend**: `http://localhost:5000/api`
- **Production API**: `https://article-hub-backend-xi.vercel.app/api`
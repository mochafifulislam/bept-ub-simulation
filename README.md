# BEPT UB Simulation 🚀

A web-based simulation platform for the **Brawijaya English Proficiency Test (BEPT)**. This application is designed to help students of Universitas Brawijaya (UB) prepare for their English proficiency exam through a realistic, interactive, and optimized testing interface.

🔗 **Live Deployment:** [simulasi-bept-ub.vercel.app](https://vercel.app)

---

## ✨ Features

- **Realistic Test Simulation:** Interface designed to mimic the actual BEPT environment.
- **Interactive Scoring:** Get instant feedback and practice under simulated conditions.
- **AI-Powered Insights:** Integrated with Google Gemini API (`@google/genai`) to provide smart review and evaluation capabilities.
- **Fully Responsive UI:** Built with React 19, Tailwind CSS v4, and Motion for fluid animations across mobile and desktop devices.
- **Local Dev Server:** Built-in Express backend server configuration for smooth local API handling and configuration testing.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 19 & TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4 & Autoprefixer
- **Animations:** Motion (formerly Framer Motion) & Lucide React (Icons)
- **Backend / Utilities:** Express, Dotenv, TSX
- **AI Framework:** @google/genai (Google Gemini SDK)

---

## 📦 Getting Started

Follow these steps to run the simulation project locally on your machine:

### 1. Prerequisites
Ensure you have **Node.js** (v18 or v20+ recommended) and **npm** installed.

### 2. Clone the Repository
```bash
git clone https://github.com
cd bept-ub-simulation
```

### 3. Setup Environment Variables
Duplicate the `.env.example` file and rename it to `.env`:
```bash
cp .env.example .env
```
Open the `.env` file and fill in the required API keys (e.g., your Google Gemini API key if required).

### 4. Install Dependencies
```bash
npm install
```

### 5. Run the Application
* **Development Server (Vite):**
  ```bash
  npm run dev
  ```
  Open `http://localhost:3000` in your browser to view the application.

* **Production Build:**
  ```bash
  npm run build
  ```

---

## 📁 Project Structure

```text
├── public/           # Static assets (images, icons, etc.)
├── src/              # Main application source code
│   ├── assets/       # Styles, images, and fonts used in components
│   ├── aistudio/     # AI logic and Gemini API handlers
│   └── ...           # React components and pages
├── .env.example      # Example environment configuration template
├── index.html        # Main HTML entry point
├── package.json      # Project dependencies and custom scripts
├── tsconfig.json     # TypeScript compilation rules
└── vite.config.ts    # Vite bundler configuration
```

---

## 🚀 Deployment

This project is configured and fully optimized for continuous integration and deployment on **Vercel**. Every push to the `main` branch automatically triggers a production build at:
👉 **[https://vercel.app](https://vercel.app)**

---

## 📄 License

This repository is maintained for simulation and educational purposes. Feel free to explore and practice!

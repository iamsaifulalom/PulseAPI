# PulseAPI

![PulseAPI Logo](public/logo.png)

**PulseAPI** is a modern, open-source, cross-platform API testing and management tool. Built with **Vite + React + TypeScript + Tailwind CSS + shadcn/ui** on the frontend and designed for integration with desktop platforms via **Electron** (previously Tauri). PulseAPI allows developers to organize projects, manage collections of API requests, and test APIs efficiently — all in a fast, lightweight, and offline-first environment.

---

## 🚀 Features (MVP)

- **Dashboard**: Organize multiple API projects.  
- **Projects & Collections**: Group API endpoints under projects and folders.  
- **API Request Testing**: Send GET, POST, PUT, DELETE requests with headers, query params, and body.  
- **Offline Mode**: No login required, fully local.  
- **Reusable Components**: Built using **shadcn/ui** for a modern interface.  
- **Routing**: Nested routing with React Router for projects and collections.  
- **Extensible**: Easy to add future features like environments, auth, or team collaboration.


---

## 📁 Folder Structure

```bash
pulseapi/
│
├── src/ # Frontend (React + TS)
│ ├── components/ # Reusable UI components
│ │ ├── ui/ # shadcn generated components
│ │ ├── layout/ # Layout components (Sidebar, Header, Footer)
│ │ └── dashboard/ # Dashboard-specific components
│ │
│ ├── pages/ # Page-level components
│ │ ├── Dashboard/
│ │ ├── Project/
│ │ ├── Auth/ # Optional login/register pages
│ │ └── NotFound.tsx # 404 page
│ │
│ ├── hooks/ # Custom React hooks (useProjects, useCollections)
│ ├── context/ # React Context providers
│ ├── lib/ # Utilities & API helpers
│ ├── styles/ # Global CSS and Tailwind overrides
│ ├── routes/ # App routing configuration
│ └── main.tsx # React entry point
│
├── public/ # Static files (images, icons)
├── package.json
├── pnpm-lock.yaml / package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```


---

## ⚙️ Tech Stack

| Layer         | Technology                             |
|---------------|---------------------------------------|
| Frontend      | React, TypeScript, Vite               |
| Styling       | Tailwind CSS, shadcn/ui               |
| Routing       | React Router or TanStack Router       |
| State         | React Context / Custom Hooks          |
| Package Mgmt  | PNPM                                  |
| Desktop       | Electron (cross-platform support)     |
| Optional Dev  | ESLint, Prettier, Husky               |

---

## 💻 Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/pulseapi.git
cd pulseapi
```

2. **Install dependencies**

```bash
pnpm install
```


3. **Run development server**

```bash
pnpm dev
```
- Opens the frontend at http://localhost:3000

## 🖥 Electron Setup

1. Install Electron globally

```bash
pnpm add -D electron electron-builder wait-on concurrently
```


2. Add scripts to `package.json`

```json
"scripts": {
  "dev": "concurrently \"pnpm dev:react\" \"pnpm dev:electron\"",
  "dev:react": "vite",
  "dev:electron": "wait-on http://localhost:3000 && electron .",
  "build": "vite build && electron-builder"
}
```


3. Build Desktop App

```bash
pnpm build
```


- Output executable depends on your OS: .exe for Windows, .AppImage for Linux, .dmg for macOS.

### 🔧 Recommended VS Code Extensions

- Tailwind CSS IntelliSense
- React Developer Tools
- ESLint
- Prettier
- shadcn UI support

## 📚 Usage

- Open Dashboard → Create a new Project
- Inside Project → Create Collections of API requests
- Click a request → Modify method, URL, headers, body → Send request → View response
- Reuse saved requests or collections across projects

### 🌟 Future Features

- Environment variables for different API setups

- Authentication helpers (JWT, OAuth)
- Import/Export Collections for sharing
- Team collaboration with optional login
- Dark/Light mode toggle
- Search and filters for projects and collections

## 📝 Contributing

PulseAPI is open source! Contributions are welcome:

- Fork the repo
- Create a branch (git checkout -b feature-name)
- Make your changes
- Commit (git commit -m "Description of changes")
- Push (git push origin feature-name)
- Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

Website: [PULSAPI](https://pulseapi.saifulalom.com)

GitHub: [PULSAPI](https://pulseapi.saifulalom.com)
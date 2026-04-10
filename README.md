# F1ck_OA

An Open Source AI assistant that works seamlessly during meetings, interviews, and everyday conversations without anyone knowing. Privacy-first, highly customizable, and extremely fast.

Built with **Tauri v2**, **React**, **Vite**, and **Tailwind CSS**.

## Features

- **Privacy-First:** Your data stays on your machine.
- **Cross-Platform:** Works seamlessly natively on Windows and Linux.
- **Micro-App Experience:** Launch via shortcuts and interact effortlessly over your other windows.
- **Customizable AI Providers:** Bring your own API keys for OpenAI (ChatGPT), Anthropic (Claude), and other LLM providers.
- **Built-in Speech-to-Text:** Leverage powerful models for robust transcription and interaction.
- **Native OS Integrations:** Automatic shortcuts, always-on-top, and auto-start configurations out of the box.

---

## 🛠 Setting up your Dev Space

To start tweaking F1ck_OA and set it up to run its AI functions locally in your dev space, follow these steps:

### 1. Prerequisites

Before setting up your development space, ensure you have the following system dependencies installed:

- **Node.js** (v18 or higher)
- **Rust and Cargo** - Get it via [rustup.rs](https://rustup.rs/)

**For Linux Users:** 
You must install OS-specific Tauri dependencies:
```bash
sudo apt-get update
sudo apt-get install -y libgtk-3-dev libwebkit2gtk-4.1-dev libappindicator3-dev librsvg2-dev patchelf libxdo-dev
```

### 2. Environment Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vaibhav2195/F1ck_OA.git
   cd F1ck_OA
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   Launch the app in the dev space:
   ```bash
   npm run tauri dev
   ```
   This will spin up a Vite development server and open the Tauri application window. Hot-Module Replacement (HMR) is enabled, meaning your code changes will reflect natively in the app immediately.

### 3. Setting up the Application to run AI

To effectively use F1ck_OA as your personal AI Assistant, configure the AI properties directly in the app.

1. **Launch the app** and navigate to the **Settings** > **Dev Defaults** pane in the F1ck_OA dashboard.
2. **Setup AI Providers:** 
   - F1ck_OA supports multiple LLM endpoints natively. 
   - Add your API Keys for your preferred provider (e.g., OpenAI, Anthropic, or an open-source local server endpoint like Ollama/LM Studio).
3. **Speech to Text Setup (Optional):**
   - Head over to the Speech configs tab to enable precise microphone streaming capabilities with supported APIs.
4. Once keys are hooked into the interface securely using Tauri’s Keychain (or Local Storage), you can start interacting with the bot via the quick actions panel and shortcut bindings.

---

## 📦 Building and Publishing

F1ck_OA relies on GitHub Actions to safely build and release Windows and Linux applications automatically to avoid conflicting native local compilation errors.

### Local Builds
If you want to create an installer package locally:

- **Linux (`.deb`)**
  ```bash
  npm run tauri build
  ```
  This creates an installer situated in `src-tauri/target/release/bundle/deb/`.

### Releasing to GitHub (Windows & Linux)

The repository is pre-configured with a `.github/workflows/release.yml` GitHub Action. 

To automatically compile, bundle, and publish builds for Linux and Windows across GitHub Releases:

1. Push your updated code to the `main` branch.
2. Draft a new tag starting with `v` (e.g., `v0.1.0`) and push it:
   ```bash
   git tag v0.1.0
   git push origin v0.1.0
   ```
3. GitHub Actions will intercept the commit, bootstrap Windows/Ubuntu environments natively, install the dependencies, build the `.msi` and `.deb` bundles respectively, and deploy them to the **Releases** tab of your repository as a draft format.

---

## 📄 License
This project is licensed under the GPL-3.0 License. See the [LICENSE](LICENSE) file for more information.
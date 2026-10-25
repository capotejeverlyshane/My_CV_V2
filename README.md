# Jeverly Shane B. Capote – Personal Curriculum Vitae & Professional Portfolio

[![Vercel Deployment](https://img.shields.io/badge/Deployed%20with-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://capotejeverlyshane-cmyk.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)
[![DNSC BSIT](https://img.shields.io/badge/Davao%20del%20Norte%20State%20College-BSIT-blue?style=for-the-badge)](https://dnsc.edu.ph)

A modern, highly responsive, interactive **single-page Curriculum Vitae (CV) & Professional Portfolio** website built for academic evaluation and future career, internship, freelance, and software engineering opportunities.

---

## 👤 Student Information

* **Student Name:** Jeverly Shane B. Capote
* **Program & Year Level:** Bachelor of Science in Information Technology (BSIT), 4th Year (Class of 2026)
* **Institution:** Davao del Norte State College (DNSC) – Institute of Computing
* **Course Subject:** Advanced Web Development / IT Elective
* **GitHub Profile:** [@capotejeverlyshane-cmyk](https://github.com/capotejeverlyshane-cmyk)
* **Live Vercel Link:** [https://capotejeverlyshane-cmyk.vercel.app](https://capotejeverlyshane-cmyk.vercel.app) *(or your deployed Vercel domain)*

---

## 🚀 Project Overview

This project is an executive-grade personal curriculum vitae web application designed to demonstrate mastery in semantic HTML5 markup, responsive Vanilla CSS architecture, ES6+ JavaScript interactivity, accessibility, and ATS-friendly PDF generation.

### ✨ Key Features & Capabilities

1. **Dual Theme Architecture (Sleek Dark & Clean Light Mode):**
   * Curated modern color tokens with smooth CSS transitions.
   * Remembers user preference using browser `localStorage` and respects system `prefers-color-scheme`.
2. **Interactive ScrollSpy & Smooth Navigation:**
   * Sticky glassmorphic navbar with active section indicators as the user scrolls.
3. **One-Click ATS-Friendly PDF / Print Generation:**
   * Customized `@media print` rules that convert the layout into an ink-saving, black-and-white, clean document suitable for corporate submissions and physical printing.
4. **Interactive Project Showcase with Category Filters:**
   * Filter between Web Applications, IoT/Systems, and Network Topology.
   * Interactive modal zoom for project previews and high-fidelity mockups.
5. **Cisco CCNA Credential Verification Card:**
   * Showcases verified certification in *CCNA: Switching, Routing, and Wireless Essentials* with interactive credential viewing.
6. **Animated Core Proficiencies Meters:**
   * Smooth animated progress indicators powered by `IntersectionObserver`.
7. **One-Click Clipboard Actions:**
   * Instant copy-to-clipboard buttons for email and contact phone with real-time toast notification feedback.
8. **100% Fully Responsive Layout:**
   * Seamless layout adjustments across Desktop, Laptop, Tablet, and Mobile screens with zero horizontal overflow.

---

## 🛠️ Technologies Used

* **Structure:** Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<aside>`, `<section>`, `<footer>`, `<dialog>` / modal)
* **Styling:** Modern Vanilla CSS3
  * CSS Custom Properties (Variables)
  * CSS Grid & Flexbox layouts
  * Backdrop filter glassmorphism
  * Fluid typography & responsive breakpoints
  * Dedicated `@media print` stylesheet
* **Logic & Interactivity:** Vanilla JavaScript (ES6+)
  * `localStorage` theme state persistence
  * `IntersectionObserver` scroll detection and animated counters
  * DOM events & modal dialog controllers
  * `navigator.clipboard` API with toast notifications
* **Hosting & CI/CD:** [Vercel](https://vercel.com)
* **Version Control:** Git & GitHub

---

## 📁 Repository Structure

```text
My_CV/
├── assets/
│   ├── ccna-cert.svg                 # Cisco CCNA Certificate Graphic
│   ├── project-cv.svg                # CV Web Mockup
│   ├── project-network.svg           # Cisco Packet Tracer Topology Mockup
│   ├── project-research-portal.svg   # Capstone Research Portal Mockup
│   └── project-smarttrack.svg        # Smart Attendance Kiosk Mockup
├── index.html                        # Main semantic CV webpage
├── style.css                         # Core CSS design system & print styling
├── script.js                         # Interactive JavaScript engine
├── profile.jpg                       # Candidate professional portrait
└── README.md                         # Documentation & deployment guide
```

---

## 🌐 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/capotejeverlyshane-cmyk/My_CV_V2.git
   cd My_CV_V2
   ```

2. **Open in browser:**
   * Simply double-click `index.html` or open it with any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
   * Or use VS Code Live Server extension: right-click `index.html` > *Open with Live Server*.

---

## ☁️ Vercel Deployment Guide

1. Log in to [Vercel](https://vercel.com/) with your GitHub account.
2. Click **"Add New..."** > **"Project"**.
3. Import your repository: `capotejeverlyshane-cmyk/My_CV_V2`.
4. Keep the Framework Preset as **Other** (Static HTML/CSS/JS).
5. Click **"Deploy"**.
6. Once deployment finishes, copy your live link (e.g., `https://your-project.vercel.app`) and submit it to LMS.

---

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

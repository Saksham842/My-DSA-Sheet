# ⚡ NextLeet — DSA Sheets & System Design Platform

<p align="center">
  <img src="https://img.shields.io/badge/Platform-NextLeet-blue?style=for-the-badge&logo=codeforces" alt="NextLeet Platform"/>
  <img src="https://img.shields.io/badge/DSA_Problems-2000%2B-orange?style=for-the-badge" alt="DSA Problems"/>
  <img src="https://img.shields.io/badge/System_Design-28_Chapters-green?style=for-the-badge" alt="System Design"/>
  <img src="https://img.shields.io/badge/Architecture-Offline--First-purple?style=for-the-badge" alt="Offline-First"/>
  <img src="https://img.shields.io/badge/Stack-Vanilla_JS_%7C_CSS3_%7C_HTML5-yellow?style=for-the-badge" alt="Tech Stack"/>
</p>

An elegant, high-performance, and offline-first technical interview preparation platform. **NextLeet** combines **20+ curated company-specific Data Structures & Algorithms sheets** (with 2,000+ problems, frequency ratings, and difficulty breakdowns) with a comprehensive **System Design interactive learning platform** featuring **28 real-world chapters**, 400+ topic sections, 100+ architecture diagrams, and contextual **Ask AI** companion integration.

---

## 📑 Table of Contents

- [✨ Key Features](#-key-features)
  - [1. Company-Specific DSA Sheets](#1-company-specific-dsa-sheets)
  - [2. Interactive System Design Platform](#2-interactive-system-design-platform)
  - [3. Ask AI Contextual Companion](#3-ask-ai-contextual-companion)
  - [4. Practice Tracker & Data Portability](#4-practice-tracker--data-portability)
- [🏢 Curated Company Sheets](#-curated-company-sheets)
- [🏛️ System Design Curriculum (28 Chapters)](#️-system-design-curriculum-28-chapters)
- [🚀 Quick Start & Local Setup](#-quick-start--local-setup)
- [📂 Project Architecture](#-project-architecture)
- [🛠️ Tech Stack](#️-tech-stack)
- [💾 Data Persistence & Backup](#-data-persistence--backup)
- [⚙️ Developer Scripts & Automation](#️-developer-scripts--automation)
- [🤝 Contributing](#-contributing)

---

## ✨ Key Features

### 1. Company-Specific DSA Sheets
- **Targeted Practice**: Curated question sets for top tech firms including **Google, Meta, Amazon, Microsoft, Apple, Uber, Goldman Sachs, DE Shaw, Cisco, Walmart, Flipkart**, and more.
- **Smart Filters & Sorting**: Sort problems by frequency rating, difficulty (Easy, Medium, Hard), or question number.
- **Global Problem Search**: Instant real-time fuzzy search across all 2,000+ questions from the home dashboard.
- **Practice Solve Counter**: Track repetitions for spaced learning — increment or decrement how many times you have solved each question.
- **Revision Mode**: Single-click toggle to focus exclusively on questions and companies you have in-progress.
- **Custom Problem Manager**: Add any problem from LeetCode, Codeforces, or HackerRank with custom difficulty, section tags, and links.

### 2. Interactive System Design Platform
- **28 In-Depth Chapters**: From distributed fundamentals (Rate Limiters, Consistent Hashing, Key-Value Stores) to planetary-scale applications (YouTube, Google Drive, Google Maps, Stock Exchange).
- **400+ Topic Sections**: Complete coverage including requirements gathering, back-of-the-envelope estimations, high-level architectures, detailed design breakdowns, data models, and bottleneck mitigations.
- **100+ Architectural Diagrams**: High-resolution flowcharts and component diagrams with an integrated **Fullscreen Lightbox Modal** for in-depth inspection.
- **Reading Progress Tracking**: Dynamic reading progress bar, chapter completion counters, and persistent section checkboxes.
- **Sidebar Search & Breadcrumb Navigation**: Fast chapter/topic filtering and intuitive navigation across sections.

### 3. Ask AI Contextual Companion
- Each System Design section includes a dedicated **Ask AI** launcher pre-populated with relevant architectural prompts.
- Seamlessly query your favorite LLM provider with one click:
  - 🟢 **ChatGPT** (OpenAI)
  - 🟣 **Claude** (Anthropic)
  - ⚪ **Grok** (xAI)
  - 🟠 **Sarvam AI**

### 4. Practice Tracker & Data Portability
- **SVG Circular Progress Dashboard**: Visual progress ring displaying overall completion percentage, fraction solved, and difficulty breakdown.
- **100% Offline-First**: Zero required backend services; all user progress, solved states, custom questions, and reading milestones persist in `localStorage`.
- **JSON Export & Import**: One-click backup generation (`.json`) and data restoration to migrate seamlessly between browsers or machines.

---

## 🏢 Curated Company Sheets

| Company | Problem Count | Primary Focus / Notes |
|:---|:---:|:---|
| **Google** | 277 | Advanced Graphs, DP, Tries, Complex Trees |
| **Meta** | 217 | Strings, Binary Trees, BFS/DFS, Sliding Window |
| **Amazon** | 199 | Arrays, Heaps, Trees, Two Pointers, Greedy |
| **Microsoft** | 192 | LinkedLists, Tree Traversal, Dynamic Programming |
| **Uber** | 177 | Graphs, Topological Sort, Design Problems |
| **Apple** | 171 | Arrays, Math, Recursion, Hash Tables |
| **Goldman Sachs** | 159 | Math, Strings, HashMaps, Sliding Window |
| **LinkedIn** | 141 | Nested Structures, Backtracking, Graphs |
| **Walmart** | 122 | Dynamic Programming, Tree Structures, Arrays |
| **Adobe** | 113 | Arrays, Strings, Sorting, Stack/Queue |
| **Flipkart** | 111 | Matrices, Greedy, Binary Search |
| **Accenture** | 111 | Foundational DSA, Arrays, Strings |
| **DE Shaw** | 104 | Hard Algorithmic Problems, Intervals, Heaps |
| **Cisco** | 87 | Bit Manipulation, Networking-aligned Algorithms |
| **Visa** | 84 | Concurrency patterns, Hash Tables, Strings |
| **JP Morgan** | 79 | Financial Algorithms, Optimization, DP |
| **Custom Practice** | Unlimited | User-created custom problem bank |

---

## 🏛️ System Design Curriculum (28 Chapters)

```
01. Scale From Zero to Millions of Users          15. Design Google Drive
02. Back-of-the-envelope Estimation               16. Proximity Service
03. Framework for System Design Interviews         17. Nearby Friends
04. Design a Rate Limiter                         18. Google Maps
05. Design Consistent Hashing                     19. Distributed Message Queue
06. Design a Key-Value Store                      20. Metrics Monitoring & Alerting System
07. Design Unique ID Generator                    21. Ad Click Event Aggregation
08. Design a URL Shortener                        22. Hotel Reservation System
09. Design a Web Crawler                          23. Distributed Email Service
10. Design a Notification System                  24. S3-like Object Storage
11. Design a News Feed System                     25. Real-Time Gaming Leaderboard
12. Design a Chat System                          26. Payment System
13. Design a Search Autocomplete System           27. Digital Wallet
14. Design YouTube                                28. Stock Exchange
```

Each chapter is divided into structured modular sections:
- **Understand the Problem and Scope**: Functional & non-functional requirements, throughput, bandwidth, and storage estimates.
- **High-Level Design**: API endpoints, data schemas, database selection, and end-to-end component flows.
- **Design Deep Dive**: Detailed exploration of bottlenecks, cache invalidation, replication, sharding, and edge-case handling.
- **Wrap Up**: Summary table of trade-offs, SPOFs (Single Points of Failure), and monitoring recommendations.

---

## 🚀 Quick Start & Local Setup

NextLeet runs completely in the browser without requiring external dependencies, database installations, or API keys.

### Method 1: Using the Built-In Node.js Server (Recommended)

NextLeet includes a lightweight, zero-dependency Node.js HTTP server configured with proper MIME types for fast asset delivery:

```bash
# Clone the repository
git clone https://github.com/Saksham842/My-DSA-Sheet.git
cd My-DSA-Sheet

# Start the local server
node server.js
```

Open your browser and visit:
```
http://localhost:3000/
```

### Method 2: Direct File Open
Simply double-click `index.html` or open it directly in Google Chrome, Microsoft Edge, Firefox, or Safari.

### Method 3: Python HTTP Server
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

---

## 📂 Project Architecture

```text
├── index.html                   # Core single-page application structure & modals
├── style.css                    # Main design system (glassmorphism, dark palette, responsive grids)
├── app.js                       # SPA routing, search engine, storage helpers, and event logic
├── data.js                      # Master dataset for DSA companies and 2,000+ problems
│
├── system_design.css            # System design layout, sidebar, markdown typography & lightbox styles
├── sd_app.js                    # System design interactive engine, progress observer, and Ask AI logic
├── sd_data.js                   # Compiled master dataset for 28 system design chapters
├── compile_sd_data.js           # Compiler script merging individual chapter JSONs into sd_data.js
│
├── server.js                    # Lightweight zero-dependency Node.js static web server
├── system_design_data/          # Individual modular JSON files for each system design chapter
│   ├── chapters_index.json      # Chapter metadata index, slugs, and section hierarchies
│   ├── design-a-chat-system.json
│   ├── design-youtube.json
│   └── ...                      # (28 chapter files)
│
├── images/                      # 100+ architecture diagrams, system flows, and data schemas
│
├── *_data.json                  # Raw company problem extracts (google, amazon, meta, apple, etc.)
└── inject_*.js                  # Automation scripts for compiling and injecting company sheets
```

---

## 🛠️ Tech Stack

- **Frontend Core**: Vanilla HTML5, Modern ES6+ JavaScript, CSS3 with Custom Properties (CSS variables).
- **Styling & Aesthetics**: Dark-mode glassmorphic theme, responsive CSS Grid / Flexbox, JetBrains Mono & Inter typography.
- **Rendering & Vector Graphics**: Responsive inline SVG progress rings and SVG iconography.
- **Persistence**: Browser `localStorage` with JSON serialization.
- **Server**: Zero-dependency Node.js `http` module server (`server.js`).

---

## 💾 Data Persistence & Backup

NextLeet stores your practice milestones locally so you can practice offline without an account.

### LocalStorage Schema
| Storage Key | Type | Description |
|:---|:---:|:---|
| `nl_solved_global` | `Array<number\|string>` | List of solved problem IDs |
| `nl_solve_count` | `Record<string, number>` | Problem ID map to repetition/practice count |
| `nl_practice_qs` | `Array<Object>` | User-added custom practice questions |
| `nl_sd_completed` | `Array<string>` | Section slugs completed in System Design |

### Creating Backups
1. Click **Export Data** in the top navigation bar.
2. A timestamped `.json` file (`my_dsa_sheet_backup_YYYY-MM-DD.json`) will be downloaded.
3. To restore or sync with another machine, click **Import Data** and select your backup file.

---

## ⚙️ Developer Scripts & Automation

The repository includes utilities to scrape, convert, and inject fresh company question lists or System Design updates:

### Updating System Design Content
When editing or adding sections in `system_design_data/`:
```bash
# Recompile individual JSON chapters into sd_data.js
node compile_sd_data.js
```

### Adding New Company DSA Sheets
1. Save the parsed questions into `<company>_data.json`.
2. Run the corresponding injection script (e.g. `node inject_amazon.js`).
3. The script automatically slugifies titles, sets up LeetCode direct URLs, and updates the `data.js` catalog.

---

## 🤝 Contributing

Contributions, feedback, and additions are welcome!
1. Fork the Project.
2. Create your Feature Branch: `git checkout -b feature/NewFeature`
3. Commit your Changes: `git commit -m 'Add NewFeature'`
4. Push to the Branch: `git push origin feature/NewFeature`
5. Open a Pull Request.

---

<p align="center">
  Built with ❤️ for engineers preparing for FAANG and top-tier tech interviews.
</p>

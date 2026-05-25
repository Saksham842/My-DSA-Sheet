# 📊 My DSA Sheet

An elegant, interactive, and offline-first Data Structures & Algorithms (DSA) preparation dashboard designed to help developers track, filter, and master coding problems from top-tier tech companies. 

With a premium glassmorphic UI, rich statistical trackers, and developer-oriented automation scripts, **My DSA Sheet** transforms your technical interview preparation into a structured, visual, and highly rewarding journey.

---

## ✨ Key Features

- **🏆 Practice Progress Dashboard**
  - Instant visual tracking using a dynamic **SVG Progress Ring** displaying your overall percentage completion.
  - Difficulty-wise breakdowns (**Easy**, **Medium**, **Hard**) to give you a fine-grained view of your algorithmic strength.
- **🏢 18+ Curated Company Sheets**
  - Pre-loaded, highly-rated interview questions specifically tagged for **Google**, **Meta**, **Amazon**, **Microsoft**, **Apple**, **Uber**, **Goldman Sachs**, **DE Shaw**, **JP Morgan**, **Visa**, **LinkedIn**, **Flipkart**, and more.
  - Company-specific progress metrics directly displayed on interactive cards on the home page.
- **🔍 Real-Time Global Question Search**
  - Instantly search across the entire repository of **1,000+ problems** by problem ID or title direct from the homepage.
- **➕ Dedicated Custom Practice Tracker**
  - Add your own custom problems from LeetCode, Codeforces, or GeeksforGeeks into a localized, dedicated **Practice Section**.
  - Specify custom problem numbers, direct links, and difficulty classifications.
- **🔄 Local Storage & JSON Backup Utility**
  - **Offline-First Architecture**: Your practice history, counts, and custom problems are persisted automatically in your browser's local storage.
  - **Data Portability**: Seamlessly export your entire progress as a readable `.json` file and import it on any device to restore your workspace instantly.
- **🔁 Solve Counters & Revision Mode**
  - Track *how many times* you've solved a problem by bumping the inline practice counter to reinforce learning and review spaced repetition.
  - Switch on **Revision Mode** with a single click to filter down your dashboard strictly to companies you have active progress on.
- **🎨 Premium Visual Interface**
  - Smooth HSL gradients, dark-mode-first aesthetic, crisp micro-animations, and domain favicon fetching with fallback icons.

---

## 📂 Project Structure

```text
├── index.html                   # Core single-page application structure & modals
├── style.css                    # Premium styles (colors, layout grid, modals, glassmorphism)
├── app.js                       # Core SPA routing, search engine, storage helpers, and event logic
├── data.js                      # Centralized data repository containing lists of companies and problems
│
├── * _data.json                 # Company raw JSON outputs (e.g. google_data.json, meta_data.json)
│
└── Developer Utilities
    ├── inject.js                # Node utility to compile scraped raw JSON into variables inside data.js
    └── parse_uber.js            # Node parser to convert raw copy-pasted LeetCode text to JSON format
```

---

## 🛠️ Tech Stack & Architecture

- **Core**: HTML5, Vanilla CSS3 (Custom CSS Properties & Flexbox/Grid), and Modern ES6+ JavaScript.
- **Icons**: Live domain favicon loader (`https://www.google.com/s2/favicons?domain=...`) with robust DOM fallback loaders for local custom sheets.
- **Storage Strategy**: Fast browser storage integration utilizing high-efficiency keys:
  - `nl_solved_global`: Tracks the array of solved LeetCode problem IDs.
  - `nl_solve_count`: Map of problem IDs to integers representing the number of repeat practice attempts.
  - `nl_practice_qs`: Array of custom practice questions added manually via the modal.

---

## 🚀 Getting Started

Since the dashboard is completely client-side and requires no backend servers or databases, you can spin it up instantly:

### Method 1: Double-Click
Simply open [index.html](file:///c:/Users/acer/Desktop/DATA/nextleet5/index.html) directly in any modern web browser.

### Method 2: Local Development Server
To support clean favicon caching and mock APIs smoothly, run a lightweight local HTTP server.

**Using VS Code:**
- Install the **Live Server** extension.
- Right-click `index.html` and select **Open with Live Server**.

**Using Python:**
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

---

## ⚙️ Developer Guide: Scraping & Injecting Data

**My DSA Sheet** includes developer automation scripts to allow you to easily pull fresh LeetCode company sheets and add them to the master `data.js` database.

### Step 1: Parse Raw Copied Text to JSON
If you have copied text from LeetCode's Premium Company List, save the text inside `parse_uber.js` (or a similar parser) and execute the node parser:
```bash
node parse_uber.js
```
This generates a structured JSON output file (e.g. `uber_data.json`) containing parsed IDs, titles, acceptance rates, and difficulties.

### Step 2: Compile & Inject into the DB (`data.js`)
Use `inject.js` to process your raw company JSON files, slugify question titles into direct LeetCode links, compute problem statistics, and append them directly to the master `data.js`:
```bash
node inject.js
```

> [!TIP]
> Keep the `slugify()` function in your scraper scripts synchronized with the URL format rules used by LeetCode to ensure that problem links generated automatically point to the exact active LeetCode question.

---

## 🛡️ Data Portability & Backups

Your data belongs to you! Since all your solved statuses and custom added problems are saved locally, clearing your browser history or cookies might wipe your progress.

**To prevent this:**
1. Click the **Export Data** button in the top-right corner of the home page periodically.
2. A `.json` backup file (e.g., `my_dsa_sheet_backup_YYYY-MM-DD.json`) will be downloaded.
3. If you move to a new machine or clear your browser, click **Import Data**, pick your backup file, and your entire history will instantly compile back to life.

---

> Built with 💻 and ☕ to streamline interview prep. Happy Coding!

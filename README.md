# 🚀 Herokuapp Automation Testing Project

This project contains automated UI test scripts for the practice website:

https://the-internet.herokuapp.com/

## 🛠️ Tech Stack

- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)
- GitHub Actions

---

# 📌 Features

- Login Automation
- Checkbox Testing
- Dropdown Validation
- Dynamic Loading Testing
- File Upload Testing
- Alert Handling
- Drag & Drop Testing
- Form Validation
- Multiple Windows Handling

---

# 📂 Project Structure

```bash
Herokuapp/
│
├── tests/
├── pages/
├── fixtures/
├── utils/
├── playwright.config.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/mdemonmia/Herokuapp.git
```

Go to project directory:

```bash
cd Herokuapp
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# ▶️ Run Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run specific test:

```bash
npx playwright test tests/login.spec.js
```

---

# 📊 Generate HTML Report

```bash
npx playwright show-report
```

---

# 🔥 CI/CD Integration

GitHub Actions workflow file:

```bash
.github/workflows/playwright.yml
```

---

# 📸 Reports

Playwright automatically generates:
- Screenshots
- Videos
- Trace Files
- HTML Reports

---

# 🎯 Test Scenarios

- Positive Login Test
- Negative Login Test
- Form Validation
- Dynamic Elements
- File Upload
- JavaScript Alerts
- Drag and Drop
- Checkbox Selection
- Dropdown Selection

---

# 👨‍💻 Author

Md Emon Mia

GitHub:
https://github.com/mdemonmia

---

# ⭐ Purpose

This project was created for:
- QA Automation Practice
- Portfolio Building
- Playwright Learning
- Real-world UI Automation Experience

---

# 🌐 Website Under Test

https://the-internet.herokuapp.com/

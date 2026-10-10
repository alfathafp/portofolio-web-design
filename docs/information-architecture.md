# Information Architecture & Design System

## 1. Overview & Strategy
- **Platform Concept**: Multi-Page Developer Portfolio for a Software Development Engineer in Test (SDET).
- **Core Philosophy**: Markdown-First, Content-Centric, Developer-Grade Performance.
- **Target Audience**: Technical Recruiters, Engineering Managers, QA Leads, and Staff/Principal Engineers.
- **Visual Tone**: Modern, Sleek Dark Mode (Zinc/Slate theme) with data-driven accents (Emerald Green for reliability/passing tests, Cyan/Indigo for interactive accents).

---

## 2. Multi-Page Sitemap

```text
/ (Home)
├── Hero Section: Positioning, High-level Value Proposition, Quick CTAs
├── Social Proof Bar: 5+ YoE in High-Volume FinTech & Banking (Kredivo, BCA)
├── Featured Flagship Showcase Card: FinTech End-to-End Test Ecosystem
├── Highlighted Tooling Card: Slack Automation Ecosystem & Custom Test Libraries
├── Skills Matrix Preview: Core languages & categorized test competencies
└── Contact / Footer

/projects (Case Studies Directory)
├── /projects/fintech-test-ecosystem (Flagship Case Study)
│   ├── The Challenge: Sandbox Flakiness & Non-Deterministic Vendors
│   ├── Architecture: SUT (Order API) + Programmable Mock + Java Runner
│   ├── Test Suite: Playwright Java + TestNG + Direct DB Validations
│   └── Observability: Allure 3 Telemetry & Test Metrics
│
└── /projects/slack-test-trigger-bot (Mini Case Study)
    ├── Problem: Friction in Manual Test Triggers & CI Feedback Delays
    ├── Solution: Standalone Socket Service + Custom JAR Libraries
    └── Impact: Seamless Test Execution & Real-Time Failure Triaging

/experience
├── Career Timeline (Kredivo Group & PT Bank Central Asia)
├── Key Engineering Achievements & Impact Metrics
└── Comprehensive Technical Skills Matrix

/about
├── Engineering Philosophy (Shift-Left, Anti-Flakiness, Test Pyramid in Practice)
├── Educational Background (Politeknik STMI Jakarta)
└── Personal Interests in Developer Productivity
```

---

## 3. Design System & Aesthetics (Dark Mode Specification)

### Color Palette
- **Background (Primary)**: `#09090b` (Deep Zinc / Carbon)
- **Surface / Card Background**: `#18181b` (Subtle Zinc Card)
- **Border / Dividers**: `#27272a` (Crisp, subtle outline)
- **Primary Text**: `#f4f4f5` (Bright Off-White)
- **Muted Text**: `#a1a1aa` (Slate Muted Gray)
- **Accent - Reliability (Passed/Active)**: `#10b981` (Emerald Green)
- **Accent - Interactive (Links/Highlights)**: `#38bdf8` (Sky Cyan) or `#6366f1` (Indigo)

### Typography
- **Headings & Body**: `Inter` / `Geist Sans` / `Plus Jakarta Sans` (Clean, highly legible sans-serif)
- **Code & Telemetry**: `JetBrains Mono` / `Fira Code` (Monospace for code blocks, test metrics, and terminal outputs)

### Key UI Components & Micro-Interactions
1. **Live Status Indicator**:
   - `🟢 Automated Test Suite: All Passing | Open for New Opportunities`
2. **Telemetry / Metric Badges**:
   - Small, structured chips indicating key capabilities (`Java 17`, `Playwright`, `Zero-Flake`, `100% Mock Isolated`).
3. **Architecture Diagrams**:
   - Clear text/SVG/Mermaid-rendered flowcharts detailing component interactions.
4. **Interactive Code & Command Previews**:
   - Copyable CLI commands and readable test assertion snippets.


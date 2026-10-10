---
title: "Internal Slack Test Automation Bot & Shared Java Libraries"
description: "A custom Slack automation tool and reusable Java libraries that let developers and QA engineers trigger targeted test suites and get instant failure alerts."
role: "Software Engineer in Test (SEIT)"
date: "2023"
featured: false
tags:
  - "Java"
  - "Slack Bolt API"
  - "Node.js"
  - "Jenkins CI"
  - "Socket Mode"
metrics:
  - label: "Architecture"
    value: "Socket Mode"
    detail: "Secure bi-directional Slack communication without public webhooks"
  - label: "Trigger Flow"
    value: "Instant"
    detail: "Run test suites directly via Slack dropdowns and slash commands"
  - label: "Observability"
    value: "Allure in CI"
    detail: "Sends test summary cards and failure logs directly to team channels"
  - label: "Libraries"
    value: "Custom JARs"
    detail: "Shared Java test utilities and custom TestNG listeners"
architecture:
  runner: "Custom Java TestNG Framework with Listener Plugins"
  sut: "Slack Bolt Framework (Node.js backend with Socket Mode)"
  mock: "Simulated Webhook Emitters"
  database: "Jenkins CI Build Parameter Store"
  reporting: "Slack Block Kit Interactive Cards + Allure Report"
githubUrl: "https://github.com/alfathafp"
---

## Summary

In fast-paced engineering teams, triggering automated regression tests and checking results can take extra effort. Engineers often had to log into Jenkins dashboards, configure build parameters manually, and wait for full pipeline runs just to test a single service.

To solve this, I built an **internal Slack automation tool** and **custom Java JAR libraries**:
1. **Slack Test Bot**: Connects securely to Slack via Socket Mode, allowing engineers to trigger test suites via simple Slack slash commands or modal dropdowns.
2. **Instant Test Alerts**: Posts test run status, failure logs, and direct links to Allure reports into squad channels in real time.
3. **Shared Java Libraries**: Centralized common test utilities, database helpers, and reporting listeners into reusable JARs used across teams.

---

## The Problem

Before this tool was introduced, the workflow had noticeable friction:
* **Manual Jenkins Configuration**: Developers and QA analysts had to navigate multiple Jenkins jobs and enter parameter strings manually.
* **Delayed Feedback**: Engineers only discovered broken tests long after committing code, slowing down release deployments.
* **Code Duplication**: Different QA teams were writing their own helper scripts to trigger tests, causing duplicate maintenance effort.

---

## How the System Works

```mermaid
sequenceDiagram
    actor Engineer as Developer / QA
    participant Slack as Slack Workspace
    participant Bot as Slack Test Bot (Socket Mode)
    participant CI as Jenkins CI / Test Runner
    participant Report as Allure Report

    Engineer->>Slack: Run /test-regression (Opens Modal)
    Engineer->>Slack: Select Environment & Service Tags
    Slack->>Bot: Send Selected Parameters
    Bot->>CI: Trigger Test Execution Pipeline
    CI-->>Bot: Real-time Test Progress (Passed/Failed)
    Bot-->>Slack: Post Interactive Summary Card with Allure Link
    Engineer->>Report: Click Link to Inspect Failure Stack Trace
```

---

## Key Benefits
* **Simplified Trigger Flow**: Anyone can run regression tests directly from Slack without opening Jenkins.
* **Real-Time Failure Notifications**: When a test fails, developers get the error message and Allure report link immediately in their squad channel.
* **Shared Codebase**: Centralized Java JAR packages standardizes test utilities and listeners across teams.

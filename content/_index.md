---
title: "About Me"
date: 2025-11-26
draft: false
---

## Software Engineer

I'm a senior CS student at Cal Poly Pomona and a full stack engineer at the Bytewish Foundation, a nonprofit building free, open-source business tools for small companies. I'm the only developer, so I own everything: backend, frontend, infrastructure, and API design.

Most of my day-to-day work is in **C#/.NET 9** and **Vue.js 3** on **Azure**, but I've also built projects in React, TypeScript, Python, and Node.

### What I'm working on

**Timekeeping** is a multi-tenant SaaS workforce management platform. It handles time tracking, automated payments, invoicing, PTO, and team management. Some of the more interesting technical pieces:

- An automated payment pipeline built on Azure Service Bus that runs recurring pay schedules, generates NACHA-format ACH files, creates invoices from time logs, and processes PTO accruals.
- Multi-tenant data isolation on Azure SQL with Entity Framework Core. Each organization's financial data (bank details, tax IDs, billing rates) is encrypted and strictly separated.
- A public sales tax lookup tool with an interactive ArcGIS map. I imported Census TIGER shapefiles, ran coordinate transformations, and use SQL Server spatial queries to resolve tax rates down to the jurisdiction level for any address.
- A customizable email template system using Microsoft Graph API, with a TipTap rich text editor and Mustache variable rendering.
- CI/CD through GitHub Actions deploying to Azure App Service, with OAuth 2.0 via Microsoft Entra ID for auth.

---

**990-PF Tax Form Engine** is my current project within the platform. The IRS 990-PF has 370+ fields, so I built a system where a single JSON config drives both the C# backend and the Vue frontend. A reflection-based accessor handles field mapping without hand-coding each one, and a rule interpreter evaluates visibility, validation, and calculations on both sides. Before this, I built a simpler 1099-NEC generator that pulls contractor data from Timekeeping.

---

**Insights** is a personal metrics tracking app I built with a team for CS 4800, using C#/.NET 9, React, TypeScript, and PostgreSQL. You log habits as booleans, numbers, or durations, and it automatically finds correlations between them using co-occurrence analysis, conditional averages, and median splits. Only patterns with a meaningful difference surface, so it filters out noise. [Try it out here.](https://insights-app-kj9l.onrender.com/)

### Background

I started in business administration at Riverside City College before switching to CS. That business background actually helps more than I expected — a lot of what I build (payroll logic, invoicing, tax compliance) sits right at the intersection of software and business operations.

### Tech

- **Languages:** C#, TypeScript, JavaScript, SQL, Python, Java, C++
- **Frameworks:** .NET 9 / ASP.NET Core, Vue.js 3, React, Node.js, Express, Entity Framework Core
- **Cloud & DevOps:** Azure (App Service, SQL, Service Bus, Entra ID, Blob Storage), GitHub Actions
- **Tools:** Git, OAuth 2.0, CI/CD, RESTful APIs

### Get in touch

I'm graduating in May 2026 and looking for software engineering roles. I'm especially interested in open source and infrastructure work, but I'm open to a lot of different domains. Best way to reach me is [lindsay@kislingbury.com](mailto:lindsay@kislingbury.com).
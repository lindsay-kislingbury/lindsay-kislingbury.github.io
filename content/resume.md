---
title: "Resume"
date: 2025-11-26
draft: false
---

## Technical Skills

**Languages:** C#, TypeScript, JavaScript, SQL, Python, Java, C++, C, HTML, CSS

**Frameworks:** .NET 9 / ASP.NET Core, React, Vue.js 3, Node.js, Express, Entity Framework Core

**Cloud & Infrastructure:** Azure (App Service, SQL, Service Bus, Entra ID, Blob Storage), GitHub Actions, CI/CD

**Tools:** Git, Linux, SQL Server, Postman, OAuth 2.0, RESTful APIs, Multi-Tenant Architecture

## Education

### Bachelor of Science in Computer Science
**Cal Poly Pomona** | *Expected May 2026*

GPA: 3.89 | President's List (Every Semester)

### Associate of Science in Business Administration
**Riverside City College** | *Aug 2018 – May 2020*

Dean's List 2018–2020

## Experience

### Full Stack Software Engineer
**Bytewish Foundation** | *Feb 2024 – Present*

`C#` `.NET 9` `Vue.js 3` `JavaScript` `SQL` `Azure` `Entity Framework Core` 

- Sole developer on a multi-tenant SaaS workforce management platform (time tracking, automated payments, invoicing, PTO) for a nonprofit focused on free, open-source tools for small businesses. Handling all architecture decisions, backend, frontend, and API design.
- Designed tenant isolation on Azure SQL with Entity Framework Core so each organization's financial data (bank details, tax IDs, billing rates) stays strictly separated and encrypted at rest.
- Built an automated payment pipeline using Azure Service Bus: the system runs recurring pay schedules, generates NACHA-format ACH files, produces invoices from time logs, and processes PTO accruals, all without manual intervention.
- Currently developing a 990-PF tax form engine for a 370+ field IRS form. Built a single JSON config that drives both the C# backend and Vue frontend, a reflection-based field accessor to avoid hand-coding mappings, and a rule interpreter that evaluates visibility, validation, and calculation logic on both sides. Previously built a simpler 1099-NEC generator using the same platform data.
- Built a public sales tax lookup tool with an interactive ArcGIS map. Imported Census TIGER shapefiles and GeoJSON boundary data, ran coordinate transformations, and used SQL Server spatial queries to resolve tax rates by jurisdiction (state, county, city, special district) for any address or map pin.
- Set up CI/CD through GitHub Actions deploying to Azure App Service, with OAuth 2.0 via Microsoft Entra ID for authentication and Microsoft Graph API for transactional email.

## Projects

### Insights
`C#` `.NET 9` `React` `TypeScript` `PostgreSQL`

Built a personal metrics tracker where users log habits as booleans, numbers, or durations, and the system automatically discovers correlations (co-occurrence rates, conditional averages, median splits), only surfacing patterns with ≥15% difference to filter noise. [Try it out here.](https://insights-app-kj9l.onrender.com/)

### Wilderness Survival Simulation
`Python`

Developed a simulation where a player navigates procedurally generated terrain, managing resources and trading with NPCs. Used abstract base classes, factory pattern, and composition to keep AI behaviors (brain, vision, trader types) modular and swappable.

### Chat Server
`C` `POSIX Sockets` `Pthreads` `Linux`
Built a multi-client TCP chat server supporting up to 10 concurrent users with threaded connection handling, mutex-synchronized broadcast messaging, timestamped chat history logging, and graceful shutdown via signal handling (SIGINT/SIGTERM).
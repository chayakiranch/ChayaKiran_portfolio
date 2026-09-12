const projectsData = [
  {
    id: "online-book-store",
    title: "Online Book Store",
    kicker: "Full-stack · E-commerce",
    status: "completed",
    duration: "Jul 2023 – Nov 2023",
    // REVISED: summary tightened to a concise 2-sentence purpose + impact style
    summary:
      "A full-stack e-commerce platform for browsing, purchasing, and managing books, built with React, Node.js, and Express. Custom RESTful APIs and JWT-secured authentication improved data retrieval speed by ~30% while keeping every transaction safe.",
    highlights: [
      "Designed RESTful APIs for frontend–backend communication, improving data retrieval speed by ~30%.",
      "Integrated MongoDB for robust handling of user accounts, inventory and transactions.",
      "Built secure auth & authorization workflows using JWT and bcrypt.",
      "Optimized UI/UX for cross-device compatibility with a modern, responsive interface.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    // TODO: add live demo URL, GitHub repo URL, screenshots, and an
    // architecture diagram once available.
    liveUrl: "",
    repoUrl: "",
    architectureImage: "",
  },
  {
    id: "online-blogging-system",
    title: "Online Blogging System",
    kicker: "Full-stack · Publishing",
    status: "completed",
    duration: "Dec 2023 – Apr 2024",
    // REVISED: summary tightened to a concise 2-sentence purpose + impact style
    summary:
      "A full-stack publishing platform where users can register, write, and comment on posts, built on Django with PostgreSQL. Session-based authentication and an MVC architecture keep the codebase secure, maintainable, and easy to extend.",
    highlights: [
      "Used Django ORM with PostgreSQL for efficient data storage and retrieval.",
      "Integrated secure authentication and session management to protect user credentials.",
      "Followed MVC architecture for maintainable, version-controlled code via GitHub.",
      "Built a Bootstrap-based responsive UI for seamless usability across devices.",
    ],
    stack: ["Django", "PostgreSQL", "Bootstrap", "MVC"],
    // TODO: add live demo URL, GitHub repo URL, screenshots, and an
    // architecture diagram once available.
    liveUrl: "",
    repoUrl: "",
    architectureImage: "",
  },
  {
    id: "aws-billing-dashboard",
    title: "AWS Cloud Billing & Resource Dashboard",
    kicker: "Cloud & Edge Computing · Full-stack",
    status: "completed",
    duration: "Mar 2026 – Apr 2026",
    // REVISED: summary tightened to a concise 2-sentence purpose + impact style
    summary:
      "A cloud cost-management platform that turns raw AWS billing and performance data into a live, interactive dashboard. It delivers real-time cost forecasting, resource monitoring, and automated savings recommendations straight from a user's own AWS account.",
    highlights: [
      "Built an Express backend integrating 5 AWS SDK v3 clients (Cost Explorer, CloudWatch, EC2, RDS, S3, Lambda) to pull live billing, performance, and resource-inventory data on demand.",
      "Implemented monthly/daily cost breakdowns, multi-window cost forecasting, and a service-level spend table with interactive trend and donut charts (Chart.js).",
      "Designed a CloudWatch performance tab surfacing per-instance CPU/utilization metrics with sparkline and heat-map visualizations.",
      "Built a rule-based recommendation engine that flags idle EC2 instances, high-CPU load, cost spikes, missing S3 lifecycle policies, and Reserved Instance / Savings Plan opportunities.",
      "Added a Resources tab giving a unified live inventory view across EC2, RDS, S3, and Lambda.",
      "Designed the app to run against a user's own AWS credentials (entered client-side per session, never stored) with CORS locked to specific origins, plus a demo-data mode so the UI is explorable without AWS access.",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "AWS SDK v3", "Chart.js"],
    // UPDATED: live demo now deployed (frontend on Vercel, backend on Render) — opens in Demo mode, no AWS account needed.
    liveUrl: "https://aws-billing-dashboard.vercel.app",
    repoUrl: "https://github.com/chayakiranch/aws-billing-dashboard",
    architectureImage: "",

    // ===== NEW: caseStudy =====
    // Rich, sectioned write-up (sourced from the project's own README) that
    // powers the case-study layout with an "On This Page" sidebar in
    // ProjectDetails.jsx. This field is OPTIONAL — projects without it keep
    // rendering the original simple layout, so Online Book Store and Online
    // Blogging System are unaffected.
    caseStudy: {
      overview:
        "AWS Billing Dashboard consolidates the AWS Billing Console's scattered views into a single interactive dashboard. A React + Vite frontend pairs with an Express backend that calls the AWS SDK directly, so account credentials never touch a third-party service. Every tab works out of the box in Demo mode with realistic mock data, and switches to live data the moment an AWS account is connected.",
      problem: {
        intro:
          "Checking AWS spend day-to-day means navigating Cost Explorer, CloudWatch, and several service consoles separately, each with its own UI and level of detail.",
        points: [
          "AWS's own Billing Console is dense and spread across multiple separate pages.",
          "Spend, forecast, resource inventory, performance, and cost-saving signals each live in a different tool.",
          "There's no single view built for the day-to-day habits of a single developer or small project.",
        ],
      },
      goals: [
        "Pull current spend, forecast, and per-service breakdown into one dashboard, backed by the real AWS SDK rather than a static export.",
        "Surface EC2, RDS, S3, and Lambda resource inventory in one place with search, filter, and sort.",
        "Monitor EC2 CPU and network performance via CloudWatch with per-instance drill-down.",
        "Flag idle instances, oversized resources, and other cost-saving opportunities with a rule-based recommendation engine.",
        "Model a 6-month cost projection and a service-dependency graph using Dijkstra's algorithm for cost-optimal paths between high-spend services.",
        "Keep the whole thing explorable without AWS access via a full Demo mode, and switch to Live mode per session without ever storing credentials.",
      ],
      architecture: {
        description:
          "Built as a genuine two-part app: a React + Vite frontend and an Express backend that performs every AWS SDK call server-side. AWS credentials are sent from the frontend as request headers only when Live mode is active, and are never stored — the backend builds a fresh AWS SDK client per request from either the connected credentials (Live mode) or static mock data (Demo mode). There's no database and no authentication layer; it's a live-query tool against a single AWS account per session, not a persisted multi-user system.",
        image: "/projects/aws-billing-dashboard/architecture.png",
        notes: [
          "React + Vite frontend (deployed on Vercel) never talks to AWS directly.",
          "Express backend (deployed on Render) builds a fresh AWS SDK v3 client per request.",
          "AWS SDK v3 calls Cost Explorer, CloudWatch, EC2, RDS, S3, and Lambda directly.",
          "All IAM access is scoped strictly read-only — no write, create, or delete permissions anywhere in the app.",
        ],
      },
      keyFeatures: {
        // NOTE: titled "AWS Services & Integrations" rather than "Agents and
        // Tools" since this project integrates AWS SDK clients, not AI agents.
        title: "AWS Services & Integrations",
        items: [
          "AWS Cost Explorer — cost/usage data and forecasting",
          "Amazon CloudWatch — EC2 CPU and network metrics",
          "Amazon EC2 — instance inventory and performance",
          "Amazon RDS — database instance inventory",
          "Amazon S3 — bucket inventory",
          "AWS Lambda — function inventory",
        ],
      },
      // No "Future Direction" section — omitted rather than invented, since
      // the source README doesn't state one. ProjectDetails.jsx skips any
      // caseStudy section whose data is missing.
      futureDirection: null,
    },
  },
  // TODO: add more projects here as they're built. Keep the same shape
  // (id, title, kicker, duration, summary, highlights, stack, liveUrl,
  // repoUrl, architectureImage) so ProjectDetails.jsx renders it automatically.
];

export default projectsData;
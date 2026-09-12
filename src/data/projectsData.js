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
    // TODO: add a live demo URL if/when this is deployed with a hosted backend + demo AWS credentials.
    liveUrl: "",
    repoUrl: "https://github.com/chayakiranch/aws-billing-dashboard",
    architectureImage: "",
  },
  // TODO: add more projects here as they're built. Keep the same shape
  // (id, title, kicker, duration, summary, highlights, stack, liveUrl,
  // repoUrl, architectureImage) so ProjectDetails.jsx renders it automatically.
];

export default projectsData;
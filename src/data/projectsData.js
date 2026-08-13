const projectsData = [
  {
    id: "online-book-store",
    title: "Online Book Store",
    kicker: "Full-stack · E-commerce",
    duration: "Jul 2023 – Nov 2023",
    summary:
      "A scalable full-stack e-commerce platform built with React.js, Node.js and Express.js, focused on load efficiency and responsiveness.",
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
    duration: "Dec 2023 – Apr 2024",
    summary:
      "A full-featured blogging platform with modules for user registration, post creation and commenting, built on the Django framework.",
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
    duration: "Mar 2026 – Apr 2026",
    summary:
      "A full-stack cloud cost-management platform that connects directly to a user's AWS account and turns raw Cost Explorer, CloudWatch, and resource-inventory data into an interactive billing dashboard — with cost forecasting, performance monitoring, and automated savings recommendations.",
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

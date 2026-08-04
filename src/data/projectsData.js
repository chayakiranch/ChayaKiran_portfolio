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
  // TODO: add more projects here as they're built. Keep the same shape
  // (id, title, kicker, duration, summary, highlights, stack, liveUrl,
  // repoUrl, architectureImage) so ProjectDetails.jsx renders it automatically.
];

export default projectsData;

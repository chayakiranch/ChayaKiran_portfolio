const experienceData = [
  {
    id: "vehinova",
    role: "Python Web Development Intern",
    company: "Vehinova",
    location: "Remote",
    duration: "May 2024 — Jun 2024 (6 weeks)", // FIXED: "(45 days)" -> "(6 weeks)" (Task 10)

    credentialUrl: "/experience/vehinova-internship-certificate.pdf", // NEW: internship certificate, shown as a card beside the project in "Projects at Vehinova"
    credentialImage: "/experience/vehinova-internship.jpg",
    credentialIssueDate: "June 2024",

    skills: ["Python", "Django", "PostgreSQL", "HTML", "CSS", "Bootstrap"],

    // POLISHED: shortPoints rewritten for stronger, more impactful phrasing (Task 14)
    shortPoints: [
      "Engineered a full-stack blogging platform end-to-end using Django, from data models to deployment.",
      "Delivered secure authentication and blog-management workflows for a smooth content experience.",
      "Architected the PostgreSQL data layer, powering reliable content and user-account storage.",
      "Crafted responsive, cross-device frontend pages that kept usability front and center.",
    ],

    // POLISHED: overview rewritten for more professional, impactful tone (Task 14)
    overview:
      "At Vehinova, I built full-stack web applications end-to-end, owning everything from scalable backend architecture to responsive, user-facing interfaces and secure, database-driven workflows. Working hands-on with Django, PostgreSQL, and modern web technologies, I shipped production-style features spanning authentication, CRUD operations, and API integration — turning six weeks of intensive, real-world development into a solid foundation in shipping software that works.",

    // POLISHED: responsibilities rewritten with stronger action verbs (Task 14)
    responsibilities: [
      "Built and maintained full-stack web applications using Django, PostgreSQL, HTML, CSS, and Bootstrap",
      "Shipped authentication systems, CRUD operations, and responsive UI components that powered dynamic user experiences",
      "Connected backend logic to database workflows, ensuring secure and reliable content handling across the application",
      "Debugged, tested, and optimized application performance to keep every module running smoothly",
    ],

    // POLISHED: achievements rewritten for stronger impact (Task 14)
    achievements: [
      "Delivered a full-stack Online Blogging System from the ground up using Django and PostgreSQL, complete with secure authentication, CRUD workflows, and a polished user interface.",
      "Engineered backend modules powering content management, database integration, and user interaction across the platform's core features.",
      "Translated designs into responsive, accessible frontends with Bootstrap, HTML, and CSS — consistent across every device.",
      "Built a strong foundation in backend development, debugging, database operations, and real-world software deployment.",
    ],

    // POLISHED: systems descriptions tightened for impact (Task 14)
    systems: [
      "Online Blogging System (Django, PostgreSQL, Bootstrap, HTML, CSS)",
      "Secure login and registration workflows for user authentication and authorization",
      "Dynamic blog-management module with CRUD operations, category handling, and a responsive UI",
      "Database-driven content system built on PostgreSQL and Django ORM for scalable backend operations",
    ],

    // POLISHED: highlights tightened for impact (Task 14)
    highlights: [
      "Full-stack web development with Django, PostgreSQL, Bootstrap, HTML, and CSS, built on a scalable backend",
      "Secure authentication workflows spanning login, registration, session management, and access control",
      "Dynamic CRUD operations powering blog creation, editing, publishing, and content management",
      "Responsive UI implementation with optimized rendering across devices",
    ],

    projects: [
      {
        id: "online-blogging-system",
        title: "Online Blogging System",
        // POLISHED: project description tightened for impact (Task 14)
        description:
          "A full-stack blogging platform built for secure content publishing, a smooth user experience, and dynamic blog-management workflows on a database-driven architecture.",
        technologies: ["Django", "Python", "PostgreSQL", "Bootstrap", "HTML/CSS", "Django ORM"],
      },
    ],
  },
];

export default experienceData;
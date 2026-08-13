// Recategorized into 6 groups for the redesigned Skills section.
// All items preserved from the original data — nothing added or removed.
const skillsData = [
  {
    category: "Languages",
    icon: "code",
    items: ["C", "Python", "Java (Basic)"],
  },
  {
    category: "Frontend",
    icon: "layout",
    items: ["HTML", "CSS", "React.js"],
  },
  {
    category: "Backend",
    icon: "server",
    items: ["Node.js", "Express.js", "Django"],
  },
  {
    category: "Cloud & DevOps",
    icon: "cloud",
    items: ["AWS", "Google Cloud", "Cloud-native Development", "Edge Computing", "Git", "GitHub"],
  },
  {
    category: "Databases",
    icon: "database",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    // Renamed from "AI & Tools" — the underlying data has no AI/ML skills,
    // so "Tools & Integration" accurately describes VS Code, PyCharm, and API Integration.
    category: "Tools & Integration",
    icon: "cpu",
    items: ["API Integration", "VS Code", "PyCharm"],
  },
];

export default skillsData;

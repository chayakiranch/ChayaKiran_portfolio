// REGROUPED (Task 24): rebalanced into 6 more evenly-sized groups so card
// heights stay consistent across the grid (previous "Cloud & DevOps" group
// had 6 items vs. 3 elsewhere, causing uneven row heights — see Task 25).
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
    category: "Databases",
    icon: "database",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    icon: "cloud",
    // MOVED: Git, GitHub relocated to "Tools & Version Control" below to
    // shrink this group from 6 items down to 4 (Task 24)
    items: ["AWS", "Google Cloud", "Cloud-native Development", "Edge Computing"],
  },
  {
    // RENAMED: "Tools & Integration" -> "Tools & Version Control" now that
    // Git/GitHub live here alongside the existing tools (Task 24)
    category: "Tools & Version Control",
    icon: "cpu",
    items: ["Git", "GitHub", "API Integration", "VS Code", "PyCharm"],
  },
];

export default skillsData;
const educationData = [
  {
    id: "klu-btech",
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering — Cloud and Edge Computing",
    institution: "Koneru Lakshmaiah University",
    location: "Guntur, India",
    score: "CGPA 7.88 / 10",
    years: "2022 — In Progress",
    highlights: [
      "Specializing in Cloud and Edge Computing, covering AWS architecture, cloud-native design, and distributed systems.",
      "Built full-stack MERN and Django projects applying database, API, and UI design principles.",
      "Completed a summer internship in MERN stack development at Vehinova Technologies.",
      "Participated in hackathons and coding challenges on HackerRank and LeetCode.",
    ],
  },
  {
    id: "ipe-xii",
    degree: "Intermediate (Class XII)",
    field: "BIEAP",
    institution: "Sri Sarada Jr College",
    location: "Vijayawada, India",
    score: "52%",
    years: "2020 — 2022",
    highlights: [
      "Studied Mathematics, Physics, and Chemistry (MPC) as the core subjects.",
      "Completed intermediate education and gained a strong foundation in analytical and problem-solving skills.",
    ],
    hidden: true, // NEW: excluded from Education page display; flip to false to show again
  },
  {
    id: "ssc-x",
    degree: "SSC (Class X)",
    field: "BSEAP",
    institution: "Sikhara School",
    location: "Vijayawada, India",
    score: "85%",
    years: "2019 — 2020",
    highlights: [
      "Built a strong academic foundation across core subjects ahead of intermediate studies.",
    ],
    hidden: true, // NEW: excluded from Education page display; flip to false to show again
  },
];

export default educationData;
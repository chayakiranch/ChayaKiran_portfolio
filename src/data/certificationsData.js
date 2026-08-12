// Certifications & Achievements data.
// Add a new certificate by pushing a new object here — no UI/component changes needed.
// `category` controls which section on the Certifications page a card appears in;
// a category section only renders if at least one certificate uses it.

const certificationsData = [
  {
    id: "aviatrix-ace-mcna",
    title: "Aviatrix Certified Engineer — Multicloud Network Associate",
    organization: "Aviatrix, Inc.",
    platform: "Credly",
    category: "Global Certifications",
    issueDate: "February 2026",
    issueDateValue: "2026-02-21",
    expiryDate: "February 2029",
    credentialId: "2026-32533",
    credentialUrl: "https://www.credly.com/badges/78025f61-a4e3-49e6-8c5f-91f0f73aef38/public_url",
    image: "/certifications/aviatrix-ace-mcna.jpg",
    skills: ["Multicloud Networking", "AWS", "Azure", "Google Cloud", "Oracle Cloud", "Network Automation"],
  },
  {
    id: "oci-2025-foundations",
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    organization: "Oracle University",
    platform: "Oracle University",
    category: "Global Certifications",
    issueDate: "December 2025",
    issueDateValue: "2025-12-18",
    expiryDate: "December 2027",
    credentialId: "324679081OCI25FNDCFA",
    credentialUrl:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8475B7812742873B9B9E0620558D926F17515147144E75A408E220F9B6022CEA",
    image: "/certifications/oci-2025-foundations.jpg",
    skills: ["Oracle Cloud Infrastructure", "Cloud Fundamentals", "OCI Core Services"],
  },
  {
    id: "salesforce-ai-associate",
    title: "Salesforce Certified AI Associate",
    organization: "Salesforce",
    platform: "Trailhead",
    category: "Global Certifications",
    issueDate: "November 2024",
    issueDateValue: "2024-11-14",
    expiryDate: "",
    credentialId: "5250173",
    credentialUrl:
      "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=3fs4izG9L5kksjfbs9T9kzX7j/NDvpN7HfRcwPU2AYJanSogu0XWk5pKhHTkD8oE",
    image: "/certifications/salesforce-ai-associate.jpg",
    skills: ["Salesforce AI", "Responsible AI", "Einstein", "Trailhead"],
  },
  {
    id: "aa-essentials-automation",
    title: "Automation Anywhere Certified Essentials Automation Professional",
    organization: "Automation Anywhere",
    platform: "Automation Anywhere University",
    category: "Global Certifications",
    issueDate: "August 2025",
    issueDateValue: "2025-08-18",
    expiryDate: "August 2027",
    credentialId: "AAESSE2024A360 - 158425897",
    credentialUrl: "https://certificates.automationanywhere.com/e25e15fa-7705-4e08-8c44-13930b316641#acc.yPYn7eCb",
    image: "/certifications/aa-essentials-automation.jpg",
    skills: ["Process Automation", "Bot Design", "Automation 360"],
  },
  {
    id: "aa-rpa-essentials",
    title: "Automation Anywhere Certified Essentials RPA Professional",
    organization: "Automation Anywhere",
    platform: "Automation Anywhere University",
    category: "Global Certifications",
    issueDate: "2023",
    issueDateValue: "2023-01-01",
    expiryDate: "",
    credentialId: "AAESS-A360 165800244",
    credentialUrl: "https://certificates.automationanywhere.com/a01b4ebe-3d92-4a84-be6b-bb8e5eedfd6f#acc.I0ZyzDPJ",
    image: "/certifications/aa-rpa-essentials.jpg",
    skills: ["RPA Fundamentals", "Automation 360", "Bot Development"],
  },
  // TODO: add more certifications here as they're earned.
];

// Ordered list of every category the UI understands. A category only shows up
// on the Certifications page (in the section list and the filter chips) if
// certificationsData has at least one entry using it.
export const certificationCategories = [
  "Global Certifications",
  "Cloud Certifications",
  "Programming Certifications",
  "Professional Certifications",
  "Internships & Training",
  "Hackathons & Competitions",
  "Badges & Learning Platforms",
];

export const extraCurricular = [
  "Participated in hackathons and coding challenges on HackerRank and LeetCode.",
  "Active volunteer at Sweccha NGO, contributing to community-driven sustainability initiatives.",
  "Collaborated with volunteers to organize outreach and awareness events on social development and innovation.",
];

export default certificationsData;

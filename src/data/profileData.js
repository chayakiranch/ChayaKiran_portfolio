// Core identity + contact info.
const profile = {
  name: "Chintakula Chaya Kiran",
  initials: "CCK",
  role: "Cloud & Edge Computing Engineer · Full-Stack (MERN) Developer",
  location: "Vijayawada, India", // FIXED: "Vijayawada, Andhra Pradesh, India" -> "Vijayawada, India" (Task 8)
  // REMOVED: phone field deleted per request (mobile number removed from whole project)
  email: "chayakiranch@gmail.com",
  resumeFile: "/resume/Chaya_Kiran_Resume.pdf",
  resumeLastUpdated: "April 20, 2026", // NEW: shown on the Resume page — update this whenever you upload a new resumeFile
  // FIXED: "student" -> "graduate" (Task 2)
  objective:
    "Dynamic and innovative Computer Science Engineering graduate specializing in Cloud and Edge Computing, proficient in AWS cloud architecture and MERN stack development. Completed an internship with Vehinova Technologies, contributing to the design and deployment of high-performance cloud-native solutions. Experienced in database management, API integration, and responsive UI design. Passionate about utilizing emerging technologies to create scalable, secure, and efficient software systems through teamwork and analytical problem-solving.",
  socials: {
    linkedin: "https://www.linkedin.com/in/chaya-kiran-chintakula/",
    github: "https://github.com/chayakiranch",
  },
};

export default profile;
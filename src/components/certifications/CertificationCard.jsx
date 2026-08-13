import { motion } from "framer-motion";

// Simplified per redesign: image, date, title, organization, Verify Credential.
// Skills/expiry/credential-ID rows and the secondary "View" button were removed.
// Clicking the image still opens the full-size certificate in CertificationModal.
export default function CertificationCard({ cert, onView }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="glow-card group bg-panel/70 backdrop-blur-md border border-panel-border rounded-2xl overflow-hidden"
    >
      <button
        type="button"
        onClick={() => onView(cert)}
        aria-label={`View ${cert.title} certificate`}
        className="block w-full aspect-[4/3] overflow-hidden bg-bg-alt"
      >
        <img
          src={cert.image}
          alt={cert.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </button>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <h3 className="font-display text-base font-semibold leading-snug">{cert.title}</h3>
          <span className="font-mono text-[0.7rem] text-muted-2 whitespace-nowrap shrink-0 mt-0.5">
            {cert.issueDate}
          </span>
        </div>

        <p className="text-accent text-sm font-medium">{cert.organization}</p>

        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-navlink inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-text transition-colors mt-4"
          >
            Verify Credential →
          </a>
        )}
      </div>
    </motion.div>
  );
}

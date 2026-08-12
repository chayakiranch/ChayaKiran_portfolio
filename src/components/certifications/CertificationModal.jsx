import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Download, ZoomIn, ZoomOut } from "lucide-react";

export default function CertificationModal({ cert, onClose }) {
  const [zoomed, setZoomed] = useState(false);

  // Lock body scroll while the modal is open + close on Escape.
  useEffect(() => {
    if (!cert) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [cert, onClose]);

  // Reset zoom whenever a different certificate is opened.
  useEffect(() => {
    setZoomed(false);
  }, [cert]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-bg/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[88vh] bg-panel border border-panel-border rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-panel-border">
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold leading-snug truncate">{cert.title}</h3>
                <p className="text-accent text-sm font-medium mt-1">{cert.organization}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg border border-panel-border text-muted hover:text-text hover:border-accent transition-colors"
              >
                <X size={17} />
              </button>
            </div>

            {/* Image viewer */}
            <div className="relative flex-1 overflow-auto bg-bg-alt flex items-center justify-center min-h-[280px]">
              <button
                type="button"
                onClick={() => setZoomed((z) => !z)}
                aria-label={zoomed ? "Zoom out" : "Zoom in"}
                className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-lg bg-panel/90 border border-panel-border text-text hover:text-accent transition-colors"
              >
                {zoomed ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
              </button>
              <img
                src={cert.image}
                alt={cert.title}
                onClick={() => setZoomed((z) => !z)}
                className={`w-full h-auto transition-transform duration-300 cursor-zoom-in ${
                  zoomed ? "scale-150 cursor-zoom-out" : "scale-100"
                }`}
              />
            </div>

            {/* Footer / actions */}
            <div className="flex flex-wrap items-center gap-3 px-6 py-5 border-t border-panel-border">
              {cert.credentialId && (
                <span className="font-mono text-xs text-muted-2 break-all mr-auto">ID: {cert.credentialId}</span>
              )}
              <a
                href={cert.image}
                download
                className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2.5 rounded-full border border-panel-border text-text hover:border-accent hover:text-accent transition-colors"
              >
                <Download size={15} /> Download
              </a>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2.5 rounded-full bg-accent text-[#06201d] transition-transform hover:-translate-y-0.5"
                >
                  Verify Credential <ExternalLink size={15} />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useEffect, useRef, useState } from "react"; // UPDATED: added useRef for the fullscreen target element
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Download, ZoomIn, ZoomOut, Maximize, Minimize } from "lucide-react"; // UPDATED: added Maximize/Minimize icons

export default function CertificationModal({ cert, onClose }) {
  const [zoomed, setZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false); // NEW
  const viewerRef = useRef(null); // NEW: element that goes full-screen (image viewer pane)

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

  // NEW: keep isFullscreen in sync with the actual browser state (covers Esc,
  // F11, or the browser's own fullscreen exit control, not just our button).
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === viewerRef.current);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Exit fullscreen automatically if the modal itself closes.
  useEffect(() => {
    if (!cert && document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  }, [cert]);

  const toggleFullscreen = () => {
    if (!viewerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      viewerRef.current.requestFullscreen?.().catch(() => {});
    }
  };

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
                className="glow-icon glow-card shrink-0 w-9 h-9 flex items-center justify-center rounded-lg border border-panel-border text-muted hover:text-text"
              >
                <X size={17} />
              </button>
            </div>

            {/* Image viewer — also the fullscreen target element (NEW: ref + bg-bg-alt
                classes apply in fullscreen too, so it fills the screen cleanly). */}
            <div
              ref={viewerRef}
              className="relative flex-1 overflow-auto bg-bg-alt flex items-center justify-center min-h-[280px]"
            >
              {/* NEW: fullscreen toggle, sits left of the zoom button */}
              <button
                type="button"
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? "Exit full screen" : "View full screen"}
                className="glow-icon glow-card absolute top-3 right-14 z-10 w-9 h-9 flex items-center justify-center rounded-lg bg-panel/90 border border-panel-border text-text hover:text-accent"
              >
                {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
              </button>
              <button
                type="button"
                onClick={() => setZoomed((z) => !z)}
                aria-label={zoomed ? "Zoom out" : "Zoom in"}
                className="glow-icon glow-card absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-lg bg-panel/90 border border-panel-border text-text hover:text-accent"
              >
                {zoomed ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
              </button>
              <img
                src={cert.image}
                alt={cert.title}
                onClick={() => setZoomed((z) => !z)}
                className={`w-full h-auto transition-transform duration-300 cursor-zoom-in ${
                  zoomed ? "scale-150 cursor-zoom-out" : "scale-100"
                } ${isFullscreen ? "max-h-screen w-auto object-contain" : ""}`}
              />
            </div>

            {/* Footer / actions */}
            <div className="flex flex-wrap items-center gap-3 px-6 py-5 border-t border-panel-border">
              {cert.credentialId && (
                <span className="font-mono text-xs text-muted-2 break-all mr-auto">ID: {cert.credentialId}</span>
              )}
              {/* downloadUrl lets a caller point Download at a different
                  file (e.g. the original PDF) than the previewed image. */}
              <a
                href={cert.downloadUrl || cert.image}
                download
                className="glow-btn inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2.5 rounded-full border border-panel-border text-text hover:border-accent hover:text-accent"
              >
                <Download size={15} /> Download
              </a>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-btn inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2.5 rounded-full bg-accent text-[#06201d]"
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
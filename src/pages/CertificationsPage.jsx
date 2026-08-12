import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import certificationsData, { certificationCategories } from "../data/certificationsData";
// CHANGED: all certification components live in components/certifications/
import CertificationGrid from "../components/certifications/CertificationGrid";
import CertificationModal from "../components/certifications/CertificationModal";

const PAGE_TITLE = "Certifications | Chaya Kiran Portfolio";
const PAGE_DESCRIPTION =
  "Professional certifications, cloud credentials, programming certifications, achievements, and technical learning journey of Chaya Kiran.";

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState(null);

  // SEO: set page title + meta description while this page is mounted, restore on unmount.
  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;

    let meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") ?? null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", PAGE_DESCRIPTION);

    return () => {
      document.title = previousTitle;
      if (previousDescription !== null) meta.setAttribute("content", previousDescription);
    };
  }, []);

  // Only categories that actually have at least one certification are rendered.
  const groupedByCategory = useMemo(
    () =>
      certificationCategories
        .map((cat) => ({ category: cat, certs: certificationsData.filter((c) => c.category === cat) }))
        .filter((group) => group.certs.length > 0),
    []
  );

  return (
    <>
      {/* HERO */}
      <section className="pt-16 pb-14 md:pt-20 md:pb-16 text-center">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05] tracking-tight max-w-[820px] mx-auto"
          >
            Certifications &amp; Achievements
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-muted text-[1.05rem] max-w-[560px] mx-auto mt-4 leading-relaxed"
          >
            Technical certifications, badges, and learning accomplishments.
          </motion.p>
        </div>
      </section>

      {/* CATEGORY SECTIONS */}
      <section className="pb-24">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8 flex flex-col gap-16">
          {groupedByCategory.map(({ category, certs }) => (
            <div key={category}>
              <div className="mb-7">
                <h2 className="font-display text-2xl font-bold">{category}</h2>
                <span className="block w-10 h-[3px] bg-accent rounded-full mt-3" />
              </div>
              <CertificationGrid certs={certs} onView={setSelectedCert} />
            </div>
          ))}
        </div>
      </section>

      <CertificationModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </>
  );
}

import SectionHeading from "../components/SectionHeading";
import certificationsData from "../data/certificationsData";

export default function CertificationsPage() {
  return (
    <section className="py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <SectionHeading tag="05" eyebrow="Certifications" title="Credentials that back it up" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">
          {certificationsData.map((c) => (
            <div key={c.id} className="bg-panel border border-panel-border border-l-[3px] border-l-amber rounded-lg p-6">
              <span className="font-mono text-[0.78rem] text-amber">{c.date}</span>
              <h3 className="font-display text-base font-semibold mt-2.5 leading-snug">{c.title}</h3>
              {c.credentialUrl ? (
                <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-accent text-sm font-semibold mt-3 inline-block">
                  View credential →
                </a>
              ) : (
                <span className="text-muted-2 text-xs mt-3 inline-block">Credential link coming soon</span>
              )}
            </div>
          ))}

          {/* TODO: add more certifications here as they're earned */}
          <div className="border border-dashed border-panel-border rounded-lg p-6 flex items-center justify-center text-center text-muted-2 text-sm min-h-[110px]">
            More certifications coming soon.
          </div>
        </div>
      </div>
    </section>
  );
}

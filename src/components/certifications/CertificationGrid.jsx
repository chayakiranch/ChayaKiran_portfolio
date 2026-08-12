import CertificationCard from "./CertificationCard";

export default function CertificationGrid({ certs, onView }) {
  if (certs.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {certs.map((cert) => (
        <CertificationCard key={cert.id} cert={cert} onView={onView} />
      ))}
    </div>
  );
}

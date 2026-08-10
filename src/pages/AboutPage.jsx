import SectionHeading from "../components/SectionHeading";
import { extraCurricular } from "../data/certificationsData";
import profile from "../data/profileData";

export default function AboutPage() {
  return (
    <section className="py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <SectionHeading tag="01" eyebrow="About" title="About me" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mt-12">
          <div className="space-y-5 text-muted">
            <p>{profile.objective}</p>
            <p>
              During my internship at Vehinova Technologies, I contributed to the design and deployment of
              high-performance, cloud-native solutions. Outside of coursework, I compete in hackathons on
              HackerRank and LeetCode, and volunteer with Sweccha NGO on community-driven sustainability
              initiatives.
            </p>
          </div>

          <div>
            <div className="flex flex-col gap-3.5 pb-6 border-b border-panel-border">
              <Fact label="Location" value={profile.location} />
              <Fact label="Focus" value="Cloud & Edge Computing" />
              <Fact label="Currently" value="B.Tech CSE, final year (2022–2026)" />
              <Fact label="Phone" value={profile.phone} />
              <Fact label="Email" value={profile.email} />
            </div>

            <div className="mt-10">
              <h3 className="font-display text-lg font-semibold mb-4">Beyond the classroom</h3>
              <ul className="space-y-2.5">
                {extraCurricular.map((line) => (
                  <li key={line} className="relative pl-5 text-muted text-[0.94rem]">
                    <span className="absolute left-0 text-muted-2">—</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value }) {
  return (
    <div className="flex justify-between gap-4 text-[0.92rem]">
      <span className="font-mono text-[0.8rem] text-muted-2">{label}</span>
      <span className="text-right">{value}</span>
    </div>
  );
}

import { useState } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import profile from "../data/profileData";

const contactLinks = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: profile.socials.linkedin || "Add your LinkedIn URL", href: profile.socials.linkedin || "#" },
  { icon: Github, label: profile.socials.github || "Add your GitHub URL", href: profile.socials.github || "#" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [note, setNote] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setNote("Please fill in every field.");
      return;
    }
    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setNote("Opening your email client…");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-[clamp(1.9rem,3.4vw,2.75rem)] tracking-tight">Get in Touch</h1>
          <p className="text-muted mt-3">Want to contact or collaborate? Ping me.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glow-card bg-panel/80 backdrop-blur-md border border-panel-border rounded-3xl p-8">
            <h2 className="font-display text-2xl font-bold mb-6">Connect</h2>
            <div className="flex flex-col gap-4">
              {contactLinks.map((item, i) => {
                const Icon = item.icon;
                const isExternal = item.href.startsWith("http");
                const target = isExternal ? "_blank" : undefined;
                const rel = isExternal ? "noopener noreferrer" : undefined;
                const rowClass = "glow-card flex items-center gap-3 min-w-0 bg-bg-alt border border-panel-border rounded-xl px-5 py-4 text-sm text-text";
                return (
                  <a key={i} href={item.href} target={target} rel={rel} className={rowClass}>
                    <Icon size={17} className="glow-icon text-muted shrink-0" />
                    <span className="truncate min-w-0 flex-1">{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="glow-card bg-panel/80 backdrop-blur-md border border-panel-border rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
              </div>
              <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" />
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-text">Message</label>
                <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange} placeholder="Have a project or idea? Let's connect and bring it to life together." className="glow-input bg-bg-alt border border-panel-border rounded-xl px-4 py-3.5 text-text placeholder:text-muted-2 focus:outline-none resize-y" />
              </div>
              <button type="submit" className="glow-btn self-start font-semibold text-[0.95rem] px-7 py-3.5 rounded-full bg-accent text-[#06201d]">Send Message</button>
              {note && <p className="text-accent text-sm">{note}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, value, onChange, placeholder }) {
  const inputType = type || "text";
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-semibold text-text">{label}</label>
      <input id={name} name={name} type={inputType} required value={value} onChange={onChange} placeholder={placeholder} className="glow-input bg-bg-alt border border-panel-border rounded-xl px-4 py-3.5 text-text placeholder:text-muted-2 focus:outline-none" />
    </div>
  );
}

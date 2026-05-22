import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle } from "lucide-react";
import Footer from "../components/Footer";

const MIDRAND_IMG = "/images/contact.png";

const contactItems = [
  {
    icon: MapPin,
    label: "Location",
    value: "136 2nd Street, Randjespark, Midrand, 1685",
    href: "https://maps.google.com/?q=Randjespark,Midrand,1685",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+27 69 485 9076",
    value2: "+27 10 825 4612",
    href: "tel:+27694859076",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@isonka-group.co.za",
    href: "mailto:info@isonka-group.co.za",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.isonka-group.co.za",
    href: "https://www.isonka-group.co.za",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 lg:pt-48 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={MIDRAND_IMG}
            alt="Midrand South Africa"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/60" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-4"
          >
            Contact
          </motion.span>
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl lg:text-8xl font-inter font-black uppercase tracking-tighter leading-[0.9]"
            >
              {"Let's Get"}
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-5xl lg:text-8xl font-inter font-black uppercase tracking-tighter leading-[0.9] text-accent"
            >
              In Touch
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -6, borderColor: "hsl(221 83% 53% / 0.5)" }}
                  className="block bg-card border border-border p-8 group transition-all duration-500"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={24} className="text-primary mb-6" />
                  </motion.div>
                  <p className="text-muted-foreground font-inter text-xs font-bold uppercase tracking-wider mb-2">
                    {item.label}
                  </p>
                  <p className="text-foreground font-inter text-sm font-medium leading-relaxed">
                    {item.value}
                  </p>
                  {item.value2 && (
                    <p className="text-foreground font-inter text-sm font-medium">
                      {item.value2}
                    </p>
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-inter font-black uppercase tracking-tighter mb-6">
                Start a Conversation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {
                  "Ready to elevate your brand? Fill in the form and one of our specialists will get back to you promptly. Whether you're starting from scratch or looking to grow — we're here."
                }
              </p>
              <div className="space-y-4">
                {[
                  "Design & Print",
                  "Branding",
                  "Advertising",
                  "Production",
                  "Multiple Services",
                ].map((s) => (
                  <motion.button
                    key={s}
                    whileHover={{ x: 8 }}
                    onClick={() => setForm({ ...form, service: s })}
                    className={`flex items-center gap-3 text-sm transition-colors duration-300 w-full text-left ${form.service === s ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors ${form.service === s ? "bg-primary" : "bg-border"}`}
                    />
                    {s}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center py-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle
                      size={64}
                      className="text-primary mx-auto mb-6"
                    />
                  </motion.div>
                  <h3 className="text-2xl font-inter font-bold mb-3">
                    {"Message Sent!"}
                  </h3>
                  <p className="text-muted-foreground">
                    {"We'll be in touch with you shortly."}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    {
                      field: "name",
                      label: "Full Name",
                      type: "text",
                      placeholder: "Your full name",
                    },
                    {
                      field: "email",
                      label: "Email Address",
                      type: "email",
                      placeholder: "your@email.com",
                    },
                  ].map(({ field, label, type, placeholder }) => (
                    <div key={field} className="relative">
                      <motion.label
                        animate={{
                          color:
                            focused === field
                              ? "hsl(221 83% 53%)"
                              : "hsl(240 5% 64%)",
                        }}
                        className="block text-xs font-bold uppercase tracking-wider mb-2"
                      >
                        {label}
                      </motion.label>
                      <motion.input
                        animate={{
                          borderColor:
                            focused === field
                              ? "hsl(221 83% 53%)"
                              : "hsl(0 0% 14%)",
                        }}
                        type={type}
                        required
                        value={form[field]}
                        onChange={(e) =>
                          setForm({ ...form, [field]: e.target.value })
                        }
                        onFocus={() => setFocused(field)}
                        onBlur={() => setFocused(null)}
                        placeholder={placeholder}
                        className="w-full bg-card border px-4 py-3 text-foreground placeholder:text-muted-foreground/40 outline-none text-sm transition-colors duration-300"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                      Service Interested In
                    </label>
                    <div className="bg-card border border-border px-4 py-3 text-sm text-muted-foreground">
                      {form.service || "Select a service on the left →"}
                    </div>
                  </div>
                  <div>
                    <motion.label
                      animate={{
                        color:
                          focused === "message"
                            ? "hsl(221 83% 53%)"
                            : "hsl(240 5% 64%)",
                      }}
                      className="block text-xs font-bold uppercase tracking-wider mb-2"
                    >
                      Message
                    </motion.label>
                    <motion.textarea
                      animate={{
                        borderColor:
                          focused === "message"
                            ? "hsl(221 83% 53%)"
                            : "hsl(0 0% 14%)",
                      }}
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      placeholder="Tell us about your project..."
                      className="w-full bg-card border px-4 py-3 text-foreground placeholder:text-muted-foreground/40 outline-none text-sm resize-none transition-colors duration-300"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-primary-foreground py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-accent transition-colors duration-300"
                  >
                    Send Message <Send size={16} />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

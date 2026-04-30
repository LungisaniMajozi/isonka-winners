import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ChevronDown } from "lucide-react";
import Footer from "../components/Footer";

const TEAM_IMG =
  "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop";
const BRANDING_IMG =
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop";

const reasons = [
  {
    title: "Creative Excellence",
    desc: "We combine strategy with creativity to produce work that stands out. Every project is approached with fresh eyes and bold ideas that elevate brands beyond expectations.",
  },
  {
    title: "Client-Centered Approach",
    desc: "We listen, collaborate, and tailor our services to meet your unique needs. Your goals become our goals — we're partners in your success, not just service providers.",
  },
  {
    title: "Reliable Quality",
    desc: "On-time delivery and high standards are core to everything we do. We believe deadlines are promises, and quality is non-negotiable.",
  },
  {
    title: "Full-Service Offering",
    desc: "A one-stop solution for all your media, branding, and advertising needs. From concept to execution, we're with you every step of the way.",
  },
];

const exec = [
  {
    name: "Tshepang Sonkosi",
    role: "Chief Executive Officer",
    bio: "Visionary leader driving Isonka Media forward with strategic direction and industry expertise.",
  },
  {
    name: "Grace Serekwane",
    role: "Chief Financial Officer",
    bio: "Ensuring financial excellence and sustainable growth for the company's long-term vision.",
  },
];

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  const [openReason, setOpenReason] = useState(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pb-40 px-6 lg:px-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 text-[25vw] font-inter font-black uppercase tracking-tighter text-foreground select-none pointer-events-none flex items-center justify-center leading-none"
        >
          ABOUT
        </motion.div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-4"
          >
            Who We Are
          </motion.span>
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl lg:text-8xl font-inter font-black uppercase tracking-tighter text-foreground leading-[0.9]"
            >
              About Us
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-2xl leading-relaxed"
          >
            A dynamic and innovative media company based in South Africa.
          </motion.p>
        </div>
      </section>

      {/* Image + Text */}
      <section className="px-6 lg:px-8 pb-24 lg:pb-40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <img
              src={TEAM_IMG}
              alt="Isonka Media professional team at work"
              className="w-full h-[500px] object-cover"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-primary px-8 py-6 text-primary-foreground"
            >
              <p className="text-3xl font-inter font-black">100%</p>
              <p className="text-xs uppercase tracking-wider mt-1">
                Black Female Owned
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p className="text-foreground text-xl font-medium leading-relaxed mb-6">
              Isonka Media is a dynamic and innovative media company based in
              South Africa, operating under the registered name Isonka Winners
              Media and Communication (Pty) Ltd.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {
                "We specialize in a diverse range of services including Design & Print, Branding, Advertising, and Media Production."
              }
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              {
                "Our mission is to deliver creative, impactful, and results-driven communication solutions that elevate brands and connect them meaningfully with their audiences. Whether you're a startup looking to make your mark or an established business aiming to grow your presence, we bring your vision to life with precision and passion."
              }
            </p>
            <div className="border-l-4 border-accent pl-6">
              <p className="text-accent text-xs font-bold uppercase tracking-wider mb-2">
                {"Ownership & Compliance"}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {
                  "We are a 100% Black female-owned company, proudly contributing to the transformation and empowerment of South Africa's economy."
                }
              </p>
              <p className="text-primary font-bold text-sm mt-2">
                Reg. 2014/202976/07
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                {
                  "Supporting Broad-Based Black Economic Empowerment (B-BBEE) initiatives in our industry."
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us — Accordion */}
      <section className="px-6 lg:px-8 py-24 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-6xl font-inter font-black uppercase tracking-tighter">
              The Isonka Difference
            </h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-px"
          >
            {reasons.map((r, i) => (
              <motion.div key={r.title} variants={fadeUp}>
                <button
                  onClick={() => setOpenReason(openReason === i ? null : i)}
                  className="w-full flex justify-between items-center p-8 bg-background hover:bg-primary/5 transition-colors duration-300 text-left group border border-border"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-primary font-mono text-xs">
                      0{i + 1}
                    </span>
                    <h3 className="text-foreground font-inter font-bold text-xl group-hover:text-primary transition-colors">
                      {r.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openReason === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="text-muted-foreground" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openReason === i ? "auto" : 0,
                    opacity: openReason === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden bg-primary/5 border-x border-b border-border"
                >
                  <div className="p-8 flex items-start gap-4">
                    <CheckCircle
                      size={20}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <p className="text-muted-foreground leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="px-6 lg:px-8 py-24 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-4">
              Leadership
            </span>
            <h2 className="text-4xl lg:text-6xl font-inter font-black uppercase tracking-tighter">
              Executive Team
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {exec.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-card border border-border p-10 group cursor-default"
              >
                <img
                  src={BRANDING_IMG}
                  alt={person.name}
                  className="w-16 h-16 rounded-full object-cover mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <h3 className="text-foreground font-inter font-bold text-2xl mb-1">
                  {person.name}
                </h3>
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-4">
                  {person.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {person.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

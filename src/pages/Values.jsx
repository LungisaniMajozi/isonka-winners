import { useState } from "react";
import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  BookOpen,
  Zap,
  Award,
  ChevronRight,
} from "lucide-react";
import Footer from "../components/Footer";

const INNOVATION_IMG =
  "https://images.unsplash.com/photo-1573164713619-24cb81b1baee?q=80&w=2069&auto=format&fit=crop";
const PRINT_IMG2 =
  "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop";

const values = [
  {
    icon: BookOpen,
    label: "Knowledge",
    color: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    accent: "bg-blue-500",
    text: "Extensive knowledge about the industry and the products that we supply. Our team stays at the forefront of media trends, print technology, and creative innovation to serve you better.",
  },
  {
    icon: Zap,
    label: "Capacity",
    color: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
    accent: "bg-yellow-500",
    text: "Most of our services and products can be delivered at a reasonable short notice. We have the infrastructure, team, and processes to scale quickly without sacrificing quality.",
  },
  {
    icon: Award,
    label: "Expertise",
    color: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    accent: "bg-orange-500",
    text: "We have in our exposure, experts and business associates who are always available to offer support services and advice to you as our valuable customer. You're never alone in your project.",
  },
];

const pillars = [
  {
    label: "Vision",
    icon: Target,
    text: "To become an innovative leader in the integrated marketing and media industry!",
  },
  {
    label: "Mission",
    icon: Lightbulb,
    text: "To provide affordable services and products yet not compromising on the best service in the field, providing you, our important customer with high quality products.",
  },
];

export default function Values() {
  const [hoveredValue, setHoveredValue] = useState(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 lg:pt-48 pb-24 px-6 lg:px-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 text-[18vw] font-inter font-black uppercase tracking-tighter text-foreground select-none pointer-events-none flex items-center justify-center leading-none"
        >
          VALUES
        </motion.div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-4"
          >
            What We Stand For
          </motion.span>
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl lg:text-8xl font-inter font-black uppercase tracking-tighter leading-[0.9]"
            >
              {"Vision & Values"}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Vision + Mission */}
      <section className="px-6 lg:px-8 pb-24 border-b border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="relative bg-card border border-border p-10 lg:p-14 overflow-hidden group"
              >
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 ${i === 0 ? "bg-primary" : "bg-accent"}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 + i * 0.2 }}
                />
                <Icon
                  size={40}
                  className={`${i === 0 ? "text-primary" : "text-accent"} mb-8`}
                />
                <h2 className="text-foreground font-inter font-bold text-2xl uppercase tracking-wider mb-6">
                  {p.label}
                </h2>
                <p className="text-foreground text-xl lg:text-2xl font-medium leading-relaxed">
                  {p.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Core Values — Hover to Reveal */}
      <section className="px-6 lg:px-8 py-24 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-4">
              Core Values
            </span>
            <h2 className="text-4xl lg:text-5xl font-inter font-black uppercase tracking-tighter">
              {"Our Key Strengths"}
            </h2>
            <p className="text-muted-foreground mt-4 text-sm">
              Hover over each value to learn more.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  onHoverStart={() => setHoveredValue(i)}
                  onHoverEnd={() => setHoveredValue(null)}
                  className={`border p-8 cursor-default transition-all duration-500 relative overflow-hidden ${v.color}`}
                >
                  <motion.div
                    animate={{ height: hoveredValue === i ? "100%" : "3px" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`absolute top-0 left-0 w-full ${v.accent} opacity-20`}
                  />
                  <motion.div
                    animate={{
                      scale: hoveredValue === i ? 1.2 : 1,
                      rotate: hoveredValue === i ? 5 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon size={36} className="mb-6" />
                  </motion.div>
                  <h3 className="text-foreground font-inter font-bold text-2xl uppercase tracking-tight mb-4">
                    {v.label}
                  </h3>
                  <motion.p
                    animate={{
                      opacity: hoveredValue === i ? 1 : 0.4,
                      y: hoveredValue === i ? 0 : 8,
                    }}
                    transition={{ duration: 0.4 }}
                    className="text-foreground text-sm leading-relaxed"
                  >
                    {v.text}
                  </motion.p>
                  <motion.div
                    animate={{ opacity: hoveredValue === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 mt-6 text-xs font-bold uppercase tracking-wider"
                  >
                    <span>Our commitment</span>
                    <ChevronRight size={14} />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovation Banner */}
      <section className="relative px-6 lg:px-8 py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={INNOVATION_IMG}
            alt="Innovation and passion"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] block mb-4">
              {"Driven By Innovation & Passion"}
            </span>
            <h2 className="text-4xl lg:text-6xl font-inter font-black uppercase tracking-tighter max-w-3xl leading-tight mb-8">
              The Future of South African Media
            </h2>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              {
                "As one of South Africa's fastest growing print and media companies, we embrace new technology with a clear vision for the future. Every new technology acquisition is driven by our desire to create a better experience for our customers."
              }
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

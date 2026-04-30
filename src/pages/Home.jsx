import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Printer,
  Palette,
  Megaphone,
  Film,
  CheckCircle,
} from "lucide-react";
import Footer from "../components/Footer";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop";
const TEAM_IMG =
  "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop";
const PRINT_IMG =
  "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop";
const PROD_IMG =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2071&auto=format&fit=crop";
const AD_IMG =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop";
const BRAND_IMG =
  "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=2070&auto=format&fit=crop";

const services = [
  {
    icon: Printer,
    title: "Print And Design",
    num: "01",
    img: PRINT_IMG,
    href: "/services",
    desc: "High-quality design and printing solutions tailored to your brand.",
  },
  {
    icon: Palette,
    title: "Branding",
    num: "02",
    img: BRAND_IMG,
    href: "/services",
    desc: "Logo design, corporate identity packages, branded merchandise and more.",
  },
  {
    icon: Megaphone,
    title: "Advertising",
    num: "03",
    img: AD_IMG,
    href: "/services",
    desc: "Campaigns across digital, print, and outdoor platforms.",
  },
  {
    icon: Film,
    title: "Production",
    num: "04",
    img: PROD_IMG,
    href: "/services",
    desc: "Video and audio content from concept to post-production.",
  },
];

const reasons = [
  {
    title: "Creative Excellence",
    desc: "We combine strategy with creativity to produce work that stands out.",
  },
  {
    title: "Client-Centered Approach",
    desc: "We listen, collaborate, and tailor our services to meet your unique needs.",
  },
  {
    title: "Reliable Quality",
    desc: "On-time delivery and high standards are core to everything we do.",
  },
  {
    title: "Full-Service Offering",
    desc: "A one-stop solution for all your media, branding, and advertising needs.",
  },
];

export default function Home() {
  return (
    <div className="bg-background text-foreground font-inter selection:bg-primary/30 min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Isonka Media"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-foreground" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground" />
          <div className="absolute left-3/4 top-0 bottom-0 w-px bg-foreground" />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 pb-24 lg:pb-40 pt-32">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent font-inter text-xs font-bold uppercase tracking-[0.3em]">
              Create. Print. Communicate.
            </span>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-8xl lg:text-[9rem] font-inter font-black uppercase tracking-tighter leading-[0.85]"
            >
              Isonka
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-8xl lg:text-[9rem] font-inter font-black uppercase tracking-tighter leading-[0.85] text-accent"
            >
              Winners
            </motion.h1>
          </div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex flex-col md:flex-row gap-8 items-start md:items-end justify-between"
          >
            <p className="max-w-lg text-muted-foreground text-base lg:text-lg leading-relaxed">
              Imagination is the beginning of creation. You imagine what you
              desire, you will what you imagine, and at last, you create what
              you will.
            </p>
            <Link
              to="/services"
              className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs font-bold uppercase tracking-wider hover:bg-accent transition-colors duration-300"
            >
              Explore Services
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 lg:py-40 px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-4">
              What We Do
            </span>
            <h2 className="text-4xl lg:text-6xl font-inter font-black uppercase tracking-tighter">
              Our Services
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Link to={svc.href} key={svc.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                    whileHover={{ backgroundColor: "hsl(221 83% 53% / 0.06)" }}
                    className="bg-background p-10 lg:p-14 min-h-[320px] flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-xs text-primary">
                        {svc.num}
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Icon size={28} className="text-accent mb-4" />
                      <h3 className="text-2xl lg:text-3xl font-inter font-black uppercase tracking-tight mb-3">
                        {svc.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 px-6 lg:px-8 border-t border-border">
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
              alt="Isonka Media team"
              className="w-full h-[480px] object-cover"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-primary px-8 py-6"
            >
              <p className="text-3xl font-inter font-black text-primary-foreground">
                100%
              </p>
              <p className="text-xs uppercase tracking-wider text-primary-foreground mt-1">
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
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-4">
              About Isonka Media
            </span>
            <h2 className="text-4xl lg:text-5xl font-inter font-black uppercase tracking-tighter mb-8 leading-tight">
              Who We Are
            </h2>
            <p className="text-foreground text-lg font-medium leading-relaxed mb-6">
              Isonka Media is a dynamic and innovative media company based in
              South Africa, operating under Isonka Winners Media and
              Communication (Pty) Ltd.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              {
                "We deliver creative, impactful, and results-driven communication solutions that elevate brands and connect them meaningfully with their audiences."
              }
            </p>
            <div className="space-y-4 mb-10">
              {reasons.map((r) => (
                <div key={r.title} className="flex items-start gap-4">
                  <CheckCircle
                    size={18}
                    className="text-primary mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <span className="text-foreground font-bold text-sm">
                      {r.title}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {" "}
                      — {r.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs font-bold uppercase tracking-wider hover:bg-accent transition-colors duration-300"
            >
              Learn More <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-32 px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-muted-foreground text-xs uppercase tracking-[0.3em] mb-6">
              Ready to create something great?
            </p>
            <h2 className="text-5xl lg:text-8xl font-inter font-black uppercase tracking-tighter mb-10">
              {"Let's Build"}
              <br />
              <span className="text-accent">{"Your Brand"}</span>
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors duration-300"
            >
              {"Get In Touch"} <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

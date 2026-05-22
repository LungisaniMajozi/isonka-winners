import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Printer,
  Palette,
  Megaphone,
  Film,
  X,
} from "lucide-react";
import Footer from "../components/Footer";

const PRINT_IMG =
  "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop";
const BRAND_IMG = "/images/branding.png";
const AD_IMG = "/images/advertising.png";
const PROD_IMG = "/images/production.png";
const PRINT_BG = "/images/printing.png";

const services = [
  {
    num: "01",
    icon: Printer,
    title: "Print And Design",
    color: "text-blue-500",
    image: PRINT_IMG,
    bgImage: PRINT_BG,
    tagline: "High-quality design and printing solutions",
    short:
      "From business cards to large-format banners — precision in every print.",
    details: [
      "Business cards, brochures, flyers",
      "Large-format printing (banners, signage)",
      "Custom stationery and letterheads",
      "Catalogues and annual reports",
      "Poster and poster design",
      "Visual appeal and professionalism guaranteed",
    ],
    desc: "We offer high-quality design and printing solutions tailored to your brand. From business cards and brochures to large-format printing, our work ensures visual appeal and professionalism.",
  },
  {
    num: "02",
    icon: Palette,
    title: "Branding",
    color: "text-orange-500",
    image: BRAND_IMG,
    bgImage: BRAND_IMG,
    tagline: "Your brand is your identity",
    short: "Define your brand voice and create lasting impressions.",
    details: [
      "Logo design and brand guidelines",
      "Corporate identity packages",
      "Branded merchandise and uniforms",
      "Brand strategy and positioning",
      "Colour palette and typography systems",
      "Consistency across all touchpoints",
    ],
    desc: "Your brand is your identity. We help you define and express it through logo design, corporate identity packages, branded merchandise, and more — creating lasting impressions with consistency and creativity.",
  },
  {
    num: "03",
    icon: Megaphone,
    title: "Advertising",
    color: "text-green-500",
    image: AD_IMG,
    bgImage: AD_IMG,
    tagline: "Compelling campaigns that resonate",
    short: "Strategies that reach your audience across every platform.",
    details: [
      "Digital advertising campaigns",
      "Print advertising (newspapers, magazines)",
      "Outdoor advertising (billboards, transit)",
      "Social media content and campaigns",
      "Campaign strategy and planning",
      "Performance tracking and reporting",
    ],
    desc: "We craft compelling advertising strategies that resonate with your target audience. Our team delivers campaigns across digital, print, and outdoor platforms, ensuring your message reaches and engages effectively.",
  },
  {
    num: "04",
    icon: Film,
    title: "Production",
    color: "text-purple-500",
    image: PROD_IMG,
    bgImage: PROD_IMG,
    tagline: "From concept to post-production",
    short: "Storytelling that captures attention and drives action.",
    details: [
      "Concept development and scripting",
      "Corporate video production",
      "Marketing and promotional videos",
      "Social media video content",
      "Audio production and podcasting",
      "Post-production and editing",
    ],
    desc: "From concept development to post-production, we create engaging video and audio content for marketing, corporate, social, and entertainment purposes. Our production team is skilled in storytelling that captures attention and drives action.",
  },
];

export default function Services() {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 lg:pt-48 pb-24 px-6 lg:px-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 text-[20vw] font-inter font-black uppercase tracking-tighter text-foreground select-none pointer-events-none flex items-center justify-center leading-none"
        >
          SERVICES
        </motion.div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-4"
          >
            What We Do
          </motion.span>
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl lg:text-8xl font-inter font-black uppercase tracking-tighter leading-[0.9]"
            >
              Our Services
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-2xl leading-relaxed"
          >
            Click on any service to discover everything we can do for you.
          </motion.p>
        </div>
      </section>

      {/* Services Grid - Interactive */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  onHoverStart={() => setHovered(i)}
                  onHoverEnd={() => setHovered(null)}
                  onClick={() => setSelected(svc)}
                  className="relative bg-background p-10 lg:p-14 cursor-pointer overflow-hidden group min-h-[380px] flex flex-col justify-between"
                >
                  {/* Background image on hover */}
                  <motion.div
                    animate={{ opacity: hovered === i ? 0.15 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={svc.bgImage}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  {/* Hover color bar */}
                  <motion.div
                    animate={{ scaleX: hovered === i ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: "left" }}
                    className="absolute top-0 left-0 right-0 h-1 bg-primary"
                  />

                  <div className="relative z-10 flex justify-between items-start">
                    <span className="font-mono text-xs text-primary">
                      {svc.num}
                    </span>
                    <motion.div
                      animate={{
                        x: hovered === i ? 4 : 0,
                        y: hovered === i ? -4 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight
                        size={20}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      />
                    </motion.div>
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      animate={{ scale: hovered === i ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block mb-4"
                    >
                      <Icon size={32} className={svc.color} />
                    </motion.div>
                    <h3 className="text-3xl lg:text-4xl font-inter font-black uppercase tracking-tight mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                      {svc.short}
                    </p>
                    <motion.p
                      animate={{
                        opacity: hovered === i ? 1 : 0,
                        y: hovered === i ? 0 : 10,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-primary text-xs font-bold uppercase tracking-wider mt-4"
                    >
                      Click to explore →
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl overflow-y-auto"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl mx-auto px-6 pt-40 lg:pt-48 pb-20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="mb-12 flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <X
                  size={20}
                  className="group-hover:rotate-90 transition-transform duration-300"
                />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Close
                </span>
              </button>
              <div className="grid lg:grid-cols-2 gap-16">
                <div>
                  <span className="text-primary font-mono text-sm block mb-4">
                    {selected.num}
                  </span>
                  <h2 className="text-5xl font-inter font-black uppercase tracking-tighter mb-4">
                    {selected.title}
                  </h2>
                  <p className="text-accent font-inter font-medium text-lg mb-8">
                    {selected.tagline}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-10">
                    {selected.desc}
                  </p>
                  <ul className="space-y-3">
                    {selected.details.map((d, i) => (
                      <motion.li
                        key={d}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                        className="flex items-center gap-3 text-sm text-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {d}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.a
                    href="#contact"
                    onClick={() => setSelected(null)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="inline-flex items-center gap-3 mt-10 bg-primary text-primary-foreground px-8 py-4 text-xs font-bold uppercase tracking-wider hover:bg-accent transition-colors"
                  >
                    Get a Quote <ArrowUpRight size={16} />
                  </motion.a>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full max-h-[500px] object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

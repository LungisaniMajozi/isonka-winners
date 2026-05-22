import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection({ heroImage }) {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Abstract architectural photography with dramatic lighting"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
      </div>

      {/* Animated grid lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-foreground" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-foreground" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 pb-20 lg:pb-32 pt-36 lg:pt-44">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
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
            className="text-4xl sm:text-6xl lg:text-[5.5rem] xl:text-[7.5rem] font-inter font-black uppercase tracking-tighter leading-[0.85] text-foreground"
          >
            Isonka
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-[5.5rem] xl:text-[7.5rem] font-inter font-black uppercase tracking-tighter leading-[0.85] text-foreground"
          >
            <span className="text-accent">Winners</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-col md:flex-row gap-8 items-start md:items-end justify-between"
        >
          <p className="max-w-lg text-muted-foreground text-base lg:text-lg font-inter leading-relaxed">
            Imagination is the beginning of creation. You imagine what you
            desire, you will what you imagine, and at last, you create what you
            will.
          </p>
          <a
            href="#services"
            className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs font-inter font-bold uppercase tracking-wider hover:bg-accent transition-colors duration-300"
          >
            Explore Services
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

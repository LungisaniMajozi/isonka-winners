import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-8 border-t border-border relative overflow-hidden">
      {/* Giant background text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 left-0 right-0 text-center text-[12vw] font-inter font-black uppercase tracking-tighter text-foreground select-none pointer-events-none leading-none"
      >
        ISONKA WINNERS
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <span className="text-white font-inter font-black text-sm">
                  iW
                </span>
              </div>
              <span className="text-foreground font-inter font-bold text-lg tracking-tight">
                isonka<span className="text-accent">winners</span>
              </span>
            </div>
            <p className="text-muted-foreground font-inter text-xs tracking-[0.15em] uppercase">
              {"Media & Communication (Pty) Ltd"}
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-xs font-inter font-bold uppercase tracking-[0.2em]">
            {["Home", "About", "Services", "Values", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground font-inter text-xs">
            {`\u00A9 ${new Date().getFullYear()} Isonka Winners Media and Communication (Pty) Ltd. All rights reserved.`}
          </p>
          <p className="text-muted-foreground font-inter text-xs">
            {"Reg. 2014/202976/07 \u00B7 100% Black Female Owned"}
          </p>
        </div>
      </div>
    </footer>
  );
}

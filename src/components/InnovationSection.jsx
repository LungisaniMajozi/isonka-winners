import { motion } from "framer-motion";

export default function InnovationSection({ image }) {
  return (
    <section className="relative py-24 lg:py-40 px-6 lg:px-8 border-t border-border overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Abstract light beams representing innovation"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-accent font-inter text-xs font-bold uppercase tracking-[0.3em] block mb-4">
            {"Driven By Innovation & Passion"}
          </span>
          <h2 className="text-4xl lg:text-6xl font-inter font-black uppercase tracking-tighter text-foreground leading-tight max-w-4xl">
            Print Focused. Future Driven.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-foreground text-lg lg:text-xl font-inter font-medium leading-relaxed mb-8">
              The print industry is constantly evolving and whilst many other
              companies have ceased investing in commercial print technology, we
              remain print focused.
            </p>
            <p className="text-muted-foreground text-base font-inter leading-relaxed">
              {
                "As one of South Africa's fastest growing print companies, we owe our continued growth and success, in part, to embracing new technology with a clear vision for the future. Every new technology acquisition is driven by our desire to create a better experience for our customers."
              }
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-muted-foreground text-base font-inter leading-relaxed mb-8">
              What does this mean for you? This means that we can offer you
              greater benefits than most other printers in South Africa. Faster
              output, better quality, premium vibrancy, with cost effective and
              environmentally friendly options available from one source.
            </p>
            <p className="text-muted-foreground text-base font-inter leading-relaxed">
              Our service is tailored to your needs. From online ordering for
              those repeat jobs and personalised business cards. To specialist
              consultants who will come to you and share their wealth of
              knowledge for that complex print project.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { num: "100%", label: "Black Female Owned" },
                { num: "10+", label: "Years of Experience" },
                { num: "\u221E", label: "Creative Possibilities" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                >
                  <p className="text-3xl lg:text-4xl font-inter font-black text-primary">
                    {stat.num}
                  </p>
                  <p className="text-muted-foreground font-inter text-xs uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

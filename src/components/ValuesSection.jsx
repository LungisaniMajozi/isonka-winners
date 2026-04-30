import { motion } from "framer-motion";
import { Target, Lightbulb, BookOpen, Zap, Award } from "lucide-react";

const values = [
  {
    icon: BookOpen,
    label: "Knowledge",
    text: "Extensive knowledge about the industry and the products that we supply.",
  },
  {
    icon: Zap,
    label: "Capacity",
    text: "Most of our services and products can be delivered at a reasonable short notice.",
  },
  {
    icon: Award,
    label: "Expertise",
    text: "We have in our exposure, experts and business associates who are always available to offer support services and advice to you as our valuable customer.",
  },
];

export default function ValuesSection() {
  return (
    <section
      id="values"
      className="py-24 lg:py-40 px-6 lg:px-8 border-t border-border relative overflow-hidden"
    >
      {/* Decorative background element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] lg:text-[30rem] font-inter font-black uppercase tracking-tighter text-foreground select-none pointer-events-none whitespace-nowrap"
      >
        VALUES
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-primary font-inter text-xs font-bold uppercase tracking-[0.3em] block mb-4">
            What We Stand For
          </span>
          <h2 className="text-4xl lg:text-6xl font-inter font-black uppercase tracking-tighter text-foreground leading-tight">
            {"Vision & Values"}
          </h2>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card border border-border p-8 lg:p-12 relative overflow-hidden group"
          >
            <motion.div
              className="absolute top-0 left-0 w-1 h-full bg-primary"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ transformOrigin: "top" }}
            />
            <div className="flex items-center gap-3 mb-6">
              <Target size={24} className="text-primary" />
              <h3 className="text-foreground font-inter font-bold text-lg uppercase tracking-wider">
                Vision
              </h3>
            </div>
            <p className="text-foreground font-inter text-xl lg:text-2xl font-medium leading-relaxed">
              To become an innovative leader in the integrated marketing and
              media industry!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card border border-border p-8 lg:p-12 relative overflow-hidden group"
          >
            <motion.div
              className="absolute top-0 left-0 w-1 h-full bg-accent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ transformOrigin: "top" }}
            />
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb size={24} className="text-accent" />
              <h3 className="text-foreground font-inter font-bold text-lg uppercase tracking-wider">
                Mission
              </h3>
            </div>
            <p className="text-foreground font-inter text-xl lg:text-2xl font-medium leading-relaxed">
              To provide affordable services and products yet not compromising
              on the best service in the field, providing you, our important
              customer with high quality products.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group"
              >
                <div className="bg-card border border-border p-8 h-full hover:border-primary/40 transition-all duration-500">
                  <Icon
                    size={28}
                    className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h4 className="text-foreground font-inter font-bold text-lg uppercase tracking-wider mb-4">
                    {value.label}
                  </h4>
                  <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                    {value.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

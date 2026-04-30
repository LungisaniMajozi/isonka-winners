import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

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

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-40 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-primary font-inter text-xs font-bold uppercase tracking-[0.3em] block mb-4">
            About Us
          </span>
          <h2 className="text-4xl lg:text-6xl font-inter font-black uppercase tracking-tighter text-foreground leading-tight">
            Who We Are
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-foreground text-lg lg:text-xl font-inter font-medium leading-relaxed mb-8">
              Isonka Media is a dynamic and innovative media company based in
              South Africa, operating under the registered name Isonka Winners
              Media and Communication (Pty) Ltd.
            </p>
            <p className="text-muted-foreground text-base font-inter leading-relaxed mb-8">
              {
                "We specialize in a diverse range of services including Design & Print, Branding, Advertising, and Media Production."
              }
            </p>
            <p className="text-muted-foreground text-base font-inter leading-relaxed mb-12">
              {
                "Our mission is to deliver creative, impactful, and results-driven communication solutions that elevate brands and connect them meaningfully with their audiences. Whether you're a startup looking to make your mark or an established business aiming to grow your presence, we bring your vision to life with precision and passion."
              }
            </p>

            {/* Ownership */}
            <div className="border-l-2 border-accent pl-6">
              <h3 className="text-accent font-inter font-bold text-sm uppercase tracking-wider mb-3">
                {"Ownership & Compliance"}
              </h3>
              <p className="text-muted-foreground text-sm font-inter leading-relaxed">
                {
                  "We are a 100% Black female-owned company, proudly contributing to the transformation and empowerment of South Africa's economy. Registration Number: 2014/202976/07. Our ownership structure reflects our commitment to inclusive economic participation, and we actively support Broad-Based Black Economic Empowerment (B-BBEE) initiatives in our industry."
                }
              </p>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-foreground font-inter font-bold text-xl mb-8"
            >
              Why Choose Isonka Media?
            </motion.h3>
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="group bg-card border border-border p-6 hover:border-primary/50 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle
                    className="text-primary mt-0.5 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="text-foreground font-inter font-bold text-base mb-1">
                      {reason.title}
                    </h4>
                    <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Executive Team */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 pt-8 border-t border-border"
            >
              <h3 className="text-primary font-inter font-bold text-sm uppercase tracking-wider mb-6">
                Executive Team
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-foreground font-inter font-semibold text-sm">
                    Tshepang Sonkosi
                  </p>
                  <p className="text-muted-foreground font-inter text-xs uppercase tracking-wider mt-1">
                    Chief Executive Officer
                  </p>
                </div>
                <div>
                  <p className="text-foreground font-inter font-semibold text-sm">
                    Grace Serekwane
                  </p>
                  <p className="text-muted-foreground font-inter text-xs uppercase tracking-wider mt-1">
                    Chief Financial Officer
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

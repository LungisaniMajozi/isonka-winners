import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "136 2nd Street, Randjespark, Midrand, 1685",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+27 69 485 9076 / +27 10 825 4612",
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

export default function ContactSection({ image }) {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-40 px-6 lg:px-8 border-t border-border overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Aerial view of Midrand South Africa"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-primary font-inter text-xs font-bold uppercase tracking-[0.3em] block mb-4">
            Contact
          </span>
          <h2 className="text-4xl lg:text-7xl font-inter font-black uppercase tracking-tighter text-foreground leading-tight">
            Let's Get
            <br />
            In Touch
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, i) => {
            const Icon = item.icon;
            const Wrapper = item.href ? "a" : "div";
            const wrapperProps = item.href
              ? {
                  href: item.href,
                  target: item.href.startsWith("http") ? "_blank" : undefined,
                  rel: item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined,
                }
              : {};

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className="block bg-card border border-border p-8 h-full hover:border-primary/40 transition-all duration-500 group"
                >
                  <Icon
                    size={24}
                    className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-muted-foreground font-inter text-xs font-bold uppercase tracking-wider mb-2">
                    {item.label}
                  </h3>
                  <p className="text-foreground font-inter text-sm font-medium leading-relaxed">
                    {item.value}
                  </p>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

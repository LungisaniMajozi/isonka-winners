import { motion } from "framer-motion";
import { ArrowUpRight, Printer, Palette, Megaphone, Film } from "lucide-react";

const services = [
  {
    icon: Printer,
    title: "Print And Design",
    desc: "We offer high-quality design and printing solutions tailored to your brand. From business cards and brochures to large-format printing, our work ensures visual appeal and professionalism.",
    num: "01",
  },
  {
    icon: Palette,
    title: "Branding",
    desc: "Your brand is your identity. We help you define and express it through logo design, corporate identity packages, branded merchandise, and more — creating lasting impressions with consistency and creativity.",
    num: "02",
  },
  {
    icon: Megaphone,
    title: "Advertising",
    desc: "We craft compelling advertising strategies that resonate with your target audience. Our team delivers campaigns across digital, print, and outdoor platforms, ensuring your message reaches and engages effectively.",
    num: "03",
  },
  {
    icon: Film,
    title: "Production",
    desc: "From concept development to post-production, we create engaging video and audio content for marketing, corporate, social, and entertainment purposes. Our production team is skilled in storytelling that captures attention and drives action.",
    num: "04",
  },
];

export default function ServicesSection({ images }) {
  return (
    <section
      id="services"
      className="py-24 lg:py-40 px-6 lg:px-8 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-primary font-inter text-xs font-bold uppercase tracking-[0.3em] block mb-4">
            What We Do
          </span>
          <h2 className="text-4xl lg:text-6xl font-inter font-black uppercase tracking-tighter text-foreground leading-tight max-w-3xl">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ backgroundColor: "hsl(221 83% 53% / 0.05)" }}
                className="bg-background p-8 lg:p-12 flex flex-col justify-between min-h-[360px] group cursor-pointer transition-colors duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="font-inter text-xs font-mono text-primary tracking-wider">
                    {service.num}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={24} className="text-accent" />
                    <h3 className="text-2xl lg:text-3xl font-inter font-bold uppercase tracking-tight text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground font-inter text-sm leading-relaxed max-w-md">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Service images strip */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="overflow-hidden aspect-video"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

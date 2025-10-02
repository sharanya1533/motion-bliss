import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Sparkles, Wind, Moon } from "lucide-react";
import mentalImage from "@/assets/mental-wellness.jpg";

const benefits = [
  {
    icon: Brain,
    title: "Mindfulness",
    description: "Cultivate presence and clarity through guided meditation",
  },
  {
    icon: Sparkles,
    title: "Stress Relief",
    description: "Release tension and find your inner peace",
  },
  {
    icon: Wind,
    title: "Breathwork",
    description: "Master breathing techniques for mental clarity",
  },
  {
    icon: Moon,
    title: "Rest & Recovery",
    description: "Optimize sleep and rejuvenation practices",
  },
];

const MentalWellness = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Mental
              <span className="block text-secondary">Wellness</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Balance your mind and nurture your inner strength for complete well-being
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:bg-card hover:border-secondary/50 hover:translate-x-2"
                >
                  <div className="flex-shrink-0 p-3 rounded-lg bg-secondary/10 text-secondary group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_hsl(0_0%_0%/0.5)]">
              <img
                src={mentalImage}
                alt="Mental Wellness"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 p-6 rounded-2xl bg-card border border-border shadow-[0_20px_60px_hsl(0_0%_0%/0.3)] backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-secondary/20">
                  <Sparkles className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-sm text-muted-foreground">Stress Reduction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MentalWellness;

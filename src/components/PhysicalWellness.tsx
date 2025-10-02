import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Dumbbell, Heart, Zap, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build lean muscle and increase your power with expert-designed programs",
  },
  {
    icon: Heart,
    title: "Cardio Fitness",
    description: "Boost endurance and cardiovascular health with dynamic workouts",
  },
  {
    icon: Zap,
    title: "High Intensity",
    description: "Push your limits with HIIT sessions that deliver maximum results",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your gains and celebrate every milestone on your journey",
  },
];

const PhysicalWellness = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Physical
            <span className="block text-primary">Wellness</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sculpt your physique and unlock your body's full potential
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-card border border-border/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-primary/50 hover:shadow-[0_20px_60px_hsl(0_0%_0%/0.5)]">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="h-8 w-8" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhysicalWellness;

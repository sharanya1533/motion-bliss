import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const programs = [
  {
    name: "Starter",
    price: "49",
    features: [
      "3 Training Sessions/Week",
      "Basic Meal Planning",
      "Progress Tracking",
      "Mobile App Access",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "99",
    features: [
      "5 Training Sessions/Week",
      "Custom Meal Plans",
      "1-on-1 Coaching",
      "Mental Wellness Program",
      "Priority Support",
      "Workout Videos Library",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "199",
    features: [
      "Unlimited Training",
      "Personal Nutritionist",
      "24/7 Coach Access",
      "Full Wellness Suite",
      "Live Classes",
      "Recovery Sessions",
      "Exclusive Community",
    ],
    popular: false,
  },
];

const Programs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(189_100%_50%/0.05),transparent_50%)]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Path to Greatness
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible programs designed to fit your lifestyle and goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-sm font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}

              <div
                className={`relative h-full p-8 rounded-3xl bg-card border backdrop-blur-sm transition-all duration-500 ${
                  program.popular
                    ? "border-primary shadow-[0_0_60px_hsl(189_100%_50%/0.3)] scale-105"
                    : "border-border/50 hover:border-primary/30 hover:scale-105"
                }`}
              >
                {/* Glow Effect */}
                {program.popular && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10" />
                )}

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-2">{program.name}</h3>
                  <div className="mb-8">
                    <span className="text-5xl font-bold">${program.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                      program.popular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-[0_0_40px_hsl(189_100%_50%/0.4)]"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;

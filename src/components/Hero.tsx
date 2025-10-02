import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fitness.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fitness Training"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <motion.div
            className="mb-4 text-sm uppercase tracking-[0.3em] text-primary font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            LiftUp
          </motion.div>

          <motion.h1
            className="mb-6 text-6xl font-bold leading-tight tracking-tight md:text-8xl lg:text-9xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Transform Your
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Body & Mind
            </span>
          </motion.h1>

          <motion.p
            className="mb-12 text-xl text-muted-foreground md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Elevate your fitness journey with personalized training and holistic wellness programs
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_hsl(189_100%_50%/0.4)]"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-primary/50 bg-background/20 px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10"
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm uppercase tracking-wider text-muted-foreground">Scroll</span>
            <div className="h-12 w-6 rounded-full border-2 border-primary/50">
              <div className="mt-2 h-2 w-2 mx-auto rounded-full bg-primary animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

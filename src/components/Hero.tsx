import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-primary">Rizal Yogi</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
          Tech Lead with 8+ years of experience in building scalable applications
          and leading development teams.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#experience">View Experience</a>
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
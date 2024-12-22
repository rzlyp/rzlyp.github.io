import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const TechBubble = ({ delay, color, size, x, y }: { delay: number; color: string; size: number; x: number; y: number }) => (
  <motion.div
    className="absolute rounded-full"
    style={{ 
      backgroundColor: color,
      width: size,
      height: size,
      x,
      y,
      filter: "blur(10px)",
      opacity: 0.5
    }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
    }}
  />
);

const Hero = () => {
  const techBubbles = [
    { color: "#8B5CF6", size: 100, x: "20%", y: "20%", delay: 0 },
    { color: "#D946EF", size: 80, x: "80%", y: "30%", delay: 0.5 },
    { color: "#F97316", size: 120, x: "70%", y: "70%", delay: 1 },
    { color: "#0EA5E9", size: 90, x: "30%", y: "60%", delay: 1.5 },
    { color: "#6E59A5", size: 70, x: "10%", y: "80%", delay: 2 },
  ];

  return (
    <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center relative overflow-hidden">
      {techBubbles.map((bubble, index) => (
        <TechBubble
          key={index}
          color={bubble.color}
          size={bubble.size}
          x={bubble.x}
          y={bubble.y}
          delay={bubble.delay}
        />
      ))}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 z-10"
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
        className="absolute bottom-8 z-10"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Award, Briefcase, Code, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-primary"
          >
            Rizal Yogi
          </motion.h1>
          <div className="flex gap-4">
            <a href="https://github.com/rzlyp" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 hover:text-primary transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/rzlyp" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-20">
        <Hero />
        <Experience />
        <Skills />
        <Awards />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
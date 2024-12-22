import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="flex items-center gap-2 mb-8">
          <Mail className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Contact</h2>
        </div>
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <p className="text-xl text-muted-foreground">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="mailto:rizalyogip@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://www.linkedin.com/in/rzlyp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://github.com/rzlyp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
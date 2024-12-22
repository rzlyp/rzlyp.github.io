import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Tech Lead",
    company: "appliance.io",
    period: "Sep 2022 - Present",
    description: "Leading technical decisions and team development while managing complex projects.",
  },
  {
    title: "Development Team Lead",
    company: "appliance.io",
    period: "Feb 2020 - Sep 2022",
    description: "Led development teams and implemented best practices for scalable solutions.",
  },
  {
    title: "Sr. Back End Developer",
    company: "appliance.io",
    period: "Feb 2020 - Sep 2022",
    description: "Developed and maintained backend services using Node.js and AWS.",
  },
  {
    title: "Back End Developer",
    company: "appliance.io",
    period: "Oct 2018 - Feb 2020",
    description: "Built RESTful APIs and implemented database solutions.",
  },
  {
    title: "Backend Developer",
    company: "UNIKOM CodeLabs",
    period: "Sep 2015 - Sep 2018",
    description: "Developed backend systems and maintained web applications.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="timeline-item"
            >
              <div className="timeline-dot" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <div className="text-primary">{exp.company}</div>
                <div className="text-sm text-muted-foreground">{exp.period}</div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
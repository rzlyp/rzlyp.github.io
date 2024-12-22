import { motion } from "framer-motion";
import { Code } from "lucide-react";

const skills = [
  { name: "Node.js", level: 90 },
  { name: "AWS", level: 85 },
  { name: "Go", level: 80 },
  { name: "Laravel", level: 85 },
  { name: "Docker", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "MySQL", level: 85 },
  { name: "Elasticsearch", level: 75 },
  { name: "Git", level: 90 },
  { name: "REST API", level: 95 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="flex items-center gap-2 mb-8">
          <Code className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2 relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="w-full bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="skill-bar relative"
                >
                  <motion.div
                    className="absolute inset-0 opacity-25"
                    animate={{
                      background: [
                        "linear-gradient(90deg, #8B5CF6, #D946EF)",
                        "linear-gradient(90deg, #D946EF, #F97316)",
                        "linear-gradient(90deg, #F97316, #0EA5E9)",
                        "linear-gradient(90deg, #0EA5E9, #8B5CF6)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
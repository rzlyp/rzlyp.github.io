import { motion } from "framer-motion";
import { Award } from "lucide-react";

const awards = [
  {
    title: "3rd Winner BNI HACKFEST",
    location: "Bandung",
  },
  {
    title: "2nd Winner of JABABEKA ICT EXPO",
    location: "",
  },
  {
    title: "2nd Winner of APP INOVATION Challenge KOMINFO",
    location: "Bandung",
  },
];

const Awards = () => {
  return (
    <section id="awards" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="flex items-center gap-2 mb-8">
          <Award className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Awards</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-card hover:bg-card/60 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
              {award.location && (
                <p className="text-muted-foreground">{award.location}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Awards;
import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Award } from 'lucide-react';

export const Honors = () => {
  const honors = [
    { title: "First Prize, National College Mathematics Competition (Shandong)", year: "2023" },
    { title: "Outstanding Graduate of Shandong Province", year: "2024" },
    { title: "Second Prize, Shandong Collegiate Software Design Contest", year: "2022" },
    { title: "Third-class Scholarship, Qufu Normal University", year: "2023" },
  ];

  const courses = [
    "CS50: Introduction to Computer Science — Harvard University",
    "CS193p: Developing Apps for iOS — Stanford University",
    "CS224W: Machine Learning with Graphs — Stanford University",
    "FAI: Foundations of Artificial Intelligence — NTU (Prof. Yun-Nung Chen)",
    "ADL: Applied Deep Learning — NTU (Prof. Yun-Nung Chen)",
    "The Missing Semester of Your CS Education — MIT",
    "Various online CS and AI courses from MIT, Stanford, and other platforms"
  ];

  return (
    <section id="honors" className="py-16">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Honors */}
        <div>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-8 flex items-center gap-2"
            >
                <Trophy className="w-6 h-6 text-yellow-500" /> Honors & Awards
            </motion.h2>
            <ul className="space-y-4">
                {honors.map((item, index) => (
                    <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex justify-between border-b pb-2 last:border-none"
                    >
                        <span className="font-medium">{item.title}</span>
                        <span className="text-muted-foreground">{item.year}</span>
                    </motion.li>
                ))}
            </ul>
        </div>

        {/* Certifications */}
        <div>
             <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-8 flex items-center gap-2"
            >
                <Award className="w-6 h-6 text-blue-500" /> Certifications & Courses
            </motion.h2>
            <ul className="space-y-3">
                {courses.map((course, index) => (
                    <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-muted-foreground"
                    >
                        • {course}
                    </motion.li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

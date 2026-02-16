import React from 'react';
import { motion } from 'motion/react';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';

export const Skills = () => {
  const skills = {
    "Communication": ["English (fluent for technical discussions)"],
    "Languages": ["Rust", "Python", "Ruby", "Java", "TypeScript", "SQL"],
    "Frameworks": ["Django", "Actix Web", "Ruby on Rails", "React", "SvelteKit", "Spring MVC", "FastAPI"],
    "Databases": ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
    "Tools & DevOps": ["Bash", "Git", "Vim", "Deno", "Docker", "Kubernetes"],
    "CI/CD & Automation": ["GitHub Actions", "Jenkins"],
    "Testing / QA": ["PyTest", "JUnit"],
    "Messaging / MQ": ["RabbitMQ"]
  };

  return (
    <section id="skills" className="py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
      >
        Skills
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items], index) => (
            <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
            >
                <Card className="h-full">
                    <CardContent className="pt-6">
                        <h3 className="font-semibold mb-3">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((item) => (
                                <Badge key={item} variant="secondary">
                                    {item}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        ))}
      </div>
    </section>
  );
};

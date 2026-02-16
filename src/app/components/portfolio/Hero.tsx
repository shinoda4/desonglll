import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Globe, MapPin } from 'lucide-react';
import { Button } from '../ui/button';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start pt-20 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          Desong Lin
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
          Backend & Full-stack Developer
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Passionate developer with hands-on experience in Rust and Python, building scalable, high-performance systems. 
          Skilled in distributed systems, full-stack integration, and applying AI/ML in practical projects.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button variant="outline" className="gap-2" asChild>
            <a href="mailto:lindesong666@163.com">
              <Mail className="w-4 h-4" />
              lindesong666@163.com
            </a>
          </Button>
          <Button variant="outline" className="gap-2" asChild>
            <a href="https://github.com/desonglll" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              github.com/desonglll
            </a>
          </Button>
          <Button variant="outline" className="gap-2" asChild>
            <a href="https://desonglll.xyz" target="_blank" rel="noopener noreferrer">
              <Globe className="w-4 h-4" />
              desonglll.xyz
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground pt-2">
            <MapPin className="w-4 h-4" />
            <span>Seeking Software Engineering Intern, 2026, Shanghai</span>
        </div>
      </motion.div>
    </section>
  );
};

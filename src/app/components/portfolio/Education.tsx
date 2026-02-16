import React from 'react';
import { motion } from 'motion/react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import { Calendar, MapPin } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8 flex items-center gap-2"
      >
        Education
      </motion.h2>
      <div className="grid gap-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <Card>
            <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                    <CardTitle className="text-xl">Master of Engineering in Software Engineering</CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground mt-1">
                    Qufu Normal University
                    </CardDescription>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 justify-end">
                    <Calendar className="w-3 h-3" />
                    <span>Sep 2024 – Jul 2027 (Ongoing)</span>
                    </div>
                    <div className="flex items-center gap-1 justify-end mt-1">
                    <MapPin className="w-3 h-3" />
                    <span>Shandong, China</span>
                    </div>
                </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                Focus: backend development, distributed systems, high-performance applications, and applied AI/ML using Rust and Python.
                </p>
                <div>
                <h4 className="font-medium mb-2">Research:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Conducted AI-related research including image dehazing (improved visual clarity metrics by 5%)</li>
                    <li>NLP pipelines for text classification</li>
                    <li>GAN & diffusion models for image generation</li>
                    <li>Deep learning-based network intrusion classification</li>
                </ul>
                </div>
            </CardContent>
            </Card>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
        >
            <Card>
            <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                    <CardTitle className="text-xl">Bachelor of Engineering in Software Engineering</CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground mt-1">
                    Qufu Normal University
                    </CardDescription>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 justify-end">
                    <Calendar className="w-3 h-3" />
                    <span>Oct 2020 – Jul 2024</span>
                    </div>
                    <div className="flex items-center gap-1 justify-end mt-1">
                    <MapPin className="w-3 h-3" />
                    <span>Shandong, China</span>
                    </div>
                </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-4 mb-2">
                    <Badge variant="secondary">GPA: 3.06 / 4.0</Badge>
                </div>
                <p className="text-muted-foreground">
                <strong>Thesis:</strong> Modern Warehouse Management System — implemented with Django and React, focusing on scalable backend and responsive frontend.
                </p>
            </CardContent>
            </Card>
        </motion.div>
      </div>
    </section>
  );
};

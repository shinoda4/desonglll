import React from 'react';
import { motion } from 'motion/react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '../ui/card';
import { Badge } from '../ui/badge';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '../ui/button';

export const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Project 1 */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex"
        >
            <Card className="flex flex-col h-full w-full">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle>SD GET</CardTitle>
                            <CardDescription>Enterprise Website for Industrial Parts</CardDescription>
                        </div>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                           <Calendar className="w-3 h-3" /> 2023/01 – 2023/06
                        </span>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">
                        Led frontend migration from React to SvelteKit, improving load speed by 40%. Built backend APIs using Django to manage product catalog and media uploads.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">SvelteKit</Badge>
                        <Badge variant="outline">Django</Badge>
                        <Badge variant="outline">React</Badge>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant="ghost" size="sm" asChild className="ml-auto gap-2">
                        <a href="https://sdsdsd.online" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" /> sdsdsd.online
                        </a>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>

        {/* Project 2 */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
             className="flex"
        >
            <Card className="flex flex-col h-full w-full">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle>TweeCampus</CardTitle>
                            <CardDescription>Campus Social Platform</CardDescription>
                        </div>
                         <span className="text-xs text-muted-foreground flex items-center gap-1">
                           <Calendar className="w-3 h-3" /> 2024/01 – 2024/06
                        </span>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                     <p className="text-muted-foreground mb-4">
                        Implemented responsive React TypeScript frontend. Designed scalable backend using Rust/Actix Web, handling high concurrent requests for posts/comments (sub-100ms response).
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Rust</Badge>
                        <Badge variant="outline">Actix Web</Badge>
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">TypeScript</Badge>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant="ghost" size="sm" asChild className="ml-auto gap-2">
                        <a href="https://github.com/desonglll/ax" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" /> Source Code
                        </a>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>

         {/* Project 3 */}
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
             className="flex md:col-span-2"
        >
            <Card className="flex flex-col h-full w-full">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle>AI Lab Projects</CardTitle>
                            <CardDescription>Image Enhancement & Network Intrusion Classification</CardDescription>
                        </div>
                         <span className="text-xs text-muted-foreground flex items-center gap-1">
                           <Calendar className="w-3 h-3" /> 2024/09 – 2025/06
                        </span>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                        <li>Implemented image dehazing algorithms using Mamba and U-Net architectures in Python.</li>
                        <li>Developed NLP pipelines for text classification and semantic analysis using PyTorch and HuggingFace Transformers.</li>
                        <li>Built deep learning-based network intrusion classification models, experimenting with architectures and feature extraction strategies.</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Python</Badge>
                        <Badge variant="outline">PyTorch</Badge>
                        <Badge variant="outline">Mamba</Badge>
                        <Badge variant="outline">U-Net</Badge>
                        <Badge variant="outline">HuggingFace</Badge>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
      </div>
    </section>
  );
};

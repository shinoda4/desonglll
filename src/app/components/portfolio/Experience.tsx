import React from 'react';
import { motion } from 'motion/react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import { Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
      >
        Work Experience
      </motion.h2>
      <div className="grid gap-8">
        {/* Job 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                        <div>
                            <CardTitle className="text-xl">Backend Developer</CardTitle>
                            <CardDescription className="text-lg font-medium text-foreground mt-1">
                                Shunde Machinery Co., Ltd.
                            </CardDescription>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                            <div className="flex items-center gap-1 justify-end">
                                <Calendar className="w-3 h-3" />
                                <span>Feb 2022 – Oct 2023</span>
                            </div>
                            <div className="flex items-center gap-1 justify-end mt-1">
                                <MapPin className="w-3 h-3" />
                                <span>Rizhao, China</span>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">Django</Badge>
                        <Badge variant="secondary">Rust</Badge>
                        <Badge variant="secondary">PostgreSQL</Badge>
                        <Badge variant="secondary">Redis</Badge>
                        <Badge variant="secondary">SvelteKit</Badge>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Developed and maintained backend services using Django and Rust, improving system performance and scalability.</li>
                        <li>Designed and implemented GraphQL and RESTful APIs for the warehouse management system.</li>
                        <li>Optimized database queries in PostgreSQL and implemented login session caching with Redis, improving response times, reducing query latency by 30%.</li>
                        <li>Migrated frontend from React to SvelteKit, improving page load time by 40%.</li>
                        <li>Applied Rust for high-performance backend modules, efficiently handling concurrent data processing and authentication.</li>
                    </ul>
                </CardContent>
            </Card>
        </motion.div>

        {/* Job 2 */}
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
                            <CardTitle className="text-xl">Backend Intern</CardTitle>
                            <CardDescription className="text-lg font-medium text-foreground mt-1">
                                Jiangsu Itcast Education Technology Co., Ltd.
                            </CardDescription>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                            <div className="flex items-center gap-1 justify-end">
                                <Calendar className="w-3 h-3" />
                                <span>Dec 2023 – Feb 2024</span>
                            </div>
                            <div className="flex items-center gap-1 justify-end mt-1">
                                <MapPin className="w-3 h-3" />
                                <span>Jinan, China</span>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">Java</Badge>
                        <Badge variant="secondary">Spring MVC</Badge>
                        <Badge variant="secondary">MyBatis</Badge>
                        <Badge variant="secondary">Vue</Badge>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Developed backend services with Java, Spring MVC, and MyBatis.</li>
                        <li>Built RESTful APIs and integrated them with a Vue-based admin dashboard.</li>
                        <li>Learned best practices for backend architecture and deployment in production environments.</li>
                    </ul>
                </CardContent>
            </Card>
        </motion.div>
      </div>
    </section>
  );
};

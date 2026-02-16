import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { 
    Sheet, 
    SheetContent, 
    SheetTrigger, 
    SheetHeader, 
    SheetTitle, 
    SheetDescription 
} from '../ui/sheet';

export const Header = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Education', href: '#education' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Honors', href: '#honors' },
    ];

    const scrollTo = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm border-b' : 'bg-transparent'}`}>
            <motion.div 
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left" 
                style={{ scaleX }}
            />
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="font-bold text-xl cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    DL
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollTo(item.href)}
                            className="text-sm font-medium hover:text-primary transition-colors text-muted-foreground"
                        >
                            {item.name}
                        </button>
                    ))}
                    <Button size="sm" asChild>
                         <a href="mailto:lindesong666@163.com">Contact Me</a>
                    </Button>
                </nav>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="w-5 h-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                             <SheetHeader>
                                <SheetTitle>Navigation</SheetTitle>
                                <SheetDescription className="sr-only">
                                    Mobile navigation menu
                                </SheetDescription>
                             </SheetHeader>
                             <div className="flex flex-col gap-6 mt-10">
                                {navItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => scrollTo(item.href)}
                                        className="text-lg font-medium text-left hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                             </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

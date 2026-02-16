import React from 'react';

export const Footer = () => {
    return (
        <footer className="py-8 border-t mt-16 bg-muted/30">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Desong Lin. All rights reserved.</p>
                <div className="flex justify-center gap-4 mt-4">
                    <a href="https://github.com/desonglll" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
                    <a href="https://desonglll.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Website</a>
                    <a href="mailto:lindesong666@163.com" className="hover:text-foreground transition-colors">Email</a>
                </div>
            </div>
        </footer>
    );
};

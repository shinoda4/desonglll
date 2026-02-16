import React from 'react';
import { Header } from './components/portfolio/Header';
import { Hero } from './components/portfolio/Hero';
import { Education } from './components/portfolio/Education';
import { Experience } from './components/portfolio/Experience';
import { Projects } from './components/portfolio/Projects';
import { Skills } from './components/portfolio/Skills';
import { Honors } from './components/portfolio/Honors';
import { Footer } from './components/portfolio/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main className="container mx-auto px-4 md:px-8 space-y-12">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Honors />
      </main>
      <Footer />
    </div>
  );
}

export default App;

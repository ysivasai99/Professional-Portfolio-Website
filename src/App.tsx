import { useState } from 'react';
import { Menu, X, Code2, Briefcase, Cpu, Mail, Github, Linkedin, ChevronRight } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile menu */}
      <div className="lg:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="fixed top-4 right-4 z-50 p-2 bg-white rounded-lg shadow-md"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Desktop navigation */}
      <nav className="hidden lg:block fixed top-0 w-full bg-white shadow-sm z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Yerrapothu Venkata Kesava Siva Sai
              </span>
            </div>
            <div className="flex space-x-8">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Header />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
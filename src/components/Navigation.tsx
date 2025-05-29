import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoImage from "/src/Assets/Kaizen Construction Logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-800/95 backdrop-blur-md shadow-lg border-b border-slate-700" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="Kaizen Construction Logo" 
              className="h-14 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="font-medium transition-all duration-300 hover:text-[#54a9f2] text-white"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-medium transition-all duration-300 hover:text-[#54a9f2] text-white"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-medium transition-all duration-300 hover:text-[#54a9f2] text-white"
            >
              Contact Us
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#54a9f2] hover:bg-[#3b82f6] text-slate-900 px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-white transition-all duration-300"></div>
              <div className="w-6 h-0.5 bg-white transition-all duration-300"></div>
              <div className="w-6 h-0.5 bg-white transition-all duration-300"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left font-medium text-white hover:text-[#54a9f2] transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left font-medium text-white hover:text-[#54a9f2] transition-colors duration-300"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left font-medium text-white hover:text-[#54a9f2] transition-colors duration-300"
            >
              Contact Us
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-[#54a9f2] hover:bg-[#3b82f6] text-slate-900 rounded-full"
            >
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

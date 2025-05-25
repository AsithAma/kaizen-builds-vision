
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#cf1e26] rounded-lg flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <div>
              <h1 className={`text-xl font-bold ${isScrolled ? "text-gray-900" : "text-white"} transition-colors duration-300`}>
                Kaizen Construction
              </h1>
              <p className={`text-sm ${isScrolled ? "text-gray-600" : "text-white/80"} transition-colors duration-300`}>
                & Development
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`font-medium transition-all duration-300 hover:text-[#cf1e26] ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`font-medium transition-all duration-300 hover:text-[#cf1e26] ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`font-medium transition-all duration-300 hover:text-[#cf1e26] ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Contact Us
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#cf1e26] hover:bg-[#b01922] text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
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
              <div className={`w-6 h-0.5 ${isScrolled ? "bg-gray-900" : "bg-white"} transition-all duration-300`}></div>
              <div className={`w-6 h-0.5 ${isScrolled ? "bg-gray-900" : "bg-white"} transition-all duration-300`}></div>
              <div className={`w-6 h-0.5 ${isScrolled ? "bg-gray-900" : "bg-white"} transition-all duration-300`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left font-medium text-gray-700 hover:text-[#cf1e26] transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left font-medium text-gray-700 hover:text-[#cf1e26] transition-colors duration-300"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left font-medium text-gray-700 hover:text-[#cf1e26] transition-colors duration-300"
            >
              Contact Us
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-[#cf1e26] hover:bg-[#b01922] text-white rounded-full"
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

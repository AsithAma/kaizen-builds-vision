import logoImage from "/src/Assets/Kaizen Construction Logo.png";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoImage} 
                alt="Kaizen Construction Logo" 
                className="h-12"
              />
              <div>
                <h3 className="text-xl font-bold">Kaizen Construction</h3>
                <p className="text-sm text-slate-400">& Development</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Leading construction company in Eastern Washington, specializing in commercial, residential, and pre-construction services. Veteran owned and locally operated.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-2">
              <a 
                href="https://web.facebook.com/profile.php?id=100085964162948&_rdc=1&_rdr#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#54a9f2] transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/kaizencnd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#54a9f2] transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/kaizen-construction-and-development/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#54a9f2] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-slate-400 hover:text-[#54a9f2] transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-slate-400 hover:text-[#54a9f2] transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-slate-400 hover:text-[#54a9f2] transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-slate-400 hover:text-[#54a9f2] transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="text-slate-400">
                472 Keene Rd<br />
                Richland, WA 99352
              </p>
              <a 
                href="mailto:estimating@kaizencnd.com"
                className="text-slate-400 hover:text-[#54a9f2] transition-colors duration-300 block"
              >
                estimating@kaizencnd.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
          <p className="text-slate-500">
            ©2025 Kaizen Construction & Development. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

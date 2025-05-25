
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#cf1e26] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Kaizen Construction</h3>
                <p className="text-sm text-gray-400">& Development</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Leading construction company in Eastern Washington, specializing in commercial, residential, and pre-construction services. Veteran owned and locally operated.
            </p>
            <p className="text-sm text-gray-500">
              Minority and Veteran Owned Business
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-[#cf1e26] transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-[#cf1e26] transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-[#cf1e26] transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-[#cf1e26] transition-colors duration-300"
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
              <p className="text-gray-400">
                472 Keene Rd<br />
                Richland, WA 99352
              </p>
              <a 
                href="mailto:estimating@kaizencnd.com"
                className="text-gray-400 hover:text-[#cf1e26] transition-colors duration-300 block"
              >
                estimating@kaizencnd.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2024 Kaizen Construction & Development. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

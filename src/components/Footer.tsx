
const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#54a9f2] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">K</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Kaizen Construction</h3>
                <p className="text-sm text-slate-400">& Development</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Leading construction company in Eastern Washington, specializing in commercial, residential, and pre-construction services. Veteran owned and locally operated.
            </p>
            <p className="text-sm text-slate-500">
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
            © 2024 Kaizen Construction & Development. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

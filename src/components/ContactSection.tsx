
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your project? Get in touch with our team today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#cf1e26] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Address</h4>
                    <p className="text-gray-300">
                      472 Keene Rd<br />
                      Richland, WA 99352
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#cf1e26] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <a 
                      href="mailto:estimating@kaizencnd.com"
                      className="text-[#cf1e26] hover:text-red-400 transition-colors duration-300"
                    >
                      estimating@kaizencnd.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#cf1e26] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🏆</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Certifications</h4>
                    <p className="text-gray-300">
                      Minority and Veteran Owned Business
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Request a Quote</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-[#cf1e26] focus:outline-none transition-colors duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-[#cf1e26] focus:outline-none transition-colors duration-300"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-[#cf1e26] focus:outline-none transition-colors duration-300"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-[#cf1e26] focus:outline-none transition-colors duration-300"
                />
                <select className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-[#cf1e26] focus:outline-none transition-colors duration-300">
                  <option value="">Select Service Type</option>
                  <option value="pre-construction">Pre-Construction</option>
                  <option value="commercial">Commercial Construction</option>
                  <option value="residential">Residential Construction</option>
                </select>
                <textarea
                  placeholder="Project Details"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-[#cf1e26] focus:outline-none transition-colors duration-300 resize-none"
                ></textarea>
                <Button className="w-full bg-[#cf1e26] hover:bg-[#b01922] text-white py-3 rounded-lg transition-all duration-300 hover:scale-105">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps */}
          <div className="lg:pl-8">
            <h3 className="text-2xl font-bold mb-6">Our Location</h3>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.1234567890123!2d-119.13793682345678!3d46.22654927901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54983f1234567890%3A0x1234567890abcdef!2s2839%20W%20Kennewick%20Ave%2C%20Kennewick%2C%20WA%2099336!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kaizen Construction Location"
              ></iframe>
            </div>
            <p className="text-gray-300 mt-4 text-center">
              Kaizen Construction and Development<br />
              2839 W Kennewick Ave, Kennewick, WA, United States
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

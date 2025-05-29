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
                  <div className="w-12 h-12 bg-[#54a9f2] rounded-lg flex items-center justify-center flex-shrink-0">
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
                  <div className="w-12 h-12 bg-[#54a9f2] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <a 
                      href="mailto:estimating@kaizencnd.com"
                      className="text-[#54a9f2] hover:text-blue-400 transition-colors duration-300"
                    >
                      estimating@kaizencnd.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#54a9f2] rounded-lg flex items-center justify-center flex-shrink-0">
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
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-[#54a9f2] focus:outline-none transition-colors duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-[#54a9f2] focus:outline-none transition-colors duration-300"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-[#54a9f2] focus:outline-none transition-colors duration-300"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-[#54a9f2] focus:outline-none transition-colors duration-300"
                />
                <div className="relative">
                  <select className="w-full p-3 pr-10 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-[#54a9f2] focus:outline-none transition-colors duration-300 appearance-none">
                    <option value="">Select Service Type</option>
                    <option value="pre-construction">Pre-Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="residential">Residential Construction</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg className="w-5 h-5 text-[#54a9f2]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <textarea
                  placeholder="Project Details"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-[#54a9f2] focus:outline-none transition-colors duration-300 resize-none"
                ></textarea>
                <Button className="w-full bg-[#54a9f2] hover:bg-[#3b82f6] text-slate-900 py-3 rounded-lg transition-all duration-300 hover:scale-105">
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.8234052388024!2d-119.33102542317035!3d46.28060787902019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549879134ce43023%3A0x64eae9bec3f1d48c!2s472%20Keene%20Rd%2C%20Richland%2C%20WA%2099352!5e0!3m2!1sen!2sus!4v1716925798063!5m2!1sen!2sus"
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
              472 Keene Rd, Richland, WA 99352
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

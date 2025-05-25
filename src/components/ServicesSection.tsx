
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Pre-Construction",
      description: "Kaizen Construction offers comprehensive pre-construction services to ensure the successful planning and preparation of construction projects. Our team of experienced professionals collaborates closely with clients to understand their vision, goals, and budget. We conduct thorough project planning, including feasibility studies and site analysis, to identify potential risks and challenges. Our design development phase involves creating detailed architectural and engineering designs that meet client requirements and comply with building codes. We provide accurate cost estimation, assist with permitting and regulatory compliance, and create efficient construction schedules. With our strong network of reliable subcontractors, we ensure the highest quality of workmanship—Trust Kaizen Construction for all your Pre-Construction needs.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      icon: "🏗️"
    },
    {
      title: "Commercial Construction",
      description: "Kaizen Construction is a leading provider of commercial construction services, dedicated to delivering exceptional results for our clients. With years of experience in the industry, we specialize in a wide range of commercial construction projects, including office buildings, retail spaces, restaurants, and more. Our team of skilled professionals are committed to excellence, ensuring that every project is completed on time, within budget, and to the highest quality standards. From every phase of construction, we handle every aspect of the project with meticulous attention to detail. With our expertise and dedication, we strive to exceed client expectations and create spaces that inspire success—Trust Kaizen Construction for all your Commercial Construction needs.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
      icon: "🏢"
    },
    {
      title: "Residential Construction",
      description: "We understand that building a home is a significant investment, and we are committed to delivering exceptional results that exceed our clients' expectations. With decades of experience in the industry, our team of skilled professionals are dedicated to providing high-quality craftsmanship and attention to detail in every project we undertake. From concept to completion, we work closely with our clients to ensure their dream home becomes a reality. Our commitment to excellence, integrity, and customer satisfaction sets us apart as a trusted partner in residential construction. Contact us today to discuss your project, and let us turn your dream home into a reality—Trust Kaizen Construction for all your custom home needs.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
      icon: "🏠"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From pre-construction planning to final completion, we deliver excellence in every phase of your project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-4xl">
                  {service.icon}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-[#cf1e26] transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {service.description.substring(0, 200)}...
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

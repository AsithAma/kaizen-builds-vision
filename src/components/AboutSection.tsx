
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Kaizen Construction
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Veteran owned and locally operated in Eastern Washington
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
              alt="Construction site"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Based in the scenic Columbia Basin of Eastern Washington, Kaizen Construction & Development is a full-service general contracting company specializing in commercial, residential, multi-family and mixed-use projects. Committed to providing a quality service and solutions that align with the needs of our clients.
            </p>
            <p className="text-slate-300 leading-relaxed">
              With experience in various sectors of construction including consulting, pre-construction, design-build services, tenant improvements (T.I), residential and commercial construction. Taking pride in our commitment to integrity, honesty and accountability, Kaizen is veteran owned and locally operated.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-800 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-slate-300 leading-relaxed">
              At Kaizen Construction & Development, our vision is to be the leading construction company that brings unmatched creativity, marketplace expertise, and strategic vision to the industry. We are committed to bringing to life projects that are unique and designed to meet the current and future work needs of our clients. Our goal is to exceed client expectations by delivering high-quality construction solutions that are innovative, sustainable, and cost-effective.
            </p>
          </div>
          <div className="bg-[#54a9f2] rounded-2xl p-8 text-slate-900 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="leading-relaxed opacity-90">
              At Kaizen Construction & Development, our mission is to exceed the expectations of all our customers and employees by setting high standards for customer and employee satisfaction. We are dedicated to providing exceptional service and creating a positive work environment that fosters growth, collaboration, and success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

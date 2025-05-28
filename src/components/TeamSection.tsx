import { Card, CardContent } from "@/components/ui/card";

// Import images
import luisImage from "/src/Assets/Luis Miramontes.jpg";
import bobbyImage from "/src/Assets/Bobby Guzman.jpg";
import richardImage from "/src/Assets/Richard Marez.jpg";
import jonathanImage from "/src/Assets/Jonathan Peralta.jpg";
import eliasImage from "/src/Assets/Elias Valdez.jpg";
import joseImage from "/src/Assets/Jose Rumbo.jpg";
import sixtoImage from "/src/Assets/Sixto Montiel.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Luis Miramontes",
      title: "Founder & CEO",
      image: luisImage,
      bio: "With over two decades of proven experience, Luis provides strategic leadership to drive growth and profitability. His well-rounded experience in all construction phases uniquely positions him to guide projects from inception to completion."
    },
    {
      name: "Bobby Guzman",
      title: "Co-Founder & COO",
      subtitle: "MBA, MSML",
      image: bobbyImage,
      bio: "Bobby brings over ten years in Project Management and Air Force experience. He co-leads Kaizen Construction, skillfully overseeing large construction projects and strategic direction of the company."
    },
    {
      name: "Richard Marez",
      title: "Lead Construction Manager",
      image: richardImage,
      bio: "With over four decades of experience, Richard brings exceptional depth of knowledge. His portfolio includes over 3 million square feet of diverse projects, from custom homes to large-scale commercial buildings."
    },
    {
      name: "Jonathan Peralta",
      title: "Project Engineer",
      image: jonathanImage,
      bio: "Jonathan's meticulous approach and commitment to quality has established him as a leading project engineer. His expertise spans all facets of construction management and innovative solutions."
    },
    {
      name: "Elias Valdez",
      title: "Project Engineer",
      image: eliasImage,
      bio: "Elias brings expertise in financial management and operations to his role as Project Engineer. His analytical mindset and attention to detail ensure projects remain on track and aligned with client expectations."
    },
    {
      name: "Jose Rumbo",
      title: "Foreman - Finish Carpentry",
      image: joseImage,
      bio: "Rumbo specializes in finish carpentry and oversees every aspect of the construction site. His extensive experience and attention to detail consistently deliver polished results that set the Kaizen standard."
    },
    {
      name: "Sixto Montiel",
      title: "Finish Carpentry Specialist",
      image: sixtoImage,
      bio: "With over three decades of experience in finish carpentry, Sixto combines technical expertise with mentoring abilities. His attention to detail ensures all finishes meet the highest standards of quality."
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Team
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Meet the experienced professionals who bring your construction projects to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 overflow-hidden bg-slate-700 hover:bg-slate-600"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-[#54a9f2] font-medium">{member.title}</p>
                  {member.subtitle && (
                    <p className="text-sm opacity-90">{member.subtitle}</p>
                  )}
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-slate-300 leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

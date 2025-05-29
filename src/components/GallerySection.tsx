import { useState } from "react";

// Import gallery images
import g1Image from "/src/Assets/G1.jpg";
import g2Image from "/src/Assets/G2.jpg";
import g3Image from "/src/Assets/G3.jpg";
import g4Image from "/src/Assets/G4.jpg";
import g5Image from "/src/Assets/G5.jpg";
import g6Image from "/src/Assets/G6.jpg";
import g7Image from "/src/Assets/G7.jpg";
import g8Image from "/src/Assets/G8.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: g1Image,
      alt: "Commercial Construction Project",
      category: "Commercial"
    },
    {
      src: g2Image,
      alt: "Office Building Construction",
      category: "Commercial"
    },
    {
      src: g3Image,
      alt: "Residential Home Construction",
      category: "Residential"
    },
    {
      src: g4Image,
      alt: "Pre-Construction Planning",
      category: "Pre-Construction"
    },
    {
      src: g5Image,
      alt: "Construction Site Management",
      category: "Commercial"
    },
    {
      src: g6Image,
      alt: "Team Collaboration",
      category: "Team"
    },
    {
      src: g7Image,
      alt: "Modern Office Construction",
      category: "Commercial"
    },
    {
      src: g8Image,
      alt: "Residential Interior",
      category: "Residential"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Project Gallery
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore our portfolio of completed projects showcasing quality craftsmanship and attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer hover:shadow-2xl transition-all duration-500 aspect-square"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-[#54a9f2]">{image.category}</p>
                <p className="text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[80vh] w-full">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white text-4xl hover:text-[#54a9f2] transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;

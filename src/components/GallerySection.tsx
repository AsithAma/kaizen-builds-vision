
import { useState } from "react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
      alt: "Commercial Construction Project",
      category: "Commercial"
    },
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
      alt: "Office Building Construction",
      category: "Commercial"
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
      alt: "Residential Home Construction",
      category: "Residential"
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      alt: "Pre-Construction Planning",
      category: "Pre-Construction"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Construction Site Management",
      category: "Commercial"
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      alt: "Team Collaboration",
      category: "Team"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      alt: "Modern Office Construction",
      category: "Commercial"
    },
    {
      src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      alt: "Residential Interior",
      category: "Residential"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Project Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of completed projects showcasing quality craftsmanship and attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-[#cf1e26]">{image.category}</p>
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
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-[#cf1e26] transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;

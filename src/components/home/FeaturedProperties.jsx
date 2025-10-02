// src/components/FeaturedProperties.jsx
import PropertyCard from "../properites/PropertyCard";

const properties = [
  {
    id: "1",
    title: "Modern Downtown Loft",
    location: "Manhattan, New York",
    price: "$2,850",
    beds: 2,
    baths: 2,
    size: 1200,
    rating: 4.9,
    aiRecommended: true,
    image: "./src/assets/feature-1.jpeg",
  },
  {
    id: "2",
    title: "Luxury Waterfront Apartment",
    location: "Miami Beach, FL",
    price: "$4,200",
    beds: 3,
    baths: 2,
    size: 1800,
    rating: 4.8,
    aiRecommended: false,
    image: "./src/assets/feature-4.jpeg",
  },
];

const FeaturedProperties = () => {
  return (
    <div className="py-12 px-10 max-w-6xl mx-auto ">
      <h2 className="text-3xl font-bold text-primary mb-2 text-center">
        Featured Properties
      </h2>
      <p className="text-primary mb-8 text-center">
        Discover handpicked properties that match your preferences with our
        AI-powered recommendations
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;

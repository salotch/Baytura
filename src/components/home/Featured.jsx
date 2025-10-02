import PropertyCard from "../properites/PropertyCard";

import { properties } from "../Data";
const Featured = () => {
  return (
    <div className="py-12 px-10 max-w-6xl mx-auto ">
      <h2 className="text-3xl font-bold text-primary mb-2 text-center">
        {properties.header}
      </h2>
      <p className="text-primary mb-8 text-center">{properties.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {properties.data.slice(0, 2).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Featured;

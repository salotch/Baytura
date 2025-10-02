// src/components/PropertyCard.jsx
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <Link
      to={`/properties/${property.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cairo-font"
    >
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-52 object-cover"
        />
        <div className="top-2 left-2 absolute w-fit ">
          {property.aiRecommended && (
            <div className=" my-1 w-fit bg-primary text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
              <Icon icon="majesticons:robot-line" />
              AI Recommended
            </div>
          )}
          {property.forRent && (
            <div className=" my-1 w-fit bg-green-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
              For Rent
            </div>
          )}

          {property.forSale && (
            <div className="my-1 w-fit bg-blue-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
              For Sale
            </div>
          )}
        </div>

        <div className="absolute items-center flex gap-1 bottom-2 left-2 bg-white text-gray-800 text-xs px-2 py-1 rounded-full shadow">
          <Icon icon="iconoir:star-solid" className="text-yellow-300 inline" />{" "}
          {property.rating}
        </div>
      </div>
      <div className="p-4 text-primary">
        <h3 className="text-lg font-semibold py-1">{property.title}</h3>
        <div className="flex items-center gap-1">
          <Icon icon={property.typeI} className="text-primary"></Icon>

          <h4 className="text-md font-semibold py-1">{property.type}</h4>
        </div>
        <div className="text-sm  mt-1 flex items-center gap-1 py-1">
          <Icon className="text-primary" icon="mdi:map-marker" />
          {property.location}
        </div>
        <p className="text-lg font-semibold py-1">{property.price}</p>
        <div className="flex justify-between mt-3 text-sm  py-1">
          <div className="flex items-center gap-1 py-1">
            <Icon className="text-beige" icon="mdi:bed" />
            {property.beds} Beds
          </div>
          <div className="flex items-center gap-1 py-1">
            <Icon className="text-beige" icon="mdi:shower" />
            {property.baths} Baths
          </div>
          <div className="flex items-center gap-1 py-1">
            <Icon className="text-beige" icon="mdi:ruler-square" />
            {property.size} ft²
          </div>
        </div>
        {property.added && (
          <div className=" flex gap-2 flex-wrap">
            {property.added.map((add) => (
              <div className="bg-light-white flex items-center gap-0.5 rounded-2xl py-1 px-2 text-primary text-sm">
                <Icon className="text-primary" icon={add.icon}></Icon>
                {add.title}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex p-4 gap-3 text-sm font-medium">
        <Link
          to={`/properties/${property.id}`}
          className="text-primary border-primary border-1 px-4 py-1 rounded-lg hover:bg-primary hover:text-white transition"
        >
          View Details
        </Link>
        <Link
          to={`/properties/Agents/
          ${property.id}`}
          className="text-white border-beige border-1  bg-beige px-4 py-1 rounded-lg hover:bg-white hover:text-beige"
        >
          Contact Agent
        </Link>
      </div>
    </Link>
  );
};

export default PropertyCard;

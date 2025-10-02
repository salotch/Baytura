// src/pages/PropertyDetails.jsx
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { properties } from "../components/Data"; // wherever your data is
import { Link } from "react-router-dom";

const PropertyDetails = () => {
  const { id } = useParams();

  // find property from properties.data
  const property = properties.data.find((p) => p.id.toString() === id);

  if (!property) {
    return <div className="p-10 text-center">Property not found</div>;
  }

  return (
    <div className="cairo-font max-w-6xl pt-20 mx-auto p-6 ">
      <Link
        to="/Properties"
        className="my-3 hover:animate-bounce w-fit hover:bg-primary hover:text-white border-primary rounded-sm  cursor-pointer py-1 px-2 border-1 gap-2 flex items-center"
      >
        <Icon icon="mdi:arrow-back" className="text-sm "></Icon>
        Back to Properties
      </Link>
      <div className=" grid lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2">
          {/* Main Image */}
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-[400px] object-cover"
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
          </div>

          {/* Property Info */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
              <Icon icon="mdi:map-marker" />
              {property.location}
            </div>
            <p className="text-xl font-semibold text-primary">
              {property.price}
            </p>

            {/* Details */}
            <div className="flex gap-4 text-sm mt-4">
              <div className="flex items-center gap-1">
                <Icon icon={property.typeI} className="text-beige" />
                {property.type}
              </div>
              <div className="flex items-center gap-1">
                <Icon icon="mdi:bed" className="text-beige" />
                {property.beds} Beds
              </div>
              <div className="flex items-center gap-1">
                <Icon icon="mdi:shower" className="text-beige" />
                {property.baths} Baths
              </div>
              <div className="flex items-center gap-1">
                <Icon icon="mdi:ruler-square" className="text-beige" />
                {property.size} Sq Ft
              </div>
              <div className="flex items-center gap-1">
                <Icon icon="mdi:star" className="text-yellow-500" />
                {property.rating}
              </div>
            </div>

            {/* Added Features */}
            {property.added?.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Amenities</h3>
                <div className="flex flex-wrap gap-3">
                  {property.added.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1 text-sm text-gray-600 border px-2 py-1 rounded-md"
                    >
                      <Icon icon={item.icon} className="text-lg" />
                      {item.title}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section - Inquiry & Actions */}
        <div className="space-y-6">
          {/* Your Agent */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-3">Your Agent</h3>
            <div className="flex items-center gap-3 mb-3">
              <img
                src={property.agent.image}
                alt={property.agent.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{property.agent.name}</p>
                <p className="text-xs text-gray-500">{property.agent.title}</p>
                <div className="flex items-center text-xs text-gray-500 gap-1">
                  <Icon icon="mdi:star" className="text-yellow-500" />
                  {property.agent.rating} ({property.agent.reviews} reviews)
                </div>
              </div>
            </div>
            <button className="w-full bg-primary cursor-pointer text-white py-2 rounded-md hover:bg-opacity-90 mb-2">
              Contact Agent
            </button>
            <div className="flex justify-evenly text-sm font-semibold text-beige">
              <a
                href={`tel:${property.agent.phone}`}
                className="hover:text-white hover:bg-beige  border-2 flex items-center gap-1 border-beige px-3 py-1 text-center  rounded-lg"
              >
                <Icon icon="mdi:call"></Icon>
                Call
              </a>
              <a
                href={`tel:${property.agent.phone}`}
                className="hover:text-white hover:bg-beige  border-2 flex items-center gap-1 border-beige px-3 py-1 text-center  rounded-lg"
              >
                <Icon icon="mdi:email"></Icon>
                Email
              </a>
            </div>
          </div>
          {/* Schedule Viewing */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Schedule a Viewing</h3>
            <input
              type="date"
              className="border w-full p-2 rounded-md text-sm mb-2"
            />
            <input
              type="time"
              className="border w-full p-2 rounded-md text-sm mb-2"
            />
            <button className="w-full cursor-pointer hover:text-beige hover:bg-white border-beige border-2 font-semibold bg-beige text-white py-2 rounded-md hover:bg-opacity-90">
              Schedule Viewing
            </button>
          </div>

          {/* Quick Inquiry */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Quick Inquiry</h3>
            <textarea
              className="border w-full p-2 rounded-md text-sm mb-2"
              rows="3"
              placeholder="I'm interested in this property..."
            />
            <button className="w-full bg-primary text-white py-2 cursor-pointer hover:text-primary hover:bg-white border-primary border-2 font-semibold rounded-md hover:bg-opacity-90">
              Send Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

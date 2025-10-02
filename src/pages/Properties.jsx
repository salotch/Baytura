import React, { useState } from "react";
import { Icon } from "@iconify/react";
import PropertyCard from "../components/properites/PropertyCard";
import { properties } from "../components/Data";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/properites/Dropdown";

export default function Properties() {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(false);
  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 2);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="py-16 px-6 md:px-20 pt-30 cairo-font">
      <h1 className=" font-medium text-3xl">Properties</h1>
      <p className=" text-gray-600  ">
        Discover your perfect property with AI-powered recommendatoins
      </p>

      {/* Search Box */}
      <div className="bg-white  rounded-xl shadow-lg py-5 px-3 md:px-5 my-4">
        <div className="grid md:grid-cols-5 grid-cols-3 gap-6 md:gap-3">
          {/* search */}

          <div className="flex  items-center gap-2 mt-1 hover:shadow-lg bg-light-white rounded-md px-2  py-2">
            <Icon
              icon="bitcoin-icons:search-outline"
              className="text-gray-600 w-7 h-7"
            />
            <input
              type="text"
              placeholder="Search properties, locations..."
              className="outline-none w-full text-primary text-sm"
            />
          </div>

          <Dropdown
            label="All Types"
            options={["All Types", "Apartment", "Villa", "Studio"]}
          ></Dropdown>
          <Dropdown
            label="All Status"
            options={["All Status", "For Sale", "For Rent", "Sold", "Rented"]}
          ></Dropdown>
          <Dropdown
            label="Any Bedrooms"
            options={["1 Bedrooms", "2 Bedrooms", "3+ Bedrooms"]}
          ></Dropdown>

          {/* Search Button */}
          <button
            onClick={() => navigate("/properties")}
            className=" w-fit  bg-gradient-to-r from-primary to-beige cursor-pointer text-white py-2 px-6 rounded-xl hover:opacity-90 transition"
          >
            <div className="flex items-center w-full justify-center">
              Search
            </div>
          </button>
        </div>
      </div>
      {/* properties cards */}

      <h2 className=" font-medium text-2xl my-2">4 Properties Found</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {properties.data.slice(0, visibleCount).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center mt-15">
        {visibleCount < properties.data.length && (
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className=" flex gap-1 items-center text-primary text-lg font-semibold cursor-pointer border-primary border-1 px-4 py-1 rounded-lg hover:bg-primary hover:text-white transition"
          >
            {loading ? (
              <>
                <Icon icon="eos-icons:loading" className="animate-spin"></Icon>
                Loading...
              </>
            ) : (
              " Load More Properties"
            )}
          </button>
        )}
      </div>
    </div>
  );
}

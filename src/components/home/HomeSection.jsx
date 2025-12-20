// src/components/HomeSection.jsx
import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { popularLocations } from "/src/components/Data";
import Dropdown from "/src/components/properites/Dropdown";

const HomeSection = () => {
  const navigate = useNavigate();

  return (
    <section className="h-[150vh] md:h-[120vh] flex flex-col justify-center items-center text-center bg-[url('../../assets/home-img.jpeg')] bg-cover bg-center text-white">
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg mt-50">
        Find Your <span className="gradient2">Dream Home</span>
      </h1>
      <p className="mb-6 text-lg drop-shadow w-[70%] mx-auto ">
        Discover luxury properties with intelligent matching, immersive virtual
        tours, and personalize recommendations crafted exclusively for your
        lifestyle.
      </p>
      <div className=" text-primary py-12 px-6 md:px-20">
        {/* Search Box */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {/* Location */}
            <div className="mt-1 bg-light-white rounded-md px-2 py-2 hover:shadow-lg">
              {/* <label className="text-sm font-medium text-gray-600">
                Location
              </label> */}
              <div className="flex gap-2  ">
                <Icon
                  icon="mdi:map-marker-outline"
                  className="text-beige w-5 h-5"
                />
                <input
                  type="text"
                  placeholder="Cairo, Alexandria, Giza..."
                  className="outline-none w-full text-primary text-sm"
                />
              </div>
            </div>

            {/* Price Range */}
            {/* <div>
              <label className="text-sm font-medium text-gray-600">
                Price Range
              </label>
              <div className="flex items-center gap-2 mt-1 border rounded-md px-3 py-2">
                <Icon icon="mdi:currency-usd" className="text-beige w-5 h-5" />
                <select className="outline-none w-full text-primary text-sm">
                  <option>Any price</option>
                  <option>$0 - $1000</option>
                  <option>$1000 - $5000</option>
                </select>
              </div>
            </div> */}

            {/* Bedrooms */}
            {/* <div>
              <label className="text-sm font-medium text-gray-600">
                Bedrooms
              </label>
              <div className="flex items-center gap-2 mt-1 border rounded-md px-3 py-2">
                <Icon icon="mdi:bed-outline" className="text-beige w-5 h-5" />
                <select className="outline-none w-full text-primary text-sm">
                  <option>Any</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3+</option>
                </select>
              </div>
            </div> */}

            {/* Property Type */}
            {/* <div>
              <label className="text-sm font-medium text-gray-600">
                Property Type
              </label>
              <div className="flex items-center gap-2 mt-1 border rounded-md px-3 py-2">
                <Icon icon="mdi:home-outline" className="text-beige w-5 h-5" />
                <select className="outline-none w-full text-primary text-sm">
                  <option>All Types</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Townhouse</option>
                </select>
              </div>
            </div> */}

            <Dropdown
              label="All Types"
              options={["All Types", "Apartment", "Villa", "Studio"]}
              opIcon="mdi:home-outline"
              opIc="text-beige w-5 h-5"
            ></Dropdown>
            <Dropdown
              label="Any Price"
              options={["Any Price", "$0 - 1000$", "$1000 - 5000$", "$5000+"]}
              opIcon="mdi:currency-usd"
              opIc="text-beige w-5 h-5"
            ></Dropdown>
            <Dropdown
              label="Any Bedrooms"
              options={["1 Bedrooms", "2 Bedrooms", "3+ Bedrooms"]}
              opIcon="mdi:bed-outline"
              opIc="text-beige w-5 h-5"
            ></Dropdown>
          </div>

          {/* Search Button */}
          <button
            onClick={() => navigate("/properties")}
            className="mt-4 w-full md:w-auto bg-gradient-to-r cursor-pointer from-primary to-beige text-white py-2 px-6 rounded-xl hover:opacity-90 transition"
          >
            <div className="flex items-center gap-2 justify-center">
              <Icon icon="mdi:magnify" className="w-5 h-5" />
              Search Properties
            </div>
          </button>

          {/* Popular Locations */}
          <div className="mt-4 text-gray-500 text-sm">
            Popular:{" "}
            {popularLocations.map((loc, idx) => (
              <span
                key={idx}
                className="inline-block bg-gray-200 text-primary px-3 py-1 rounded-full mr-2 mt-2 cursor-pointer hover:bg-gray-300"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 flex flex-wrap justify-around gap-6 max-w-5xl mx-auto text-center">
          <div>
            <h2 className="text-3xl font-bold text-beige">10K+</h2>
            <p className="text-white text-sm">Properties Listed</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-beige">5K+</h2>
            <p className="text-white text-sm">Happy Clients</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-beige">50+</h2>
            <p className="text-white text-sm">Cities Covered</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-beige">95%</h2>
            <p className="text-white text-sm">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

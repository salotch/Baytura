// src/components/PropertyCategories.jsx
import React from "react";
import { Icon } from "@iconify/react";

const Property = (props) => {
  const categories = props.categories;
  // if (categories) console.log(categories.header);
  return (
    <>
      {categories && (
        <section className="py-16 px-6 md:px-20 text-center">
          <h2 className="text-3xl font-semibold mb-2">{categories.header}</h2>
          <p className="text-primary mb-10">{categories.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {props.categories.data.map((cat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition cursor-pointer"
              >
                <div
                  className={`flex items-center justify-center  mb-4 mx-auto ${cat.bg} h-12 ${cat.bw}`}
                >
                  <Icon
                    icon={cat.icon}
                    width={cat.w ? `${cat.w}` : 24}
                    height={cat.w ? `${cat.w}` : 24}
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">{cat.title}</h3>
                <p className="text-primary text-sm">{cat.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Property;

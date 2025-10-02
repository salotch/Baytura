// components/Services.tsx
import React, { useState } from "react";
import { Icon } from "@iconify/react";

const coreServices = [
  {
    title: "Property Valuation",
    description:
      "Accurate property valuation using AI-powered analytics and market data",
    icon: "mdi:home-search-outline",
  },
  {
    title: "Legal Documentation",
    description:
      "Complete legal documentation and contract preparation assistance",
    icon: "mdi:scale-balance",
  },
  {
    title: "Market Analytics",
    description: "Comprehensive market analysis and investment insights",
    icon: "mdi:chart-line",
  },
  {
    title: "Mortgage Assistance",
    description: "Expert mortgage consultation and application support",
    icon: "mdi:bank",
  },
  {
    title: "Property Insurance",
    description: "Comprehensive property insurance consultation and guidance",
    icon: "mdi:shield-home",
  },
  {
    title: "Investment Planning",
    description:
      "Strategic real estate investment planning and portfolio advice",
    icon: "mdi:finance",
  },
];

const additionalServices = [
  {
    title: "AI Property Recommendations",
    description:
      "Get personalized property suggestions based on preferences using advanced ML algorithms",
    badge: "Popular",
    icon: "mdi:robot",
    features: [
      "Smart Matching Algorithm",
      "Predictive Analytics",
      "Behavioral Analysis",
      "Market Trend Integration",
    ],
    image: "/src/assets/feature-1.jpeg",
  },
  {
    title: "Real Estate Consultation",
    description:
      "Expert advice from certified professionals for buying, selling, or renting decisions",
    icon: "mdi:account-tie",
    features: [
      "Market Analysis",
      "Investment Advice",
      "Legal Guidance",
      "Negotiation Support",
    ],
    image: "/src/assets/feature-4.jpeg",
  },
  {
    title: "Property Management",
    description:
      "Comprehensive property management including maintenance, rent, and marketing",
    icon: "mdi:home-city",
    features: [
      "Tenant Management",
      "Maintenance Coordination",
      "Financial Reporting",
      "24/7 Support",
    ],
    image: "/src/assets/feature-4.jpeg",
  },
];

const highlights = [
  {
    title: "AI-Powered",
    icon: "mdi:flash-outline",
    text: "Advanced AI technology for smarter property decisions",
  },
  {
    title: "24/7 Support",
    icon: "mdi:clock-outline",
    text: "Round-the-clock assistance from our expert team",
  },
  {
    title: "Precision Matching",
    icon: "mdi:target",
    text: "Find properties that perfectly match your needs",
  },
  {
    title: "Expert Team",
    icon: "mdi:account-group",
    text: "Certified professionals with years of experience",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("core");

  return (
    <section className="bg-white text-primary py-20 px-6">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="text-gray-600 mt-2">
          Comprehensive real estate solutions powered by cutting-edge AI
          technology and expert professionals
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-10 space-x-6">
        <button
          onClick={() => setActiveTab("core")}
          className={`px-6 py-2 font-semibold cursor-pointer rounded-full ${
            activeTab === "core"
              ? "bg-primary text-white"
              : "bg-gray-200 text-primary"
          }`}
        >
          Core Services
        </button>
        <button
          onClick={() => setActiveTab("additional")}
          className={`px-6 py-2 font-semibold cursor-pointer rounded-full ${
            activeTab === "additional"
              ? "bg-primary text-white"
              : "bg-gray-200 text-primary"
          }`}
        >
          Additional Services
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {Array.isArray(coreServices) && activeTab === "core"
          ? coreServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-xl p-6 space-y-4"
              >
                <Icon icon={service.icon} className="text-primary text-3xl" />
                <h3 className="font-bold text-lg">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
                <button className="text-sm bg-primary cursor-pointer text-white py-1 px-4 rounded mt-2">
                  Get Started
                </button>
              </div>
            ))
          : additionalServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-xl overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {service.badge && (
                    <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon
                      icon={service.icon}
                      className="text-primary text-xl"
                    />
                    <h3 className="font-bold text-lg">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {service.description}
                  </p>
                  <div className="text-sm text-gray-700 font-medium mb-1">
                    Key Features:
                  </div>
                  {Array.isArray(service.features) && (
                    <ul className="text-sm list-disc list-inside text-gray-600 space-y-1">
                      {service.features.map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-4 flex space-x-2">
                    <button className="bg-primary text-white cursor-pointer px-4 py-1 rounded text-sm">
                      Get Started
                    </button>
                    <button className="border border-primary cursor-pointer text-primary px-4 py-1 rounded text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* Highlights Section */}
      {Array.isArray(highlights) && (
        <div className="mt-20 bg-gray-50 p-8 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {highlights.map((item, idx) => (
            <div key={idx}>
              <Icon
                icon={item.icon}
                className="text-primary text-3xl mx-auto mb-2"
              />
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-primary to-beige text-white rounded-lg p-10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div>
          <h3 className="text-xl font-bold">Ready to Get Started?</h3>
          <p className="text-sm text-white/90 mt-1">
            Join thousands of satisfied customers who trust BAYT AURA for their
            real estate needs
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="bg-white text-primary cursor-pointer px-4 py-2 rounded font-medium flex items-center space-x-2">
            <Icon icon="mdi:account-voice" className="text-xl" />
            <span>Talk to Expert</span>
          </button>
          <input
            type="text"
            placeholder="Enter your email"
            className="rounded px-4 py-2 text-primary focus:outline-none"
          />
        </div>
      </div>

      {/* Philosophy */}
      <div className="mt-20 text-center max-w-4xl mx-auto bg-white shadow p-8 rounded-lg">
        <h4 className="font-semibold text-xl mb-2">Our Service Philosophy</h4>
        <p className="text-gray-600 text-sm">
          At BAYT AURA, we’re committed to transforming the real estate
          experience through innovative technology and personalized service. Our
          comprehensive suite of services simplifies property transactions and
          empowers informed decision-making.
        </p>
        <div className="mt-4 text-beige text-sm flex justify-center items-center gap-2 font-semibold">
          <Icon icon="mdi:star-outline" className="text-beige text-lg" />
          Excellence in Every Interaction
          <Icon icon="mdi:star-outline" className="text-beige text-lg" />
        </div>
      </div>
    </section>
  );
};

export default Services;

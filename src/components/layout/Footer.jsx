import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <>
      {/* Footer */}

      <div className="bg-[#0D2C46] text-white pt-12 py-16 md:px-20 px-6">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Read To Discover Luxury Home?
          </h2>
          <p className="text-beige mt-3 max-w-xl mx-auto">
            Join the elite community of property seekers who trust BAYT AURA’s
            AI-powered platform for exceptional real estate experiences
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <button className="cursor-pointer bg-gradient-to-r from-[#F6C17A] to-[#D88B2A] text-[#0D2C46] font-medium px-6 py-2 rounded shadow-md flex items-center gap-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <Icon icon="mdi:star-outline" />
              Start Your Journey
            </button>
            <button className="cursor-pointer bg-gradient-to-r from-gray-200 to-gray-300 text-[#0D2C46] font-medium px-6 py-2 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              Explore Premium Features
            </button>
          </div>
        </div>

        {/* Footer Section */}
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-4 gap-8 py-10 border-t border-[#174A6E]">
          {/* Company Info */}
          <div>
            <div className="font-bold text-lg">BAYT AURA</div>
            <div className="text-sm text-beige mt-2">
              Redefining luxury real estate through intelligent technology,
              exceptional service, and unparalleled property curation across
              Egypt’s most prestigious locations.
            </div>
            <div className="flex gap-4 mt-4 text-xl text-beige">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (platform) => (
                  <Icon
                    key={platform}
                    icon={`mdi:${platform}`}
                    className="hover:text-white hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-1 text-beige text-sm">
              {[
                "Home",
                "Premium Properties",
                "About BAYT AURA",
                "AI-Powered Features",
                "Contact Us",
              ].map((link) => (
                <li
                  key={link}
                  className="hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Property Categories */}
          <div>
            <h4 className="font-semibold text-white mb-3">
              Property Categories
            </h4>
            <ul className="space-y-1 text-beige text-sm">
              {[
                "Luxury Apartments",
                "Premium Villas",
                "Exclusive Compounds",
                "Commercial Properties",
                "Investment Opportunities",
              ].map((cat) => (
                <li
                  key={cat}
                  className="hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-3">Contact With Us</h4>
            <ul className="space-y-2 text-beige text-sm">
              <li className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                <Icon icon="mdi:email-outline" /> contact@baytaura.com
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                <Icon icon="mdi:phone-outline" /> +20 10 1234 5678
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                <Icon icon="mdi:map-marker-outline" /> Cairo, Egypt
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

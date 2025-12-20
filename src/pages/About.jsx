import React from "react";
import { Icon } from "@iconify/react";

const StatsCard = ({ iconName, value, label }) => (
  <div className="bg-white rounded-xl shadow-md p-6 text-center space-y-2 flex flex-col items-center">
    <Icon icon={iconName} className="text-3xl text-gray-700" />
    <h3 className="text-2xl font-semibold">{value}</h3>
    <p className="text-sm text-gray-500">{label}</p>
  </div>
);

const CoreValueCard = ({ iconName, title, description }) => (
  <div className="bg-white rounded-xl shadow p-6 text-center">
    <Icon icon={iconName} className="text-3xl mx-auto mb-3 text-blue-900" />
    <h4 className="text-lg font-semibold text-gray-800 mb-1">{title}</h4>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

const TimelineItem = ({ year, title, description, alignRight }) => (
  <div className={`flex justify-${alignRight ? "end" : "start"} mb-8`}>
    <div className="w-full md:w-1/2">
      <div className="bg-white rounded-lg shadow-md p-5 relative">
        <div className="text-sm font-bold text-gray-500 mb-1">{year}</div>
        <h5 className="font-semibold text-gray-800">{title}</h5>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  </div>
);

const LeaderCard = ({ name, role, desc, image, socials }) => (
  <div className="bg-white rounded-xl shadow-md p-6 text-center">
    <img
      src={image}
      alt={name}
      className="w-20 h-20 mx-auto rounded-full mb-3 object-cover"
    />
    <h4 className="text-md font-semibold text-gray-800">{name}</h4>
    <p className="text-sm text-gray-500">{role}</p>
    <p className="text-xs text-gray-400 mt-1">{desc}</p>
    <div className="flex justify-center gap-3 mt-3">
      {socials.map((icon, index) => (
        <a key={index} href="#" className="text-gray-500 hover:text-gray-700">
          <Icon icon={icon} className="text-xl" />
        </a>
      ))}
    </div>
  </div>
);

const AwardCard = ({ iconName, title, subtitle }) => (
  <div className="flex flex-col items-center text-center space-y-2 px-6">
    <Icon icon={iconName} className="text-3xl text-gray-800" />
    <h4 className="font-semibold text-gray-800">{title}</h4>
    <p className="text-sm text-gray-500">{subtitle}</p>
  </div>
);

const About = () => {
  return (
    <div className="bg-gray-50 pt-20 cairo-font">
      <div className="py-16 px-6 lg:px-20">
        {/* Intro */}
        <div className="mb-4 flex justify-center">
          <span className="bg-beige text-white px-4 py-1 rounded-lg text-sm mb-4">
            ABOUT BAYT AURA
          </span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Revolutionizing Real Estate with AI
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-10">
          We're on a mission to transform the real estate industry through
          innovative technology, exceptional service, and deep market expertise.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <StatsCard
            iconName="mdi:office-building"
            value="10,000+"
            label="Properties Listed"
          />
          <StatsCard
            iconName="mdi:account-group"
            value="5,000+"
            label="Happy Clients"
          />
          <StatsCard
            iconName="mdi:calendar"
            value="15+"
            label="Years Experience"
          />
          <StatsCard
            iconName="mdi:trophy-award"
            value="25+"
            label="Awards Won"
          />
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010 with a simple yet ambitious vision: to make real
              estate transactions more transparent, efficient, and accessible
              for everyone.
            </p>
            <p className="text-gray-600 mb-4">
              Today, BAYT AURA combines the expertise of seasoned real estate
              professionals with cutting-edge artificial intelligence to deliver
              personalized property recommendations, market insights, and
              seamless transaction experiences.
            </p>
            <p className="text-gray-600">
              Our platform has helped thousands of families find their dream
              homes, investors identify lucrative opportunities, and property
              owners maximize their returns.
            </p>
            <div className="mt-6 space-x-4">
              <button className="bg-gray-900 text-white px-5 py-2 rounded-md hover:bg-gray-800">
                Learn More
              </button>
              <button className="bg-gray-200 text-gray-800 px-5 py-2 rounded-md hover:bg-gray-300">
                View Timeline
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1615874959474-d609969a20ed"
              alt="Office"
              className="rounded-xl shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md flex items-center space-x-2">
              <Icon icon="mdi:chart-line" className="text-xl text-green-600" />
              <div>
                <p className="text-sm font-semibold">98%</p>
                <p className="text-xs text-gray-500">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-2">
            Our Core Values
          </h3>
          <p className="text-sm text-center text-gray-500 mb-10">
            The principles that guide everything we do
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <CoreValueCard
              iconName="mdi:lightbulb-on-outline"
              title="Innovation"
              description="We leverage cutting-edge AI technology to revolutionize the real estate experience"
            />
            <CoreValueCard
              iconName="mdi:shield-check-outline"
              title="Trust"
              description="Building lasting relationships through transparency and reliability"
            />
            <CoreValueCard
              iconName="mdi:target"
              title="Excellence"
              description="Committed to delivering exceptional service and exceeding expectations"
            />
            <CoreValueCard
              iconName="mdi:heart-outline"
              title="Community"
              description="Creating positive impact in the communities we serve"
            />
          </div>
        </div>
        <Timeline />

        {/* Leadership */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-2">
            Meet Our Leadership
          </h3>
          <p className="text-sm text-center text-gray-500 mb-10">
            The visionaries behind BAYT AURA's success
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <LeaderCard
              name="Sarah Johnson"
              role="CEO & Founder"
              desc="15+ years in real estate, former VP at leading property firms"
              image="/src/assets/avatar.jpg"
              socials={["mdi:linkedin", "mdi:twitter", "mdi:email-outline"]}
            />
            <LeaderCard
              name="Michael Chen"
              role="CTO"
              desc="AI and machine learning expert, former Google engineer"
              image="/src/assets/avatar.jpg"
              socials={["mdi:linkedin", "mdi:github", "mdi:email-outline"]}
            />
            <LeaderCard
              name="Emily Rodriguez"
              role="Head of Sales"
              desc="Real estate sales champion with record-breaking performance"
              image="/src/assets/avatar.jpg"
              socials={["mdi:linkedin", "mdi:twitter", "mdi:email-outline"]}
            />
            <LeaderCard
              name="David Kumar"
              role="Head of Customer Success"
              desc="Customer experience specialist focused on client satisfaction"
              image="/src/assets/avatar.jpg"
              socials={["mdi:linkedin", "mdi:email-outline"]}
            />
          </div>
        </div>

        {/* Awards */}
        <div className="bg-white rounded-xl shadow-md px-6 py-10 mb-20">
          <h3 className="text-xl font-bold text-center mb-2">
            Recognition & Awards
          </h3>
          <p className="text-sm text-center text-gray-500 mb-8">
            Acknowledgments from industry leaders and satisfied clients
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-10">
            <AwardCard
              iconName="mdi:trophy-outline"
              title="Best Real Estate Platform 2023"
              subtitle="Property Technology Awards"
            />
            <AwardCard
              iconName="mdi:star-outline"
              title="Top Customer Service"
              subtitle="Real Estate Excellence Awards"
            />
            <AwardCard
              iconName="mdi:lightbulb-outline"
              title="Innovation Leader"
              subtitle="PropTech Innovation Summit"
            />
          </div>
        </div>

        {/* CTA Footer */}
        <div className=" bg-gradient-to-r from-primary to-beige rounded-xl px-10 py-12 text-white text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Join Our Journey</h3>
          <p className="text-sm mb-6">
            Be part of the real estate revolution and discover your perfect
            property with BAYT AURA
          </p>
          <button className="bg-white text-gray-900 font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-200">
            Start Your Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

// components/Timeline.tsx

const milestones = [
  {
    year: "2010",
    title: "Company Founded",
    description:
      "Started with a vision to transform real estate through technology",
    side: "left",
  },
  {
    year: "2015",
    title: "Digital Platform Launch",
    description:
      "Launched our first digital platform connecting buyers and sellers",
    side: "right",
  },
  {
    year: "2018",
    title: "AI Integration",
    description:
      "Introduced AI-powered property recommendations and market analysis",
    side: "left",
  },
  {
    year: "2020",
    title: "Global Expansion",
    description: "Expanded operations to serve clients across multiple regions",
    side: "right",
  },
  {
    year: "2023",
    title: "BAYT AURA Launch",
    description:
      "Launched the comprehensive BAYT AURA platform with advanced AI features",
    side: "left",
  },
];

const Timeline = () => {
  return (
    <section className="py-16 px-4 bg-white text-primary">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-primary">Our Journey</h2>
        <p className="text-gray-500 mt-2">Key milestones in our evolution</p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1 w-1 h-full bg-primary"></div>

        {/* Milestones */}
        {milestones.map((item, index) => {
          const isLeft = item.side === "left";
          return (
            <div
              key={index}
              className={`mb-12 flex items-center justify-between w-full ${
                isLeft ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-5/12"></div>

              {/* Circle Marker */}
              <div className="z-10 w-6 h-6 bg-beige border-2 border-primary rounded-full flex items-center justify-center">
                <Icon icon="mdi:circle" className="text-primary text-xs" />
              </div>

              {/* Card */}
              <div className="bg-white shadow-lg rounded-md p-6 w-5/12 text-left">
                <div
                  className={`text-beige font-semibold text-lg ${
                    isLeft ? "text-right" : "text-left"
                  }`}
                >
                  {item.year}
                </div>
                <h3 className="text-xl font-bold text-primary mt-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

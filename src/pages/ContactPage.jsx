// src/pages/Contact.jsx
import { Icon } from "@iconify/react";

const ContactPage = () => {
  return (
    <div className="pt-30 bg-gray-50 min-h-screen py-12 cairo-font">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <button className="bg-beige text-white px-4 py-1 rounded-lg text-sm mb-4">
            Get In Touch
          </button>
          <h2 className="text-3xl font-bold text-primary mb-2">
            Contact BAYT AURA
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re here to help you with all your real estate needs. Reach
            out to our expert team and experience the BAYT AURA difference.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: "mdi:phone",
              title: "Phone Support",
              desc: "Speak directly with our real estate experts",
              info: "+971 4 123 4567",
              extra: "24/7 Available",
            },
            {
              icon: "mdi:email-outline",
              title: "Email Support",
              desc: "Send us your questions and get detailed responses",
              info: "hello@baytaura.com",
              extra: "Response within 2 hours",
            },
            {
              icon: "mdi:chat-processing-outline",
              title: "Live Chat",
              desc: "Instant assistance through our AI-powered chatbot",
              info: "Available on website",
              extra: "Always Online",
            },
            {
              icon: "mdi:calendar-clock",
              title: "Schedule Meeting",
              desc: "Book a personalized consultation with our experts",
              info: "Book online",
              extra: "Business Hours",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 text-center hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">
                <Icon icon={item.icon} className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{item.desc}</p>
              <p className="text-gray-800 font-medium">{item.info}</p>
              <p className="text-xs text-gray-400">{item.extra}</p>
              <button className="mt-4 border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition">
                Contact Now
              </button>
            </div>
          ))}
        </div>

        {/* Form & Quick Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <p className="text-gray-500 text-sm mb-6">
              Fill out the form below and we&apos;ll get back to you within 2
              hours
            </p>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="border rounded-md px-3 py-2 focus:ring focus:ring-primary outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border rounded-md px-3 py-2 focus:ring focus:ring-primary outline-none"
              />
              <input
                type="tel"
                placeholder="+971 XXX XXX XXXX"
                className="border rounded-md px-3 py-2 focus:ring focus:ring-primary outline-none"
              />
              <select className="border rounded-md px-3 py-2 focus:ring focus:ring-primary outline-none">
                <option>Select Inquiry Type</option>
                <option>Buying</option>
                <option>Renting</option>
                <option>Support</option>
              </select>
              <input
                type="text"
                placeholder="Subject"
                className="border rounded-md px-3 py-2 focus:ring focus:ring-primary outline-none sm:col-span-2"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="border rounded-md px-3 py-2 focus:ring focus:ring-primary outline-none sm:col-span-2"
              ></textarea>
              <button className="bg-primary text-white font-medium py-2 rounded-md sm:col-span-2 hover:bg-primary/90 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Quick Contact */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
              <div className="flex items-center gap-3 text-gray-600 mb-2">
                <Icon icon="mdi:phone" className="text-primary w-5 h-5" />
                <span>+971 4 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 mb-2">
                <Icon
                  icon="mdi:email-outline"
                  className="text-primary w-5 h-5"
                />
                <span>hello@baytaura.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Icon
                  icon="mdi:clock-outline"
                  className="text-primary w-5 h-5"
                />
                <span>Sun–Thu: 9AM–6PM</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src="/src/assets/support.jpg"
                alt="Support"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-sm text-gray-600">24/7 Customer Support</p>
                <p className="font-semibold text-primary">
                  Always Here for You
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

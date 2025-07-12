import { NavbarSection } from '../screens/Project/sections/NavbarSection';
import { FooterSection } from '../screens/Project/sections/FooterSection';

export const AboutPage = () => {
  return (
    <div className="bg-[#f8f8f8] flex flex-col min-h-screen w-full">
      <NavbarSection />
      
      {/* Hero Section */}
      <div className="w-full bg-[#0b3562] py-20 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="font-['Raleway'] font-bold text-white text-4xl text-center">
            About Us
          </h1>
          <p className="text-white/80 text-xl text-center mt-2">
            Learn about our mission and vision
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-['Raleway'] font-bold text-[#0B3562] mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              TRACE (Technologically Re-Awakening Culture of Excellence) aims to advance Sri Lanka through technology and innovation, fostering a culture of excellence and maintaining a competitive position in the global tech landscape.
            </p>

            <h2 className="text-3xl font-['Raleway'] font-bold text-[#0B3562] mb-6">
              Our Vision
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We envision making Sri Lanka a leading innovation hub by fostering high-performance technology, creating job opportunities, and driving sustainable growth through collaborative partnerships and continuous learning.
            </p>

            <h2 className="text-3xl font-['Raleway'] font-bold text-[#0B3562] mb-6">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-['Raleway'] font-semibold text-[#0B3562] mb-3">
                  Project Collaboration
                </h3>
                <p className="text-gray-600">
                  We connect students with industry experts to work on real-world projects, providing valuable experience and mentorship.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-['Raleway'] font-semibold text-[#0B3562] mb-3">
                  Skill Development
                </h3>
                <p className="text-gray-600">
                  Through our training programs and workshops, we help develop the next generation of tech leaders.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-['Raleway'] font-semibold text-[#0B3562] mb-3">
                  Innovation Hub
                </h3>
                <p className="text-gray-600">
                  We create an ecosystem that nurtures innovation and technological advancement.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-['Raleway'] font-semibold text-[#0B3562] mb-3">
                  Industry Partnership
                </h3>
                <p className="text-gray-600">
                  We build strong relationships with industry partners to create opportunities for growth and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};
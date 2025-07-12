import { useNavigate } from 'react-router-dom';
import { NavbarSection } from '../screens/Project/sections/NavbarSection';
import { FooterSection } from '../screens/Project/sections/FooterSection';
import projectData from '../data/projects.json';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f8f8f8] flex flex-col min-h-screen w-full">
      <NavbarSection />
      
      {/* Hero Section */}
      <section className="bg-[#0B3562] text-white py-16">
        <div className="container mx-auto px-16 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-6xl lg:text-7xl font-['Raleway'] font-bold mb-4">
              Unlock
            </h1>
            <h1 className="text-5xl lg:text-6xl font-['Raleway'] font-bold mb-4">
              Growth Through
            </h1>
            <h1 className="text-4xl lg:text-5xl font-['Raleway'] font-bold mb-8">
              Collaboration
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Connect with mentors, explore projects, and receive valuable feedback.<br />
              Grow your skills and knowledge through meaningful collaboration.<br />
              Join a thriving community of innovators today.
            </p>
            <button 
              onClick={() => navigate('/projects')}
              className="bg-gradient-to-r from-white to-[#0B3562] text-black px-16 py-3 rounded-lg font-['Raleway'] font-semibold hover:from-gray-100 hover:to-[#0A2D54]"
            >
              Explore Now
            </button>
          </div>
          <div className="lg:w-1/2">
            <img src="/Hero_image.png" alt="Developer" className="w-full max-w-lg mx-auto" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <img src="/about.png" alt="Growth Illustration" className="w-full max-w-lg mx-auto" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-['Raleway'] font-bold text-[#0B3562] mb-10">About Us</h2>
            <p className="text-xl mb-16 leading-loose">
              TRACE (Technologically Re-Awakening Culture of Excellence) aims to advance Sri Lanka through technology and innovation, fostering a culture of excellence and maintaining a competitive position.
            </p>
            <p className="text-xl mb-16 leading-loose">
              We aim to make Sri Lanka a leading innovation hub by fostering high-performance technology, creating job opportunities, and driving growth.
            </p>
            <button className="bg-[#0B3562] text-white px-6 py-3 rounded-lg font-['Raleway'] hover:bg-[#0A2D54]">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Client Acquisition Section */}
      <section className="py-16 bg-[#0B3562] text-white">
        <div className="container mx-auto px-16 text-center">
          <h2 className="text-4xl font-['Raleway'] font-bold mb-6">
            Bring your ideas to Real World
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Partner with us to transform your innovative ideas into reality. Our expert team is ready to bring your vision to life through cutting-edge technology and collaborative development.
          </p>
          <button 
            onClick={() => navigate('/submit-idea')}
            className="bg-white text-[#0B3562] px-8 py-3 rounded-lg font-['Raleway'] font-semibold hover:bg-gray-100"
          >
            Submit your project
          </button>
        </div>
      </section>

      {/* Project Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 relative">
        <div className="absolute inset-0 bg-[url('/abstract-shapes.png')] bg-no-repeat bg-center opacity-20"></div> {/* Added abstract shapes */}
        <div className="container mx-auto px-4 relative z-10"> {/* Added relative z-index to content */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-['Raleway'] font-bold text-[#0B3562]">Explore Our Project</h2>
            <p className="text-lg text-gray-600 mt-2">Dive into hands-on projects and collaborate with mentors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.projects.slice(0, 3).map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className={`px-3 py-1 ${project.typeColor} text-[#0B3562] rounded-full text-sm font-medium`}>
                    {project.type}
                  </span>
                  <h3 className="text-xl font-['Raleway'] font-semibold text-[#0b3562] mt-3 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#0b3562] hover:bg-[#0b3562]/90"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center px-6 py-3 border-2 border-[#0b3562] text-[#0b3562] text-lg font-medium rounded-md hover:bg-[#0b3562] hover:text-white transition-colors"
            >
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Training Programme Section */}
      <section className="py-16 bg-white"> {/* Changed background to white */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-['Raleway'] font-bold text-[#0B3562] text-center mb-6">Training Programme</h2>
          <p className="text-center text-black text-lg mb-4">You can apply now to our training programme</p>
          <div className="flex flex-col lg:flex-row items-center gap-12"> {/* Increased gap between boxes and image */}
            <div className="grid grid-cols-2 gap-8 lg:w-4/5"> {/* Adjusted width to make boxes wider */}
              { [
                { title: "Development", desc: "Learn from industry experts with hands-on coding sessions and real-world project experience.", icon: "👨‍💻" },
                { title: "Online + Onsite", desc: "Flexible learning options to suit your schedule, combining virtual and in-person sessions.", icon: "🌐" },
                { title: "Experienced Instructors", desc: "Professional guidance from industry leaders with years of expertise in their fields.", icon: "🎓" },
                { title: "Internship", desc: "Hands-on experience through internships with top companies to kickstart your career.", icon: "💼" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex-1 hover:shadow-xl transition-shadow duration-300 h-64 border-2 border-black"> {/* Added dark black border to boxes */}
                  <div className="text-4xl mb-4">{item.icon}</div> {/* Added icon */}
                  <h3 className="text-xl font-['Raleway'] font-semibold text-[#0B3562] mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="lg:w-1/2 lg:ml-8"> {/* Reduced margin to shift image slightly to the left */}
              <img src="/tp.png" alt="Training Programme" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-['Raleway'] font-bold text-[#0B3562] text-center mb-12">
            Our Valued Contributors and Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-1 gap-y-6 items-center">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map((partner, index) => (
              <div key={partner} className="flex items-center justify-center">
                <img 
                  src={index === 2 ? "/partner 3.png" : index === 3 ? "/partner 4.png" : index === 4 ? "/partner 5.png" : index === 5 ? "/partner 6.png" : index === 6 ? "/partner 7.png" : index === 7 ? "/partner 8.png" : index === 8 ? "/partner 9.png" : index === 9 ? "/partner 10.png" : `/partner-${partner}.png`} 
                  alt={`Partner ${partner}`} 
                  className="h-56 w-56 object-contain rounded-lg" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
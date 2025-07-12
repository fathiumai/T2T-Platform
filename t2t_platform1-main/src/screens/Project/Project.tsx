import { FooterSection } from "./sections/FooterSection";
import { NavbarSection } from "./sections/NavbarSection";
import { ProjectsSection } from "./sections/ProjectsSection/ProjectsSection";

export const Project = (): JSX.Element => {
  return (
    <div className="bg-[#f8f8f8] flex flex-col min-h-screen w-full">
      <NavbarSection />
      
      {/* Projects Title Section */}
      <div className="w-full bg-[#0b3562] py-20 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="font-['Raleway'] font-bold text-white text-4xl text-center">
            Our Projects
          </h1>
          <p className="text-white/80 text-xl text-center mt-2">
            Explore our innovative solutions and ongoing developments
          </p>
        </div>
      </div>

      <ProjectsSection />
      <FooterSection />
    </div>
  );
};

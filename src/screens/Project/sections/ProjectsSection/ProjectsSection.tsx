import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  UsersIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import projectData from "../../../../data/projects.json";

export const ProjectsSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-10 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Raleway',Helvetica] font-bold text-[#0b3562] text-[40px] mb-4">
            Our Projects
          </h2>
          <p className="font-['Raleway',Helvetica] text-[#7c97b5] text-[23px]">
            Projects aimed at advancing technology and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {projectData.projects.map((project) => (
            <div key={project.id} className="relative">
              <Card className="relative z-10 bg-white rounded-[20px] border-[0.1px] border-solid border-black shadow-[0px_4px_4px_4px_#00000040]">
                <CardContent className="p-0">
                  <div className="p-3">
                    <img
                      className="w-full h-[202px] object-cover rounded-t-lg"
                      alt={project.title}
                      src={project.image}
                    />
                  </div>

                  <div className="px-4 pb-4">
                    <div className="flex items-start mb-4">
                      <div
                        className={`flex items-center h-7 px-3 rounded-[5px] ${project.typeColor}`}
                      >
                        <div
                          className={`w-2.5 h-2.5 ${project.dotColor} rounded-[5px] mr-2`}
                        ></div>
                        <span className="font-['Poppins',Helvetica] font-medium text-[#0b3562] text-[15px]">
                          {project.type}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-['Raleway',Helvetica] font-semibold text-[#0b3562] text-xl text-center mb-6">
                      {project.title}
                    </h3>

                    <div className="flex justify-between mb-6">
                      <div className="flex items-center">
                        <UsersIcon className="w-5 h-5 text-[#7c97b5] mr-2" />
                        <span className="font-['Poppins',Helvetica] font-medium text-[#7c97b5] text-[15px]">
                          {project.students}
                        </span>
                      </div>

                      <div className="flex items-center">
                        <ClockIcon className="w-5 h-5 text-[#7c97b5] mr-2" />
                        <span className="font-['Poppins',Helvetica] font-medium text-[#7c97b5] text-[15px]">
                          {project.hours}
                        </span>
                      </div>

                      <div className="flex items-center">
                        <CalendarIcon className="w-5 h-5 text-[#7c97b5] mr-2" />
                        <span className="font-['Poppins',Helvetica] font-medium text-[#7c97b5] text-[15px]">
                          {project.months}
                        </span>
                      </div>
                    </div>

                    <Button 
                      className="w-full h-16 rounded-[10px] bg-gradient-to-r from-[#0b3562] to-[#144b88] hover:from-[#0a2d54] hover:to-[#103e73]"
                      onClick={() => navigate(`/project/${project.id}`)}
                    >
                      <span className="font-['Raleway',Helvetica] font-semibold text-white text-[23px]">
                        Read More.....
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="w-[58px] h-[58px] rounded-[10px] border border-solid border-[#a6a0a0]"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </Button>

            <Button className="w-[58px] h-[58px] rounded-[10px] bg-[#0b3562]">
              <span className="font-['Raleway',Helvetica] text-[44px]">1</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-[58px] h-[58px] rounded-[10px] border border-solid border-[#0b3562] text-[#0b3562]"
            >
              <span className="font-['Raleway',Helvetica] text-[44px]">2</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-[58px] h-[58px] rounded-[10px] border border-solid border-black"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
import { NavbarSection } from '../screens/Project/sections/NavbarSection';
import { FooterSection } from '../screens/Project/sections/FooterSection';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { 
  Briefcase, 
  GraduationCap, 
  User2, 
  Clock, 
  Award,
  BarChart2,
  BookOpen,
  Users
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import projectData from '../data/projects.json';

export const DashboardPage = () => {
  const navigate = useNavigate();
  // Filter active and completed projects
  const activeProjects = projectData.projects.filter(p => p.status === 'In Progress' || p.status === 'Planning');
  const completedProjects = projectData.projects.filter(p => p.status === 'Completed');

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Developer',
    skills: ['React', 'TypeScript', 'Node.js', 'Python'],
    activeProjects: activeProjects.length,
    completedProjects: completedProjects.length,
    experienceYears: 3
  };

  return (
    <div className="bg-[#f8f8f8] flex flex-col min-h-screen">
      <NavbarSection />
      <div className="flex-grow container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0b3562]">Welcome back, {user.name}!</h1>
          <p className="text-gray-600 mt-2">Here's an overview of your profile and active projects.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="flex items-center p-6">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <Briefcase className="h-6 w-6 text-[#0b3562]" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Active Projects</p>
                <h3 className="text-2xl font-bold text-[#0b3562]">{user.activeProjects}</h3>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="rounded-full bg-green-100 p-3 mr-4">
                <Award className="h-6 w-6 text-[#0b3562]" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Completed Projects</p>
                <h3 className="text-2xl font-bold text-[#0b3562]">{user.completedProjects}</h3>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="rounded-full bg-yellow-100 p-3 mr-4">
                <BarChart2 className="h-6 w-6 text-[#0b3562]" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Experience</p>
                <h3 className="text-2xl font-bold text-[#0b3562]">{user.experienceYears} Years</h3>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="rounded-full bg-purple-100 p-3 mr-4">
                <BookOpen className="h-6 w-6 text-[#0b3562]" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Skills</p>
                <h3 className="text-2xl font-bold text-[#0b3562]">{user.skills.length}</h3>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-[#0b3562]">Profile Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                  <User2 className="w-12 h-12 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-[#0b3562]">{user.name}</h3>
                <p className="text-gray-600">{user.role}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  <span>Bachelor's in Computer Science</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Briefcase className="w-5 h-5 mr-2" />
                  <span>{user.experienceYears} Years Experience</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#0b3562] mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-[#0b3562] rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                className="w-full bg-[#0b3562] text-white hover:bg-[#0b3562]/90"
                onClick={() => navigate('/profile/personal-info')}
              >
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          {/* Active Projects */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-[#0b3562]">Active Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {activeProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-[#0b3562]">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          Status: {project.status}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="text-[#0b3562] border-[#0b3562] hover:text-white hover:bg-[#0b3562]"
                        onClick={() => navigate(`/project/${project.id}`)}
                      >
                        View Details
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-[#0b3562] rounded-full h-2"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex justify-between text-sm">
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>Deadline: {project.deadline}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="w-4 h-4 mr-1" />
                          <span>Team: {project.team} members</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {activeProjects.length === 0 && (
                  <div className="text-center text-gray-600 py-8">
                    No active projects at the moment.
                  </div>
                )}
              </div>

              <Button
                className="w-full mt-6 bg-[#0b3562] text-white hover:bg-[#0b3562]/90"
                onClick={() => navigate('/projects')}
              >
                Browse More Projects
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};
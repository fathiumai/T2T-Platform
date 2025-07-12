import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with advanced features',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Streamline your workflow with our task management solution',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'Manage all your social media accounts in one place',
    image: 'https://via.placeholder.com/300x200',
  },
];

export const ProjectsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
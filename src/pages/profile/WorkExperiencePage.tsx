import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarSection } from '../../screens/Project/sections/NavbarSection';
import { FooterSection } from '../../screens/Project/sections/FooterSection';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Trash2Icon } from 'lucide-react';

interface WorkExperience {
  company: string;
  website: string;
  city: string;
  country: string;
  position: string;
  startDate: string;
  endDate: string;
  details: string;
}

export const WorkExperiencePage = () => {
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState<WorkExperience[]>([
    {
      company: '',
      website: '',
      city: '',
      country: '',
      position: '',
      startDate: '',
      endDate: '',
      details: ''
    }
  ]);

  const handleExperienceChange = (index: number, field: keyof WorkExperience, value: string) => {
    const updatedExperiences = experiences.map((exp, i) => {
      if (i === index) {
        return { ...exp, [field]: value };
      }
      return exp;
    });
    setExperiences(updatedExperiences);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        company: '',
        website: '',
        city: '',
        country: '',
        position: '',
        startDate: '',
        endDate: '',
        details: ''
      }
    ]);
  };

  const removeExperience = (index: number) => {
    if (experiences.length > 1) {
      setExperiences(experiences.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="bg-[#f8f8f8] flex flex-col min-h-screen">
      <NavbarSection />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#0b3562]">Create Profile</h2>
            <p className="text-gray-600 mt-2">Step 2: Work Experience</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
            <div className="w-2/5 h-full bg-[#0b3562] rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-[#0b3562]">
                    Experience {index + 1}
                  </h3>
                  {experiences.length > 1 && (
                    <Button
                      variant="ghost"
                      onClick={() => removeExperience(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2Icon className="h-5 w-5" />
                    </Button>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Company
                    </label>
                    <Input
                      type="text"
                      value={experience.company}
                      onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                      placeholder="Enter company name"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Website
                    </label>
                    <Input
                      type="url"
                      value={experience.website}
                      onChange={(e) => handleExperienceChange(index, 'website', e.target.value)}
                      placeholder="Enter company website"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <Input
                      type="text"
                      value={experience.city}
                      onChange={(e) => handleExperienceChange(index, 'city', e.target.value)}
                      placeholder="Enter city"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <Input
                      type="text"
                      value={experience.country}
                      onChange={(e) => handleExperienceChange(index, 'country', e.target.value)}
                      placeholder="Enter country"
                      className="w-full"
                    />
                  </div>

                  <div className="col-span-2 space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Position
                    </label>
                    <Input
                      type="text"
                      value={experience.position}
                      onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                      placeholder="Enter your position"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Start Date
                    </label>
                    <Input
                      type="date"
                      value={experience.startDate}
                      onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      End Date
                    </label>
                    <Input
                      type="date"
                      value={experience.endDate}
                      onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div className="col-span-2 space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Details
                    </label>
                    <textarea
                      value={experience.details}
                      onChange={(e) => handleExperienceChange(index, 'details', e.target.value)}
                      placeholder="Enter more details about your role"
                      className="w-full min-h-[100px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0b3562]"
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addExperience}
              className="w-full py-3 text-[#0b3562] text-sm font-medium hover:bg-gray-50 border-2 border-dashed border-[#0b3562] rounded-lg"
            >
              + Add More Work Experience
            </button>

            <div className="flex justify-between pt-6">
              <Button
                type="button"
                onClick={() => navigate('/profile/personal-info')}
                variant="outline"
                className="px-6 py-2"
              >
                Previous
              </Button>
              <Button
                type="button"
                onClick={() => navigate('/profile/education')}
                className="px-6 py-2 bg-[#0b3562] text-white rounded-md hover:bg-[#0b3562]/90 transition-colors"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};
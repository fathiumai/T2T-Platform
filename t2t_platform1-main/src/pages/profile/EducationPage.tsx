import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarSection } from '../../screens/Project/sections/NavbarSection';
import { FooterSection } from '../../screens/Project/sections/FooterSection';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Trash2Icon } from 'lucide-react';

interface Education {
  school: string;
  website: string;
  city: string;
  country: string;
  degree: string;
  startDate: string;
  endDate: string;
  details: string;
}

export const EducationPage = () => {
  const navigate = useNavigate();
  const [educations, setEducations] = useState<Education[]>([
    {
      school: '',
      website: '',
      city: '',
      country: '',
      degree: '',
      startDate: '',
      endDate: '',
      details: ''
    }
  ]);

  const handleEducationChange = (index: number, field: keyof Education, value: string) => {
    const updatedEducations = educations.map((edu, i) => {
      if (i === index) {
        return { ...edu, [field]: value };
      }
      return edu;
    });
    setEducations(updatedEducations);
  };

  const addEducation = () => {
    setEducations([
      ...educations,
      {
        school: '',
        website: '',
        city: '',
        country: '',
        degree: '',
        startDate: '',
        endDate: '',
        details: ''
      }
    ]);
  };

  const removeEducation = (index: number) => {
    if (educations.length > 1) {
      setEducations(educations.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="bg-[#f8f8f8] flex flex-col min-h-screen">
      <NavbarSection />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#0b3562]">Create Profile</h2>
            <p className="text-gray-600 mt-2">Step 3: Education</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
            <div className="w-3/5 h-full bg-[#0b3562] rounded-full"></div>
          </div>

          <div className="space-y-8">
            {educations.map((education, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-[#0b3562]">
                    Education {index + 1}
                  </h3>
                  {educations.length > 1 && (
                    <Button
                      variant="ghost"
                      onClick={() => removeEducation(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2Icon className="h-5 w-5" />
                    </Button>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      School/University
                    </label>
                    <Input
                      type="text"
                      value={education.school}
                      onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
                      placeholder="Enter school name"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Website
                    </label>
                    <Input
                      type="url"
                      value={education.website}
                      onChange={(e) => handleEducationChange(index, 'website', e.target.value)}
                      placeholder="Enter school website"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <Input
                      type="text"
                      value={education.city}
                      onChange={(e) => handleEducationChange(index, 'city', e.target.value)}
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
                      value={education.country}
                      onChange={(e) => handleEducationChange(index, 'country', e.target.value)}
                      placeholder="Enter country"
                      className="w-full"
                    />
                  </div>

                  <div className="col-span-2 space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Degree
                    </label>
                    <Input
                      type="text"
                      value={education.degree}
                      onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                      placeholder="Enter your degree"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Start Date
                    </label>
                    <Input
                      type="date"
                      value={education.startDate}
                      onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      End Date
                    </label>
                    <Input
                      type="date"
                      value={education.endDate}
                      onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div className="col-span-2 space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Details
                    </label>
                    <textarea
                      value={education.details}
                      onChange={(e) => handleEducationChange(index, 'details', e.target.value)}
                      placeholder="Enter more details about your education"
                      className="w-full min-h-[100px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0b3562]"
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addEducation}
              className="w-full py-3 text-[#0b3562] text-sm font-medium hover:bg-gray-50 border-2 border-dashed border-[#0b3562] rounded-lg"
            >
              + Add More Education
            </button>

            <div className="flex justify-between pt-6">
              <Button
                type="button"
                onClick={() => navigate('/profile/work-experience')}
                variant="outline"
                className="px-6 py-2"
              >
                Previous
              </Button>
              <Button
                type="button"
                onClick={() => navigate('/profile/skills')}
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
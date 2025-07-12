import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarSection } from '../../screens/Project/sections/NavbarSection';
import { FooterSection } from '../../screens/Project/sections/FooterSection';
import { Button } from '../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { X } from 'lucide-react';

const skillOptions = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'Java',
  'C++',
  'C#',
  'PHP',
  'Ruby',
  'Swift',
  'Kotlin',
  'Go',
  'Rust',
  'HTML',
  'CSS',
  'SQL',
  'MongoDB',
  'Docker',
  'Kubernetes',
  'AWS',
  'Azure',
  'GCP',
  'Git',
  'Linux',
  'Agile',
  'Scrum'
].sort();

export const SkillsPage = () => {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleAddSkill = (skill: string) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSelectedSkills(selectedSkills.filter(skill => skill !== skillToRemove));
  };

  const handleComplete = () => {
    // Here you would typically save all the profile data
    navigate('/profile/completion');
  };

  return (
    <div className="bg-[#f8f8f8] flex flex-col min-h-screen">
      <NavbarSection />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#0b3562]">Create Profile</h2>
            <p className="text-gray-600 mt-2">Step 4: Skills</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
            <div className="w-4/5 h-full bg-[#0b3562] rounded-full"></div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Select Your Skills
                </label>
                <Select
                  onValueChange={handleAddSkill}
                  value={undefined}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a skill" />
                  </SelectTrigger>
                  <SelectContent>
                    {skillOptions.map((skill) => (
                      <SelectItem
                        key={skill}
                        value={skill}
                        disabled={selectedSkills.includes(skill)}
                      >
                        {skill}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-1 px-3 py-1 bg-[#0b3562] text-white rounded-full text-sm"
                  >
                    {skill}
                    <button
                      onClick={() => handleRemoveSkill(skill)}
                      className="hover:text-gray-200"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              {selectedSkills.length === 0 && (
                <p className="text-gray-500 text-sm">
                  Select your skills from the dropdown above
                </p>
              )}

              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  onClick={() => navigate('/profile/education')}
                  variant="outline"
                  className="px-6 py-2"
                >
                  Previous
                </Button>
                <Button
                  type="button"
                  onClick={handleComplete}
                  className="px-6 py-2 bg-[#0b3562] text-white rounded-md hover:bg-[#0b3562]/90 transition-colors"
                >
                  Done
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};
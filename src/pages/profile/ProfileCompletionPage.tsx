import { useNavigate } from 'react-router-dom';
import { NavbarSection } from '../../screens/Project/sections/NavbarSection';
import { FooterSection } from '../../screens/Project/sections/FooterSection';
import { Button } from '../../components/ui/button';
import { CheckCircle } from 'lucide-react';

export const ProfileCompletionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f8f8f8] flex flex-col min-h-screen">
      <NavbarSection />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
            <div className="w-full h-full bg-[#0b3562] rounded-full"></div>
          </div>

          <div className="bg-white p-12 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-24 w-24 text-green-500" />
            </div>
            
            <h2 className="text-3xl font-bold text-[#0b3562] mb-4">
              Profile Completed!
            </h2>
            <p className="text-gray-600 mb-8">
              Your profile has been successfully created. You can now access your dashboard.
            </p>
            
            <Button
              onClick={() => navigate('/dashboard')}
              className="px-8 py-3 bg-[#0b3562] text-white rounded-md hover:bg-[#0b3562]/90 transition-colors text-lg"
            >
              Go to Dashboard
            </Button>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};
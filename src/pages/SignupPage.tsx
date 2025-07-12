import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { NavbarSection } from '../screens/Project/sections/NavbarSection';
import { FooterSection } from '../screens/Project/sections/FooterSection';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

export const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form validation and API call
    // For now, we'll just navigate to the profile creation flow
    navigate('/profile/personal-info');
  };

  return (
    <div className="bg-[#f8f8f8] flex flex-col min-h-screen">
      <NavbarSection />
      <div className="flex-grow flex items-center justify-between px-24">
        {/* Left side - Signup Form */}
        <div className="w-[440px]">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-[#0b3562]">Create Account</h2>
              <Link 
                to="/login" 
                className="text-sm text-[#0b3562] hover:underline"
              >
                Already have an account?
              </Link>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label 
                    htmlFor="firstName" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    placeholder="Enter first name"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label 
                    htmlFor="lastName" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    placeholder="Enter last name"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter your email"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label 
                  htmlFor="password" 
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  placeholder="Enter your password"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label 
                  htmlFor="confirmPassword" 
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  placeholder="Confirm your password"
                  className="w-full"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData(prev => ({ ...prev, agreeToTerms: e.target.checked }))}
                  className="rounded border-gray-300 text-[#0b3562] focus:ring-[#0b3562]"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  I agree to the{" "}
                  <Link to="/terms" className="text-[#0b3562] hover:underline">
                    Terms and Conditions
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full py-2 px-4 bg-[#0b3562] text-white rounded-md hover:bg-[#0b3562]/90 transition-colors"
              >
                Create Account
              </Button>
            </form>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-[600px] flex items-center justify-center">
          <img
            src="/Hero_image.png"
            alt="Signup illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <FooterSection />
    </div>
  );
};
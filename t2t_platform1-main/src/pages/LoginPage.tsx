import { Link } from 'react-router-dom';
import { NavbarSection } from '../screens/Project/sections/NavbarSection';
import { FooterSection } from '../screens/Project/sections/FooterSection';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

export const LoginPage = () => {
  return (
    <div className="bg-[#f8f8f8] flex flex-col min-h-screen">
      <NavbarSection />
      <div className="flex-grow flex items-center justify-between px-24">
        {/* Left side - Login Form */}
        <div className="w-[440px]">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-[#0b3562]">Login</h2>
              <Link 
                to="/signup" 
                className="text-sm text-[#0b3562] hover:underline"
              >
                Create new account
              </Link>
            </div>
            
            <form className="space-y-6">
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
                  placeholder="Enter your password"
                  className="w-full"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-[#0b3562] focus:ring-[#0b3562]"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <Link 
                  to="/forgot-password"
                  className="text-sm text-[#0b3562] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full py-2 px-4 bg-[#0b3562] text-white rounded-md hover:bg-[#0b3562]/90 transition-colors"
              >
                Log In
              </Button>
            </form>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-[600px] flex items-center justify-center">
          <img
            src="/Hero_image.png"
            alt="Login illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <FooterSection />
    </div>
  );
};
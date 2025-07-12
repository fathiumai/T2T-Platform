import {
  ChevronRightIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";

export const FooterSection = (): JSX.Element => {
  // Company links data
  const companyLinks = [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Teams", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="w-full bg-black py-8 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Logo and Description */}
        <div className="flex flex-col space-y-6">
          <div>
            <img
              className="w-[120px] h-[90px] object-contain"
              alt="T2T Logo"
              src="/T2T_logo.png"
            />
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Connecting students and mentors to foster innovation and growth
              in a collaborative ecosystem. We strive to create meaningful 
              partnerships that drive success.
            </p>
          </div>

          <div className="flex flex-col space-y-4 mt-4">
            <div className="flex items-center group hover:text-blue-400 transition-colors">
              <MapPinIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
              <span className="ml-3 text-gray-400 text-sm group-hover:text-blue-400">
                123 Innovation Street, Tech Valley, 10001
              </span>
            </div>

            <div className="flex items-center group hover:text-blue-400 transition-colors">
              <MailIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
              <span className="ml-3 text-gray-400 text-sm group-hover:text-blue-400">
                contact@t2t.com
              </span>
            </div>

            <div className="flex items-center group hover:text-blue-400 transition-colors">
              <PhoneIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
              <span className="ml-3 text-gray-400 text-sm group-hover:text-blue-400">
                +94 123 456 7890
              </span>
            </div>
          </div>
        </div>

        {/* Middle Column - Quick Links */}
        <div className="flex flex-col">
          <h2 className="text-white text-xl font-semibold mb-6">Quick Links</h2>
          <div className="space-y-4">
            {companyLinks.map((link, index) => (
              <div key={index} className="flex items-center group">
                <ChevronRightIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                <a
                  href={link.href}
                  className="ml-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Social Media */}
        <div className="flex flex-col">
          <h2 className="text-white text-xl font-semibold mb-6">Connect With Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="group">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </div>
            </a>
            <a href="#" className="group">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-black transition-colors">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
            </a>
            <a href="#" className="group">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-pink-600 transition-colors">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>
            <a href="#" className="group">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </a>
          </div>

          <div className="mt-8">
            <h3 className="text-white text-sm font-semibold mb-2">Subscribe to our newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 text-gray-400 text-sm rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-r-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-800">
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} T2T. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

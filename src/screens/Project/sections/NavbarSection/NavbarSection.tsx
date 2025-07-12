import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavbarSection = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Navigation items data
  const navItems = [
    { label: "Home", href: "/", active: location.pathname === "/" },
    { label: "About Us", href: "/about", active: location.pathname === "/about" },
    { label: "Projects", href: "/projects", active: location.pathname === "/projects" || location.pathname.startsWith("/project/") },
    { label: "Leader Board", href: "/leaderboard", active: location.pathname === "/leaderboard" },
    { label: "Contact", href: "/contact", active: location.pathname === "/contact" },
  ];

  return (
    <header className="w-full h-[84px] flex items-center justify-between px-24 relative bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="w-[93px] h-[70px] object-cover cursor-pointer"
          alt="T2T Logo"
          src="/T2T_logo.png"
          onClick={() => navigate('/')}
        />
      </div>

      {/* Navigation */}
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="flex gap-10">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.label} className="relative">
              <NavigationMenuLink
                href={item.href}
                className={`font-['Raleway',Helvetica] font-semibold text-xl leading-5 relative pb-3 ${
                  item.active 
                    ? "text-black after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:w-14 after:bg-black after:-translate-x-1/2" 
                    : "text-[#777575] hover:text-black hover:after:content-[''] hover:after:absolute hover:after:left-1/2 hover:after:bottom-0 hover:after:h-0.5 hover:after:w-14 hover:after:bg-black hover:after:-translate-x-1/2"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.href);
                }}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Auth buttons */}
      <div className="flex items-center gap-4 bg-[url(/rectangle-52.svg)] bg-[100%_100%] h-full py-[11px] px-6">
        <Button
          className="w-[100px] h-[40px] rounded-[10px] text-white bg-[#0b3562] hover:bg-[#0b3562]/90"
          onClick={() => navigate('/login')}
        >
          <span className="font-['Raleway',Helvetica] font-semibold text-base">
            Log In
          </span>
        </Button>
        <Button
          className="w-[100px] h-[40px] rounded-[10px] text-white bg-[#0b3562] hover:bg-[#0b3562]/90"
          onClick={() => navigate('/signup')}
        >
          <span className="font-['Raleway',Helvetica] font-semibold text-base">
            Sign Up
          </span>
        </Button>
      </div>
    </header>
  );
};
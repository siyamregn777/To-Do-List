"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Home, Briefcase, CheckCircle, Menu, X } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setActivePath(pathname);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    handleResize(); // Initialize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pathname]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className={`md:hidden fixed top-4 z-50 p-2 bg-blue-500 text-white rounded-full shadow-lg transition-all ${
          isOpen ? 'left-64' : 'left-4'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-16 md:top-0 left-0 h-[calc(100vh-4rem)] md:h-full w-64 bg-white text-black p-5 border-r border-gray-200 transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0 shadow-xl" : "-translate-x-full"
        } md:translate-x-0 md:shadow-none md:relative`}
      >
        <div className="h-full flex flex-col">
          {/* Logo/Brand could be added here */}
          <nav className="flex-1">
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className={`flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    activePath === "/" ? "text-blue-500 font-medium bg-blue-50" : "text-gray-700"
                  }`}
                  onClick={() => isMobile && setIsOpen(false)}
                >
                  <Home size={20} className="flex-shrink-0" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/skill-test"
                  className={`flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    activePath === "/skill-test" ? "text-blue-500 font-medium bg-blue-50" : "text-gray-700"
                  }`}
                  onClick={() => isMobile && setIsOpen(false)}
                >
                  <CheckCircle size={20} className="flex-shrink-0" />
                  <span>Skill Test</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/internship"
                  className={`flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    activePath === "/internship" ? "text-blue-500 font-medium bg-blue-50" : "text-gray-700"
                  }`}
                  onClick={() => isMobile && setIsOpen(false)}
                >
                  <Briefcase size={20} className="flex-shrink-0" />
                  <span>Internship</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Optional: User profile or footer */}
          <div className="mt-auto pt-4 border-t border-gray-100">
            {/* Add user info or other footer content here */}
          </div>
        </div>
      </aside>

      {/* Overlay for mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;

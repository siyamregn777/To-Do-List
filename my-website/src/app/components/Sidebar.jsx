"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Home, Briefcase, CheckCircle, Menu, X } from "lucide-react";

/**
 * Responsive Sidebar Component
 * 
 * Features:
 * - Mobile-first responsive design with hamburger menu
 * - Active route highlighting
 * - Smooth transitions and accessibility best practices
 * - Auto-closing on mobile when navigating
 */
const Sidebar = () => {
  // Current path for active route highlighting
  const pathname = usePathname();
  const [activePath, setActivePath] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isMobile, setIsMobile] = useState(false); // Device detection

  /**
   * Effect for responsive behavior:
   * - Sets active path on route change
   * - Handles window resize events for responsive toggling
   * - Cleans up event listeners on unmount
   */
  useEffect(() => {
    // Sync active path with current route
    setActivePath(pathname);
    
    const handleResize = () => {
      // Check if viewport is mobile (breakpoint at 768px)
      setIsMobile(window.innerWidth < 768);
      
      // Auto-close sidebar when resizing to desktop
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    // Initialize on mount
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => window.removeEventListener('resize', handleResize);
  }, [pathname]);

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        className={`md:hidden fixed top-4 z-50 p-2 bg-blue-500 text-white rounded-full shadow-lg transition-all ${
          isOpen ? 'left-64' : 'left-4'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Main Sidebar Container */}
      <aside
        className={`fixed top-16 md:top-0 left-0 h-[calc(100vh-4rem)] md:h-full w-64 bg-white text-black p-5 border-r border-gray-200 transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0 shadow-xl" : "-translate-x-full"
        } md:translate-x-0 md:shadow-none md:relative`}
        aria-hidden={!isOpen && isMobile} // Hide from screen readers when closed on mobile
      >
        <div className="h-full flex flex-col">
          {/* Navigation Section */}
          <nav className="flex-1" aria-label="Main navigation">
            <ul className="space-y-3">
              {/* Dashboard Link */}
              <li>
                <Link
                  href="/"
                  className={`flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    activePath === "/" 
                      ? "text-blue-500 font-medium bg-blue-50" 
                      : "text-gray-700"
                  }`}
                  onClick={() => isMobile && setIsOpen(false)}
                  aria-current={activePath === "/" ? "page" : undefined}
                >
                  <Home size={20} className="flex-shrink-0" aria-hidden="true" />
                  <span>Dashboard</span>
                </Link>
              </li>

              {/* Skill Test Link */}
              <li>
                <Link
                  href="/skill-test"
                  className={`flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    activePath === "/skill-test" 
                      ? "text-blue-500 font-medium bg-blue-50" 
                      : "text-gray-700"
                  }`}
                  onClick={() => isMobile && setIsOpen(false)}
                  aria-current={activePath === "/skill-test" ? "page" : undefined}
                >
                  <CheckCircle size={20} className="flex-shrink-0" aria-hidden="true" />
                  <span>Skill Test</span>
                </Link>
              </li>

              {/* Internship Link */}
              <li>
                <Link
                  href="/internship"
                  className={`flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    activePath === "/internship" 
                      ? "text-blue-500 font-medium bg-blue-50" 
                      : "text-gray-700"
                  }`}
                  onClick={() => isMobile && setIsOpen(false)}
                  aria-current={activePath === "/internship" ? "page" : undefined}
                >
                  <Briefcase size={20} className="flex-shrink-0" aria-hidden="true" />
                  <span>Internship</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer Section (Optional) */}
          <div className="mt-auto pt-4 border-t border-gray-100">
            {/* Future enhancement: Add user profile or settings */}
          </div>
        </div>
      </aside>

      {/* Mobile Overlay - Click to close sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
          role="presentation" // Indicates this is decorative for screen readers
        />
      )}
    </>
  );
};

export default Sidebar;
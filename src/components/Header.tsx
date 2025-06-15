
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, GraduationCap } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Chatbot', path: '/chatbot' },
    { name: 'Results', path: '/results' },
    { name: 'Study Materials', path: '/study-materials' },
    { name: 'Lost & Found', path: '/lost-found' },
    { name: 'Campus Map', path: '/campus-map' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    window.location.href = 'https://svit-portal-glass-glow.vercel.app/';
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link to="/" className="flex items-center gap-2 mr-6">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="font-bold">SVIT</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          {/* Student Profile Icon */}
          <div className="relative" ref={dropdownRef}>
            <div
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white font-bold text-sm backdrop-blur-md border border-cyan-300/50 shadow-lg hover:scale-105 hover:shadow-cyan-500/30 hover:border-cyan-300 cursor-pointer transition-all duration-200"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              SU
            </div>

            {/* Profile Dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 p-4 bg-slate-900/90 backdrop-blur-xl rounded-xl text-white shadow-xl border border-cyan-400/20 animate-fade-in">
                <div className="space-y-1">
                  <p className="font-semibold text-lg text-cyan-100">Student User</p>
                  <p className="text-sm text-cyan-200 mb-2">studentuser1@svit.edu.in</p>
                  <div className="space-y-1 text-sm text-slate-300">
                    <p>Roll No: 23P71A0XXX</p>
                    <p>Branch: Computer Science</p>
                    <p>Year: 2nd Year</p>
                    <p>Semester: 2nd Semester</p>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="mt-4 w-full bg-cyan-500/10 border border-cyan-300/50 text-white py-2 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-300 transition-all duration-200 font-medium"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="bg-slate-900/30 backdrop-blur-sm border-cyan-400/20 hover:bg-slate-800/40 hover:border-cyan-400/40">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-slate-900/95 backdrop-blur-xl border-cyan-400/20">
                <div className="grid gap-4 py-6">
                  <Link to="/" className="flex items-center gap-2 mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <span className="font-bold">SVIT</span>
                  </Link>
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="flex w-full items-center py-2 text-lg font-semibold hover:text-cyan-400/80 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

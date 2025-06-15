
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Menu, GraduationCap, LogOut, Mail } from 'lucide-react';

const Header = () => {
  const navLinks = [
    { name: 'Chatbot', path: '/chatbot' },
    { name: 'Results', path: '/results' },
    { name: 'Study Materials', path: '/study-materials' },
    { name: 'Lost & Found', path: '/lost-found' },
    { name: 'Campus Map', path: '/campus-map' },
  ];

  const handleLogout = () => {
    window.open('https://svit-portal-glass-glow.vercel.app/', '_self');
  };

  // Demo user data
  const demoUser = {
    username: 'studentuser1',
    name: 'Student User',
    email: 'studentuser1@svit.edu.in',
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
          {/* Profile Avatar with Dropdown */}
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="ghost" 
                className="relative h-12 w-12 rounded-full p-0 bg-slate-900/30 backdrop-blur-lg border border-cyan-400/20 hover:border-cyan-400/40 hover:bg-slate-800/40 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20 hover:scale-105"
              >
                <Avatar className="h-10 w-10 bg-transparent">
                  <AvatarFallback className="bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-900/60 backdrop-blur-md border border-cyan-400/30 text-cyan-100 font-bold text-sm shadow-inner">
                    SU
                  </AvatarFallback>
                </Avatar>
                {/* Enhanced glossy overlay effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 via-cyan-400/5 to-transparent pointer-events-none opacity-60" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-cyan-400/10 pointer-events-none" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0 bg-slate-900/80 backdrop-blur-xl border-cyan-400/20 shadow-2xl shadow-cyan-500/10" align="end">
              <div className="p-4 space-y-4 bg-gradient-to-br from-slate-800/20 via-transparent to-cyan-900/10 rounded-lg">
                {/* User Info Section */}
                <div className="flex items-center gap-3 pb-3 border-b border-cyan-400/20">
                  <Avatar className="h-12 w-12 bg-transparent">
                    <AvatarFallback className="bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-900/60 backdrop-blur-md border border-cyan-400/30 text-cyan-100 font-bold shadow-inner">
                      SU
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold text-slate-100">{demoUser.name}</h3>
                    <p className="text-sm text-cyan-200/80">@{demoUser.username}</p>
                  </div>
                </div>

                {/* Email Section */}
                <div className="flex items-center gap-2 text-sm text-cyan-200/90 bg-slate-800/30 p-3 rounded-lg backdrop-blur-sm border border-cyan-400/20">
                  <Mail className="h-4 w-4 text-cyan-400/80" />
                  <span>{demoUser.email}</span>
                </div>

                {/* Logout Button */}
                <Button 
                  onClick={handleLogout}
                  variant="outline"
                  className="w-full justify-start gap-2 bg-slate-800/30 backdrop-blur-sm border-cyan-400/30 text-cyan-100 hover:bg-red-900/30 hover:text-red-300 hover:border-red-400/40 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </div>
            </PopoverContent>
          </Popover>

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
                  
                  {/* Mobile Profile Section */}
                  <div className="mt-6 pt-4 border-t border-cyan-400/20">
                    <div className="flex items-center gap-3 mb-4 p-3 bg-slate-800/30 rounded-lg backdrop-blur-sm border border-cyan-400/20">
                      <Avatar className="h-10 w-10 bg-transparent">
                        <AvatarFallback className="bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-900/60 backdrop-blur-md border border-cyan-400/30 text-cyan-100 font-bold shadow-inner">
                          SU
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-slate-100">{demoUser.name}</p>
                        <p className="text-sm text-cyan-200/80">{demoUser.email}</p>
                      </div>
                    </div>
                    <Button 
                      onClick={handleLogout}
                      variant="outline"
                      className="w-full justify-start gap-2 bg-slate-800/30 backdrop-blur-sm border-cyan-400/30 text-cyan-100 hover:bg-red-900/30 hover:text-red-300 hover:border-red-400/40 transition-all duration-300"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </Button>
                  </div>
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


import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Menu, GraduationCap, User, LogOut, Mail } from 'lucide-react';

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
                className="relative h-12 w-12 rounded-full p-0 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-glow-primary/30"
              >
                <Avatar className="h-10 w-10 bg-gradient-to-br from-primary/30 to-blue-500/20 backdrop-blur-sm border-2 border-white/20 shadow-inner">
                  <AvatarImage 
                    src="/placeholder.svg" 
                    alt={demoUser.name}
                    className="object-cover opacity-90"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-primary/40 to-blue-500/30 text-white font-bold text-sm backdrop-blur-sm border border-white/20 shadow-inner">
                    {demoUser.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {/* Glossy overlay effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0 bg-background/80 backdrop-blur-xl border-white/20 shadow-2xl shadow-primary/10" align="end">
              <div className="p-4 space-y-4 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-lg">
                {/* User Info Section */}
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <Avatar className="h-12 w-12 bg-gradient-to-br from-primary/30 to-blue-500/20 backdrop-blur-sm border-2 border-white/20 shadow-inner">
                    <AvatarImage 
                      src="/placeholder.svg" 
                      alt={demoUser.name}
                      className="object-cover opacity-90"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-primary/40 to-blue-500/30 text-white font-bold backdrop-blur-sm border border-white/20 shadow-inner">
                      {demoUser.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold text-foreground">{demoUser.name}</h3>
                    <p className="text-sm text-muted-foreground/80">@{demoUser.username}</p>
                  </div>
                </div>

                {/* Email Section */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground/80 bg-white/5 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                  <Mail className="h-4 w-4 text-primary/80" />
                  <span>{demoUser.email}</span>
                </div>

                {/* Logout Button */}
                <Button 
                  onClick={handleLogout}
                  variant="outline"
                  className="w-full justify-start gap-2 bg-white/5 backdrop-blur-sm border-white/20 hover:bg-destructive/20 hover:text-destructive hover:border-destructive/30 transition-all duration-300 shadow-lg hover:shadow-destructive/20"
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
                <Button variant="outline" size="icon" className="bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-white/20">
                <div className="grid gap-4 py-6">
                  <Link to="/" className="flex items-center gap-2 mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <span className="font-bold">SVIT</span>
                  </Link>
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="flex w-full items-center py-2 text-lg font-semibold hover:text-primary/80 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  
                  {/* Mobile Profile Section */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3 mb-4 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                      <Avatar className="h-10 w-10 bg-gradient-to-br from-primary/30 to-blue-500/20 backdrop-blur-sm border-2 border-white/20 shadow-inner">
                        <AvatarImage 
                          src="/placeholder.svg" 
                          alt={demoUser.name}
                          className="object-cover opacity-90"
                        />
                        <AvatarFallback className="bg-gradient-to-br from-primary/40 to-blue-500/30 text-white font-bold backdrop-blur-sm border border-white/20 shadow-inner">
                          {demoUser.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{demoUser.name}</p>
                        <p className="text-sm text-muted-foreground/80">{demoUser.email}</p>
                      </div>
                    </div>
                    <Button 
                      onClick={handleLogout}
                      variant="outline"
                      className="w-full justify-start gap-2 bg-white/5 backdrop-blur-sm border-white/20 hover:bg-destructive/20 hover:text-destructive hover:border-destructive/30 transition-all duration-300"
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

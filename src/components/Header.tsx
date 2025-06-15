
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, GraduationCap } from 'lucide-react';

const Header = () => {
  const navLinks = [
    { name: 'Chatbot', path: '/chatbot' },
    { name: 'Results', path: '/results' },
    { name: 'Study Materials', path: '/study-materials' },
    { name: 'Lost & Found', path: '/lost-found' },
    { name: 'Campus Map', path: '/campus-map' },
  ];

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

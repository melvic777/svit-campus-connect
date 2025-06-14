
import { GraduationCap, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/40">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="font-bold">SVIT</span>
        </div>
        <p className="text-sm text-foreground/60">&copy; 2025 SVIT. All rights reserved.</p>
        <div className="flex gap-4">
          <Twitter className="h-5 w-5 text-foreground/60 hover:text-primary transition-colors cursor-pointer" />
          <Facebook className="h-5 w-5 text-foreground/60 hover:text-primary transition-colors cursor-pointer" />
          <Linkedin className="h-5 w-5 text-foreground/60 hover:text-primary transition-colors cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

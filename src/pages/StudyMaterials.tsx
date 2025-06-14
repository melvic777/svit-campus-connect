
import { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, Video, ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';

const StudyMaterials = () => {
  const pageRef = useRef(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  // Main resource buttons as specified in PRD
  const studyResources = [
    {
      title: 'Study Material',
      description: 'Complete notes organized by subject and semester',
      icon: BookOpen,
      url: 'https://drive.google.com/drive/folders/1Mc3MjPMIXIcP8ZpPEmWxBqkSWHaz7wP-?usp=sharing',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      hoverColor: 'hover:border-blue-400/70'
    },
    {
      title: 'Previous Year Questions',
      description: 'Question papers from previous examinations',
      icon: FileText,
      url: 'https://drive.google.com/drive/folders/1Mc3MjPMIXIcP8ZpPEmWxBqkSWHaz7wP-?usp=sharing',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      hoverColor: 'hover:border-green-400/70'
    },
    {
      title: 'Video Lectures',
      description: 'Comprehensive video lectures by Sudhakar Atchala',
      icon: Video,
      url: 'https://www.youtube.com/@SudhakarAtchala/playlists',
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      hoverColor: 'hover:border-red-400/70'
    }
  ];

  useEffect(() => {
    // Simple fade-in for the page without affecting positioning
    gsap.from(pageRef.current, { 
      duration: 0.5, 
      opacity: 0, 
      ease: 'power2.out' 
    });
  }, []);

  const openExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen bg-background" ref={pageRef}>
      {/* Hero Section with Minimal Design */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
          Study Resources
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto">
          Access Notes, Past Papers, and Lectures — Fast & Free
        </p>
      </div>

      {/* Three Main Resource Buttons */}
      <div className="max-w-4xl mx-auto" ref={buttonsRef}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studyResources.map((resource, index) => (
            <Card 
              key={index}
              className={`bg-card/80 border-2 border-border/80 ${resource.hoverColor} hover:bg-card/90 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm cursor-pointer group`}
              onClick={() => openExternalLink(resource.url)}
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className={`w-20 h-20 ${resource.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className={`h-10 w-10 ${resource.color}`} />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {resource.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {resource.description}
                </p>
                
                {/* Action Button */}
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group-hover:shadow-glow-primary transition-all duration-300">
                  <ExternalLink className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Access Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="text-center mt-16 max-w-2xl mx-auto">
        <div className="bg-card/60 backdrop-blur-sm rounded-lg border border-border/60 p-6">
          <p className="text-sm text-muted-foreground mb-4">
            All resources open in a new tab for uninterrupted browsing
          </p>
          <div className="flex justify-center items-center gap-4 text-xs text-muted-foreground">
            <span>📚 Updated Weekly</span>
            <span>•</span>
            <span>🔒 Secure Access</span>
            <span>•</span>
            <span>📱 Mobile Friendly</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterials;

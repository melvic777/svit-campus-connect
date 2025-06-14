
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Map, BookOpen, Search, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "AI Chatbot",
      description: "24/7 automated support for FAQs, academic queries, and campus services.",
      link: "/chatbot",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: <Map className="h-8 w-8 text-primary" />,
      title: "Interactive 3D Campus Map",
      description: "Visual campus navigation with clickable points of interest.",
      link: "/campus-map",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Integrated Results Page",
      description: "Personalized login access to your academic performance.",
      link: "/results",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Lost & Found System",
      description: "A digital portal to report and recover lost items on campus.",
      link: "/lost-found",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Study Material Repository",
      description: "Organized access to notes and past papers by subject and semester.",
      link: "/study-materials",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center"
    },
  ];

  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, { duration: 1, y: 50, opacity: 0, ease: 'power3.out' });
    
    gsap.from(".feature-card", {
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section ref={heroRef} className="w-full py-20 md:py-32 lg:py-40 text-center bg-background relative overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=1080&fit=crop&crop=center" 
            alt="Students studying together"
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/90"></div>
        </div>
        
        <div className="absolute inset-0 w-full h-full bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
            SVIT: Engineering the Future, Today.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-8">
            Revolutionizing the college experience with an all-in-one platform for a modern, tech-savvy campus.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/campus-map">Explore Campus</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="#">Prospective Students</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="w-full py-20 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Enhanced Student Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link to={feature.link} key={feature.title} className="feature-card block">
                <Card className="bg-white/5 border-border/60 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 h-full backdrop-blur-sm overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-background/50 backdrop-blur-sm rounded-full p-2">
                      {feature.icon}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Map, BookOpen, Search, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "AI Chatbot",
      description: "24/7 automated support for FAQs, academic queries, and campus services.",
      link: "#"
    },
    {
      icon: <Map className="h-8 w-8 text-primary" />,
      title: "Interactive 3D Campus Map",
      description: "Visual campus navigation with clickable points of interest.",
      link: "/campus-map"
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Integrated Results Page",
      description: "Personalized login access to your academic performance.",
      link: "/results"
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Lost & Found System",
      description: "A digital portal to report and recover lost items on campus.",
      link: "/lost-and-found"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Study Material Repository",
      description: "Organized access to notes and past papers by subject and semester.",
      link: "/study-material"
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 text-center bg-background relative">
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
      <section id="features" className="w-full py-20 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Enhanced Student Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-secondary/50 border-border/60 hover:border-primary/50 hover:bg-secondary transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4">
                  {feature.icon}
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

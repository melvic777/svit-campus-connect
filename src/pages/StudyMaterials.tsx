
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, Download, Search, Filter, FileText, Video } from 'lucide-react';
import { gsap } from 'gsap';

interface StudyMaterial {
  id: string;
  title: string;
  subject: string;
  semester: string;
  type: 'notes' | 'paper' | 'video';
  downloads: number;
  uploadDate: string;
}

const StudyMaterials = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const pageRef = useRef(null);

  const materials: StudyMaterial[] = [
    {
      id: '1',
      title: 'Data Structures and Algorithms - Complete Notes',
      subject: 'Computer Science',
      semester: 'Semester 3',
      type: 'notes',
      downloads: 1250,
      uploadDate: '2025-06-10'
    },
    {
      id: '2',
      title: 'Database Management Systems - Previous Year Papers',
      subject: 'Computer Science',
      semester: 'Semester 4',
      type: 'paper',
      downloads: 980,
      uploadDate: '2025-06-08'
    },
    {
      id: '3',
      title: 'Engineering Mathematics - Video Lectures',
      subject: 'Mathematics',
      semester: 'Semester 1',
      type: 'video',
      downloads: 2100,
      uploadDate: '2025-06-05'
    },
    {
      id: '4',
      title: 'Digital Signal Processing - Lab Manual',
      subject: 'Electronics',
      semester: 'Semester 5',
      type: 'notes',
      downloads: 750,
      uploadDate: '2025-06-12'
    },
    {
      id: '5',
      title: 'Software Engineering - Case Studies',
      subject: 'Computer Science',
      semester: 'Semester 6',
      type: 'notes',
      downloads: 890,
      uploadDate: '2025-06-07'
    },
    {
      id: '6',
      title: 'Computer Networks - Previous Year Papers',
      subject: 'Computer Science',
      semester: 'Semester 5',
      type: 'paper',
      downloads: 1100,
      uploadDate: '2025-06-09'
    }
  ];

  useEffect(() => {
    gsap.from(pageRef.current, { duration: 1, y: 50, opacity: 0, ease: 'power3.out' });
    
    gsap.from(".material-card", {
      scrollTrigger: {
        trigger: ".materials-grid",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.1,
      ease: 'power3.out',
    });
  }, []);

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSemester = selectedSemester === 'all' || material.semester === selectedSemester;
    const matchesType = selectedType === 'all' || material.type === selectedType;
    
    return matchesSearch && matchesSemester && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'notes': return <FileText className="h-4 w-4" />;
      case 'paper': return <BookOpen className="h-4 w-4" />;
      case 'video': return <Video className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8" ref={pageRef}>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
          Study Materials
        </h1>
        <p className="text-xl text-muted-foreground">
          Access comprehensive study resources organized by subject and semester
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="bg-white/5 border-border/60 backdrop-blur-sm mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search materials by title or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
            >
              <option value="all">All Semesters</option>
              <option value="Semester 1">Semester 1</option>
              <option value="Semester 2">Semester 2</option>
              <option value="Semester 3">Semester 3</option>
              <option value="Semester 4">Semester 4</option>
              <option value="Semester 5">Semester 5</option>
              <option value="Semester 6">Semester 6</option>
              <option value="Semester 7">Semester 7</option>
              <option value="Semester 8">Semester 8</option>
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
            >
              <option value="all">All Types</option>
              <option value="notes">Notes</option>
              <option value="paper">Previous Papers</option>
              <option value="video">Video Lectures</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Materials Grid */}
      <div className="materials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((material) => (
          <Card key={material.id} className="material-card bg-white/5 border-border/60 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {getTypeIcon(material.type)}
                  <span className="text-sm text-muted-foreground capitalize">{material.type}</span>
                </div>
                <span className="text-xs text-muted-foreground">{material.semester}</span>
              </div>
              <CardTitle className="text-lg leading-tight">{material.title}</CardTitle>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Subject: {material.subject}</p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{material.downloads} downloads</span>
                  <span>Uploaded: {new Date(material.uploadDate).toLocaleDateString()}</span>
                </div>
                
                <Button className="w-full" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMaterials.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No materials found</h3>
          <p className="text-muted-foreground">Try adjusting your search criteria or filters.</p>
        </div>
      )}
    </div>
  );
};

export default StudyMaterials;

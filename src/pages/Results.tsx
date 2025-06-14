import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FileText, User, Lock, Eye, EyeOff, TrendingUp, Award } from 'lucide-react';
import { gsap } from 'gsap';

interface Subject {
  name: string;
  marks: number;
  maxMarks: number;
  grade: string;
}

interface SemesterResult {
  semester: string;
  subjects: Subject[];
  cgpa: number;
  sgpa: number;
}

const Results = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState('all');
  const pageRef = useRef(null);

  const mockResults: SemesterResult[] = [
    {
      semester: 'Semester 6',
      sgpa: 8.7,
      cgpa: 8.5,
      subjects: [
        { name: 'Software Engineering', marks: 87, maxMarks: 100, grade: 'A' },
        { name: 'Database Management Systems', marks: 92, maxMarks: 100, grade: 'A+' },
        { name: 'Computer Networks', marks: 78, maxMarks: 100, grade: 'B+' },
        { name: 'Operating Systems', marks: 85, maxMarks: 100, grade: 'A' },
        { name: 'Web Technologies', marks: 90, maxMarks: 100, grade: 'A+' }
      ]
    },
    {
      semester: 'Semester 5',
      sgpa: 8.2,
      cgpa: 8.3,
      subjects: [
        { name: 'Data Structures', marks: 88, maxMarks: 100, grade: 'A' },
        { name: 'Algorithms', marks: 82, maxMarks: 100, grade: 'B+' },
        { name: 'Computer Graphics', marks: 79, maxMarks: 100, grade: 'B+' },
        { name: 'Digital Signal Processing', marks: 85, maxMarks: 100, grade: 'A' },
        { name: 'Microprocessors', marks: 77, maxMarks: 100, grade: 'B+' }
      ]
    }
  ];

  useEffect(() => {
    gsap.from(pageRef.current, { duration: 1, y: 50, opacity: 0, ease: 'power3.out' });
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+': return 'text-green-400';
      case 'A': return 'text-green-300';
      case 'B+': return 'text-yellow-400';
      case 'B': return 'text-yellow-300';
      case 'C': return 'text-orange-400';
      default: return 'text-red-400';
    }
  };

  const LoginForm = () => (
    <div className="max-w-md mx-auto">
      {/* Academic Hero Image */}
      <div className="text-center mb-8">
        <img 
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=300&fit=crop&crop=center"
          alt="Academic success and results"
          className="w-full h-48 object-cover rounded-lg mb-6"
          loading="eager"
        />
      </div>

      <Card className="bg-white/5 border-border/60 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">Student Login</CardTitle>
          <p className="text-muted-foreground">Access your academic results securely</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Student ID</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="text" 
                  placeholder="Enter your student ID"
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            
            <Button type="submit" className="w-full">
              Login to View Results
            </Button>
            
            <div className="text-center">
              <a href="#" className="text-sm text-primary hover:underline">
                Forgot your password?
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );

  const ResultsDashboard = () => (
    <div className="space-y-6">
      {/* Success Banner */}
      <div className="relative mb-8">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=300&fit=crop&crop=center"
          alt="Academic achievement celebration"
          className="w-full h-48 object-cover rounded-lg"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40 rounded-lg flex items-center">
          <div className="px-8">
            <h2 className="text-3xl font-bold mb-2">Academic Dashboard</h2>
            <p className="text-lg text-muted-foreground">Track your academic progress and achievements</p>
          </div>
        </div>
      </div>

      {/* Header with Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/5 border-border/60 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="text-2xl font-bold">{mockResults[0].cgpa}</h3>
            <p className="text-muted-foreground">Current CGPA</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 border-border/60 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <Award className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <h3 className="text-2xl font-bold">{mockResults[0].sgpa}</h3>
            <p className="text-muted-foreground">Latest SGPA</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 border-border/60 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <FileText className="h-8 w-8 text-blue-400 mx-auto mb-2" />
            <h3 className="text-2xl font-bold">{mockResults.length}</h3>
            <p className="text-muted-foreground">Completed Semesters</p>
          </CardContent>
        </Card>
      </div>

      {/* Semester Filter */}
      <Card className="bg-white/5 border-border/60 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <label className="font-medium">View Results:</label>
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
            >
              <option value="all">All Semesters</option>
              {mockResults.map((result) => (
                <option key={result.semester} value={result.semester}>
                  {result.semester}
                </option>
              ))}
            </select>
            <Button variant="outline" className="ml-auto">
              Download Transcript
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {mockResults
        .filter(result => selectedSemester === 'all' || result.semester === selectedSemester)
        .map((result) => (
        <Card key={result.semester} className="bg-white/5 border-border/60 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">{result.semester}</CardTitle>
              <div className="flex gap-4 text-sm">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">
                  SGPA: {result.sgpa}
                </span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                  CGPA: {result.cgpa}
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/20">
                    <th className="text-left py-3 px-2">Subject</th>
                    <th className="text-center py-3 px-2">Marks Obtained</th>
                    <th className="text-center py-3 px-2">Total Marks</th>
                    <th className="text-center py-3 px-2">Percentage</th>
                    <th className="text-center py-3 px-2">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {result.subjects.map((subject, index) => (
                    <tr key={index} className="border-b border-border/10">
                      <td className="py-3 px-2 font-medium">{subject.name}</td>
                      <td className="text-center py-3 px-2">{subject.marks}</td>
                      <td className="text-center py-3 px-2">{subject.maxMarks}</td>
                      <td className="text-center py-3 px-2">
                        {((subject.marks / subject.maxMarks) * 100).toFixed(1)}%
                      </td>
                      <td className={`text-center py-3 px-2 font-bold ${getGradeColor(subject.grade)}`}>
                        {subject.grade}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8" ref={pageRef}>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
          Academic Results
        </h1>
        <p className="text-xl text-muted-foreground">
          {isLoggedIn ? 'Your academic performance dashboard' : 'Secure access to your academic performance'}
        </p>
      </div>

      {isLoggedIn ? <ResultsDashboard /> : <LoginForm />}
    </div>
  );
};

export default Results;

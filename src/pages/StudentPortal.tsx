
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { User, Lock, Eye, EyeOff, Mail, GraduationCap, UserPlus } from 'lucide-react';
import { gsap } from 'gsap';

const StudentPortal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.from(pageRef.current, { duration: 1, y: 50, opacity: 0, ease: 'power3.out' });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login/register logic here
    console.log(isLogin ? 'Login submitted' : 'Registration submitted');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden" ref={pageRef}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      
      <div className="w-full max-w-md relative z-10">
        {/* Hero Section with University Logo Area */}
        <div className="text-center mb-8">
          <div className="relative mb-6">
            {/* University Logo Placeholder - matches the Sri Sri University style */}
            <div className="w-32 h-32 mx-auto mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
              <div className="text-center">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-2" />
                <div className="text-xs font-semibold text-primary">SVIT</div>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
              Sri Venkateswara Institute of Technology
            </h1>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              Learn • Lead • Serve
            </p>
          </div>
        </div>

        <Card className="bg-white/5 border-border/60 backdrop-blur-sm shadow-2xl">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              {isLogin ? (
                <User className="h-8 w-8 text-primary" />
              ) : (
                <UserPlus className="h-8 w-8 text-primary" />
              )}
            </div>
            <CardTitle className="text-2xl">
              {isLogin ? 'Login to Student Portal' : 'Student Registration'}
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              {isLogin 
                ? 'Access your academic dashboard securely' 
                : 'Create your student account to get started'
              }
            </p>
          </CardHeader>
          
          <CardContent className="px-6 pb-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/90">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        type="text" 
                        placeholder="Enter your full name"
                        className="pl-10 bg-white/5 border-white/20 text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:bg-white/10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/90">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        type="email" 
                        placeholder="Enter your email address"
                        className="pl-10 bg-white/5 border-white/20 text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:bg-white/10"
                        required
                      />
                    </div>
                  </div>
                </>
              )}
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/90">
                  {isLogin ? 'Username' : 'Student ID'}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="text" 
                    placeholder={isLogin ? "Enter Username" : "Enter your student ID"}
                    className="pl-10 bg-white/5 border-white/20 text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:bg-white/10"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/90">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type={showPassword ? "text" : "password"}
                    placeholder={isLogin ? "Enter Password" : "Create a password"}
                    className="pl-10 pr-10 bg-white/5 border-white/20 text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:bg-white/10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/90">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="pl-10 pr-10 bg-white/5 border-white/20 text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:bg-white/10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-white/20 bg-white/5 text-primary focus:ring-primary/50" />
                    <span className="text-muted-foreground">Remember me</span>
                  </label>
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                    Forgot Password ?
                  </a>
                </div>
              )}
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5">
                {isLogin ? 'Login' : 'Create Account'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  {isLogin ? 'Register here' : 'Login here'}
                </button>
              </p>
            </div>

            {!isLogin && (
              <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-xs text-muted-foreground text-center">
                  By registering, you agree to SVIT's Terms of Service and Privacy Policy.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Need help? Contact{' '}
            <a href="mailto:support@svit.edu" className="text-primary hover:text-primary/80 transition-colors">
              support@svit.edu
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;

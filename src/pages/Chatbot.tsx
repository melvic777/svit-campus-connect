
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Bot, User, MessageSquare } from 'lucide-react';
import { gsap } from 'gsap';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm SVIT Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef(null);

  useEffect(() => {
    gsap.from(chatRef.current, { duration: 1, y: 50, opacity: 0, ease: 'power3.out' });
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('admission') || input.includes('apply')) {
      return "For admissions, please visit our admissions office or check the official SVIT website. The application process typically opens in May for the academic year.";
    } else if (input.includes('result') || input.includes('grade')) {
      return "You can check your results on our Results page. Please use your student ID and password to log in securely.";
    } else if (input.includes('library') || input.includes('book')) {
      return "The SVIT library is open from 8 AM to 8 PM on weekdays. You can access digital resources through our Study Materials section.";
    } else if (input.includes('hostel') || input.includes('accommodation')) {
      return "For hostel information, please contact the hostel warden at hostel@svit.ac.in or visit the administration office.";
    } else if (input.includes('fee') || input.includes('payment')) {
      return "Fee payment can be done online through our student portal. For fee structure details, please contact the accounts department.";
    } else if (input.includes('contact') || input.includes('phone')) {
      return "You can reach us at +91-XXX-XXXX-XXX or email admin@svit.ac.in. Our office hours are 9 AM to 5 PM, Monday to Friday.";
    } else {
      return "I'm here to help! You can ask me about admissions, results, library services, hostel information, fees, or general queries about SVIT.";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div ref={chatRef} className="space-y-6">
        {/* Hero Section with AI Avatar */}
        <div className="text-center mb-8 relative">
          <div className="relative mb-6">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop&crop=center"
              alt="AI Assistant Avatar"
              className="w-32 h-32 rounded-full mx-auto border-4 border-primary/30 shadow-2xl"
              loading="eager"
            />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
            AI Assistant
          </h1>
          <p className="text-xl text-muted-foreground">
            24/7 virtual support for all your SVIT queries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="bg-white/5 border-border/60 backdrop-blur-sm h-[600px] flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
                <CardTitle>Chat with SVIT Assistant</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`flex items-start gap-3 max-w-[80%] ${
                          message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.sender === 'user' ? 'bg-primary' : 'bg-secondary'
                        }`}>
                          {message.sender === 'user' ? 
                            <User className="w-4 h-4" /> : 
                            <Bot className="w-4 h-4" />
                          }
                        </div>
                        <div
                          className={`rounded-lg p-3 ${
                            message.sender === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-secondary text-secondary-foreground'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <span className="text-xs opacity-70">
                            {message.timestamp.toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div className="bg-secondary text-secondary-foreground rounded-lg p-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className="flex gap-2">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message here..."
                    className="flex-1 resize-none"
                    rows={2}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                  />
                  <Button onClick={handleSend} size="icon" className="h-auto">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Help Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white/5 border-border/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Quick Help</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop&crop=center"
                    alt="Students getting help"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Common Questions:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• How to check results?</li>
                    <li>• Library timings</li>
                    <li>• Admission process</li>
                    <li>• Fee payment</li>
                    <li>• Hostel information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

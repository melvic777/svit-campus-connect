
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Search, MapPin, Calendar, Phone, Mail } from 'lucide-react';
import { gsap } from 'gsap';

interface LostItem {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  category: string;
  contactEmail: string;
  contactPhone: string;
  status: 'lost' | 'found';
}

const LostFound = () => {
  const [activeTab, setActiveTab] = useState<'lost' | 'found' | 'report'>('lost');
  const [searchTerm, setSearchTerm] = useState('');
  const pageRef = useRef(null);

  const items: LostItem[] = [
    {
      id: '1',
      title: 'Blue Samsung Phone',
      description: 'Samsung Galaxy S21 with black case and screen protector',
      location: 'Library - 2nd Floor',
      date: '2025-06-12',
      category: 'Electronics',
      contactEmail: 'student1@svit.ac.in',
      contactPhone: '+91-9876543210',
      status: 'lost'
    },
    {
      id: '2',
      title: 'Red Backpack',
      description: 'Nike red backpack with CS textbooks inside',
      location: 'Cafeteria',
      date: '2025-06-11',
      category: 'Bags',
      contactEmail: 'student2@svit.ac.in',
      contactPhone: '+91-9876543211',
      status: 'found'
    },
    {
      id: '3',
      title: 'Silver Laptop',
      description: 'MacBook Pro 13-inch with several stickers',
      location: 'Computer Lab A',
      date: '2025-06-10',
      category: 'Electronics',
      contactEmail: 'student3@svit.ac.in',
      contactPhone: '+91-9876543212',
      status: 'lost'
    },
    {
      id: '4',
      title: 'Black Wallet',
      description: 'Leather wallet with student ID and some cash',
      location: 'Parking Area',
      date: '2025-06-13',
      category: 'Personal Items',
      contactEmail: 'student4@svit.ac.in',
      contactPhone: '+91-9876543213',
      status: 'found'
    }
  ];

  useEffect(() => {
    gsap.from(pageRef.current, { duration: 1, y: 50, opacity: 0, ease: 'power3.out' });
  }, []);

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = item.status === activeTab;
    
    return matchesSearch && (activeTab === 'report' || matchesTab);
  });

  const ReportForm = () => (
    <Card className="bg-white/5 border-border/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Report Lost/Found Item</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Item Type</label>
            <select className="w-full px-3 py-2 rounded-md border border-input bg-background">
              <option>Select type</option>
              <option>Lost Item</option>
              <option>Found Item</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select className="w-full px-3 py-2 rounded-md border border-input bg-background">
              <option>Select category</option>
              <option>Electronics</option>
              <option>Bags</option>
              <option>Personal Items</option>
              <option>Books</option>
              <option>Clothing</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Item Title</label>
          <Input placeholder="e.g., Blue Samsung Phone" />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <Textarea placeholder="Provide detailed description of the item..." rows={3} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <Input placeholder="Where was it lost/found?" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Date</label>
            <Input type="date" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Contact Email</label>
            <Input type="email" placeholder="your.email@svit.ac.in" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Contact Phone</label>
            <Input type="tel" placeholder="+91-XXXXXXXXXX" />
          </div>
        </div>
        
        <Button className="w-full">Submit Report</Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-8" ref={pageRef}>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
          Lost & Found
        </h1>
        <p className="text-xl text-muted-foreground">
          Help your fellow students find their lost items
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/5 border-border/60 backdrop-blur-sm rounded-lg p-1 flex">
          {(['lost', 'found', 'report'] as const).map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "ghost"}
              onClick={() => setActiveTab(tab)}
              className="capitalize"
            >
              {tab === 'report' ? 'Report Item' : `${tab} Items`}
            </Button>
          ))}
        </div>
      </div>

      {activeTab === 'report' ? (
        <ReportForm />
      ) : (
        <>
          {/* Search Bar */}
          <Card className="bg-white/5 border-border/60 backdrop-blur-sm mb-8">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by item name, description, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="bg-white/5 border-border/60 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.status === 'lost' ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                    }`}>
                      {item.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <p className="text-sm">{item.description}</p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-border/20">
                    <p className="text-xs text-muted-foreground mb-2">Contact Information:</p>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <Mail className="h-3 w-3" />
                        <span>{item.contactEmail}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-3 w-3" />
                        <span>{item.contactPhone}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full" size="sm">
                    Contact Owner
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No items found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms or check the other tab.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LostFound;

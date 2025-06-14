
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation, Building, Coffee, BookOpen, Car } from 'lucide-react';
import { gsap } from 'gsap';

interface Location {
  id: string;
  name: string;
  type: 'academic' | 'facility' | 'amenity' | 'transport';
  description: string;
  coordinates: { x: number; y: number };
  icon: React.ReactNode;
}

const CampusMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const mapRef = useRef(null);
  const pageRef = useRef(null);

  const locations: Location[] = [
    {
      id: '1',
      name: 'Main Academic Block',
      type: 'academic',
      description: 'Houses lecture halls, laboratories, and faculty offices',
      coordinates: { x: 40, y: 30 },
      icon: <Building className="h-4 w-4" />
    },
    {
      id: '2',
      name: 'Computer Science Department',
      type: 'academic',
      description: 'CS labs, project rooms, and faculty offices',
      coordinates: { x: 60, y: 25 },
      icon: <Building className="h-4 w-4" />
    },
    {
      id: '3',
      name: 'Central Library',
      type: 'facility',
      description: 'Main library with digital resources and study areas',
      coordinates: { x: 30, y: 50 },
      icon: <BookOpen className="h-4 w-4" />
    },
    {
      id: '4',
      name: 'Student Cafeteria',
      type: 'amenity',
      description: 'Food court and dining area for students',
      coordinates: { x: 70, y: 60 },
      icon: <Coffee className="h-4 w-4" />
    },
    {
      id: '5',
      name: 'Main Parking',
      type: 'transport',
      description: 'Primary parking area for students and faculty',
      coordinates: { x: 20, y: 80 },
      icon: <Car className="h-4 w-4" />
    },
    {
      id: '6',
      name: 'Electronics Department',
      type: 'academic',
      description: 'Electronics labs and research facilities',
      coordinates: { x: 80, y: 35 },
      icon: <Building className="h-4 w-4" />
    }
  ];

  useEffect(() => {
    gsap.from(pageRef.current, { duration: 1, y: 50, opacity: 0, ease: 'power3.out' });
    
    gsap.from(".location-pin", {
      delay: 0.5,
      duration: 0.8,
      scale: 0,
      stagger: 0.1,
      ease: 'back.out(1.7)',
    });
  }, []);

  const filteredLocations = filter === 'all' 
    ? locations 
    : locations.filter(location => location.type === filter);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'academic': return 'bg-blue-500';
      case 'facility': return 'bg-green-500';
      case 'amenity': return 'bg-orange-500';
      case 'transport': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8" ref={pageRef}>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
          Interactive Campus Map
        </h1>
        <p className="text-xl text-muted-foreground">
          Explore SVIT campus with our interactive 3D map
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Map Area */}
        <div className="lg:col-span-3">
          <Card className="bg-white/5 border-border/60 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="h-5 w-5" />
                  Campus Layout
                </CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant={filter === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter('all')}
                  >
                    All
                  </Button>
                  <Button
                    variant={filter === 'academic' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter('academic')}
                  >
                    Academic
                  </Button>
                  <Button
                    variant={filter === 'facility' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter('facility')}
                  >
                    Facilities
                  </Button>
                  <Button
                    variant={filter === 'amenity' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter('amenity')}
                  >
                    Amenities
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div 
                ref={mapRef}
                className="relative w-full h-96 bg-gradient-to-br from-green-900/20 to-green-700/20 rounded-lg border border-border/20 overflow-hidden"
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, rgba(34, 197, 94, 0.1) 25%, transparent 25%),
                    linear-gradient(-45deg, rgba(34, 197, 94, 0.1) 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, rgba(34, 197, 94, 0.1) 75%),
                    linear-gradient(-45deg, transparent 75%, rgba(34, 197, 94, 0.1) 75%)
                  `,
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                }}
              >
                {/* Campus Roads */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-600/30 transform -translate-y-1/2"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-gray-600/30 transform -translate-x-1/2"></div>
                </div>

                {/* Location Pins */}
                {filteredLocations.map((location) => (
                  <div
                    key={location.id}
                    className={`location-pin absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer`}
                    style={{
                      left: `${location.coordinates.x}%`,
                      top: `${location.coordinates.y}%`
                    }}
                    onClick={() => setSelectedLocation(location)}
                  >
                    <div className={`w-8 h-8 rounded-full ${getTypeColor(location.type)} flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200`}>
                      {location.icon}
                    </div>
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                      {location.name}
                    </div>
                  </div>
                ))}

                {/* Compass */}
                <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2">
                  <Navigation className="h-6 w-6 text-white" style={{ transform: 'rotate(45deg)' }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location Details */}
        <div className="lg:col-span-1">
          <Card className="bg-white/5 border-border/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Location Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedLocation ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">{selectedLocation.name}</h3>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs text-white mt-2 ${getTypeColor(selectedLocation.type)}`}>
                      {selectedLocation.type.charAt(0).toUpperCase() + selectedLocation.type.slice(1)}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {selectedLocation.description}
                  </p>
                  
                  <Button className="w-full" size="sm">
                    Get Directions
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm">
                    Click on any pin on the map to view location details
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Legend */}
          <Card className="bg-white/5 border-border/60 backdrop-blur-sm mt-6">
            <CardHeader>
              <CardTitle className="text-sm">Legend</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                { type: 'academic', label: 'Academic Buildings' },
                { type: 'facility', label: 'Facilities' },
                { type: 'amenity', label: 'Amenities' },
                { type: 'transport', label: 'Transport' }
              ].map(({ type, label }) => (
                <div key={type} className="flex items-center gap-2 text-sm">
                  <div className={`w-3 h-3 rounded-full ${getTypeColor(type)}`}></div>
                  <span>{label}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CampusMap;


import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="flex-grow flex items-center justify-center text-center">
      <div>
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <p className="text-2xl md:text-3xl font-light text-foreground/80 mt-4 mb-6">
          Oops! Page not found.
        </p>
        <p className="text-lg text-foreground/60 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

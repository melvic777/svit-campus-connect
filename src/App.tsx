
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Results from "./pages/Results";
import StudyMaterials from "./pages/StudyMaterials";
import LostFound from "./pages/LostFound";
import CampusMap from "./pages/CampusMap";
import Chatbot from "./pages/Chatbot";
import StudentPortal from "./pages/StudentPortal";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/student-portal" element={<StudentPortal />} />
          <Route path="*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/results" element={<Results />} />
                <Route path="/study-materials" element={<StudyMaterials />} />
                <Route path="/lost-found" element={<LostFound />} />
                <Route path="/campus-map" element={<CampusMap />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

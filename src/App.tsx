import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StudyGuidePage from "./pages/StudyGuide";
import Privacy from "./pages/Privacy";
import DeeperKnowledge from "./pages/DeeperKnowledge";
import NotFound from "./pages/NotFound";

// RE1 Pages
import RE1LandingPage from "./pages/re1/RE1LandingPage";
import RE1PracticePage from "./pages/re1/RE1PracticePage";
import RE1MockExamPage from "./pages/re1/RE1MockExamPage";
import RE1ResultsPage from "./pages/re1/RE1ResultsPage";
import RE1StudyGuidePage from "./pages/re1/RE1StudyGuidePage";
import { RE1Guard } from "./components/re1/RE1Guard";
import { ClaudeAuthProvider, ClaudeAuthGate } from "./ClaudeAuth";
import CoursePage from "./pages/CoursePage";

const queryClient = new QueryClient();

const App = () => (
  <ClaudeAuthProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ClaudeAuthGate>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/course" element={<CoursePage />} />
              <Route path="/study-guide" element={<StudyGuidePage />} />
              <Route path="/deeper-knowledge" element={<DeeperKnowledge />} />
              <Route path="/deeper-knowledge/:slug" element={<DeeperKnowledge />} />
              <Route path="/privacy" element={<Privacy />} />

              {/* RE1 Routes */}
              <Route path="/re1" element={<RE1Guard><RE1LandingPage /></RE1Guard>} />
              <Route path="/re1/practice" element={<RE1Guard><RE1PracticePage /></RE1Guard>} />
              <Route path="/re1/mock-exam" element={<RE1Guard><RE1MockExamPage /></RE1Guard>} />
              <Route path="/re1/mock-exam/results" element={<RE1Guard><RE1ResultsPage /></RE1Guard>} />
              <Route path="/re1/study-guide" element={<RE1Guard><RE1StudyGuidePage /></RE1Guard>} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ClaudeAuthGate>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ClaudeAuthProvider>
);

export default App;

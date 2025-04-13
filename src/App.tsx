import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MarketResearch from "./pages/MarketResearch";
import MarketingStrategies from "./pages/MarketingStrategies";
import ContentStrategy from "./pages/ContentStrategy";
import PitchDecks from "./pages/PitchDecks";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/sakthi-strategic-growth-hub">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/market-research" element={<MarketResearch />} />
          <Route
            path="/marketing-strategies"
            element={<MarketingStrategies />}
          />
          <Route path="/content-strategy" element={<ContentStrategy />} />
          <Route path="/pitch-decks" element={<PitchDecks />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

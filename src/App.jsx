import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import TestSeries from "./pages/TestSeries";
import BuyPackages from "./pages/BuyPackages";
import Results from "./pages/Results";
import Suggestions from "./pages/Suggestions";
import Documents from "./pages/Documents";
import Announcements from "./pages/Announcements";
import Bookmarks from "./pages/Bookmarks";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/test-series" element={<TestSeries />} />
          <Route path="/buy-packages" element={<BuyPackages />} />
          <Route path="/results" element={<Results />} />
          <Route path="/suggestions" element={<Suggestions />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Settings />} />
          {/* Add other routes here as we build them */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

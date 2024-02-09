import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import UploadPage from "./Pages/UploadPage";
import ProfilePage from "./Pages/ProfilePage";
import RanksPage from "./Pages/RanksPage";
import BadgesPage from "./Pages/BadgesPage";

function App() {
  // const location = useLocation();
  // const showBottomNav = ["/dashboard"].includes(location.pathname);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/ranks" element={<RanksPage />} />
          <Route path="/badges" element={<BadgesPage />} />

          <Route path="*" element={<p>Error 404! Page Not Found</p>} />
        </Routes>
      </BrowserRouter>
      {/* {showBottomNav && <BottomTabBar />} */}
    </div>
  );
}

export default App;

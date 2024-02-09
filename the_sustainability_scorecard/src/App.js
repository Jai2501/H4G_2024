import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import UploadPage from "./Pages/UploadPage";

function App() {
  // const location = useLocation();
  // const showBottomNav = ["/dashboard"].includes(location.pathname);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header>
              </div>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<UploadPage />} />

          <Route path="*" element={<p>Error 404! Page Not Found</p>} />
        </Routes>
      </BrowserRouter>
      {/* {showBottomNav && <BottomTabBar />} */}
    </div>
  );
}

export default App;

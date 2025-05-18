import React from "react";
import { Boxes } from "./components/ui/background-boxes";
import Navbar from "./components/navbar/navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";

import { Routes, Route } from 'react-router-dom';
import { MoviesProvider } from './context/MoviesContext';
import Home from './pages/home/home';
import Movies from './pages/all movie/movies';
import Movie from './pages/movie/movie';
import Add from './pages/add/add';
import Aboutus from './pages/about us/aboutus';
import PrivacyPolicy from "./pages/PrivacyPolicy.js/PrivacyPolicy";
import Logout from "./components/logout/logout";


import Wrapper from "./components/container/container";
import CookieConsent from "react-cookie-consent"; // ✅ CookieConsent import


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative w-full overflow-x-hidden bg-slate-900 flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full bg-slate-900 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Navbar className="top-2" />
        <Boxes className="fixed top-0 left-0 w-full h-full opacity-60" />
        <Wrapper>
          <MoviesProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/add" element={<Add />} />
              <Route path="/movie/:id" element={<Movie />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </MoviesProvider>
        </Wrapper>

        {/* ✅ Cookie Consent Banner */}
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="mySiteCookieConsent"
          style={{
            background: "#1e293b",
            color: "#fff",
            textAlign: "center",
            padding: "10px",
            fontSize: "14px",
          }}
          buttonStyle={{
            color: "#000",
            backgroundColor: "#facc15",
            fontSize: "13px",
            borderRadius: "6px",
            padding: "6px 12px",
          }}
          expires={150}
        >
          We use cookies to improve your experience.{" "}
          <a href="/privacy-policy" className="text-yellow-400 underline">
            Learn more
          </a>
        </CookieConsent>
      </div>
    </ThemeProvider>
  );
}

export default App;

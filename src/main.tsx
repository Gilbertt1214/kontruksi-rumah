import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import VisualizationHouse from "./components/pages/VisualizationHouse.tsx";
import Footer from "./components/Footer.tsx";
import AboutPage from "./components/pages/About.tsx";
import OrderForm from "./components/Buttonpesan.tsx";




createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <StrictMode>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/house" element={<VisualizationHouse />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/orderform" element={<OrderForm />} />
            </Routes>
            <Footer />
        </StrictMode>
    </BrowserRouter>
);

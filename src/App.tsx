// Module Imports
import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Component Imports
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import {about} from "./assets/portfolio"
import useTitle from "./hooks/useTitle";

// Lazy Imports
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
    const location = useLocation();
    useTitle(about.fullName)
    return (
        <AnimatePresence mode="wait">
            <Suspense fallback={<Loader />}>
                <Layout>
                    <Navbar />
                    <Routes location={location} key={location.pathname}>
                        <Route index element={<Home />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </Suspense>
        </AnimatePresence>
    );
}

export default App;

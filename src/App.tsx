// Module Imports
import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Component Imports
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import { about } from "./assets/portfolio";
import useTitle from "./hooks/useTitle";

// Lazy Imports
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
    const location = useLocation();
    useTitle(about.fullName);
    return (
        <AnimatePresence mode="wait">
            <Layout>
                <Navbar />
                <Suspense fallback={<Loader />}>
                    <Routes location={location} key={location.pathname}>
                        <Route index element={<Home />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </Layout>
        </AnimatePresence>
    );
}

export default App;

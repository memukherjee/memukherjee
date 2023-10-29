import { motion } from "framer-motion";
import HeroSection from "../../components/HeroSection";
import ProjectsSection from "../../components/ProjectsSection";
import SkillSection from "../../components/SkillSection";
import ContactSection from "../../components/ContactSection";

function Home() {
    return (
        <motion.div
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
        >
            <HeroSection />
            <ProjectsSection />
            <SkillSection />
            <ContactSection />
        </motion.div>
    );
}

export default Home;

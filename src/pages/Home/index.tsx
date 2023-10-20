import { motion } from "framer-motion";
import HeroSection from "../../components/HeroSection";
import ProjectsSection from "../../components/ProjectsSection";
import SkillSection from "../../components/SkillSection";

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
        </motion.div>
    );
}

export default Home;

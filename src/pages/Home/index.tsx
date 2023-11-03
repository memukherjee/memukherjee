import HeroSection from "../../components/HeroSection";
import ProjectsSection from "../../components/ProjectsSection";
import SkillSection from "../../components/SkillSection";
import ContactSection from "../../components/ContactSection";
import PageTransitionContainer from "../../components/PageTransitionContainer";

function Home() {
    return (
        <PageTransitionContainer>
            <HeroSection />
            <ProjectsSection />
            <SkillSection />
            <ContactSection />
        </PageTransitionContainer>
    );
}

export default Home;

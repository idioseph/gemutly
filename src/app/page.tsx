import Navigation from "@/components/Navigation";
import HeroSection from "@/containers/home-page/hero-section";
import HowItWorks from "@/containers/home-page/how-it-works";
import ForChefs from "@/containers/home-page/for-chefs";
import ForDiners from "@/containers/home-page/for-diners";
import CommunitySection from "@/containers/home-page/community";
import CTASection from "@/containers/home-page/cta";
import Footer from "@/containers/home-page/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <ForChefs />
      <ForDiners />
      <CommunitySection />
      <CTASection />
      <Footer />
    </div>
  );
}

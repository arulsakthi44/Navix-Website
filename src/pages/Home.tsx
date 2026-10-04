import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Masterpieces } from '../components/Masterpieces';
import { ContentCreations } from '../components/ContentCreations';
import { Results } from '../components/Results';
import { Services } from '../components/Services';
import { GrowthProcess } from '../components/GrowthProcess';
import { Testimonials } from '../components/Testimonials';
import { ClientLogos } from '../components/ClientLogos';
import { BottomCTA } from '../components/BottomCTA';
import { Footer } from '../components/Footer';
import { AntiGravityCanvas } from '../components/ui/particle-effect-for-hero';
import { SEO } from '../components/SEO';

export function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <SEO
        title="NaviX Media | Creative Growth, Performance Marketing & Web Experiences"
        description="NaviX Media is a creative growth agency delivering scroll-stopping video content, performance marketing campaigns, and web experiences that drive measurable ROI."
        canonical="https://www.navixmedia.in/"
      />
      {/* Particle Animation - Full Page Viewport */}

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden max-h-screen">
        <AntiGravityCanvas />
      </div>

      {/* Ambient background gradients */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden max-h-screen">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 pointer-events-auto">
        <Navbar />
        <Hero />
        <Masterpieces />
        <ContentCreations />
        <Results />
        <Services />
        <GrowthProcess />
        <Testimonials />
        <ClientLogos />
        <BottomCTA />
        <Footer />
      </div>
    </div>
  );
}

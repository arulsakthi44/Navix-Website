import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Masterpieces } from '../components/Masterpieces';
import { Services } from '../components/Services';
import { ClientLogos } from '../components/ClientLogos';
import { BottomCTA } from '../components/BottomCTA';
import { Footer } from '../components/Footer';
import { AntiGravityCanvas } from '../components/ui/particle-effect-for-hero';

export function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Particle Animation - Full Page */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AntiGravityCanvas />
      </div>

      {/* Ambient background gradients */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
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
        <Services />
        <ClientLogos />
        <BottomCTA />
        <Footer />
      </div>
    </div>
  );
}

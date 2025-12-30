import { motion } from 'motion/react';
import Dravidam from "../assets/Dravidam logo4.png"
import Bolster from "../assets/bolster logo 13.png"
import CS360 from "../assets/CS360 logo 03.png"
import ASK from "../assets/Ask logo 10.png"
import CSK from "../assets/csk logo 01.png"
import HHS from "../assets/HHS logo 5.png"
import i2G from "../assets/I2g logo 06.png"
import masalaMandi from "../assets/masala mandi 07.png"
import mayilBhavan from "../assets/mayil bhavan logo 12.png"
import Nakear from "../assets/nakear logo 02.png"
import PBP from "../assets/pbp.png"
import Selectric from "../assets/Selectric.png"
import vgLife from "../assets/vg-life.png"
import Wimchem from "../assets/wimchem.png"
import Kutir from "../assets/kutir.png"


// Client logos with real brand images
const CLIENTS = [
  { name: 'Dravidam', imageUrl: Dravidam },
  { name: 'Bolster', imageUrl: Bolster },
  { name: 'CS360', imageUrl: CS360 },
  { name: 'ASK', imageUrl: ASK },
  { name: 'CSK', imageUrl: CSK },
  { name: 'HHS', imageUrl: HHS },
  { name: 'i2G', imageUrl: i2G },
  { name: 'Masala Mandi', imageUrl: masalaMandi },
  { name: 'Mayil Bhavan', imageUrl: mayilBhavan },
  { name: 'Nakear', imageUrl: Nakear },
  { name: 'PBP', imageUrl: PBP },
  { name: 'Selectric', imageUrl: Selectric },
  { name: 'VG Life', imageUrl: vgLife },
  { name: 'Wimchem', imageUrl: Wimchem },
  { name: 'Wimchem', imageUrl: Kutir },
];

export function ClientLogos() {
  return (
    <section className="relative py-16 overflow-hidden border-b border-white/5">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-gray-400 tracking-widest text-sm uppercase">
            Trusted by Industry Leaders
          </h3>
        </motion.div>

        {/* Infinite scroll container */}
        <div className="relative">
          {/* Scrolling logos with mask fade effect */}
          <div 
            className="flex overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            }}
          >
            <motion.div
              className="flex gap-16 items-center"
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                x: {
                  duration: 35,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'linear',
                },
              }}
              style={{ display: 'flex', width: 'max-content' }}
            >
              {/* First set */}
              {CLIENTS.map((client, index) => (
                <div
                  key={`client-1-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <img
                    src={client.imageUrl}
                    alt={client.name}
                    className="h-20 w-auto object-contain transition-all duration-300 opacity-100 group-hover:opacity-100 group-hover:scale-110"
                  />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {CLIENTS.map((client, index) => (
                <div
                  key={`client-2-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <img
                    src={client.imageUrl}
                    alt={client.name}
                    className="h-20 w-auto object-contain transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:scale-110"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
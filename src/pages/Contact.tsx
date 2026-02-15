import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Phone, Mail } from 'lucide-react';

export function Contact() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Ambient background gradients */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <main className="min-h-screen flex items-center justify-center px-6 py-16">
          <div className="max-w-3xl w-full">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl md:text-5xl text-white mb-4">
                Let's Connect
              </h1>
              <p className="text-gray-400 text-base max-w-2xl mx-auto">
                Ready to bring your vision to life? Get in touch with us today
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-10">
              {/* Phone Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 flex items-center justify-center group hover:scale-110 transition-transform duration-500">
                    <Phone className="w-9 h-9 text-yellow-500 group-hover:rotate-12 transition-transform duration-300" strokeWidth={2} />
                  </div>
                </div>

                {/* Label */}
                <p className="bg-gradient-to-r from-[#EE6A1F] to-[#1A70FF] bg-clip-text text-transparent text-xs tracking-[0.3em] uppercase mb-4">
                  Call Us Now
                </p>

                {/* Phone Number */}
                <a
                  href="tel:+916369870655"
                  className="text-white text-2xl md:text-3xl inline-block transition-all duration-300 bg-gradient-to-r from-[#EE6A1F] to-[#1A70FF] bg-clip-text hover:text-transparent"
                  style={{
                    WebkitBackgroundClip: 'text',
                  }}
                >
                  +91 63698 70655
                </a>

                {/* Divider */}
                <div className="mt-8 w-24 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
              </motion.div>

              {/* Email Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center group hover:scale-110 transition-transform duration-500">
                    <Mail className="w-9 h-9 text-[#4A8CFF] group-hover:rotate-12 transition-transform duration-300" strokeWidth={2} />
                  </div>
                </div>

                {/* Label */}
                <p className="bg-gradient-to-r from-[#EE6A1F] to-[#1A70FF] bg-clip-text text-transparent text-xs tracking-[0.3em] uppercase mb-4">
                  Drop An Email
                </p>

                {/* Email Address */}
                <a
                  href="mailto:navixstudios@gmail.com"
                  className="text-white text-2xl md:text-3xl inline-block transition-all duration-300 break-all bg-gradient-to-r from-[#EE6A1F] to-[#1A70FF] bg-clip-text hover:text-transparent"
                  style={{
                    WebkitBackgroundClip: 'text',
                  }}
                >
                  navixstudios@gmail.com
                </a>
              </motion.div>
            </div>

            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-12"
            >
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase"
              >
                ← Back to Home
              </Link>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
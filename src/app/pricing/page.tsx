'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  CheckIcon, 
  ArrowTrendingUpIcon, 
  ChartBarIcon, 
  UserGroupIcon,
  GiftIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function PricingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img src="/logo.png" alt="Logo" className="h-8" />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="/partners" className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-[-0.03em]">
                Partners
              </a>
              <a href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-[-0.03em]">
                Pricing
              </a>
              <Button 
                onClick={() => window.location.href = 'https://www.cxlus.com/auth/signin'}
                className="bg-[#eaf212] text-black hover:bg-[#eaf212]/90 transition-colors px-6 py-2 text-sm font-medium tracking-[-0.03em] rounded-full"
              >
                Sign In
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2.5 text-gray-900 hover:text-gray-600 transition-colors bg-white rounded-full shadow-sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-xl overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <img src="/logo.png" alt="Logo" className="h-8" />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="flex flex-col space-y-4">
                  <a
                    href="/partners"
                    className="text-base text-gray-900 hover:text-gray-600 transition-colors tracking-[-0.03em] py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Partners
                  </a>
                  <a
                    href="/pricing"
                    className="text-base text-gray-900 hover:text-gray-600 transition-colors tracking-[-0.03em] py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </a>
                  <Button
                    onClick={() => {
                      window.location.href = 'https://www.cxlus.com/auth/signin';
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-[#eaf212] text-gray-800 hover:bg-[#eaf212]/90 transition-colors py-3 text-base font-medium tracking-[-0.03em] rounded-full mt-4"
                  >
                    Sign In
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-[-0.03em]">
              CXLUS Plans
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto tracking-[-0.03em]">
              Choose the right experience for your clinic — and your clients.
            </p>
          </motion.div>

          {/* MED1 Plans Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <ArrowTrendingUpIcon className="w-5 h-5 text-gray-900" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-[-0.03em]">Starter</h3>
                </div>
                <p className="text-gray-600 text-sm tracking-[-0.03em]">
                  Perfect for getting started with smart client engagement.
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Premium Client Area with a High-End Experience',
                  'Personalized Protocols & Patient Journeys',
                  'Course Library to Share Educational Content',
                  'AI-Powered Customer Success (Auto-responds using your FAQ — and gets smarter over time)',
                  'Up to 100 clients'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-4 h-4 text-gray-900 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm tracking-[-0.03em] leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 px-6 py-3 text-sm font-medium tracking-[-0.03em] rounded-full"
              >
                Contact Sales
              </Button>
            </motion.div>

            {/* Growth Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#eaf212] shadow-lg relative transform scale-105"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#eaf212] text-gray-900 px-4 py-1 rounded-full text-xs font-semibold tracking-[-0.03em]">
                  MOST POPULAR
                </span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#eaf212] flex items-center justify-center mr-3">
                    <ChartBarIcon className="w-5 h-5 text-gray-900" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-[-0.03em]">Growth</h3>
                </div>
                <p className="text-gray-600 text-sm tracking-[-0.03em]">
                  Ideal for growing clinics with more patients and integrations.
                </p>
              </div>

              <div className="mb-4">
                <p className="text-gray-900 font-semibold text-sm tracking-[-0.03em] mb-3">
                  Everything in Starter, plus:
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Up to 1,000 clients',
                  'WhatsApp Integration + 500+ platforms',
                  'Unlimited Procedures',
                  'Unlimited Courses',
                  'AI that not only answers — it guides members through their entire journey',
                  'Referral System (Every client receives a personal referral link. Create rules to reward and recognize top referrers.)',
                  'Smart Review Booster (AI detects positive sentiment and asks for reviews at the perfect moment — boosting review rates by 3x)'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-4 h-4 text-gray-900 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm tracking-[-0.03em] leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full bg-[#eaf212] text-gray-800 hover:bg-[#eaf212]/90 transition-all duration-300 px-6 py-3 text-sm font-medium tracking-[-0.03em] rounded-full"
              >
                Contact Sales
              </Button>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <UserGroupIcon className="w-5 h-5 text-gray-900" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-[-0.03em]">Enterprise</h3>
                </div>
                <p className="text-gray-600 text-sm tracking-[-0.03em]">
                  Built for large-scale operations, franchises, and enterprise-level clinics.
                </p>
              </div>

              <div className="mb-4">
                <p className="text-gray-900 font-semibold text-sm tracking-[-0.03em] mb-3">
                  Everything in Growth, plus:
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Unlimited client base (Supports 1,000+ physicians)',
                  'White Label Solution — Your brand, your platform',
                  'Dedicated Support & Custom Solutions'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-4 h-4 text-gray-900 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm tracking-[-0.03em] leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 px-6 py-3 text-sm font-medium tracking-[-0.03em] rounded-full"
              >
                Contact Sales
              </Button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button 
              onClick={() => window.location.href = '/demo'}
              className="bg-[#eaf212] text-gray-800 hover:bg-[#eaf212]/90 transition-colors px-8 py-4 text-base font-medium tracking-[-0.03em] rounded-full"
            >
              See demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Included in All Plans Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 tracking-[-0.03em]">
              Included in all plans
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <ArrowTrendingUpIcon className="w-8 h-8 text-gray-900" />,
                title: 'Data Conversion',
                description: 'No loss of data when you switch over'
              },
              {
                icon: <UserGroupIcon className="w-8 h-8 text-gray-900" />,
                title: 'Training',
                description: 'Dedicated training time as per your convenience'
              },
              {
                icon: <CheckIcon className="w-8 h-8 text-gray-900" />,
                title: 'Implementation Support',
                description: '60-days of hand-holding for your success'
              },
              {
                icon: <GiftIcon className="w-8 h-8 text-gray-900" />,
                title: 'Post Go Live Support',
                description: 'A Life-time of Free Support'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-[-0.03em]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base tracking-[-0.03em] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 tracking-[-0.03em]">
              Have Questions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto tracking-[-0.03em]">
              Our team is here to help you choose the right plan for your practice
            </p>
            <Button 
              onClick={() => window.location.href = '/demo'}
              className="bg-[#eaf212] text-gray-800 hover:bg-[#eaf212]/90 transition-all duration-300 px-8 py-4 text-lg font-medium tracking-[-0.03em] rounded-full"
            >
              Schedule Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-100 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <img src="/logo.png" alt="Logo" className="h-6 mb-4 sm:mb-0" />
            <p className="text-gray-600 text-xs sm:text-sm tracking-[-0.03em]">
              © 2024 CXLUS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
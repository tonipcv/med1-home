'use client';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRightIcon, 
  Bars3Icon, 
  XMarkIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  LinkIcon,
  ChartPieIcon,
  ShareIcon,
  QrCodeIcon,
  PresentationChartLineIcon,
  FunnelIcon,
  ChevronDownIcon,
  GiftIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDemoClick = () => {
    router.push('/demo');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-satoshi tracking-[-0.03em]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
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
      </nav>

      {/* Mobile Menu Overlay */}
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
                      handleDemoClick();
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
      <section id="hero" className="min-h-screen flex items-center pt-20 pb-32 px-4 sm:px-6 bg-[#f8f9fa] relative overflow-hidden">
        {/* Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Main background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa] via-[#ffffff] to-[#f8f9fa]" />
          
          {/* Large circles */}
          <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] border border-gray-200 rounded-full blur-2xl" />
          <div className="absolute -bottom-48 -right-32 w-[800px] h-[800px] border border-gray-200 rounded-full blur-2xl" />
          
          {/* Accent circles */}
          <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-gray-200 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 border border-gray-200 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Decorative lines */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <div className="absolute inset-0 border border-gray-200 rounded-full" />
            <div className="absolute inset-8 border border-gray-200 rounded-full" />
            <div className="absolute inset-16 border border-gray-200 rounded-full" />
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-gray-200 rotate-45 blur-lg" />
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-gray-200 rotate-12 blur-lg" />

          {/* Additional light elements */}
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gray-100 rounded-full blur-2xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gray-100 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto px-4 sm:px-6"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-8"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-[-0.04em] leading-[1.1]">
                <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">Supercharge Growth by</span>
                <br />
                <span className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent">Elevating Every Experience</span>
              </h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-base sm:text-lg md:text-xl text-gray-600 mt-4 sm:mt-8 mb-6 sm:mb-10 max-w-2xl leading-relaxed tracking-[-0.03em] font-medium"
              >
                A complete tech solution to support your patients, personalise care, and turn clients into advocates.
              </motion.p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-start mt-8 sm:mt-12"
            >
              <Button 
                onClick={handleDemoClick}
                className="bg-[#eaf212] text-gray-800 hover:bg-[#eaf212]/90 transition-all duration-300 px-4 sm:px-8 py-2.5 sm:py-3 text-sm font-medium tracking-[-0.03em] rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                See demo
              </Button>
              <Button 
                variant="outline"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 px-4 sm:px-8 py-2.5 sm:py-3 text-sm font-medium tracking-[-0.03em] rounded-full hover:scale-105 active:scale-95"
              >
                Get started
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Integrations Carousel Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-white border-b border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-center mb-6 sm:mb-8"
          >
            <p className="text-gray-500 text-xs sm:text-sm tracking-[-0.03em] uppercase font-medium">
              We integrate with the most trusted tools:
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex space-x-6 sm:space-x-8"
              animate={{ x: [0, -1000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {[
                { src: "/su1.webp", alt: "Integration 1" },
                { src: "/su2.webp", alt: "Integration 2" },
                { src: "/su3.png", alt: "Integration 3" },
                { src: "/su4.png", alt: "Integration 4" },
                { src: "/su5.png", alt: "Integration 5" },
                { src: "/su6.svg.png", alt: "Integration 6" },
              ].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-24 sm:w-32 h-12 sm:h-16 flex items-center justify-center bg-white rounded-lg p-3 sm:p-4"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {[
                { src: "/su1.webp", alt: "Integration 1" },
                { src: "/su2.webp", alt: "Integration 2" },
                { src: "/su3.png", alt: "Integration 3" },
                { src: "/su4.png", alt: "Integration 4" },
                { src: "/su5.png", alt: "Integration 5" },
                { src: "/su6.svg.png", alt: "Integration 6" },
              ].map((logo, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 w-24 sm:w-32 h-12 sm:h-16 flex items-center justify-center bg-white rounded-lg p-3 sm:p-4"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 sm:mb-3 text-gray-900 tracking-[-0.03em]">
              All the tools to grow a loyal customer base
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base font-medium tracking-[-0.03em]">
              Everything you need to transform your practice into an appointment machine
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: <UserGroupIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
                title: 'Smart Client Communication',
                description: 'Unify conversations across WhatsApp, email, and SMS with AI that automatically answers common questions from your FAQ, prepares clients for their next steps, and prompts satisfied clients for reviews and referrals—enhancing experience and driving growth.'
              },
              {
                icon: <ArrowTrendingUpIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
                title: 'Lead Growth & Nurturing',
                description: 'Automatically capture and manage new leads while tracking every interaction—turning interest into loyal, long-term clients with intelligent follow-ups and conversion tools.'
              },
              {
                icon: <PresentationChartLineIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
                title: 'Personalized Membership Area',
                description: 'Deliver an on-demand, branded experience with customized videos, recipes, schedules, and daily checklists—all in one private membership space tailored to each client\'s protocol.'
              },
              {
                icon: <CheckIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
                title: 'Automated Client Support',
                description: 'AI-powered automation handles follow-ups, reminders, and support with a personal touch that delights clients'
              },
              {
                icon: <GiftIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
                title: 'Loyalty & Referral System',
                description: 'Reward your community with personalized referral links, built-in loyalty perks, and smart tracking that helps you grow your client base while deepening retention.'
              },
              {
                icon: <ChartBarIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
                title: 'Insights & Optimization Dashboard',
                description: 'Track real-time engagement, client progress, and platform usage in one powerful dashboard—so you can continuously improve care and client experience.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group border border-gray-100"
              >
                <div className="mb-3 sm:mb-4 transition-transform group-hover:scale-110 duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-gray-900 tracking-[-0.03em]">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base tracking-[-0.03em]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Client Journey Timeline */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-[-0.03em] leading-tight mb-6">
              Create an exclusive experience
            </h2>
            <p className="text-xl font-medium text-gray-600 tracking-[-0.03em] leading-relaxed mb-8 max-w-3xl mx-auto">
              A complete tech solution to support your patients, personalise care, and turn clients into advocates.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 max-w-4xl mx-auto"
            >
              <p className="text-lg text-gray-600 leading-relaxed tracking-[-0.03em]">
                Built to elevate every client experience through intelligent automation, personalized care journeys, and meaningful connections that transform satisfied clients into your most powerful advocates.
              </p>
            </motion.div>
          </motion.div>

          {/* Timeline - Mobile First Design */}
          <div className="relative">
            {/* Mobile Timeline (Vertical Stack) */}
            <div className="block lg:hidden space-y-8">
              {[
                {
                  step: "01",
                  icon: <UserGroupIcon className="w-6 h-6 text-white" />,
                  title: 'Create a truly personal Client Area',
                  description: 'Give each client a smart, branded space that remembers their journey, preferences, and needs — from the first contact to loyal fan.',
                  color: 'bg-blue-500'
                },
                {
                  step: "02", 
                  icon: <ArrowTrendingUpIcon className="w-6 h-6 text-white" />,
                  title: 'Deliver tailored follow-ups that feel one-on-one',
                  description: 'CXLUS tracks every interaction and stage, sending reminders, content, and offers that match exactly where the client is in their journey.',
                  color: 'bg-green-500'
                },
                {
                  step: "03",
                  icon: <ChartBarIcon className="w-6 h-6 text-white" />,
                  title: 'Turn each journey into a source of insight',
                  description: 'Understand what each client has seen, clicked, and felt — and use that to improve every next interaction.',
                  color: 'bg-purple-500'
                },
                {
                  step: "04",
                  icon: <CheckIcon className="w-6 h-6 text-white" />,
                  title: 'Automated Client Support',
                  description: 'AI-powered automation handles follow-ups, reminders, and support with a personal touch that delights clients',
                  color: 'bg-orange-500'
                },
                {
                  step: "05",
                  icon: <GiftIcon className="w-6 h-6 text-white" />,
                  title: 'Grow through love — and track every referral',
                  description: 'CXLUS invites satisfied clients to share their experience, refer friends, and leave glowing reviews — all tracked and rewarded.',
                  color: 'bg-pink-500'
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  {/* Mobile Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Mobile Content */}
                  <div className="flex-1">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <div className="mb-2">
                        <span className="text-xs font-bold text-gray-400 tracking-wider">
                          STEP {item.step}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-[-0.03em]">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed tracking-[-0.03em]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop Timeline (Original Design) */}
            <div className="hidden lg:block">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 h-full"></div>
              
              {/* Timeline Steps */}
              <div className="space-y-16">
                {[
                  {
                    step: "01",
                    icon: <UserGroupIcon className="w-8 h-8 text-white" />,
                    title: 'Create a truly personal Client Area',
                    description: 'Give each client a smart, branded space that remembers their journey, preferences, and needs — from the first contact to loyal fan.',
                    side: 'left',
                    color: 'bg-blue-500'
                  },
                  {
                    step: "02", 
                    icon: <ArrowTrendingUpIcon className="w-8 h-8 text-white" />,
                    title: 'Deliver tailored follow-ups that feel one-on-one',
                    description: 'CXLUS tracks every interaction and stage, sending reminders, content, and offers that match exactly where the client is in their journey.',
                    side: 'right',
                    color: 'bg-green-500'
                  },
                  {
                    step: "03",
                    icon: <ChartBarIcon className="w-8 h-8 text-white" />,
                    title: 'Turn each journey into a source of insight',
                    description: 'Understand what each client has seen, clicked, and felt — and use that to improve every next interaction.',
                    side: 'left',
                    color: 'bg-purple-500'
                  },
                  {
                    step: "04",
                    icon: <CheckIcon className="w-8 h-8 text-white" />,
                    title: 'Automated Client Support',
                    description: 'AI-powered automation handles follow-ups, reminders, and support with a personal touch that delights clients',
                    side: 'right',
                    color: 'bg-orange-500'
                  },
                  {
                    step: "05",
                    icon: <GiftIcon className="w-8 h-8 text-white" />,
                    title: 'Grow through love — and track every referral',
                    description: 'CXLUS invites satisfied clients to share their experience, refer friends, and leave glowing reviews — all tracked and rewarded.',
                    side: 'left',
                    color: 'bg-pink-500'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                    className={`relative flex items-center ${item.side === 'left' ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Timeline Content */}
                    <div className={`w-full max-w-md ${item.side === 'left' ? 'pr-8' : 'pl-8'}`}>
                      <div className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${item.side === 'right' ? 'text-right' : ''}`}>
                        <div className={`flex items-center mb-4 ${item.side === 'right' ? 'justify-end' : 'justify-start'}`}>
                          <span className="text-sm font-bold text-gray-400 tracking-wider">
                            STEP {item.step}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-[-0.03em]">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed tracking-[-0.03em]">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                        className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}
                      >
                        {item.icon}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-center mt-16"
          >
            <Button 
              onClick={handleDemoClick}
              className="bg-[#eaf212] text-gray-800 hover:bg-[#eaf212]/90 transition-colors px-8 py-4 text-lg font-medium tracking-[-0.03em] rounded-full"
            >
              Start Your Client Journey
            </Button>
          </motion.div>
        </div>
      </section>

      
      {/* Who We Serve Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 tracking-[-0.03em]">
              Who we serve
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base tracking-[-0.03em] leading-relaxed">
              We support forward-thinking clinics and health practitioners in diverse fields to grow their client base and deliver exceptional experiences through tech solutions that turn patients into loyal advocates.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              {
                title: 'Boutique Clinics',
                icon: <UserGroupIcon className="w-8 h-8 text-gray-900" />
              },
              {
                title: 'Solo Practitioners',
                icon: <UserGroupIcon className="w-8 h-8 text-gray-900" />
              },
              {
                title: 'Doctors',
                icon: <UserGroupIcon className="w-8 h-8 text-gray-900" />
              },
              {
                title: 'Health Specialists',
                icon: <UserGroupIcon className="w-8 h-8 text-gray-900" />
              },
              {
                title: 'Aesthetic Health Practitioners',
                icon: <UserGroupIcon className="w-8 h-8 text-gray-900" />
              },
              {
                title: 'Wellness Professionals',
                icon: <UserGroupIcon className="w-8 h-8 text-gray-900" />
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 tracking-[-0.03em] leading-tight">
                  {category.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CXLUS Plans Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 tracking-[-0.03em]">
              CXLUS Plans
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base tracking-[-0.03em]">
              Choose the right experience for your clinic — and your clients.
            </p>
          </motion.div>

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
                  'Integration + 500+ platforms',
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
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button 
              onClick={handleDemoClick}
              className="bg-[#eaf212] text-gray-800 hover:bg-[#eaf212]/90 transition-colors px-8 py-4 text-base font-medium tracking-[-0.03em] rounded-full"
            >
              See demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 tracking-[-0.03em]">
              What Our Partners Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base tracking-[-0.03em]">
              See how CXLUS is transforming client experiences and driving practice growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                quote: "CXLUS transformed how our clients experience care. The personalized client areas and AI support make every interaction feel special. Our client satisfaction scores have never been higher.",
                author: "Dr. Elena Rodriguez",
                specialty: "Aesthetic Medicine",
                location: "Miami, FL"
              },
              {
                quote: "CXLUS's AI knows exactly when to ask for reviews - our 5-star ratings increased by 300%. The personalized client experience allowed us to increase our service prices by 40% because clients see the premium value we deliver.",
                author: "Dr. James Chen",
                specialty: "Wellness Practitioner", 
                location: "San Francisco, CA"
              },
              {
                quote: "Our clients have become our biggest advocates. The referral system is seamless, and we're seeing 40% of new clients come from existing ones. It's organic growth at its finest.",
                author: "Dr. Sarah Williams",
                specialty: "Functional Medicine",
                location: "Austin, TX"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex flex-col h-full">
                  <p className="text-gray-900 italic mb-4 sm:mb-6 flex-grow text-sm sm:text-base tracking-[-0.03em]">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-gray-900 font-semibold text-base sm:text-lg tracking-[-0.03em]">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm tracking-[-0.03em]">{testimonial.specialty}</p>
                    <p className="text-gray-600 text-xs sm:text-sm tracking-[-0.03em]">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 tracking-[-0.03em]">
              Why Choose CXLUS?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base tracking-[-0.03em]">
              Compare how CXLUS transforms your client experience and practice growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <XMarkIcon className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-[-0.03em]">
                  Without CXLUS
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Generic Client Experience',
                    description: 'One-size-fits-all approach with no personalization or journey tracking'
                  },
                  {
                    title: 'Manual Follow-ups',
                    description: 'Time-consuming manual reminders and generic communication that feels impersonal'
                  },
                  {
                    title: 'Scattered Client Data',
                    description: 'Client information spread across multiple platforms with no unified view'
                  },
                  {
                    title: 'Limited Engagement',
                    description: 'No dedicated client area or tools to keep clients engaged between visits'
                  },
                  {
                    title: 'Missed Growth Opportunities',
                    description: 'No systematic way to turn satisfied clients into advocates and referral sources'
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-400 text-sm">•</span>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium text-sm sm:text-base tracking-[-0.03em]">{item.title}</h4>
                      <p className="text-gray-500 text-sm tracking-[-0.03em]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <CheckIcon className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-[-0.03em]">
                  With CXLUS
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Personalized Client Journeys',
                    description: 'Every client gets a tailored experience with smart, branded spaces that remember their preferences and needs'
                  },
                  {
                    title: 'Intelligent Automation',
                    description: 'AI-powered follow-ups and reminders that feel personal and arrive at the perfect moment'
                  },
                  {
                    title: 'Unified Client Hub',
                    description: 'Complete 360° view of each client with all interactions, progress, and insights in one place'
                  },
                  {
                    title: 'Engaging Membership Experience',
                    description: 'Dedicated client areas with personalized content, checklists, and resources that keep clients connected'
                  },
                  {
                    title: 'Advocacy & Growth Engine',
                    description: 'Systematic approach to turn satisfied clients into loyal advocates with trackable referral systems'
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mr-3 mt-0.5">
                      <CheckIcon className="w-3 h-3 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium text-sm sm:text-base tracking-[-0.03em]">{item.title}</h4>
                      <p className="text-gray-500 text-sm tracking-[-0.03em]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 tracking-[-0.03em]">
              Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto tracking-[-0.03em]">
              Discover how CXLUS transforms client experiences and drives sustainable growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Elevated Client Satisfaction',
                description: 'Create personalized experiences that make every client feel valued and understood, leading to higher satisfaction and loyalty'
              },
              {
                title: 'Automated Client Support',
                description: 'AI-powered automation handles follow-ups, reminders, and support with a personal touch that delights clients'
              },
              {
                title: 'Organic Growth Through Advocacy',
                description: 'Transform satisfied clients into passionate advocates who naturally refer friends and family to your practice'
              },
              {
                title: 'Complete Client Intelligence',
                description: 'Gain deep insights into client journeys, preferences, and engagement to continuously improve their experience'
              },
              {
                title: 'Streamlined Team Operations',
                description: 'Empower your team with smart tools and automated workflows that reduce manual work and increase efficiency'
              },
              {
                title: 'Predictable Practice Growth',
                description: 'Build sustainable growth through systematic client engagement, retention strategies, and measurable results'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    <CheckIcon className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-[-0.03em]">{benefit.title}</h3>
                    <p className="text-gray-500 tracking-[-0.03em]">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 tracking-[-0.03em]">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base tracking-[-0.03em]">
              Schedule a free demo and discover how we can help your business grow
            </p>
            <Button 
              onClick={handleDemoClick}
              className="bg-[#eaf212] text-gray-800 hover:bg-[#eaf212]/90 transition-colors px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto tracking-[-0.03em] rounded-full"
            >
              Schedule Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src="/safe.png"
                alt="Security & Privacy"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm sm:text-base tracking-[-0.03em] font-medium max-w-2xl">
              We take privacy seriously. CXLUS follows strict data protection standards under UK & EU regulations.
            </p>
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
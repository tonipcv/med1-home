'use client';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    agencyName: '',
    website: '',
    contactName: '',
    email: '',
    phone: '',
    clients: '',
    services: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img src="/logo.png" alt="Logo" className="h-8" />
            <div className="flex items-center gap-6">
              <a href="/partners" className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-[-0.03em] hidden md:block">
                Partners
              </a>
              <a href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-[-0.03em] hidden md:block">
                Pricing
              </a>
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-transparent px-3 py-2 text-sm tracking-[-0.03em]">
                Sign In
              </Button>
              <Button className="bg-[#eaf212] text-gray-800 hover:bg-[#eaf212]/90 transition-all duration-300 px-4 py-2 text-sm tracking-[-0.03em] rounded-md hidden md:block">
                Get Started
              </Button>
              <button className="md:hidden text-gray-600 hover:text-gray-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="fixed inset-0 z-50 bg-white md:hidden hidden">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <img src="/logo.png" alt="Logo" className="h-8" />
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <nav className="px-6 py-4 space-y-1">
              <a href="/partners" className="block py-3 text-base text-gray-900 hover:text-gray-600 transition-colors tracking-[-0.03em]">
                Partners
              </a>
              <a href="/pricing" className="block py-3 text-base text-gray-900 hover:text-gray-600 transition-colors tracking-[-0.03em]">
                Pricing
              </a>
            </nav>
            <div className="px-6 py-4 border-t border-gray-100">
              <Button variant="ghost" className="w-full justify-center text-gray-900 hover:text-gray-600 hover:bg-transparent py-3 text-base tracking-[-0.03em]">
                Sign In
              </Button>
              <Button className="w-full justify-center bg-[#eaf212] text-gray-800 hover:bg-[#eaf212]/90 transition-all duration-300 mt-3 py-3 text-base tracking-[-0.03em] rounded-md">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-[-0.03em]">
              Partner with CXLUS
            </h1>
            <p className="text-gray-600 tracking-[-0.03em]">
              Join our network of healthcare marketing agencies
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-50 p-8 rounded-lg border border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 tracking-[-0.03em]">
                  Agency Name
                </label>
                <Input
                  type="text"
                  name="agencyName"
                  value={formData.agencyName}
                  onChange={handleChange}
                  required
                  className="w-full bg-white h-11 text-base px-4 rounded-md border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-100"
                  placeholder="Your agency name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 tracking-[-0.03em]">
                  Website
                </label>
                <Input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  required
                  className="w-full bg-white h-11 text-base px-4 rounded-md border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-100"
                  placeholder="https://your-agency.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 tracking-[-0.03em]">
                  Contact Name
                </label>
                <Input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  className="w-full bg-white h-11 text-base px-4 rounded-md border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-100"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 tracking-[-0.03em]">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white h-11 text-base px-4 rounded-md border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-100"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 tracking-[-0.03em]">
                  Phone
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white h-11 text-base px-4 rounded-md border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-100"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 tracking-[-0.03em]">
                  Number of Healthcare Clients
                </label>
                <Input
                  type="text"
                  name="clients"
                  value={formData.clients}
                  onChange={handleChange}
                  required
                  className="w-full bg-white h-11 text-base px-4 rounded-md border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-100"
                  placeholder="e.g., 5-10, 10-20, 20+"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 tracking-[-0.03em]">
                Services Offered
              </label>
              <Input
                type="text"
                name="services"
                value={formData.services}
                onChange={handleChange}
                required
                className="w-full bg-white h-11 text-base px-4 rounded-md border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-100"
                placeholder="e.g., Digital Marketing, SEO, Social Media"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 tracking-[-0.03em]">
                Additional Information
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white rounded-md border border-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-100 focus:border-gray-300 resize-none"
                placeholder="Tell us about your agency and why you'd like to partner with CXLUS"
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-[#eaf212] text-gray-800 hover:bg-[#eaf212]/90 transition-all duration-300 px-6 py-3 text-base font-medium tracking-[-0.03em] rounded-md mt-2"
            >
              Submit Partnership Request
            </Button>
          </motion.form>
        </div>
      </section>
    </div>
  );
} 
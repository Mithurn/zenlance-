import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { 
  ArrowRight, 
  CheckCircle, 
  BarChart3, 
  CreditCard, 
  Users, 
  Shield,
  Star,
  Menu,
  X,
  Zap,
  TrendingUp,
  Globe,
  Play
} from 'lucide-react';

export default function ProlanceLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const navigate = useNavigate();


  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track your earnings, spending, and project progress with detailed insights and reports."
    },
    {
      icon: CreditCard,
      title: "Smart Invoicing",
      description: "Generate professional invoices, track payments, and manage your billing effortlessly."
    },
    {
      icon: Users,
      title: "Client Management",
      description: "Organize clients, projects, and communications in one centralized dashboard."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-level security with real-time sync across all your devices."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Web Developer",
      avatar: "👩‍💻",
      content: "Prolance transformed how I manage my freelance business. The analytics help me make better pricing decisions.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      role: "UI/UX Designer",
      avatar: "🎨",
      content: "The invoice management is incredible. I've reduced my admin work by 70% since switching to Prolance.",
      rating: 5
    },
    {
      name: "Alex Kumar",
      role: "Mobile Developer",
      avatar: "📱",
      content: "Finally, a freelancer tool that actually understands what we need. The project tracking is spot-on.",
      rating: 5
    }
  ];

  const stats = [
    { value: "50K+", label: "Active Freelancers" },
    { value: "₹2.3B+", label: "Earnings Tracked" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-indigo-600">Prolance</h1>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">Pricing</a>
                <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">Reviews</a>
                <a href="#contact" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-600 hover:text-indigo-600 px-4 py-2 text-sm font-medium transition-colors">
                Sign In
              </button>
              <button 
                onClick={() => setShowDemo(true)}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                Try Free
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-indigo-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600">Features</a>
                <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600">Pricing</a>
                <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600">Reviews</a>
                <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600">Contact</a>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <button className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600">Sign In</button>
                  <button 
                    onClick={() => setShowDemo(true)}
                    className="block w-full text-left px-3 py-2 text-base font-medium bg-indigo-600 text-white rounded-lg mt-2 hover:bg-indigo-700"
                  >
                    Try Free
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-800 bg-opacity-50 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2 text-yellow-400" />
              <span>Trusted by 50,000+ freelancers worldwide</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Freelance Like a
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                Pro
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-indigo-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              The all-in-one platform that transforms how you manage clients, track earnings, and grow your freelance business with powerful analytics and automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button 
                onClick={() => setShowDemo(true)}
                className="bg-white text-indigo-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center"
              >
                <Play className="w-5 h-5 mr-2" />
                View Live Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-indigo-900 transition-all flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-indigo-200 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From project management to financial tracking, Prolance provides all the tools you need to run your freelance business professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Command Center</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a bird's-eye view of your freelance business with our intuitive dashboard that puts all your important metrics at your fingertips.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gray-100 px-6 py-4 flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg px-4 py-2 text-sm text-gray-600">
                    prolance.app/dashboard
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-lg">
                      <div className="text-sm opacity-90">Total Balance</div>
                      <div className="text-2xl font-bold">₹6,125</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Total Spending</div>
                      <div className="text-2xl font-bold text-gray-900">₹1,450</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">This Month</div>
                      <div className="text-2xl font-bold text-gray-900">+23%</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Active Projects</h4>
                      <div className="space-y-2">
                        <div className="bg-white p-2 rounded text-sm">AB Website Redesign</div>
                        <div className="bg-white p-2 rounded text-sm">React Native App</div>
                        <div className="bg-white p-2 rounded text-sm">Prolance.in Design</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Recent Invoices</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center bg-white p-2 rounded text-sm">
                          <span>Ruban</span>
                          <span className="text-green-600">Paid</span>
                        </div>
                        <div className="flex justify-between items-center bg-white p-2 rounded text-sm">
                          <span>Heather</span>
                          <span className="text-green-600">Paid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Loved by Freelancers Worldwide</h2>
            <p className="text-xl text-gray-600">Join thousands of freelancers who've transformed their business with Prolance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Freelance Business?</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join 50,000+ freelancers who trust Prolance to manage their business and boost their earnings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowDemo(true)}
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              Schedule Demo
            </button>
          </div>
          <p className="text-sm text-indigo-200 mt-4">No credit card required • 14-day free trial</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">Prolance</h3>
              <p className="text-gray-400 mb-4">
                The freelancer's best friend for managing projects, clients, and earnings all in one place.
              </p>
              <div className="flex space-x-4">
                <Globe className="w-5 h-5 text-gray-400 hover:text-indigo-400 cursor-pointer" />
                <TrendingUp className="w-5 h-5 text-gray-400 hover:text-indigo-400 cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Prolance. All rights reserved. Made with ❤️ for freelancers worldwide.</p>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Prolance!</h3>
              <p className="text-gray-600 mb-6">
                You're about to experience the future of freelance management. Click below to access your dashboard.
              </p>
              <div className="space-y-3">
                <button 
                  onClick={() => {
                    setShowDemo(false);
                    // In a real app, this would navigate to the dashboard
navigate('/dashboard');
                  }}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Open Dashboard
                </button>
                <button 
                  onClick={() => {setShowDemo(false);
                    navigate("/Dashboard");
                  }}
                  className="w-full text-gray-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
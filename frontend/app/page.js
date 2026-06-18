import React from 'react';
import { 
  Search, Bell, CircleHelp, UserCircle, 
  IdCard, Plane, Scale, ArrowRight, Languages 
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f7f9fb] font-sans text-[#191c1e]">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="bg-white border-b border-[#e0e3e5] px-8 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="text-[#001e40] font-bold text-xl tracking-tight">
          GovDocs Sri Lanka
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="text-[#0058be] border-b-2 border-[#0058be] pb-1">Dashboard</a>
          <a href="#" className="text-[#43474f] hover:text-[#001e40] pb-1">Documents</a>
          <a href="#" className="text-[#43474f] hover:text-[#001e40] pb-1">Services</a>
          <a href="#" className="text-[#43474f] hover:text-[#001e40] pb-1">Support</a>
        </div>

        <div className="flex items-center gap-5 text-[#43474f]">
          <button className="hover:text-[#001e40]"><Bell size={20} /></button>
          <button className="hover:text-[#001e40]"><CircleHelp size={20} /></button>
          <button className="text-[#001e40]"><UserCircle size={28} /></button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="bg-[#001e40] text-white px-8 py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Copy & Search */}
          <div className="pr-8">
            <div className="bg-[#003366] text-[#a7c8ff] text-xs font-semibold px-3 py-1.5 rounded-full inline-flex items-center mb-6">
              <span className="w-2 h-2 bg-[#a7c8ff] rounded-full mr-2"></span>
              Official State Services Portal
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight mb-6">
              Empowering Citizens Through <span className="text-[#a7c8ff]">Digital Sovereignty</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
              Access, manage, and verify your essential government documentation with absolute transparency and institutional security.
            </p>
            
            <div className="flex bg-white rounded p-1.5 max-w-lg shadow-sm">
              <div className="flex items-center px-3 text-gray-400">
                <Search size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Search for services (e.g., NIC Renewal, Birth Certificate)" 
                className="flex-1 outline-none text-[#191c1e] text-sm w-full"
              />
              <button className="bg-[#191f25] hover:bg-black text-white px-6 py-2.5 rounded text-sm font-medium transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Right Column: Imagery & Stats */}
          <div className="relative rounded-lg overflow-hidden h-[400px] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Modern Government Building" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Stat Overlays */}
            <div className="absolute bottom-4 left-4 right-4 flex gap-4">
              <div className="bg-[#191f25]/90 backdrop-blur p-4 rounded flex-1 border border-white/10">
                <div className="text-xl font-bold text-white mb-1">5M+</div>
                <div className="text-xs text-gray-400">Verified Citizens</div>
              </div>
              <div className="bg-[#191f25]/90 backdrop-blur p-4 rounded flex-1 border border-white/10">
                <div className="text-xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs text-gray-400">System Uptime</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SERVICE CATEGORIES */}
      <section className="px-8 py-20 max-w-[1440px] mx-auto bg-[#f7f9fb]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-[#191c1e] mb-2">Service Categories</h2>
            <p className="text-[#43474f]">Streamlined administrative gateways for every citizen need.</p>
          </div>
          <a href="#" className="text-[#0058be] font-medium text-sm flex items-center gap-1 hover:underline mt-4 md:mt-0">
            View All Categories <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 hover:shadow-sm transition-shadow">
            <div className="w-10 h-10 bg-[#f2f4f6] rounded flex items-center justify-center text-[#43474f] mb-6">
              <IdCard size={20} />
            </div>
            <h3 className="font-semibold text-lg mb-4 text-[#191c1e]">Identity Services</h3>
            <ul className="space-y-3 text-sm text-[#43474f]">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#c3c6d1] rounded-full"></span> NIC Registration & Renewal</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#c3c6d1] rounded-full"></span> Digital Identity Verification</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#c3c6d1] rounded-full"></span> Address Verification</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 hover:shadow-sm transition-shadow">
            <div className="w-10 h-10 bg-[#f2f4f6] rounded flex items-center justify-center text-[#43474f] mb-6">
              <Plane size={20} />
            </div>
            <h3 className="font-semibold text-lg mb-4 text-[#191c1e]">Travel & Migration</h3>
            <ul className="space-y-3 text-sm text-[#43474f]">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#c3c6d1] rounded-full"></span> Passport Applications</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#c3c6d1] rounded-full"></span> Overseas Citizen Services</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#c3c6d1] rounded-full"></span> Visa Clearances</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 hover:shadow-sm transition-shadow">
            <div className="w-10 h-10 bg-[#f2f4f6] rounded flex items-center justify-center text-[#43474f] mb-6">
              <Scale size={20} />
            </div>
            <h3 className="font-semibold text-lg mb-4 text-[#191c1e]">Legal & Civil</h3>
            <ul className="space-y-3 text-sm text-[#43474f]">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#c3c6d1] rounded-full"></span> Birth/Death Certificates</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#c3c6d1] rounded-full"></span> Document Attestation</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#c3c6d1] rounded-full"></span> Land Registry Services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. FEATURED SERVICES */}
      <section className="bg-[#f2f4f6] px-8 py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#191c1e] mb-3">Featured Services</h2>
            <p className="text-[#43474f] max-w-2xl mx-auto">
              Priority portals for the most requested citizen services, optimized for rapid processing and real-time tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Top Left: NIC Renewal (Spans 2 cols) */}
            <div className="lg:col-span-2 bg-white rounded-lg border border-[#e0e3e5] overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-5/12 h-48 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Stamping official document" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-7/12 flex flex-col justify-center">
                <div className="flex gap-2 mb-4">
                  <span className="text-[10px] font-bold tracking-wider text-[#43474f] border border-[#c3c6d1] px-2 py-1 rounded">HIGH DEMAND</span>
                  <span className="text-[10px] font-bold tracking-wider text-[#43474f] border border-[#c3c6d1] px-2 py-1 rounded">15 MIN PROC.</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#191c1e]">National Identity Card Renewal</h3>
                <p className="text-[#43474f] text-sm mb-6 leading-relaxed">
                  Seamless digital renewal of your NIC with biometric integration and secure home delivery.
                </p>
                <button className="bg-[#001e40] text-white px-6 py-2.5 rounded text-sm font-medium w-max hover:bg-[#003366] transition-colors">
                  Start Application
                </button>
              </div>
            </div>

            {/* Top Right: Translation Services */}
            <div className="bg-[#001e40] rounded-lg p-8 flex flex-col text-white relative overflow-hidden">
              <Languages size={28} className="text-[#a7c8ff] mb-6" />
              <h3 className="text-lg font-bold mb-3">Certified Translation Services</h3>
              <p className="text-sm text-[#a7c8ff] mb-12 leading-relaxed">
                Official translation of legal documents for international usage across 15+ languages.
              </p>
              <div className="mt-auto">
                <a href="#" className="flex items-center gap-2 text-sm font-medium hover:underline">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Bottom Left: Document Tracking */}
            <div className="bg-white border border-[#e0e3e5] rounded-lg p-8 flex flex-col">
              <div className="w-10 h-10 rounded-full border-2 border-[#0058be] text-[#0058be] flex items-center justify-center mb-6">
                <div className="w-4 h-4 border-2 border-current rounded-full border-t-transparent animate-spin"></div>
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#191c1e]">Document Tracking</h3>
              <p className="text-[#43474f] text-sm mb-6 flex-1">
                Real-time status updates on all your active government requests and applications.
              </p>
              <div className="flex bg-[#f2f4f6] rounded overflow-hidden p-1 border border-[#e0e3e5]">
                <input 
                  type="text" 
                  placeholder="Application ID" 
                  className="bg-transparent flex-1 outline-none text-sm px-3 text-[#191c1e]"
                />
                <button className="text-[#0058be] p-2 hover:bg-[#e0e3e5] rounded transition-colors">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Bottom Right: Passport App (Spans 2 cols) */}
            <div className="lg:col-span-2 bg-[#2170e4] rounded-lg p-8 text-white relative overflow-hidden flex flex-col justify-center">
              <Plane size={160} className="absolute right-[-20px] bottom-[-40px] text-white opacity-10" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3">Passport Application (Expedited)</h3>
                <p className="text-blue-100 text-sm mb-8 max-w-lg">
                  Apply for one-day service or standard processing via the central immigration portal.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-[#0058be] px-6 py-2.5 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
                    Apply Now
                  </button>
                  <button className="border border-white/30 text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-white/10 transition-colors">
                    Check Eligibility
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. STATS STRIP */}
      <section className="bg-[#001e40] text-white py-12 px-8">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          <div className="text-center px-4">
            <div className="text-3xl md:text-4xl font-bold mb-2">5.2M+</div>
            <div className="text-[10px] font-bold tracking-[0.15em] text-[#a7c8ff]">VERIFIED USERS</div>
          </div>
          <div className="text-center px-4">
            <div className="text-3xl md:text-4xl font-bold mb-2">120+</div>
            <div className="text-[10px] font-bold tracking-[0.15em] text-[#a7c8ff]">ACTIVE SERVICES</div>
          </div>
          <div className="text-center px-4">
            <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
            <div className="text-[10px] font-bold tracking-[0.15em] text-[#a7c8ff]">ACCURACY RATE</div>
          </div>
          <div className="text-center px-4">
            <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
            <div className="text-[10px] font-bold tracking-[0.15em] text-[#a7c8ff]">SUPPORT ACCESS</div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-[#eceef0] pt-16 pb-8 px-8 border-t border-[#e0e3e5]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="text-[#001e40] font-bold text-lg tracking-tight mb-4">
              GovDocs Sri Lanka
            </div>
            <p className="text-[#43474f] text-sm leading-relaxed pr-8">
              The unified digital interface for the Department of Registration, providing transparent and accessible governance to every citizen of Sri Lanka.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-[#191c1e] text-sm mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-[#43474f]">
              <li><a href="#" className="hover:text-[#0058be]">Find a Service</a></li>
              <li><a href="#" className="hover:text-[#0058be]">Download Forms</a></li>
              <li><a href="#" className="hover:text-[#0058be]">Fee Structure</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-[#191c1e] text-sm mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-[#43474f]">
              <li><a href="#" className="hover:text-[#0058be]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#0058be]">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#0058be]">Accessibility</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-[#191c1e] text-sm mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-[#43474f]">
              <li><a href="#" className="hover:text-[#0058be]">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#0058be]">Twitter</a></li>
              <li><a href="#" className="hover:text-[#0058be]">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto pt-8 border-t border-[#d8dadc] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#43474f]">
          <div>© 2024 Government of Sri Lanka. All Rights Reserved.</div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#737780] rounded flex items-center justify-center text-white font-bold text-[10px]">ICTA</div>
            Powered by ICT Agency of Sri Lanka
          </div>
        </div>
      </footer>

    </div>
  );
}
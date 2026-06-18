import React from 'react';
import { 
  LayoutDashboard, IdCard, Plane, Languages, Activity, Archive, 
  Settings, LogOut, Plus, Bell, CircleHelp, CreditCard, RefreshCcw, 
  AlertOctagon, CheckCircle2, Circle, ArrowRight, ChevronDown, Phone, ShieldCheck
} from 'lucide-react';

export default function IdentityCards() {
  return (
    <div className="flex h-screen bg-[#f7f9fb] font-sans text-[#191c1e] overflow-hidden">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="w-[280px] bg-[#001e40] text-white flex flex-col flex-shrink-0 z-20">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
            <ShieldCheck size={20} className="text-[#a7c8ff]" />
          </div>
          <div>
            <div className="font-bold text-lg tracking-tight">Citizen Portal</div>
            <div className="text-[10px] text-[#a7c8ff] uppercase tracking-wider">Department of Registration</div>
          </div>
        </div>

        <div className="px-6 mb-6">
          <button className="w-full bg-[#2170e4] hover:bg-[#0058be] text-white py-2.5 rounded flex items-center justify-center gap-2 text-sm font-medium transition-colors">
            <Plus size={18} /> New Request
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <a href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded text-sm transition-colors">
            <LayoutDashboard size={18} /> Dashboard
          </a>
          {/* Active State on Identity Cards */}
          <a href="/identity" className="flex items-center gap-3 px-4 py-3 bg-white/10 border-l-4 border-[#3b82f6] text-white rounded-r text-sm font-medium">
            <IdCard size={18} className="text-[#a7c8ff]" /> Identity Cards
          </a>
          <a href="/passport" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded text-sm transition-colors">
            <Plane size={18} /> Passport Services
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded text-sm transition-colors">
            <Languages size={18} /> Translations
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded text-sm transition-colors">
            <Activity size={18} /> Document Tracking
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded text-sm transition-colors">
            <Archive size={18} /> Archive
          </a>
        </nav>

        <div className="p-4 border-t border-white/10 space-y-1">
          <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-white rounded text-sm transition-colors">
            <Settings size={18} /> Settings
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-white rounded text-sm transition-colors">
            <LogOut size={18} /> Logout
          </a>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        
        {/* Top Header */}
        <header className="bg-white border-b border-[#e0e3e5] px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="text-[#001e40] font-bold text-xl tracking-tight hidden md:block">
            Identity Cards (NIC)
          </div>
          
          <div className="flex-1"></div>

          <div className="flex items-center gap-6">
            <button className="text-[#43474f] hover:text-[#001e40] relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="text-[#43474f] hover:text-[#001e40]"><CircleHelp size={20} /></button>
            
            <div className="flex items-center gap-3 pl-6 border-l border-[#e0e3e5]">
              <div className="text-right hidden md:block">
                <div className="text-sm font-bold text-[#191c1e]">Anura Perera</div>
                <div className="text-[10px] text-[#737780] uppercase tracking-wider">Verified Citizen</div>
              </div>
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="Profile" className="w-10 h-10 rounded-full border border-[#e0e3e5] object-cover" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-[1200px] mx-auto">
            
            {/* Title */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#001e40] mb-2">Identity Cards (NIC)</h1>
              <p className="text-[#43474f]">Manage your National Identity Card applications and renewals.</p>
            </div>

            {/* Top 3 Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Apply New */}
              <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col group cursor-pointer">
                <div className="w-12 h-12 bg-[#f2f4f6] text-[#0058be] rounded flex items-center justify-center mb-6">
                  <CreditCard size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#191c1e] mb-3">Apply for New NIC</h3>
                <p className="text-sm text-[#43474f] mb-8 leading-relaxed flex-1">
                  For citizens reaching 16 years of age or those who have never held an identity card.
                </p>
                <div className="text-sm font-bold text-[#0058be] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Start Application <ArrowRight size={16} />
                </div>
              </div>

              {/* Renew */}
              <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col group cursor-pointer">
                <div className="w-12 h-12 bg-[#f2f4f6] text-[#0058be] rounded flex items-center justify-center mb-6">
                  <RefreshCcw size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#191c1e] mb-3">Renew Existing NIC</h3>
                <p className="text-sm text-[#43474f] mb-8 leading-relaxed flex-1">
                  Update your personal details, photo, or replace an expired Smart ID card.
                </p>
                <div className="text-sm font-bold text-[#0058be] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Renew Document <ArrowRight size={16} />
                </div>
              </div>

              {/* Report Lost */}
              <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col group cursor-pointer">
                <div className="w-12 h-12 bg-[#ffdad6] text-[#93000a] rounded flex items-center justify-center mb-6">
                  <AlertOctagon size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#191c1e] mb-3">Report Lost NIC</h3>
                <p className="text-sm text-[#43474f] mb-8 leading-relaxed flex-1">
                  Immediately invalidate a lost or stolen card and apply for a replacement.
                </p>
                <div className="text-sm font-bold text-[#ba1a1a] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Report Issue <ArrowRight size={16} />
                </div>
              </div>
            </div>

            {/* Split Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column (Spans 2 cols) */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Active Application Status Tracker */}
                <div className="bg-white border border-[#e0e3e5] rounded-lg p-8 shadow-sm">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-lg font-bold text-[#191c1e]">Active Application Status</h2>
                    <span className="bg-[#d5e3ff] text-[#001e40] text-xs font-bold px-3 py-1 rounded-full">Ref: SL-NIC-2024-8892</span>
                  </div>
                  
                  <div className="relative border-l-2 border-[#e0e3e5] ml-4 space-y-10">
                    {/* Step 1: Completed */}
                    <div className="relative pl-8">
                      <div className="absolute -left-[17px] top-0 w-8 h-8 bg-[#0058be] rounded flex items-center justify-center border-4 border-white">
                        <CheckCircle2 size={16} className="text-white" />
                      </div>
                      <div className="text-base font-bold text-[#191c1e]">Form Submission</div>
                      <div className="text-sm text-[#737780] mt-1">Completed on May 12, 2024</div>
                    </div>

                    {/* Step 2: Completed */}
                    <div className="relative pl-8">
                      <div className="absolute -left-[17px] top-0 w-8 h-8 bg-[#0058be] rounded flex items-center justify-center border-4 border-white">
                        <CheckCircle2 size={16} className="text-white" />
                      </div>
                      <div className="text-base font-bold text-[#191c1e]">Document Verification</div>
                      <div className="text-sm text-[#737780] mt-1">Verified by DS Office - Colombo</div>
                    </div>

                    {/* Step 3: In Progress */}
                    <div className="relative pl-8">
                      <div className="absolute -left-[17px] top-0 w-8 h-8 bg-[#f2f4f6] rounded flex items-center justify-center border-4 border-white">
                        <div className="w-3 h-3 bg-[#0058be] rounded-full"></div>
                      </div>
                      <div className="text-base font-bold text-[#0058be]">Card Printing</div>
                      <div className="text-sm text-[#43474f] mt-1">In progress at Department Headquarters</div>
                      {/* Mini Progress Bar */}
                      <div className="w-full bg-[#f2f4f6] h-2 rounded-full mt-3 overflow-hidden">
                        <div className="bg-[#0058be] h-full rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>

                    {/* Step 4: Pending */}
                    <div className="relative pl-8">
                      <div className="absolute -left-[17px] top-0 w-8 h-8 bg-[#f2f4f6] rounded border-4 border-white flex items-center justify-center text-[#c3c6d1]">
                        <Archive size={14} />
                      </div>
                      <div className="text-base font-bold text-[#737780]">Dispatch</div>
                      <div className="text-sm text-[#c3c6d1] mt-1">Pending completion of printing</div>
                    </div>
                  </div>
                </div>

                {/* Requirements Checklist */}
                <div className="bg-white border border-[#e0e3e5] rounded-lg p-8 shadow-sm">
                  <h2 className="text-lg font-bold text-[#191c1e] mb-6">Requirements Checklist</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Item 1 */}
                    <div className="bg-[#f7f9fb] border border-[#e0e3e5] rounded p-4 flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-[#0058be] flex-shrink-0" />
                      <span className="text-sm font-medium text-[#191c1e]">Birth Certificate (Original)</span>
                    </div>
                    {/* Item 2 */}
                    <div className="bg-[#f7f9fb] border border-[#e0e3e5] rounded p-4 flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-[#0058be] flex-shrink-0" />
                      <span className="text-sm font-medium text-[#191c1e]">3 ICAO Standard Photos</span>
                    </div>
                    {/* Item 3 */}
                    <div className="border border-[#e0e3e5] rounded p-4 flex items-center gap-3">
                      <Circle size={20} className="text-[#c3c6d1] flex-shrink-0" />
                      <span className="text-sm font-medium text-[#43474f]">Grama Niladhari Certificate</span>
                    </div>
                    {/* Item 4 */}
                    <div className="border border-[#e0e3e5] rounded p-4 flex items-center gap-3">
                      <Circle size={20} className="text-[#c3c6d1] flex-shrink-0" />
                      <span className="text-sm font-medium text-[#43474f]">Application Fee (LKR 500)</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column (Spans 1 col) */}
              <div className="space-y-6">
                
                {/* Promo Card */}
                <div className="bg-[#001e40] rounded-lg p-8 text-white relative overflow-hidden shadow-sm">
                  <IdCard size={120} className="absolute -right-6 top-6 text-white opacity-10" />
                  <h3 className="text-xl font-bold mb-3 relative z-10">Electronic Identity (eNIC)</h3>
                  <p className="text-sm text-[#a7c8ff] mb-8 leading-relaxed relative z-10">
                    Sri Lanka is transitioning to secure Smart IDs with biometrics. Upgrade your paper NIC today to access digital services.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:underline relative z-10">
                    Learn about Smart ID <ArrowRight size={16} />
                  </a>
                </div>

                {/* FAQ Accordion */}
                <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#191c1e] mb-6">Frequently Asked</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-[#e0e3e5] cursor-pointer hover:text-[#0058be]">
                      <span className="text-sm font-medium">How long does processing take?</span>
                      <ChevronDown size={16} className="text-[#737780]" />
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-[#e0e3e5] cursor-pointer hover:text-[#0058be]">
                      <span className="text-sm font-medium">Can I change my photo?</span>
                      <ChevronDown size={16} className="text-[#737780]" />
                    </div>
                    <div className="flex justify-between items-center cursor-pointer hover:text-[#0058be]">
                      <span className="text-sm font-medium">Lost card reporting process?</span>
                      <ChevronDown size={16} className="text-[#737780]" />
                    </div>
                  </div>
                </div>

                {/* Support Box */}
                <div className="bg-[#e6e8ea] rounded-lg p-6 flex items-center justify-between shadow-inner">
                  <div>
                    <h3 className="text-sm font-bold text-[#191c1e] mb-1">Need assistance?</h3>
                    <p className="text-xs text-[#43474f]">Speak with a registration officer.</p>
                  </div>
                  <button className="bg-[#001e40] hover:bg-[#003366] text-white px-4 py-2 rounded text-sm font-medium transition-colors flex items-center gap-2">
                     <Phone size={14} /> Call 1919
                  </button>
                </div>

              </div>
            </div>
          </div>
          
          {/* Footer */}
          <footer className="mt-12 pt-6 border-t border-[#d8dadc] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#737780] max-w-[1200px] mx-auto">
            <div>© 2024 Government of Sri Lanka. All Rights Reserved.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#191c1e]">Privacy Policy</a>
              <a href="#" className="hover:text-[#191c1e]">Terms of Service</a>
              <a href="#" className="hover:text-[#191c1e]">Contact Us</a>
              <a href="#" className="hover:text-[#191c1e]">Accessibility</a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
import React from 'react';
import { 
  LayoutDashboard, IdCard, Plane, Languages, Activity, Archive, 
  Settings, LogOut, Plus, Bell, CircleHelp, Search, CreditCard, 
  RefreshCcw, AlertTriangle, Target, CheckCircle2, Info, 
  Upload, MessageSquare, Phone, ChevronRight, ShieldCheck
} from 'lucide-react';

export default function PassportServices() {
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
            <div className="text-[10px] text-[#a7c8ff] uppercase tracking-wider">Dept. of Registration</div>
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
          <a href="/identity" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded text-sm transition-colors">
            <IdCard size={18} /> Identity Cards
          </a>
          {/* Active State on Passport Services */}
          <a href="/passport" className="flex items-center gap-3 px-4 py-3 bg-[#2170e4] text-white rounded text-sm font-medium">
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
            Passport Services
          </div>
          
          <div className="flex-1 max-w-md mx-8 hidden lg:block">
            <div className="flex bg-[#f2f4f6] rounded border border-[#e0e3e5] px-3 py-2">
              <Search size={18} className="text-[#737780] mr-2" />
              <input type="text" placeholder="Search services..." className="bg-transparent flex-1 outline-none text-sm text-[#191c1e]" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-[#43474f] hover:text-[#001e40] relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="text-[#43474f] hover:text-[#001e40]"><CircleHelp size={20} /></button>
            
            <div className="flex items-center pl-6 border-l border-[#e0e3e5]">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="Profile" className="w-8 h-8 rounded-full border border-[#e0e3e5] object-cover" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-[1200px] mx-auto">
            
            {/* 4 Action Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* Apply New */}
              <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 hover:border-[#0058be] transition-colors cursor-pointer group">
                <div className="w-10 h-10 bg-[#f2f4f6] text-[#001e40] rounded flex items-center justify-center mb-4 group-hover:bg-[#d5e3ff] transition-colors">
                  <CreditCard size={20} />
                </div>
                <h3 className="text-base font-bold text-[#191c1e] mb-2">Apply New</h3>
                <p className="text-xs text-[#43474f] leading-relaxed">
                  First-time passport issuance for citizens.
                </p>
              </div>

              {/* Renew */}
              <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 hover:border-[#0058be] transition-colors cursor-pointer group">
                <div className="w-10 h-10 bg-[#f2f4f6] text-[#001e40] rounded flex items-center justify-center mb-4 group-hover:bg-[#d5e3ff] transition-colors">
                  <RefreshCcw size={20} />
                </div>
                <h3 className="text-base font-bold text-[#191c1e] mb-2">Renew Passport</h3>
                <p className="text-xs text-[#43474f] leading-relaxed">
                  Renew expired or nearly expired documents.
                </p>
              </div>

              {/* Report Lost */}
              <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 hover:border-[#ba1a1a] transition-colors cursor-pointer group">
                <div className="w-10 h-10 bg-[#ffdad6] text-[#93000a] rounded flex items-center justify-center mb-4">
                  <AlertTriangle size={20} />
                </div>
                <h3 className="text-base font-bold text-[#191c1e] mb-2">Report Lost</h3>
                <p className="text-xs text-[#43474f] leading-relaxed">
                  Cancel and replace a lost or stolen passport.
                </p>
              </div>

              {/* Track Status */}
              <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 hover:border-[#0058be] transition-colors cursor-pointer group">
                <div className="w-10 h-10 bg-[#f2f4f6] text-[#001e40] rounded flex items-center justify-center mb-4 group-hover:bg-[#d5e3ff] transition-colors">
                  <Target size={20} />
                </div>
                <h3 className="text-base font-bold text-[#191c1e] mb-2">Track Status</h3>
                <p className="text-xs text-[#43474f] leading-relaxed">
                  Real-time update on your current request.
                </p>
              </div>
            </div>

            {/* Split Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              
              {/* Left Column (Spans 2 cols) */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Horizontal Application Tracker */}
                <div className="bg-white border border-[#e0e3e5] rounded-lg p-8 shadow-sm">
                  <div className="flex justify-between items-center mb-10">
                    <h2 className="text-lg font-bold text-[#191c1e]">Current Application: #SLP-99283</h2>
                    <span className="bg-[#d5e3ff] text-[#001e40] text-xs font-bold px-3 py-1 rounded-full">Processing</span>
                  </div>
                  
                  {/* Stepper UI */}
                  <div className="relative flex justify-between items-start mb-10 px-4">
                    {/* Connecting Line Background */}
                    <div className="absolute top-5 left-[10%] right-[10%] h-1 bg-[#e0e3e5] -z-10 rounded"></div>
                    {/* Connecting Line Active (66% width for step 3) */}
                    <div className="absolute top-5 left-[10%] w-[50%] h-1 bg-[#0058be] -z-10 rounded"></div>

                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-[#0058be] rounded flex items-center justify-center text-white mb-3">
                        <CheckCircle2 size={20} />
                      </div>
                      <div className="text-sm font-bold text-[#191c1e]">Submitted</div>
                      <div className="text-xs text-[#737780]">Oct 12, 2023</div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-[#0058be] rounded flex items-center justify-center text-white mb-3">
                        <CheckCircle2 size={20} />
                      </div>
                      <div className="text-sm font-bold text-[#191c1e]">Biometrics</div>
                      <div className="text-xs text-[#737780]">Oct 20, 2023</div>
                    </div>

                    {/* Step 3 (Active) */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-white border-2 border-[#0058be] text-[#0058be] rounded flex items-center justify-center mb-3">
                        <RefreshCcw size={20} className="animate-spin-slow" />
                      </div>
                      <div className="text-sm font-bold text-[#0058be]">Processing</div>
                      <div className="text-xs text-[#43474f] italic">Estimated 5 days</div>
                    </div>

                    {/* Step 4 (Pending) */}
                    <div className="flex flex-col items-center opacity-50">
                      <div className="w-10 h-10 bg-white border-2 border-[#c3c6d1] text-[#737780] rounded flex items-center justify-center mb-3">
                        <IdCard size={20} />
                      </div>
                      <div className="text-sm font-bold text-[#737780]">Ready</div>
                      <div className="text-xs text-[#737780]">TBD</div>
                    </div>
                  </div>

                  {/* Info Alert */}
                  <div className="bg-[#f7f9fb] border border-[#e0e3e5] rounded p-4 flex gap-3">
                    <Info size={20} className="text-[#0058be] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#43474f] leading-relaxed">
                      Your application has been verified by the regional office and is currently at the central printing facility in Colombo. You will receive an SMS notification once the document is dispatched.
                    </p>
                  </div>
                </div>

                {/* Document Requirements Grid */}
                <div className="bg-white border border-[#e0e3e5] rounded-lg p-8 shadow-sm">
                  <h2 className="text-lg font-bold text-[#191c1e] mb-6">Document Requirements</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Verified Docs */}
                    <div className="border border-[#e0e3e5] rounded p-4 flex gap-3 items-start">
                      <div className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 size={14} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#191c1e] mb-1">Birth Certificate</div>
                        <div className="text-xs text-[#43474f]">Digital copy verified via e-NIC</div>
                      </div>
                    </div>

                    <div className="border border-[#e0e3e5] rounded p-4 flex gap-3 items-start">
                      <div className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 size={14} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#191c1e] mb-1">Biometric Photos</div>
                        <div className="text-xs text-[#43474f]">Captured at Battaramulla Hub</div>
                      </div>
                    </div>

                    <div className="border border-[#e0e3e5] rounded p-4 flex gap-3 items-start">
                      <div className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 size={14} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#191c1e] mb-1">Payment Status</div>
                        <div className="text-xs text-[#43474f]">LKR 15,000.00 Paid (LankaPay)</div>
                      </div>
                    </div>

                    {/* Action Required Doc */}
                    <div className="border-2 border-dashed border-[#a7c8ff] bg-[#f7f9fb] rounded p-4 flex items-center justify-between">
                      <div className="flex gap-3 items-start">
                        <div className="w-6 h-6 bg-[#d5e3ff] text-[#0058be] rounded flex items-center justify-center flex-shrink-0 mt-1">
                          <Upload size={14} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#0058be] mb-1">Previous Passport</div>
                          <div className="text-xs text-[#0058be]">Upload scan for cancellation</div>
                        </div>
                      </div>
                      <button className="text-xs font-bold text-[#0058be] uppercase tracking-wider hover:underline">Upload</button>
                    </div>

                  </div>
                </div>

              </div>

              {/* Right Column (Spans 1 col) */}
              <div className="space-y-6">
                
                {/* Support Box */}
                <div className="bg-[#001e40] rounded-lg p-8 text-white relative overflow-hidden shadow-sm">
                  <div className="absolute right-0 bottom-0 opacity-10">
                    <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 relative z-10">Need assistance?</h3>
                  <p className="text-sm text-[#a7c8ff] mb-6 leading-relaxed relative z-10">
                    Our dedicated support team is available 24/7 to help with your passport queries.
                  </p>
                  <div className="space-y-3 relative z-10">
                    <button className="w-full bg-white text-[#001e40] py-2.5 rounded text-sm font-bold hover:bg-gray-100 transition-colors flex justify-center items-center gap-2">
                      Live Chat Support
                    </button>
                    <button className="w-full bg-transparent border border-white/30 text-white py-2.5 rounded text-sm font-bold hover:bg-white/10 transition-colors flex justify-center items-center gap-2">
                      <Phone size={16} /> Call 1919
                    </button>
                  </div>
                </div>

                {/* FAQ Box */}
                <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 shadow-sm">
                  <h3 className="text-base font-bold text-[#191c1e] mb-4">Frequently Asked</h3>
                  <div className="space-y-1">
                    <a href="#" className="flex justify-between items-center py-3 border-b border-[#e0e3e5] text-sm font-medium text-[#191c1e] hover:text-[#0058be]">
                      How long does standard delivery take? <ChevronRight size={16} className="text-[#737780]"/>
                    </a>
                    <a href="#" className="flex justify-between items-center py-3 border-b border-[#e0e3e5] text-sm font-medium text-[#191c1e] hover:text-[#0058be]">
                      Can I change my collection center? <ChevronRight size={16} className="text-[#737780]"/>
                    </a>
                    <a href="#" className="flex justify-between items-center py-3 text-sm font-medium text-[#191c1e] hover:text-[#0058be]">
                      What if I lost my NIC? <ChevronRight size={16} className="text-[#737780]"/>
                    </a>
                  </div>
                  <a href="#" className="text-sm font-bold text-[#0058be] hover:underline mt-4 inline-block">
                    View All Help Topics &rarr;
                  </a>
                </div>

              </div>
            </div>

            {/* Bottom Promotional Banner */}
            <div className="relative rounded-lg overflow-hidden h-[200px] shadow-sm mb-8">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern building" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#001e40]/90 to-transparent"></div>
              <div className="relative z-10 h-full flex flex-col justify-center px-10 max-w-lg">
                <h2 className="text-2xl font-bold text-white mb-2">Sri Lanka Global Entry</h2>
                <p className="text-sm text-[#a7c8ff] leading-relaxed">
                  Your gateway to the world is now fully digital. Secure, fast, and accessible everywhere.
                </p>
              </div>
            </div>

          </div>
          
          {/* Footer */}
          <footer className="pt-6 border-t border-[#d8dadc] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#737780] max-w-[1200px] mx-auto">
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
import React from 'react';
import { 
  LayoutDashboard, IdCard, Plane, FileText, Languages, Activity, Archive, 
  Settings, LogOut, Plus, Bell, CircleHelp, Search, Users, Building, 
  GraduationCap, Briefcase, MousePointerClick, ShieldCheck, Truck, 
  ChevronDown
} from 'lucide-react';

export default function DocumentBrowser() {
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
          <a href="/identity" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded text-sm transition-colors">
            <IdCard size={18} /> Identity Cards
          </a>
          <a href="/passport" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded text-sm transition-colors">
            <Plane size={18} /> Passport Services
          </a>
          {/* Active State on Documents */}
          <a href="/documents" className="flex items-center gap-3 px-4 py-3 bg-[#2170e4] text-white rounded text-sm font-medium">
            <FileText size={18} /> Documents
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
            GovDocs Sri Lanka
          </div>
          
          <div className="flex-1 max-w-xl mx-8 hidden lg:block">
            <div className="flex bg-[#f2f4f6] rounded border border-[#e0e3e5] px-3 py-2">
              <Search size={18} className="text-[#737780] mr-2" />
              <input type="text" placeholder="Search for document types, services, or tracking ID..." className="bg-transparent flex-1 outline-none text-sm text-[#191c1e]" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-[#43474f] hover:text-[#001e40] relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="text-[#43474f] hover:text-[#001e40]"><CircleHelp size={20} /></button>
            
            <div className="flex items-center gap-3 pl-6 border-l border-[#e0e3e5]">
              <div className="text-right hidden md:block">
                <div className="text-sm font-bold text-[#191c1e]">Harsha Perera</div>
                <div className="text-[10px] text-[#737780] uppercase tracking-wider">NIC: 840212345V</div>
              </div>
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="Profile" className="w-10 h-10 rounded-full border border-[#e0e3e5] object-cover" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-[1000px] mx-auto space-y-8">
            
            {/* Hero / Promo Banner */}
            <div className="bg-[#001e40] rounded-lg overflow-hidden flex flex-col md:flex-row relative">
              <div className="p-8 md:p-12 md:w-3/5 z-10 flex flex-col justify-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Your Identity,<br/>Digitally Certified.
                </h1>
                <p className="text-sm text-[#a7c8ff] mb-8 leading-relaxed max-w-md">
                  Request official government documents directly to your digital vault or verified physical address. Fast, secure, and fully compliant with SL-CERT standards.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#2170e4] hover:bg-[#0058be] text-white px-6 py-2.5 rounded text-sm font-medium transition-colors flex items-center gap-2">
                    <Users size={18} /> Request for Family Member
                  </button>
                  <button className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-6 py-2.5 rounded text-sm font-medium transition-colors">
                    Bulk Request Support
                  </button>
                </div>
              </div>
              <div className="hidden md:block md:w-2/5 relative">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Official Seal" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#001e40] to-transparent"></div>
              </div>
            </div>

            {/* Browse Categories */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#191c1e]">Browse Categories</h2>
                <a href="#" className="text-sm font-medium text-[#0058be] hover:underline">View All Documents</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Category 1: Vital Records */}
                <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 hover:shadow-sm transition-shadow flex flex-col">
                  <div className="w-10 h-10 bg-[#f2f4f6] text-[#43474f] rounded flex items-center justify-center mb-4">
                    <Users size={20} />
                  </div>
                  <h3 className="text-base font-bold text-[#191c1e] mb-2">Vital Records</h3>
                  <p className="text-xs text-[#737780] mb-4 leading-relaxed">
                    Certified copies of Birth, Marriage, and Death certificates from the Registrar General.
                  </p>
                  <ul className="text-[11px] text-[#43474f] space-y-2 mb-6 flex-1 font-medium">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#0058be] rounded-full"></span> Birth Certificate</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#0058be] rounded-full"></span> Marriage Certificate</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#0058be] rounded-full"></span> Death Certificate</li>
                  </ul>
                  <button className="w-full border border-[#c3c6d1] text-[#0058be] py-2 rounded text-sm font-medium hover:bg-[#f7f9fb] transition-colors">
                    Select Document
                  </button>
                </div>

                {/* Category 2: Land Registry */}
                <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 hover:shadow-sm transition-shadow flex flex-col">
                  <div className="w-10 h-10 bg-[#f2f4f6] text-[#43474f] rounded flex items-center justify-center mb-4">
                    <Building size={20} />
                  </div>
                  <h3 className="text-base font-bold text-[#191c1e] mb-2">Land Registry</h3>
                  <p className="text-xs text-[#737780] mb-4 leading-relaxed">
                    Extracts of deeds, certified plans, and ownership history for residential or commercial land.
                  </p>
                  <ul className="text-[11px] text-[#43474f] space-y-2 mb-6 flex-1 font-medium">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#0058be] rounded-full"></span> Land Deed Extract</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#0058be] rounded-full"></span> Cadastral Map Copy</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#0058be] rounded-full"></span> Non-vesting Certificate</li>
                  </ul>
                  <button className="w-full border border-[#c3c6d1] text-[#0058be] py-2 rounded text-sm font-medium hover:bg-[#f7f9fb] transition-colors">
                    Select Document
                  </button>
                </div>

                {/* Category 3: Education */}
                <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 hover:shadow-sm transition-shadow flex flex-col">
                  <div className="w-10 h-10 bg-[#f2f4f6] text-[#43474f] rounded flex items-center justify-center mb-4">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="text-base font-bold text-[#191c1e] mb-2">Education</h3>
                  <p className="text-xs text-[#737780] mb-4 leading-relaxed">
                    G.C.E. Ordinary Level and Advanced Level certificates and verification documents.
                  </p>
                  <ul className="text-[11px] text-[#43474f] space-y-2 mb-6 flex-1 font-medium">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#0058be] rounded-full"></span> G.C.E. O/L Results</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#0058be] rounded-full"></span> G.C.E. A/L Results</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#0058be] rounded-full"></span> Verification Letter</li>
                  </ul>
                  <button className="w-full border border-[#c3c6d1] text-[#0058be] py-2 rounded text-sm font-medium hover:bg-[#f7f9fb] transition-colors">
                    Select Document
                  </button>
                </div>

                {/* Category 4: Business */}
                <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 hover:shadow-sm transition-shadow flex flex-col">
                  <div className="w-10 h-10 bg-[#f2f4f6] text-[#43474f] rounded flex items-center justify-center mb-4">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="text-base font-bold text-[#191c1e] mb-2">Business</h3>
                  <p className="text-xs text-[#737780] mb-4 leading-relaxed">
                    BR certificates for sole proprietorships, partnerships, or private limited companies.
                  </p>
                  <ul className="text-[11px] text-[#43474f] space-y-2 mb-6 flex-1 font-medium">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#0058be] rounded-full"></span> Form 1 (Incorporation)</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#0058be] rounded-full"></span> Sole Proprietor Cert.</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#0058be] rounded-full"></span> Partnership Registry</li>
                  </ul>
                  <button className="w-full border border-[#c3c6d1] text-[#0058be] py-2 rounded text-sm font-medium hover:bg-[#f7f9fb] transition-colors">
                    Select Document
                  </button>
                </div>

              </div>
            </div>

            {/* Recent Requests Table */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-[#191c1e]">Recent Requests</h2>
                <div className="flex items-center gap-2 text-sm text-[#43474f]">
                  Filter by: <button className="font-bold text-[#191c1e] flex items-center gap-1 hover:bg-[#e0e3e5] px-2 py-1 rounded">All Statuses <ChevronDown size={14} /></button>
                </div>
              </div>
              
              <div className="bg-white border border-[#e0e3e5] rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-[10px] text-[#737780] uppercase bg-[#f2f4f6] border-b border-[#e0e3e5]">
                      <tr>
                        <th className="px-6 py-4 font-bold tracking-wider">Request ID</th>
                        <th className="px-6 py-4 font-bold tracking-wider">Document Type</th>
                        <th className="px-6 py-4 font-bold tracking-wider">Submitted On</th>
                        <th className="px-6 py-4 font-bold tracking-wider">Status</th>
                        <th className="px-6 py-4 font-bold tracking-wider text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e0e3e5]">
                      {/* Row 1 */}
                      <tr className="hover:bg-[#f7f9fb] transition-colors">
                        <td className="px-6 py-4 text-[#43474f] font-mono text-xs">#SL-2024-8821</td>
                        <td className="px-6 py-4">
                          <div className="font-bold text-[#191c1e]">Birth Certificate</div>
                          <div className="text-xs text-[#737780]">Original Copy - English</div>
                        </td>
                        <td className="px-6 py-4 text-[#43474f]">May 12, 2024</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-bold bg-[#d5e3ff] text-[#0058be]">
                            <div className="w-1.5 h-1.5 bg-[#0058be] rounded-full"></div> Processing
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#0058be] hover:underline font-medium text-sm">Track Order</button>
                        </td>
                      </tr>
                      {/* Row 2 */}
                      <tr className="hover:bg-[#f7f9fb] transition-colors">
                        <td className="px-6 py-4 text-[#43474f] font-mono text-xs">#SL-2024-7645</td>
                        <td className="px-6 py-4">
                          <div className="font-bold text-[#191c1e]">G.C.E. A/L Results</div>
                          <div className="text-xs text-[#737780]">Year: 2002 - Index: 54102</div>
                        </td>
                        <td className="px-6 py-4 text-[#43474f]">May 05, 2024</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-bold border border-green-200 bg-green-50 text-green-700">
                            <ShieldCheck size={12} /> Completed
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#0058be] hover:underline font-medium text-sm">Download PDF</button>
                        </td>
                      </tr>
                      {/* Row 3 */}
                      <tr className="hover:bg-[#f7f9fb] transition-colors">
                        <td className="px-6 py-4 text-[#43474f] font-mono text-xs">#SL-2024-6109</td>
                        <td className="px-6 py-4">
                          <div className="font-bold text-[#191c1e]">Land Deed Extract</div>
                          <div className="text-xs text-[#737780]">Colombo Division - Block B</div>
                        </td>
                        <td className="px-6 py-4 text-[#43474f]">Apr 28, 2024</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-bold bg-amber-100 text-amber-800">
                            <Activity size={12} /> Action Required
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#ba1a1a] hover:underline font-medium text-sm">Fix Issues</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* How it Works Banner */}
            <div className="bg-[#f2f4f6] rounded-lg p-8 border border-[#e0e3e5] text-center mt-4">
              <h2 className="text-xl font-bold text-[#191c1e] mb-2">How the Digital Request Works</h2>
              <p className="text-sm text-[#43474f] mb-10 max-w-lg mx-auto">
                Skip the queues. Your documents are verified through official departmental databases and delivered securely.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-[#0058be] border border-[#e0e3e5]">
                    <MousePointerClick size={24} />
                  </div>
                  <h3 className="font-bold text-[#191c1e] text-sm mb-2">1. Select & Pay</h3>
                  <p className="text-xs text-[#737780] leading-relaxed max-w-[220px]">Choose your document, fill in required details, and pay the government processing fee securely online.</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-[#0058be] border border-[#e0e3e5]">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="font-bold text-[#191c1e] text-sm mb-2">2. Verification</h3>
                  <p className="text-xs text-[#737780] leading-relaxed max-w-[220px]">The relevant Department authenticates your request against existing physical and digital registers.</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-[#0058be] border border-[#e0e3e5]">
                    <Truck size={24} />
                  </div>
                  <h3 className="font-bold text-[#191c1e] text-sm mb-2">3. Delivery</h3>
                  <p className="text-xs text-[#737780] leading-relaxed max-w-[220px]">Receive a digital certified copy instantly, or have the physical document delivered to your doorstep via SL-Post.</p>
                </div>
              </div>
            </div>

          </div>
          
          {/* Footer */}
          <footer className="mt-12 pt-6 border-t border-[#d8dadc] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#737780] max-w-[1000px] mx-auto">
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
import React from 'react';
import { 
  LayoutDashboard, IdCard, Plane, Languages, Activity, Archive, 
  Settings, LogOut, Plus, Bell, CircleHelp, Calendar, FileText, 
  CheckCircle2, Clock, Download, MoreVertical, ShieldCheck, CreditCard, History
} from 'lucide-react';

export default function CitizenDashboard() {
  return (
    <div className="flex h-screen bg-[#f7f9fb] font-sans text-[#191c1e] overflow-hidden">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="w-[280px] bg-[#001e40] text-white flex flex-col flex-shrink-0 z-20">
        {/* Sidebar Header */}
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
            <ShieldCheck size={20} className="text-[#a7c8ff]" />
          </div>
          <div>
            <div className="font-bold text-lg tracking-tight">Citizen Portal</div>
            <div className="text-[10px] text-[#a7c8ff] uppercase tracking-wider">Department of Registration</div>
          </div>
        </div>

        {/* New Request Button */}
        <div className="px-6 mb-6">
          <button className="w-full bg-[#2170e4] hover:bg-[#0058be] text-white py-2.5 rounded flex items-center justify-center gap-2 text-sm font-medium transition-colors">
            <Plus size={18} /> New Request
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 space-y-1">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-white/10 border-l-4 border-[#3b82f6] text-white rounded-r text-sm font-medium">
            <LayoutDashboard size={18} className="text-[#a7c8ff]" /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded text-sm transition-colors">
            <IdCard size={18} /> Identity Cards
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded text-sm transition-colors">
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

        {/* Bottom Actions */}
        <div className="p-4 border-t border-white/10 space-y-1">
          <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-white rounded text-sm transition-colors">
            <Settings size={18} /> Settings
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-white rounded text-sm transition-colors">
            <LogOut size={18} /> Logout
          </a>
        </div>
      </aside>

      {/* ================= MAIN CONTENT AREA ================= */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        
        {/* Top Header */}
        <header className="bg-[#f7f9fb] border-b border-[#e0e3e5] px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="text-[#001e40] font-bold text-xl tracking-tight">
            GovDocs Sri Lanka
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="text-[#0058be] border-b-2 border-[#0058be] pb-1">Dashboard</a>
            <a href="#" className="text-[#43474f] hover:text-[#001e40] pb-1">Documents</a>
            <a href="#" className="text-[#43474f] hover:text-[#001e40] pb-1">Services</a>
            <a href="#" className="text-[#43474f] hover:text-[#001e40] pb-1">Support</a>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-[#43474f] hover:text-[#001e40] relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="text-[#43474f] hover:text-[#001e40]"><CircleHelp size={20} /></button>
            
            <div className="flex items-center gap-3 pl-6 border-l border-[#e0e3e5]">
              <div className="text-right hidden md:block">
                <div className="text-sm font-bold text-[#191c1e]">Kamal Perera</div>
                <div className="text-[10px] text-[#43474f] uppercase">Citizen ID: B934421V</div>
              </div>
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="Profile" className="w-10 h-10 rounded-full border border-[#e0e3e5] object-cover" />
            </div>
          </div>
        </header>

        {/* Scrollable Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-[1200px] mx-auto">
            
            {/* Page Title & Date */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-[#001e40] mb-2">Welcome back, Kamal</h1>
                <p className="text-[#43474f]">Here is an overview of your official documents and pending requests.</p>
              </div>
              <div className="flex items-center gap-2 bg-[#e0e3e5]/50 px-4 py-2 rounded text-sm text-[#43474f] font-medium border border-[#d8dadc]">
                <Calendar size={16} /> Tuesday, 24 October 2024
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {/* Stat 1: Active Requests */}
              <div className="bg-[#001e40] rounded-lg p-6 text-white relative overflow-hidden shadow-sm">
                <FileText size={100} className="absolute -right-6 -bottom-6 text-white opacity-5" />
                <div className="text-[10px] font-bold tracking-wider text-[#a7c8ff] uppercase mb-2">Active Requests</div>
                <div className="text-4xl font-bold mb-4">03</div>
                <div className="inline-flex items-center gap-1 text-[11px] bg-white/10 px-2 py-1 rounded text-[#a7c8ff]">
                  <Activity size={12} /> 2 added this month
                </div>
              </div>

              {/* Stat 2: Completed */}
              <div className="bg-white rounded-lg p-6 border border-[#e0e3e5] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-bold tracking-wider text-[#43474f] uppercase mb-2">Completed</div>
                  <div className="text-4xl font-bold text-[#191c1e]">12</div>
                </div>
                <div className="text-xs text-[#737780] mt-4">Last updated: 2 days ago</div>
              </div>

              {/* Stat 3: Notifications */}
              <div className="bg-white rounded-lg p-6 border border-[#e0e3e5] shadow-sm flex flex-col justify-between relative">
                <div className="absolute top-6 right-6 w-2 h-2 bg-red-500 rounded-full"></div>
                <div>
                  <div className="text-[10px] font-bold tracking-wider text-[#43474f] uppercase mb-2">Notifications</div>
                  <div className="text-4xl font-bold text-[#191c1e]">05</div>
                </div>
                <a href="#" className="text-xs font-medium text-[#0058be] hover:underline mt-4 flex items-center gap-1">
                  View all alerts &rarr;
                </a>
              </div>

              {/* Stat 4: Identity Verified */}
              <div className="bg-[#f2f4f6] rounded-lg p-6 border border-[#e0e3e5] shadow-sm flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-[#001e40] text-white rounded-full flex items-center justify-center mb-3">
                  <ShieldCheck size={24} />
                </div>
                <div className="text-sm font-bold text-[#191c1e]">Identity Verified</div>
                <div className="text-xs text-[#737780]">e-ID active since 2021</div>
              </div>
            </div>

            {/* Split Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Recent Requests Table (Spans 2 cols) */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-[#e0e3e5] rounded-lg shadow-sm">
                  <div className="p-6 border-b border-[#e0e3e5] flex items-center justify-between">
                    <h2 className="text-lg font-bold text-[#191c1e]">Recent Document Requests</h2>
                    <a href="#" className="text-sm font-medium text-[#0058be] hover:underline">View All Documents</a>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-[10px] text-[#737780] uppercase bg-[#f2f4f6] border-b border-[#e0e3e5]">
                        <tr>
                          <th className="px-6 py-4 font-bold tracking-wider">Reference ID</th>
                          <th className="px-6 py-4 font-bold tracking-wider">Document Type</th>
                          <th className="px-6 py-4 font-bold tracking-wider">Submission Date</th>
                          <th className="px-6 py-4 font-bold tracking-wider">Status</th>
                          <th className="px-6 py-4 font-bold tracking-wider text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#e0e3e5]">
                        {/* Row 1 */}
                        <tr className="hover:bg-[#f7f9fb] transition-colors">
                          <td className="px-6 py-4 text-[#43474f] font-mono text-xs">#SRL-992-01</td>
                          <td className="px-6 py-4">
                            <div className="font-bold text-[#191c1e]">New Passport (Normal)</div>
                            <div className="text-xs text-[#737780]">Department of Immigration</div>
                          </td>
                          <td className="px-6 py-4 text-[#43474f]">Oct 20, 2024</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                              Pending
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-[#737780] hover:text-[#191c1e]"><MoreVertical size={18} /></button>
                          </td>
                        </tr>
                        {/* Row 2 */}
                        <tr className="hover:bg-[#f7f9fb] transition-colors">
                          <td className="px-6 py-4 text-[#43474f] font-mono text-xs">#SRL-845-92</td>
                          <td className="px-6 py-4">
                            <div className="font-bold text-[#191c1e]">Translation Certification</div>
                            <div className="text-xs text-[#737780]">Ministry of Foreign Affairs</div>
                          </td>
                          <td className="px-6 py-4 text-[#43474f]">Oct 15, 2024</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Approved
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-[#0058be] hover:text-[#001e40]"><Download size={18} /></button>
                          </td>
                        </tr>
                        {/* Row 3 */}
                        <tr className="hover:bg-[#f7f9fb] transition-colors">
                          <td className="px-6 py-4 text-[#43474f] font-mono text-xs">#SRL-711-43</td>
                          <td className="px-6 py-4">
                            <div className="font-bold text-[#191c1e]">NIC Replacement</div>
                            <div className="text-xs text-[#737780]">Registrar General's Dept</div>
                          </td>
                          <td className="px-6 py-4 text-[#43474f]">Sep 28, 2024</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Approved
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-[#0058be] hover:text-[#001e40]"><Download size={18} /></button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Right Column: Quick Actions & Tracking (Spans 1 col) */}
              <div className="space-y-6">
                
                {/* Quick Actions Grid */}
                <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 shadow-sm">
                  <h2 className="text-xs font-bold text-[#43474f] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Activity size={14} className="text-[#0058be]" /> Quick Actions
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex flex-col items-center justify-center p-4 border border-[#e0e3e5] rounded hover:border-[#0058be] hover:bg-[#f7f9fb] transition-colors text-[#191c1e] group">
                      <IdCard size={24} className="text-[#43474f] mb-2 group-hover:text-[#0058be]" />
                      <span className="text-[11px] font-bold text-center">Apply for NIC</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 border border-[#e0e3e5] rounded hover:border-[#0058be] hover:bg-[#f7f9fb] transition-colors text-[#191c1e] group">
                      <CreditCard size={24} className="text-[#43474f] mb-2 group-hover:text-[#0058be]" />
                      <span className="text-[11px] font-bold text-center">Pay Levies</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 border border-[#e0e3e5] rounded hover:border-[#0058be] hover:bg-[#f7f9fb] transition-colors text-[#191c1e] group">
                      <Languages size={24} className="text-[#43474f] mb-2 group-hover:text-[#0058be]" />
                      <span className="text-[11px] font-bold text-center">Translation</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 border border-[#e0e3e5] rounded hover:border-[#0058be] hover:bg-[#f7f9fb] transition-colors text-[#191c1e] group">
                      <History size={24} className="text-[#43474f] mb-2 group-hover:text-[#0058be]" />
                      <span className="text-[11px] font-bold text-center">Tax History</span>
                    </button>
                  </div>
                </div>

                {/* Vertical Tracking Stepper */}
                <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 shadow-sm">
                  <h2 className="text-xs font-bold text-[#191c1e] uppercase tracking-wider mb-6">
                    Tracking: #SRL-992-01
                  </h2>
                  
                  <div className="relative border-l-2 border-[#e0e3e5] ml-3 space-y-8">
                    {/* Step 1 */}
                    <div className="relative pl-6">
                      <div className="absolute -left-[11px] top-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-4 border-white">
                        <CheckCircle2 size={12} className="text-white" />
                      </div>
                      <div className="text-sm font-bold text-[#191c1e]">Application Submitted</div>
                      <div className="text-xs text-[#737780]">Oct 20, 10:45 AM</div>
                    </div>
                    {/* Step 2 */}
                    <div className="relative pl-6">
                      <div className="absolute -left-[11px] top-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-4 border-white">
                        <CheckCircle2 size={12} className="text-white" />
                      </div>
                      <div className="text-sm font-bold text-[#191c1e]">Payment Verified</div>
                      <div className="text-xs text-[#737780]">Oct 20, 02:15 PM</div>
                    </div>
                    {/* Step 3 (Active) */}
                    <div className="relative pl-6">
                      <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#2170e4] rounded-full flex items-center justify-center border-4 border-white">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <div className="text-sm font-bold text-[#0058be]">Security Clearance</div>
                      <div className="text-xs text-[#737780]">In Progress - Since Oct 21</div>
                    </div>
                    {/* Step 4 (Pending) */}
                    <div className="relative pl-6">
                      <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#e0e3e5] rounded-full border-4 border-white"></div>
                      <div className="text-sm font-bold text-[#737780]">Final Printing</div>
                      <div className="text-xs text-[#737780]">Estimated: Oct 26</div>
                    </div>
                  </div>

                  <button className="w-full mt-8 border border-[#c3c6d1] text-[#0058be] py-2 rounded text-sm font-medium hover:bg-[#f7f9fb] transition-colors">
                    Full Tracking View
                  </button>
                </div>

              </div>
            </div>
          </div>
          
          {/* Footer inside main content area */}
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
import React from 'react';
import { 
  LayoutDashboard, IdCard, Plane, Languages, Activity, Archive, 
  Settings, LogOut, Plus, Bell, CircleHelp, Search, Download, 
  History, Users, ClipboardList, AlertTriangle, HeartPulse, CheckCircle2, Eye
} from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-[#f7f9fb] font-sans text-[#191c1e] overflow-hidden">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="w-[280px] bg-[#001e40] text-white flex flex-col flex-shrink-0 z-20">
        <div className="p-6">
          <div className="font-bold text-lg tracking-tight">Citizen Portal</div>
          <div className="text-[10px] text-[#a7c8ff] uppercase tracking-wider">Department of Registration</div>
        </div>

        <div className="px-6 mb-6">
          <button className="w-full bg-[#2170e4] hover:bg-[#0058be] text-white py-2.5 rounded flex items-center justify-center gap-2 text-sm font-medium transition-colors">
            <Plus size={18} /> New Request
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-[#2170e4] text-white rounded text-sm font-medium">
            <LayoutDashboard size={18} /> Dashboard
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
          <div className="text-[#001e40] font-bold text-xl tracking-tight">
            GovDocs Sri Lanka
          </div>
          
          <div className="flex-1 max-w-xl mx-8">
            <div className="flex bg-[#f2f4f6] rounded border border-[#e0e3e5] px-3 py-2">
              <Search size={18} className="text-[#737780] mr-2" />
              <input type="text" placeholder="Search case ID or citizen..." className="bg-transparent flex-1 outline-none text-sm text-[#191c1e]" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-[#43474f] hover:text-[#001e40] relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="text-[#43474f] hover:text-[#001e40]"><CircleHelp size={20} /></button>
            
            <div className="flex items-center gap-3 pl-6 border-l border-[#e0e3e5]">
              <div className="text-right hidden md:block">
                <div className="text-sm font-bold text-[#191c1e]">Admin Panel</div>
                <div className="text-[10px] text-[#737780] uppercase tracking-wider">Super Officer</div>
              </div>
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" alt="Admin Profile" className="w-10 h-10 rounded-full border border-[#e0e3e5] object-cover" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-[1400px] mx-auto">
            
            {/* Title & Actions */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-[#001e40] mb-2">System Overview</h1>
                <p className="text-[#43474f]">Real-time monitoring of document processing and humanitarian aid requests.</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-white border border-[#c3c6d1] text-[#0058be] px-4 py-2 rounded text-sm font-medium hover:bg-[#f2f4f6] transition-colors">
                  <Download size={16} /> Export Report
                </button>
                <button className="flex items-center gap-2 bg-[#001e40] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#003366] transition-colors">
                  <History size={16} /> Activity Log
                </button>
              </div>
            </div>

            {/* Top Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-[#e6e8ea] text-[#43474f] rounded flex items-center justify-center"><Users size={20} /></div>
                  <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded">+4.2%</span>
                </div>
                <div className="text-[11px] font-bold tracking-wider text-[#43474f] uppercase mb-1">Total Citizens</div>
                <div className="text-3xl font-bold text-[#191c1e]">1.24M</div>
              </div>

              <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-[#e6e8ea] text-[#0058be] rounded flex items-center justify-center"><ClipboardList size={20} /></div>
                  <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-1 rounded">Urgent</span>
                </div>
                <div className="text-[11px] font-bold tracking-wider text-[#43474f] uppercase mb-1">Pending Approvals</div>
                <div className="text-3xl font-bold text-[#191c1e]">3,842</div>
              </div>

              <div className="bg-[#ffdad6] border border-[#ba1a1a]/20 rounded-lg p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-[#ba1a1a] text-white rounded flex items-center justify-center"><HeartPulse size={20} /></div>
                  <span className="text-xs font-bold text-[#93000a] tracking-wider uppercase">Critical</span>
                </div>
                <div className="text-[11px] font-bold tracking-wider text-[#93000a] uppercase mb-1">Humanitarian Cases</div>
                <div className="text-3xl font-bold text-[#ba1a1a]">127</div>
              </div>

              <div className="bg-white border border-[#e0e3e5] rounded-lg p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-[#e6e8ea] text-[#191c1e] rounded flex items-center justify-center"><CheckCircle2 size={20} /></div>
                  <span className="text-xs font-bold text-[#737780] bg-[#f2f4f6] px-2 py-1 rounded">MTD</span>
                </div>
                <div className="text-[11px] font-bold tracking-wider text-[#43474f] uppercase mb-1">Completed Requests</div>
                <div className="text-3xl font-bold text-[#191c1e]">14.8K</div>
              </div>
            </div>

            {/* Grid Area: Chart & Action Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Chart Placeholder */}
              <div className="lg:col-span-2 bg-white border border-[#e0e3e5] rounded-lg p-6 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-sm font-bold text-[#191c1e]">Request Volume Trend</h2>
                  <div className="flex bg-[#f2f4f6] p-1 rounded text-xs font-medium">
                    <button className="px-3 py-1 bg-white shadow-sm rounded text-[#191c1e]">Weekly</button>
                    <button className="px-3 py-1 text-[#737780] hover:text-[#191c1e]">Monthly</button>
                  </div>
                </div>
                <div className="flex-1 flex items-end justify-between gap-2 h-48 border-b border-[#e0e3e5] pb-2 relative">
                  {/* CSS Bar Chart Simulation */}
                  {[40, 60, 100, 80, 120, 30, 20].map((height, i) => (
                    <div key={i} className="w-full bg-[#d5e3ff] hover:bg-[#a7c8ff] rounded-t transition-colors relative group" style={{ height: `${height}%` }}>
                       <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#191c1e] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Vol: {height * 12}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-[#737780] mt-3 font-medium uppercase">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>

              {/* Two Action Cards */}
              <div className="space-y-6">
                <div className="bg-[#001e40] rounded-lg p-6 text-white relative overflow-hidden h-[160px] flex flex-col justify-between group cursor-pointer">
                  <Users size={100} className="absolute -right-4 -bottom-4 text-white opacity-5 transition-transform group-hover:scale-110" />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Manage Users</h3>
                    <p className="text-sm text-[#a7c8ff] leading-relaxed max-w-[80%]">Review permissions and active sessions for all department staff.</p>
                  </div>
                  <div className="text-white"><Search size={20} /></div>
                </div>

                <div className="bg-[#2170e4] rounded-lg p-6 text-white relative overflow-hidden h-[160px] flex flex-col justify-between group cursor-pointer">
                  <ClipboardList size={100} className="absolute -right-4 -bottom-4 text-white opacity-10 transition-transform group-hover:scale-110" />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Manage Requests</h3>
                    <p className="text-sm text-blue-100 leading-relaxed max-w-[80%]">Access global queue and assign cases to specialized officers.</p>
                  </div>
                  <div className="text-white"><Search size={20} /></div>
                </div>
              </div>
            </div>

            {/* Bottom Section: Tasks & Table */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Priority Tasks */}
              <div className="bg-white border border-[#e0e3e5] rounded-lg shadow-sm flex flex-col">
                <div className="p-5 border-b border-[#e0e3e5]">
                  <h2 className="text-sm font-bold text-[#191c1e]">Priority Tasks</h2>
                </div>
                <div className="flex-1 p-5 space-y-4">
                  
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="mt-1 w-4 h-4 border-2 border-[#c3c6d1] rounded flex-shrink-0 group-hover:border-[#0058be]"></div>
                    <div>
                      <div className="text-sm font-bold text-[#191c1e]">Approve Overseas Medical Travel</div>
                      <div className="text-xs text-[#43474f] mb-2">Request #4492 - Kandy General Hospital</div>
                      <span className="text-[10px] font-bold bg-[#ffdad6] text-[#93000a] px-2 py-0.5 rounded">12m ago</span>
                    </div>
                  </label>

                  <div className="h-px bg-[#e0e3e5]"></div>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="mt-1 w-4 h-4 border-2 border-[#c3c6d1] rounded flex-shrink-0 group-hover:border-[#0058be]"></div>
                    <div>
                      <div className="text-sm font-bold text-[#191c1e]">Security Clearance: Port Authority</div>
                      <div className="text-xs text-[#43474f] mb-2">Batch processing for 45 employees</div>
                      <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">1h ago</span>
                    </div>
                  </label>

                </div>
                <div className="p-4 border-t border-[#e0e3e5] text-center">
                  <a href="#" className="text-sm font-bold text-[#0058be] hover:underline">View All Tasks</a>
                </div>
              </div>

              {/* Recent Approval Requests */}
              <div className="lg:col-span-2 bg-white border border-[#e0e3e5] rounded-lg shadow-sm">
                <div className="p-5 border-b border-[#e0e3e5] flex justify-between items-center">
                  <h2 className="text-sm font-bold text-[#191c1e]">Recent Approval Requests</h2>
                  <a href="#" className="text-sm font-medium text-[#0058be] hover:underline">See detailed list</a>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-[10px] text-[#737780] uppercase bg-[#f2f4f6] border-b border-[#e0e3e5]">
                      <tr>
                        <th className="px-5 py-3 font-bold tracking-wider">Case ID</th>
                        <th className="px-5 py-3 font-bold tracking-wider">Citizen Name</th>
                        <th className="px-5 py-3 font-bold tracking-wider">Category</th>
                        <th className="px-5 py-3 font-bold tracking-wider">Status</th>
                        <th className="px-5 py-3 font-bold tracking-wider text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e0e3e5]">
                      <tr className="hover:bg-[#f7f9fb]">
                        <td className="px-5 py-4 text-[#43474f] font-mono text-xs">#ID-98210</td>
                        <td className="px-5 py-4 font-bold text-[#191c1e]">Samantha Perera</td>
                        <td className="px-5 py-4 text-[#43474f]">Passport Renewal</td>
                        <td className="px-5 py-4"><span className="px-2 py-1 bg-amber-100 text-amber-800 text-[10px] font-bold rounded">Reviewing</span></td>
                        <td className="px-5 py-4 text-right"><button className="text-[#0058be] hover:text-[#001e40]"><Eye size={16}/></button></td>
                      </tr>
                      <tr className="hover:bg-[#f7f9fb]">
                        <td className="px-5 py-4 text-[#43474f] font-mono text-xs">#TR-55412</td>
                        <td className="px-5 py-4 font-bold text-[#191c1e]">Mohamed Rizwan</td>
                        <td className="px-5 py-4 text-[#43474f]">Deed Translation</td>
                        <td className="px-5 py-4"><span className="px-2 py-1 bg-green-100 text-green-800 text-[10px] font-bold rounded">Verified</span></td>
                        <td className="px-5 py-4 text-right"><button className="text-[#0058be] hover:text-[#001e40]"><Eye size={16}/></button></td>
                      </tr>
                      <tr className="hover:bg-[#f7f9fb]">
                        <td className="px-5 py-4 text-[#43474f] font-mono text-xs">#HU-00129</td>
                        <td className="px-5 py-4 font-bold text-[#ba1a1a]">Lalith Gamage</td>
                        <td className="px-5 py-4 text-[#43474f]">Special Aid</td>
                        <td className="px-5 py-4"><span className="px-2 py-1 bg-[#ffdad6] text-[#93000a] text-[10px] font-bold rounded">Urgent</span></td>
                        <td className="px-5 py-4 text-right"><button className="text-[#0058be] hover:text-[#001e40]"><Eye size={16}/></button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
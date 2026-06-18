// app/page.js
'use html';
'use client';
import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [requests, setRequests] = useState([]);

  // Fetch data directly from your local Node.js backend
  useEffect(() => {
    fetch('http://13.201.122.31/api/admin/requests')
      .then(res => res.json())
      .then(data => setRequests(data))
      .catch(err => console.error("Error connecting to backend:", err));
  }, []);

  // Function to simulate clicking 'Approve' or 'Reject'
  const updateStatus = (id, newStatus) => {
    fetch(`http://13.201.122.31/api/admin/requests/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    })
    .then(res => res.json())
    .then(() => {
      // Refresh local UI state immediately
      setRequests(requests.map(req => req.id === id ? { ...req, status: newStatus } : req));
    });
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen font-sans text-black">
      <h1 className="text-3xl font-bold border-b pb-4 mb-6">Sri Lanka Digital ID System - Admin Panel</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Incoming Citizen Document Requests</h2>
        
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">Applicant Name</th>
              <th className="p-3">Document Requested</th>
              <th className="p-3">Current Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(req => (
              <tr key={req.id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{req.applicant}</td>
                <td className="p-3">{req.type}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-sm font-bold ${
                    req.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {req.status}
                  </span>
                </td>
                <td className="p-3 flex gap-2">
                  <button onClick={() => updateStatus(req.id, 'Approved')} className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded text-sm transition shadow">Approve</button>
                  <button onClick={() => updateStatus(req.id, 'Rejected')} className="bg-rose-600 hover:bg-rose-700 text-white px-3 py-1 rounded text-sm transition shadow">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

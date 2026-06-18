// frontend/app/citizen/page.js
'use client';
import { useState } from 'react';

export default function CitizenDashboard() {
  const [applicant, setApplicant] = useState('');
  const [type, setType] = useState('NIC');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch('http://13.201.122.31/api/citizen/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ applicant, type })
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Success! Your document request has been securely submitted to the government portal.' });
        setApplicant(''); // Clear the input field after success
      } else {
        setMessage({ type: 'error', text: 'Error submitting request. Please try again.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network Error: Cannot connect to the server.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-10 bg-slate-50 min-h-screen font-sans text-black flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-slate-100">
        
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Sri Lanka Citizen Portal</h1>
        <p className="text-slate-500 mb-6 text-sm">Request your official government documents online.</p>
        
        {/* Status Message Display */}
        {message && (
          <div className={`p-3 rounded mb-4 text-sm font-medium ${message.type === 'success' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* Full Name Input */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
            <input 
              type="text" 
              required
              value={applicant}
              onChange={(e) => setApplicant(e.target.value)}
              placeholder="e.g. Nimal Perera"
              className="w-full border border-slate-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Document Type Dropdown */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Document Required</label>
            <select 
              value={type} 
              onChange={(e) => setType(e.target.value)}
              className="w-full border border-slate-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="NIC">National Identity Card (NIC)</option>
              <option value="Passport">Passport</option>
              <option value="Birth Certificate">Birth Certificate</option>
              <option value="Driving License">Driving License</option>
            </select>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition disabled:bg-blue-300"
          >
            {isLoading ? 'Submitting securely...' : 'Submit Request'}
          </button>
          
        </form>
      </div>
    </div>
  );
}
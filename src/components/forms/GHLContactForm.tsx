import React, { useState } from 'react';
import { mapFormDataToGHL } from '../../utils/ghl';
import Button from '../shared/Button';

const GHLContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    branch: '',
    clearanceLevel: '',
    mosCode: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ghlData = mapFormDataToGHL(formData);
    
    try {
      // Replace with your GHL location ID
      const response = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_GHL_API_KEY'
        },
        body: JSON.stringify(ghlData)
      });
      
      if (response.ok) {
        alert('Thank you for your interest. We will contact you shortly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          className="bg-[#181715] border border-[#4E5A3C]/20 text-white p-3 rounded"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          className="bg-[#181715] border border-[#4E5A3C]/20 text-white p-3 rounded"
          required
        />
      </div>
      
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full bg-[#181715] border border-[#4E5A3C]/20 text-white p-3 rounded"
        required
      />
      
      <input
        type="tel"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full bg-[#181715] border border-[#4E5A3C]/20 text-white p-3 rounded"
        required
      />
      
      <select
        value={formData.branch}
        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
        className="w-full bg-[#181715] border border-[#4E5A3C]/20 text-white p-3 rounded"
        required
      >
        <option value="">Select Military Branch</option>
        <option value="army">U.S. Army</option>
        <option value="navy">U.S. Navy</option>
        <option value="airforce">U.S. Air Force</option>
        <option value="marines">U.S. Marines</option>
        <option value="coastguard">U.S. Coast Guard</option>
        <option value="spaceforce">U.S. Space Force</option>
      </select>

      <Button type="submit" size="lg" className="w-full">
        Submit
      </Button>
    </form>
  );
};

export default GHLContactForm;
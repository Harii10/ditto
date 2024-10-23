import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import InsuranceContent from './Components/InsuranceContent';
import MainComponent from './Components/HealthInsuranceCard';
import Footer from './Components/Footer';

function App() {
  // State for selected insurer and available policies
  const [selectedInsurer, setSelectedInsurer] = useState('');
  const [availablePolicies, setAvailablePolicies] = useState([]);
  const [selectedPolicy, setSelectedPolicy] = useState('');

  // Policies mapping for each insurer
  const policies = {
    'Insurer 1': ['ASSURE', 'SUPER STAR', 'YOUNG GOLD', 'PREMIER', 'COMPREHENSIVE', 'YOUTH SILVER'],
    'Insurer 2': ['ENERGY SILVER', 'ENERGY GOLD', 'ENERGY DIAMOND'],
    'Insurer 3': ['FREEDOM', 'CLASSIC', 'SENIOR', 'ADVANTAGE', 'SUPREME'],
  };

  // Handle insurer change
  const handleInsurerChange = (event) => {
    const insurer = event.target.value;
    setSelectedInsurer(insurer);
    // Set available policies based on selected insurer
    setAvailablePolicies(policies[insurer] || []);
    setSelectedPolicy(''); // Reset the selected policy
  };

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="content">
          <h4>IF YOU ALREADY HAVE A PLAN</h4>
          <h1>Understand Your Health Insurance Policy</h1>
          <p>
            Understand what your policy has to offer. Read terms and conditions in plain English. 
            And discover the good, the bad, and the lacking features in your health plan.
          </p>
          <div className="form-container">
            <select className="dropdown" value={selectedInsurer} onChange={handleInsurerChange}>
              <option value="">Select Insurer</option>
              <option value="Insurer 1">STAR HEALTH</option>
              <option value="Insurer 2">HDFC ERGO</option>
              <option value="Insurer 3">CARE</option>
            </select>
            <select className="dropdown" value={selectedPolicy} onChange={(e) => setSelectedPolicy(e.target.value)}>
              <option value="">Select the policy</option>
              {availablePolicies.map((policy, index) => (
                <option key={index} value={policy}>{policy}</option>
              ))}
            </select>
            <button className="check-button" disabled={!selectedPolicy}>Check now</button>
          </div>
        </div>
      </div>
      {/* Add InsuranceContent component below */}
      <InsuranceContent />
      <MainComponent/>
      <Footer/>
    </div>
  );
}

export default App;

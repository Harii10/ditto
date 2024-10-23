import React, { useState } from 'react';
import adityaBirlaLogo from '../img/adityabirla.webp';
import hdfcergoLogo from '../img/hdfcergo.webp';
import starLogo from '../img/star.webp';
import nivabupaLogo from '../img/nivabupa.webp';
import careLogo from '../img/care.webp';

// Component for an individual health insurance card
const HealthInsuranceCard = ({ logoSrc, companyName, policyName, description, logoSize, cardWidth, cardHeight }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      border: '1px solid #ccc',
      borderRadius: '15px',
      padding: '15px',
      margin: '10px',
      width: cardWidth || '800px',
      height: cardHeight || 'auto',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white',
      overflow: 'hidden',
      textAlign: 'left',
      flexShrink: 0,
    }}>
      <img
        src={logoSrc}
        alt={`${companyName} logo`}
        style={{
          width: logoSize,
          height: logoSize,
          borderRadius: '50%',
          marginRight: '15px',
        }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
          <h3 style={{ margin: '0', fontSize: '1.2em' }}>{companyName}</h3>
          <h4 style={{ margin: '5px 0', fontWeight: 'bold' }}>{policyName}</h4>
        </div>
        <p style={{ margin: '0', fontSize: '0.9em' }}>
          {description}
        </p>
      </div>
    </div>
  );
};

// Main component for displaying health insurance cards
const HealthInsuranceCards = ({ cardsData, isHovered }) => {
  return (
    <div
      style={{
        display: 'flex',
        overflowX: 'auto',
        padding: '20px 0',
        paddingBottom: '8px', // Reserve space for scrollbar
        scrollbarWidth: 'thin', // For Firefox
        overflowY: 'hidden', // Prevent vertical scroll
        position: 'relative', // To ensure the scrollbar is fixed relative to this div
      }}
      onMouseEnter={() => (document.getElementById('scrollbar').style.opacity = 1)}
      onMouseLeave={() => (document.getElementById('scrollbar').style.opacity = 0)}
    >
      <div id="scrollbar" style={{
        position: 'absolute',
        height: '8px',
        background: 'transparent',
        opacity: 0,
        transition: 'opacity 0.5s',
        bottom: 0,
        left: 0,
        right: 0,
        pointerEvents: 'none', // Prevent mouse events on the scrollbar
      }} />
      {cardsData.map((card, index) => (
        <HealthInsuranceCard
          key={index}
          logoSrc={card.logoSrc}
          companyName={card.companyName}
          policyName={card.policyName}
          description={card.description}
          logoSize={card.logoSize}
          cardWidth={card.cardWidth}
          cardHeight={card.cardHeight}
        />
      ))}
    </div>
  );
};

// Main component to render the cards section
const MainComponent = () => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover status

  // First set of cards data
  const cardsDataSet1 = [
    {
      logoSrc: hdfcergoLogo,
      companyName: 'HDFC ERGO',
      policyName: 'Optima Restore',
      description: 'A comprehensive policy from a brand that has one of the best claim settlement numbers in the country. With no restrictions on room rent, a high no-claim bonus, and a rather affordable price, Optima Restore is a perfect fit for individuals.',
      logoSize: '50px',
      cardWidth: '400px',
      cardHeight: '220px',
    },
    {
      logoSrc: starLogo,
      companyName: 'STAR HEALTH',
      policyName: 'Young Star',
      description: "This policy may not be as comprehensive as the other policies in its class. But it's one of the most economical options out there and something young individuals can definitely consider.",
      logoSize: '50px',
      cardWidth: '400px',
      cardHeight: 'auto',
    },
    {
      logoSrc: adityaBirlaLogo,
      companyName: 'ADITYA BIRLA',
      policyName: 'Activ Assured Diamond',
      description: 'A really good policy that gives you the freedom to pick any room you want, offers free health check-ups, and one that restores your cover by up to 150% of the Sum Insured after making a claim.',
      logoSize: '50px',
      cardWidth: '400px',
      cardHeight: 'auto',
    },
    {
      logoSrc: nivabupaLogo,
      companyName: 'NIVA BUPA',
      policyName: 'ReAssure',
      description: "One of the most sought after policies in recent years, ReAssure is known for its comprehensive benefits, a sizable no claim bonus, and most importantly unlimited restoration. And it's also extremely economical.",
      logoSize: '50px',
      cardWidth: '400px',
      cardHeight: 'auto',
    }
  ];

  // Second set of cards data
  const cardsDataSet2 = [
    {
      logoSrc: hdfcergoLogo,
      companyName: 'HDFC ERGO',
      policyName: 'Energy Silver',
      description: "If you're diabetic or suffering from Hypertension, then this policy is for you, considering the fact that the Insurer covers all complications arising out of these conditions from Day 1.",
      logoSize: '50px',
      cardWidth: '400px',
      cardHeight: '220px',
    },
    {
      logoSrc: careLogo,
      companyName: 'CARE',
      policyName: 'Care Freedom Plan',
      description: "If you have pre-existing diseases, you'll only have to wait 2 years before you can make a claim related to those specific illnesses. However, the policy does come with a few restrictions. So you may want to read the fine print.",
      logoSize: '50px',
      cardWidth: '400px',
      cardHeight: 'auto',
    },
    {
      logoSrc: adityaBirlaLogo,
      companyName: 'ADITYA BIRLA',
      policyName: 'Activ Health Platinum Enhanced',
      description: "A comprehensive policy that also offers an optional chronic management program where they cover conditions like diabetes and hypertension without imposing a waiting period. The only downside? It's also one of the most expensive policies in the market.",
      logoSize: '50px',
      cardWidth: '400px',
      cardHeight: 'auto',
    },
    {
      logoSrc: starLogo,
      companyName: 'STAR HEALTH',
      policyName: 'Comprehensive',
      description: "A pretty comprehensive policy overall. And it's one of the few products that gives you the option to reduce the standard pre-existing disease waiting period from 3 years to 1 year. So if you're willing to pay a little extra, you could get yourself a solid plan that covers most Illnesses in a reasonable period of time.",
      logoSize: '50px',
      cardWidth: '400px',
      cardHeight: 'auto',
    }
  ];

  return (
    <div style={{ padding: '40px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ marginBottom: '15px' }}>Frequently looked policies for salaried individuals:</h2>
      
      {/* Cards Section 1 */}
      <div 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <HealthInsuranceCards cardsData={cardsDataSet1} isHovered={isHovered} />
      </div>
      
      <h2 style={{ marginTop: '80px', marginBottom: '15px' }}>Frequently looked policies for people with Diabetes:</h2>
      
      {/* Cards Section 2 */}
      <div 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <HealthInsuranceCards cardsData={cardsDataSet2} isHovered={isHovered} />
      </div>

      {/* Custom Scrollbar Styles */}
      <style>
        {`
          /* For WebKit browsers (Chrome, Safari) */
          ::-webkit-scrollbar {
            height: 8px; /* Adjust height of horizontal scrollbar */
            background: transparent; /* Initially transparent */
          }

          ::-webkit-scrollbar-thumb {
            background-color: #888; /* Color of the scrollbar thumb */
            border-radius: 10px; /* Rounded edges */
          }

          ::-webkit-scrollbar-thumb:hover {
            background-color: #555; /* Color on hover */
          }

          /* For Firefox */
          .scrollable {
            scrollbar-width: thin; /* Use thin scrollbar */
            scrollbar-color: #888 transparent; /* Thumb color and track color */
          }

          .scrollable:hover {
            scrollbar-color: #555 transparent; /* Thumb color on hover */
          }
        `}
      </style>
    </div>
  );
};

export default MainComponent;

import React from 'react';
import image1 from '../img/1.jpg';


// Spacer component for customizable spacing
const Spacer = ({ size }) => {
    return <div style={{ margin: `${size}px 0` }} />;
  };

// A reusable component for content sections
const ContentSection = ({ title, children }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2 style={{ fontSize: '1.8em', marginBottom: '10px' }}>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

// Main component
const InsuranceContent = () => {
  console.log("InsuranceContent component rendered");
  return (
    <div style={{ 
      backgroundColor: 'white', // White background for the entire component
      padding: '80px 80px', // Padding to create space on left and right
      fontFamily: 'Arial, sans-serif', 
      lineHeight: '1.6' 
    }}>
      <ContentSection title="What is a Health Insurance Policy?">
      <p>
        A Health insurance policy is a contract underscored by one key arrangement – You pay a sum every year or every 2 years or every 3 years, depending on how you structure the policy and you get the insurance company to pay for all medical expenses you incur when you’re eventually hospitalized.
      </p>
      <p>
        The sum you pay every year is called the premium. And the protection you receive in return is characterized by the total cover or the Sum Insured. So the first question you consider when buying a health insurance policy is this –
      </p>
      <p><strong>A Quick Word:</strong> Did you know that going through insurance policy wordings means simultaneously scanning a financial, medical, and legal document? And well, that sounds taxing!</p>
      <p>Here’s what we suggest — leave that part to us! Book a 30-minute call with us and get solid insurance advice from IRDAI-certified advisors! No spam, no cold calls - just a conversation for your customised policy!</p>
      <p><strong>Limited slots! Book today!</strong></p>   </ContentSection>

      <ContentSection title="What kind of cover should I need? Or in other words what is the ideal Sum Insured?">
      <p>
      Well, that depends on a few things. But in general, a cover of anywhere between ₹10–20 lakhs is a good option to consider. If you go under ₹10 lakhs, say ₹2–3 lakhs, then you run the risk of short-changing yourself.
      </p>
      <p>
Sure, ₹2–3 lakhs isn’t a modest sum by any account. But it isn’t a life-changing sum either. If you’re ever hospitalized for an ailment, you will likely be able to put together this kind of money without an insurer. It won’t be pleasant and it most certainly won’t be easy. But it’s something that you can hope to cobble together if you really need the cash.
</p>

Well in our experience, even the more expensive treatments hardly ever breach the ₹20 lakh mark. You’d have to really struggle to find a comprehensive list of treatments that will cost you more. Also in most cases, health insurance policies offer you significantly higher protection than you may have imagined. For instance, with a comprehensive policy, you could get a base cover of say ₹10 lakhs, a no-claim bonus that could add another ₹10 lakhs in a couple of years, and a restoration benefit that would offer you an additional ₹10 lakhs worth of protection. All in all, you’d be covering for most exigencies by picking a cover anywhere between ₹10–20 lakhs without spending a fortune.      </ContentSection>



<img
  src={image1} // Correct way to use the imported image
  alt="Health Insurance Illustration"
  style={{
    width: '100%', // Make it responsive
    maxWidth: '100%', // Ensure it does not exceed the width of the container
    height: 'auto', // Maintain aspect ratio
    margin: '0 0px', // To match the main padding
    display: 'block', // Center the image block
  }}
/>
<Spacer size={30} /> {/* Customizable space */}

      <ContentSection title="How to buy a health insurance policy if you’re a salaried individual?">
      <p>
      If you’re a salaried individual, you likely have a corporate health insurance policy. However, bear in mind that corporate health insurance policies come with their own caveats. For one, your employer may not be particularly inclined to extend a plan with extensive benefits. And they routinely impose restrictions on these plans. The most popular restrictions include restrictions on room rent. So if you want to upgrade your room when you’re being treated for an illness, you may have to pay extra. Then there’s the fact that corporate health insurance plans only cover your expenses when you’re employed with the same company. If you quit, you will also have to let go of the benefits associated with the plan.
      </p>
      <p>
Meaning, all things considered, it makes sense to have a separate health insurance plan that doesn’t impose these restrictions. What plans should a salaried individual consider you ask?    </p>  </ContentSection>
      <ContentSection title="Unlock Your Insurance Insights!">
        <p>
      Ready to take charge of your health insurance? Let our team of IRDAI-certified experts guide you through the maze of policies. Book a complimentary 30-minute consultation with us!  
      </p>
      <strong>What to Expect:</strong>
      <Spacer size={15} /> {/* Customizable space */}
      <li>Tailored advice that fits your unique needs.</li>
          <li>A friendly chat with no pressure, no spam, just genuine guidance.</li>
          <li>Clear answers to your burning questions—no jargon, just clarity.</li>
          <Spacer size={15} /> {/* Customizable space */}
<p><strong>Don’t navigate this journey alone—let’s work together to find the perfect health insurance plan for you! Book your call today!</strong></p>

         
          </ContentSection>

          <Spacer size={-50} />
    </div>
  );
}

export default InsuranceContent;

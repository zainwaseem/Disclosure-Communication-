import React from "react";
import Banner from "../Components/hire/Banner";
import HireContent from "../Components/hire/HireContent";

const HireOn = () => {
  return (
    // import React from "react";
    // import Trail from "../Components/Trail";
    // import FeaturesBanner from "../Components/Features/FeaturesBanner";
    // import IntegrationsHead from "../Components/Integrations/IntegrationsHead";
    // import IntegrationsFacilities from "../Components/Integrations/IntegrationsFacilities";
    // import quickbooks from "../assets/IntegrationImgs/quickbooks.png";
    // import quickbooks from "../assets/png/image 6.png";
    // import shipstation from "../assets/png/image 8.png";
    // import ebay from "../assets/png/image 9.png";
    // import amazon from "../assets/png/image 10.png";
    // document.body.style.background = "#F9F9F9";
    <>
      {/* <div className="FeaturesBanner text-white">
        <div className=" text-4xl text-center h-full flex flex-col items-center justify-center">
          <h3 className="text-primary-100 font-semibold uppercase">
            Integrations
          </h3>
          <h2 className="font-bold uppercase">
            Seamless Connect With Just a Few Clicks
          </h2>
        </div>
      </div>  */}
      <Banner />
      {/* <IntegrationsHead /> */}
      <HireContent
        imgg={
          "https://assets-us-01.kc-usercontent.com/7beb5311-75a4-0049-50f5-8f58fd55aba7/37ae9e47-f408-4352-837e-75e71f850e46/Disclosure Communication-prime-how-to-manage-global-remote-teams.jpg?w=700&h=700&fit=clip"
        }
        headText="How it Works
"
        desc="We enable you to hire the best person in the world, not the best person in your zipcode. Here's how.
Tell us what kind of role you need to fill (we specialize in software engineers, customer support, finance, and sales). This takes under 15 mins.
We filter thousands of applications to find you the very best. Get the top 5 in your inbox daily; pre-filtered and vetted.
Interview the ones you like... then hire them!
Once you find the perfect candidate, we'll help you onboard them and manage ongoing needs like payroll.

All this without writing any job descriptions, trawling any resumés, or having your time wasted by interviewing unqualified duds. You'll never look back."
      />
      <HireContent
        imgg={
          "https://assets-us-01.kc-usercontent.com/7beb5311-75a4-0049-50f5-8f58fd55aba7/1db071c8-ce8c-49b5-b1a3-28924e5b84d9/Disclosure Communication-prime-how-it-works.jpg?w=700&h=700&fit=clip"
        }
        desc="The system we've developed is so effective that most jobs receive 20,000+ applications.

Our process then filters the best candidates based on the datapoints that are scientifically proven to correlate with high performance: from core skill tests, to real work assessments, and even problem solving ability. That's why we call our people Rockstars.

By the time the top 5 candidates land in your inbox, you'll want to hire all of them. (Seriously, it's happened more times than we can count).

And if you are already a customer of ESW, Trilogy, Aurea, IgniteTech, Avolin, or Versata, you gain access to Disclosure Communication's premium services at zero additional cost. You only pay the contractor's agreed hourly rate, with no fees, commissions or markups added on top."
        orderr={true}
      />
      {/*
      <HireContent
        imgg={ebay}
        headText="QuickBooks"
        desc="Accounting at your fingertips. Sync your purchase orders and invoices from SKUoptics to Quickbooks directly. No more manual data entry."
      />
      <HireContent
        imgg={amazon}
        desc="Accounting at your fingertips. Sync your purchase orders and invoices from SKUoptics to Quickbooks directly. No more manual data entry."
        orderr={true} */}
      />
      {/* <Trail /> */}
    </>
  );
};

export default HireOn;

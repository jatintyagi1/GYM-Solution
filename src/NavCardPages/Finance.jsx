import React from 'react'
import '../Styles/NavCardPage/finance.css';

const Finance = () => {
  return (
    <div className='finance-full-wrapper'>
      <h1 className='finance-top-text'>Finance</h1>
      <h1 className='finance-commercial-customer'>Commercial Customer : </h1>
      <div className='finance-top-wrapper'>
        <h2 className='finance-top-wrapper-top-text'>Fit Lease | Gym Equipment Finance Broker</h2>
        <p className='finance-upper-paragraph'>Fit Lease is India's only dedicated gym equipment finance broker. We understand the financial requirements of the fitness industry and we can find you the right solution regardless of your size.</p>
       <ul className='finance-upper-list-container'>
        <li>New ventures are welcomed</li>
        <li>No financials needed</li>
        <li>Non home owners accepted</li>
        <li>Approvals within 24 hours</li>
        <li>New or used equipment</li>
        <li>Minor defaults considered</li>
        <li>Unsecured finance means only the equipment is the security not your home. Fit-Lease have access to all possible sources of funds such as lease, rental and chattel mortgage with terms that suit your business and cashflow, being affiliated with over 28 financiers ensures we can offer the best rates and chances of approval for equipment finance.</li>
       </ul>
       <p className='finance-top-lower-para-a'>To apply for finance through Fit Lease, you will need a registered ABN.</p>
       <p className='finance-top-lower-para-b'><span>Contact us</span> for more information about financing.</p>
      </div>

      <div className='finance-middle-wrapper'>
        <h2 className='finance-middle-top-text-heading'>Procuret | B2B Buy Now, Pay Later</h2>
        <p className='finance-middle-para-a'>Procuret is an India's payments company that provides digital payment products for business. Providing fast, flexible and secure digital payment solutions for businesses to better manage their cash-flow.</p>
        <p className='finance-middle-para-b'>Purchase what you need today and pay in manageable monthly instalments!</p>
        <ul className='finance-middle-list-container'>
          <li>Pay in monthly instalments of 3, 6 or 12 months</li>
          <li>Valid for invoices of $500 to $65,000</li>
          <li>Terms and eligibility criteria apply</li>
        </ul>
        <p className='finance-midle-para-c'>To apply for Procuret b2b buy now pay later, you will need a registered ABN.</p>
        <p className='finance-middle-para-d'><span>Contact us</span> for more information about Procuret.</p>
      </div>

      <div className='finance-lower-wrapper'>
        <h2 className='finance-lower-top-heading'>Residential Customers : </h2>
        <p className='finance-lower-para-a'>We are currently in the process of sourcing a company who provide Finance to residential customers.</p>
        <p className='finance-lower-para-b'>If you are a residential customer seeking Finance, please contact us directly to discuss your options.</p>
      </div>
    </div>
  )
}

export default Finance;
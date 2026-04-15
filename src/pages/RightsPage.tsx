import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import './RightsPage.scss';
import './ContactsPage.scss';
export const RightsPage: React.FC = () => (
  <div className="section">
    <div
      className="top__back__link"
      onClick={() => navigate(-1)}
      style={{ cursor: 'pointer' }}
    >
      <IoIosArrowBack color="#313237" />
      <p>Back</p>
    </div>
    <div className="container">
      <h1>Terms and Customer Rights</h1>
      <p>
        Welcome to our store. By using our website and making a purchase, you
        agree to the following terms and conditions. These are designed to
        ensure transparency, fairness, and a smooth shopping experience for all
        customers.
      </p>
      <p className="rights_title">1. Product Information</p>
      <p className="rights_description">
        We strive to ensure that all product descriptions, images, and
        specifications are accurate and up to date. However, minor differences
        may occur due to manufacturer updates or display settings.
      </p>
      <p className="rights_title">2. Pricing and Payments</p>
      <p className="rights_description">
        All prices are listed in the applicable currency and include any
        required taxes unless stated otherwise. We reserve the right to change
        prices at any time. Payments must be completed using the available
        secure payment methods provided at checkout.
      </p>
      <p className="rights_title"> 3. Order Processing</p>
      <p className="rights_description">
        Once an order is placed, you will receive a confirmation email. We
        reserve the right to cancel or refuse any order in case of stock issues,
        pricing errors, or suspected fraudulent activity.
      </p>
      <p className="rights_title">4. Shipping and Delivery </p>
      <p className="rights_description">
        We aim to process and ship orders as quickly as possible. Delivery times
        may vary depending on location and courier services. Delays caused by
        external factors are beyond our control.
      </p>
      <p className="rights_title"> 5. Returns and Refunds</p>
      <p className="rights_description">
        Customers have the right to return products within the legally required
        period (e.g., 14 days) from the date of delivery, provided the items are
        unused and in original packaging. Refunds will be processed after
        inspection of the returned goods.
      </p>
      <p className="rights_title">6. Warranty and Repairs </p>
      <p className="rights_description">
        All products are covered by the manufacturer’s warranty where
        applicable. If a product is defective, customers may request repair,
        replacement, or refund in accordance with consumer protection laws. 7.
        Customer Rights
      </p>
      <p className="rights_title"> 7. Customer Rights</p>
      <p className="rights_description">
        Customers are entitled to fair treatment, secure transactions, and
        protection of their personal data. We comply with applicable consumer
        rights regulations and data protection laws
      </p>
      <p className="rights_title"> 8. Privacy Policy</p>
      <p className="rights_description">
        We respect your privacy. Personal data collected during purchases is
        used only for order processing and customer service. We do not share
        your data with unauthorized third parties
      </p>
    </div>
  </div>
);

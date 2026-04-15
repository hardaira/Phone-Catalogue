import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import './ContactsPage.scss';                         
export const ContactsPage: React.FC = () => (
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
      <h1>Contact us</h1>
      <p>Have a question about our phones, tablets, or accessories?</p>
      <p>
        We're here to help. Feel free to reach out to our support team — whether
        you need product advice, help with your order, or technical assistance.
      </p>

      <div className="contact_links">
        <a href="tel:+48881649785" className="contact_link">
          <BsTelephone
            style={{
              width: '20px',
              height: '20px',
            }}
          />
        </a>
        <a href="tel:+48881649785" className="contact_link">Call us</a>
      </div>
      <div className="contact_links">
        <a href="mailto:example@gmail.com" className="contact_link">
          <BsEnvelope
            style={{
              width: '20px',
              height: '20px',
            }}
          />
        </a>
        <a href="mailto:example@gmail.com" className="contact_link">Send us an e-mail</a>
      </div>
    </div>
  </div>
);
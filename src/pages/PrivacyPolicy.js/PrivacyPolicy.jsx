 import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import style from './PrivacyPolicy.module.css';

function PrivacyPolicy() {
  return (
    <div>
      <div className={style.policy}>
        <h1>Privacy Policy</h1>
        <p>Last updated: April 2025</p>
        <p>We value your privacy. This policy explains how we collect, use, and protect your data.</p>

        <h2>Information We Collect</h2>
        <p>We collect personal information like your  Email, and Password when you use this site.</p>

        <h2>How We Use Your Information</h2>
        <p>Your data is used to improve your experience and for marketing purposes.</p>

        <h2>Cookies</h2>
        <p>We use cookies to enhance your experience. By using our site, you consent to the use of cookies, which are stored on your device. You can manage cookies via your browser settings.</p>


        <h2>Changes to This Policy</h2>
        <p>We may update this policy. Any changes will be posted here.</p>

  
      </div>
    </div>
  );
}

export default PrivacyPolicy;

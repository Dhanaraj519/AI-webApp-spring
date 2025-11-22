

import React, { useState } from 'react';
import { Mail, User, Code } from "lucide-react";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Project Info */}
          <div className="footer-section">
            <div className="footer-icon">
              <Code size={24} />
            </div>
            <div className="footer-info">
              <h3 className="footer-title">AI-Powered Web Application</h3>
              <p className="footer-subtitle">Modern AI Tools for Creative Excellence</p>
            </div>
          </div>

          {/* Client Info */}
          <div className="footer-section">
            <div className="footer-icon">
              <User size={24} />
            </div>
            <div className="footer-info">
              <h3 className="footer-title">Dhanaraj Panabaka</h3>
              <p className="footer-subtitle">Creator & Developer</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <div className="footer-icon">
              <Mail size={24} />
            </div>
            <div className="footer-info">
              <h3 className="footer-title">Contact</h3>
              <a href="mailto:panabakadhanaraj@gmail.com" className="footer-email">
                panabakadhanaraj@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 AI-Powered Web Application. Created & Designed by Dhanaraj Panabaka.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

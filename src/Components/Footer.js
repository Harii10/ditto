import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Logo from '../img/logo.webp'; // Adjust the path as needed

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Logo Section */}
        <div style={styles.logoSection}>
          <img src={Logo} alt="Company Logo" style={styles.logoImage} />
          <p style={styles.tagline}>With Ditto, you don't just compare insurance. You understand it. Narrow down choices. Avoid pitfalls and make better decisions.</p>
        </div>

        {/* Navigation Links */}
        <div style={styles.navSection}>
          <h3 style={styles.sectionTitle}>Navigation</h3>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
            <li style={styles.navItem}><a href="#about" style={styles.navLink}>About Us</a></li>
            <li style={styles.navItem}><a href="#services" style={styles.navLink}>Services</a></li>
            <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div style={styles.socialSection}>
          <h3 style={styles.sectionTitle}>Follow Us</h3>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.iconLink}><FaFacebookF /></a>
            <a href="#" style={styles.iconLink}><FaTwitter /></a>
            <a href="#" style={styles.iconLink}><FaInstagram /></a>
            <a href="#" style={styles.iconLink}><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div style={styles.newsletterSection}>
          <h3 style={styles.sectionTitle}>Subscribe to our Newsletter</h3>
          <p style={styles.newsletterText}>Get the latest updates and offers.</p>
          <form style={styles.form}>
            <input type="email" placeholder="Enter your email" style={styles.input} required />
            <button type="submit" style={styles.button}>Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={styles.footerBottom}>
        <p style={styles.footerText}>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Styles for the footer
const styles = {
  footer: {
    backgroundColor: '#2C3E50',
    color: '#ECF0F1',
    padding: '40px 20px',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  logoSection: {
    flex: '1 1 30%',
    marginBottom: '20px',
  },
  logoImage: {
    width: '100%', // Adjust as necessary
    maxWidth: '150px', // Limit the size if needed
  },
  tagline: {
    fontSize: '16px',
    fontStyle: 'italic',
    color: 'White',
  },
  navSection: {
    flex: '1 1 20%',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  navList: {
    listStyleType: 'none',
    padding: '0',
  },
  navItem: {
    marginBottom: '8px',
  },
  navLink: {
    color: '#ECF0F1',
    textDecoration: 'none',
  },
  socialSection: {
    flex: '1 1 20%',
    marginBottom: '20px',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  iconLink: {
    color: '#ECF0F1',
    fontSize: '24px',
  },
  newsletterSection: {
    flex: '1 1 25%',
    marginBottom: '20px',
  },
  newsletterText: {
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #BDC3C7',
    flex: '1',
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#E74C3C',
    color: '#ECF0F1',
    cursor: 'pointer',
  },
  footerBottom: {
    marginTop: '20px',
    borderTop: '1px solid #BDC3C7',
    padding: '10px 0',
  },
  footerText: {
    margin: '0',
  },
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <section className="footer bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <i className="fas fa-home"></i>
                <span className="footer-other-text d-block mt-3 mb-3">
                  Explore the Latest Listings with Propertest dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </span>
                <div className="footer-social">
                  <div className="footer-social-item"><i className="fab fa-facebook"></i></div>
                  <div className="footer-social-item"><i className="fab fa-twitter"></i></div>
                  <div className="footer-social-item"> <i className="fab fa-instagram"></i></div>
                </div>
              </div>
              <div>
                <p className="footer-title">Menu</p>
                <ul className="footer-ul">
                  <li>Home</li>
                  <li>Blog</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
              
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <p className="footer-title">Contact</p>
            <ul className="footer-ul">
              <li className="flex">
                <div className="footer-info-item"><i className="fas fa-clock"></i></div> <span>08:00-18:00</span>
              </li>
              <li className="flex">
                <div className="footer-info-item" ><i className="fas fa-envelope"></i></div> <span>info@house.com</span>
              </li>
              <li className="flex">
                <div className="footer-info-item"><i className="fas fa-map-marker-alt"></i></div> <span>Explore the Latest Listings with Propertest </span>
              </li>
              <li className="flex">
                <div className="footer-info-item"><i className="fas fa-phone-alt"></i></div> <span>0500 000 00 00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

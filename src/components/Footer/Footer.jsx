const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We offer the best travel packages for exploring Kashmir's majestic
              landscapes and culture. Join us for unforgettable adventures.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li className="">
                <a href="#packages" className="hover:text-gray-400">
                  Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul>
              <li className="mb-2">
                Phone: <a href="tel:+919797125797">+91 9797125797</a>
              </li>
              <li className="mb-2">
                Email:{' '}
                <a href="mailto:trendhutkashmir@gmail.com">
                  trendhutkashmir@gmail.com
                </a>
              </li>
              <li>
                Location:
                <a
                  href="https://maps.app.goo.gl/ADiTN9VeucuRsRih9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  Srinagar, Jammu and Kashmir, 190006
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center md:text-left">
          <p>&copy; Trendhut Kashmir. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-4 text-gray-600">
        
        
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="logo"
              className="w-8 h-8"
            />
            <h2 className="text-xl font-semibold text-indigo-600">HERO.IO</h2>
          </div>
          <p className="text-sm leading-relaxed">
            A modern platform to explore, build, and deploy amazing apps.
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-500">Home</a></li>
            <li><a href="#" className="hover:text-indigo-500">Apps</a></li>
            <li><a href="#" className="hover:text-indigo-500">Installation</a></li>
            <li><a href="#" className="hover:text-indigo-500">Contribute</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-500">Docs</a></li>
            <li><a href="#" className="hover:text-indigo-500">Blog</a></li>
            <li><a href="#" className="hover:text-indigo-500">Community</a></li>
            <li><a href="#" className="hover:text-indigo-500">Support</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Follow Us</h3>
          <div className="flex space-x-4 text-xl text-gray-500">
            <a href="#" className="hover:text-indigo-500"><FaGithub /></a>
            <a href="#" className="hover:text-indigo-500"><FaTwitter /></a>
            <a href="#" className="hover:text-indigo-500"><FaFacebook /></a>
            <a href="#" className="hover:text-indigo-500"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HERO.IO — All rights reserved.
      </div>
    </footer>
    );
};

export default Footer;
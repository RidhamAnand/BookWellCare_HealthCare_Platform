import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 p-10">
            <div className="max-w-6xl m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h5 className="mb-6 text-sm uppercase font-bold">Company</h5>
                    <ul>
                        <li><a href="/about" className="hover:text-blue-400 transition-colors duration-300">About Us</a></li>
                        <li><a href="/services" className="hover:text-blue-400 transition-colors duration-300">Services</a></li>
                        <li><a href="/privacy" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:text-blue-400 transition-colors duration-300">Terms of Use</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="mb-6 text-sm uppercase font-bold">Quick Links</h5>
                    <ul>
                        <li><a href="/faq" className="hover:text-blue-400 transition-colors duration-300">FAQ</a></li>
                        <li><a href="/help" className="hover:text-blue-400 transition-colors duration-300">Help Center</a></li>
                        <li><a href="/support" className="hover:text-blue-400 transition-colors duration-300">Support</a></li>
                        <li><a href="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="mb-6 text-sm uppercase font-bold">Follow Us</h5>
                    <ul>
                        <li><a href="https://facebook.com" className="hover:text-blue-400 transition-colors duration-300">Facebook</a></li>
                        <li><a href="https://twitter.com" className="hover:text-blue-400 transition-colors duration-300">Twitter</a></li>
                        <li><a href="https://instagram.com" className="hover:text-blue-400 transition-colors duration-300">Instagram</a></li>
                        <li><a href="https://linkedin.com" className="hover:text-blue-400 transition-colors duration-300">LinkedIn</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="mb-6 text-sm uppercase font-bold">Contact</h5>
                    <ul>
                        <li>Email: info@bookwellcare.com</li>
                        <li>Phone: (123) 456-7890</li>
                        <li>Address: 123 Health St, Wellness City</li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-gray-600 mt-10">
                © {new Date().getFullYear()} BookWellCare. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

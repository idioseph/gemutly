"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/constants/AnimationSettings";
import { playfairDisplay, inter } from "@/constants/Fonts";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  ChefHat,
  Utensils,
  Users,
  Shield,
  FileText,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    platform: [
      {
        name: "For Chefs",
        href: "#for-chefs",
        icon: <ChefHat className="w-4 h-4" />,
      },
      {
        name: "For Diners",
        href: "#for-diners",
        icon: <Utensils className="w-4 h-4" />,
      },
      {
        name: "How It Works",
        href: "#how-it-works",
        icon: <Users className="w-4 h-4" />,
      },
      { name: "Safety", href: "#", icon: <Shield className="w-4 h-4" /> },
    ],
    company: [
      { name: "About Us", href: "#", icon: <FileText className="w-4 h-4" /> },
      {
        name: "Careers",
        href: "#",
        icon: <ExternalLink className="w-4 h-4" />,
      },
      { name: "Press", href: "#", icon: <FileText className="w-4 h-4" /> },
      { name: "Blog", href: "#", icon: <FileText className="w-4 h-4" /> },
    ],
    support: [
      {
        name: "Help Center",
        href: "#",
        icon: <HelpCircle className="w-4 h-4" />,
      },
      { name: "Contact Us", href: "#", icon: <Mail className="w-4 h-4" /> },
      {
        name: "Community Guidelines",
        href: "#",
        icon: <Users className="w-4 h-4" />,
      },
      {
        name: "Trust & Safety",
        href: "#",
        icon: <Shield className="w-4 h-4" />,
      },
    ],
    legal: [
      {
        name: "Privacy Policy",
        href: "#",
        icon: <FileText className="w-4 h-4" />,
      },
      {
        name: "Terms of Service",
        href: "#",
        icon: <FileText className="w-4 h-4" />,
      },
      {
        name: "Cookie Policy",
        href: "#",
        icon: <FileText className="w-4 h-4" />,
      },
      { name: "GDPR", href: "#", icon: <FileText className="w-4 h-4" /> },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#" },
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: "hello@gemutly.com" },
    { icon: <Phone className="w-4 h-4" />, text: "+1 (555) 123-4567" },
    { icon: <MapPin className="w-4 h-4" />, text: "San Francisco, CA" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-gray-50 to-stone-100 text-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-12"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-xl font-bold text-white shadow-lg">
                  G
                </div>
                <span
                  className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
                  style={{ fontFamily: playfairDisplay.style.fontFamily }}
                >
                  Gemutly
                </span>
              </div>
              <p
                className="text-gray-600 leading-relaxed text-lg"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Connecting passionate chefs with food lovers for unforgettable
                private dining experiences. Where passion meets plate.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-gray-600"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center border border-amber-200">
                      <div className="text-amber-600">{contact.icon}</div>
                    </div>
                    <span
                      className="text-sm"
                      style={{ fontFamily: inter.style.fontFamily }}
                    >
                      {contact.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center border border-amber-200 hover:bg-gradient-to-br hover:from-amber-200 hover:to-orange-200 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <div className="text-amber-600 group-hover:text-amber-700 transition-colors duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h3
                className="text-lg font-semibold mb-6 text-amber-700"
                style={{ fontFamily: playfairDisplay.style.fontFamily }}
              >
                Platform
              </h3>
              <ul className="space-y-4">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center space-x-3 text-gray-600 hover:text-amber-700 transition-colors duration-300 group"
                      style={{ fontFamily: inter.style.fontFamily }}
                    >
                      <div className="text-amber-500 group-hover:text-amber-600 transition-colors duration-300">
                        {link.icon}
                      </div>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3
                className="text-lg font-semibold mb-6 text-amber-700"
                style={{ fontFamily: playfairDisplay.style.fontFamily }}
              >
                Company
              </h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center space-x-3 text-gray-600 hover:text-amber-700 transition-colors duration-300 group"
                      style={{ fontFamily: inter.style.fontFamily }}
                    >
                      <div className="text-amber-500 group-hover:text-amber-600 transition-colors duration-300">
                        {link.icon}
                      </div>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3
                className="text-lg font-semibold mb-6 text-amber-700"
                style={{ fontFamily: playfairDisplay.style.fontFamily }}
              >
                Support
              </h3>
              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center space-x-3 text-gray-600 hover:text-amber-700 transition-colors duration-300 group"
                      style={{ fontFamily: inter.style.fontFamily }}
                    >
                      <div className="text-amber-500 group-hover:text-amber-600 transition-colors duration-300">
                        {link.icon}
                      </div>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3
                className="text-lg font-semibold mb-6 text-amber-700"
                style={{ fontFamily: playfairDisplay.style.fontFamily }}
              >
                Legal
              </h3>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center space-x-3 text-gray-600 hover:text-amber-700 transition-colors duration-300 group"
                      style={{ fontFamily: inter.style.fontFamily }}
                    >
                      <div className="text-amber-500 group-hover:text-amber-600 transition-colors duration-300">
                        {link.icon}
                      </div>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-gray-200 pt-8">
            <div className="text-center space-y-6">
              <h3
                className="text-2xl font-semibold text-amber-700"
                style={{ fontFamily: playfairDisplay.style.fontFamily }}
              >
                Stay Updated
              </h3>
              <p
                className="text-gray-600 max-w-md mx-auto text-lg"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Get the latest updates on new chefs, special events, and
                culinary tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                  style={{ fontFamily: inter.style.fontFamily }}
                />
                <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p
                className="text-gray-500 text-sm"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                © 2024 Gemutly. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-gray-500 text-sm">
                <span style={{ fontFamily: inter.style.fontFamily }}>
                  Made with
                </span>
                <Heart className="w-4 h-4 text-rose-500 fill-current" />
                <span style={{ fontFamily: inter.style.fontFamily }}>
                  by Jonathan
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

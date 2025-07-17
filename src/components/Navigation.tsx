"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playfairDisplay, inter } from "@/constants/Fonts";
import { Menu, X, ChefHat, Utensils } from "lucide-react";
import Button from "@/components/ui/Button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "For Chefs", href: "#for-chefs" },
    { name: "For Diners", href: "#for-diners" },
    { name: "Community", href: "#community" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white/95 backdrop-blur-md border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center text-lg md:text-xl font-bold text-white shadow-lg">
              G
            </div>
            <span
              className="text-xl md:text-2xl font-bold text-gray-900"
              style={{ fontFamily: playfairDisplay.style.fontFamily }}
            >
              Gemutly
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-amber-600"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="secondary"
              size="sm"
              icon={<ChefHat className="w-4 h-4" />}
              className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
            >
              For Chefs
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={<Utensils className="w-4 h-4" />}
            >
              For Diners
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Navigation Links */}
              <div className="space-y-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block text-lg font-medium text-gray-900 hover:text-amber-600 transition-colors duration-300"
                    style={{ fontFamily: inter.style.fontFamily }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <Button
                  variant="secondary"
                  icon={<ChefHat className="w-4 h-4" />}
                  className="w-full justify-center"
                  onClick={closeMenu}
                >
                  For Chefs
                </Button>
                <Button
                  variant="primary"
                  icon={<Utensils className="w-4 h-4" />}
                  className="w-full justify-center"
                  onClick={closeMenu}
                >
                  For Diners
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;

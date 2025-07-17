"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/constants/AnimationSettings";
import { playfairDisplay, inter } from "@/constants/Fonts";
import Button from "@/components/ui/Button";
import {
  ChefHat,
  Utensils,
  Zap,
  Shield,
  MessageCircle,
  Mail,
} from "lucide-react";

const CTASection = () => {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50 py-20 md:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-36 h-36 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center space-y-8 md:space-y-12">
          {/* Main Content */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200/50 text-amber-800 shadow-sm">
              <span
                className="text-sm md:text-base font-medium"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Ready to Start?
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: playfairDisplay.style.fontFamily }}
            >
              Begin Your Culinary
              <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Journey Today
              </span>
            </h2>

            <p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: inter.style.fontFamily }}
            >
              Join thousands of chefs and diners who are already experiencing
              the magic of private dining. Your next unforgettable meal is just
              a click away.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            <Button
              variant="primary"
              icon={<ChefHat className="w-5 h-5" />}
              size="lg"
            >
              Become a Chef
            </Button>
            <Button
              variant="secondary"
              icon={<Utensils className="w-5 h-5" />}
              size="lg"
            >
              Find a Chef
            </Button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center border-2 border-amber-200">
                <Zap className="w-8 h-8 text-amber-600" />
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: playfairDisplay.style.fontFamily }}
              >
                Quick Setup
              </h3>
              <p
                className="text-gray-600"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Get started in minutes with our simple onboarding process
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center border-2 border-emerald-200">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: playfairDisplay.style.fontFamily }}
              >
                Safe & Secure
              </h3>
              <p
                className="text-gray-600"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Your safety and security are our top priorities
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center border-2 border-violet-200">
                <MessageCircle className="w-8 h-8 text-violet-600" />
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: playfairDisplay.style.fontFamily }}
              >
                24/7 Support
              </h3>
              <p
                className="text-gray-600"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Our team is here to help you every step of the way
              </p>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={fadeInUp} className="mt-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/30">
              <p
                className="text-gray-700 mb-6 text-lg"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Have questions? We're here to help!
              </p>
              <Button
                variant="outline"
                icon={<Mail className="w-5 h-5" />}
                className="border-amber-300 text-amber-700 hover:bg-amber-50"
              >
                Contact Support
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;

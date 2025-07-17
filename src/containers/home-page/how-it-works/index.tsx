"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/constants/AnimationSettings";
import { playfairDisplay, inter } from "@/constants/Fonts";
import Button from "@/components/ui/Button";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Find Your Chef",
      description:
        "Browse local chefs and their specialties to find the perfect match for your dining experience.",
      icon: "🔍",
      color: "from-amber-100 to-orange-100",
      borderColor: "border-amber-200",
    },
    {
      id: 2,
      title: "Book & Connect",
      description:
        "Schedule your private dining experience and connect directly with your chosen chef.",
      icon: "📅",
      color: "from-rose-100 to-pink-100",
      borderColor: "border-rose-200",
    },
    {
      id: 3,
      title: "Enjoy & Share",
      description:
        "Savor your personalized meal and share your experience with the community.",
      icon: "🍽️",
      color: "from-emerald-100 to-teal-100",
      borderColor: "border-emerald-200",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-20 md:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/10 to-orange-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-br from-rose-200/10 to-pink-200/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200/50 text-amber-800 shadow-sm mb-6">
            <span
              className="text-sm md:text-base font-medium"
              style={{ fontFamily: inter.style.fontFamily }}
            >
              How It Works
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: playfairDisplay.style.fontFamily }}
          >
            Simple Steps to
            <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Culinary Excellence
            </span>
          </h2>
          <p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: inter.style.fontFamily }}
          >
            Experience the magic of private dining in just three easy steps
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-amber-200 to-rose-200 transform -translate-y-1/2 z-0" />
              )}

              <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-amber-200 group-hover:-translate-y-2 h-full">
                {/* Step Number */}
                <div className="absolute -top-4 left-6 md:left-8 w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.id}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-2xl md:text-3xl border-2 ${step.borderColor} shadow-md`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <div className="text-center space-y-3 md:space-y-4">
                  <h3
                    className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900"
                    style={{ fontFamily: playfairDisplay.style.fontFamily }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm md:text-base text-gray-600 leading-relaxed"
                    style={{ fontFamily: inter.style.fontFamily }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div variants={fadeInUp} className="text-center mt-16 md:mt-20">
          <p
            className="text-lg text-gray-600 mb-8"
            style={{ fontFamily: inter.style.fontFamily }}
          >
            Ready to start your culinary journey?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary">Get Started Today</Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;

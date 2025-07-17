"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
} from "@/constants/AnimationSettings";
import { playfairDisplay, inter } from "@/constants/Fonts";
import Button from "@/components/ui/Button";

const ForDiners = () => {
  const experiences = [
    {
      id: 1,
      title: "Personalized Menus",
      description:
        "Enjoy custom menus tailored to your preferences and dietary needs.",
      icon: "🍽️",
      color: "from-rose-100 to-pink-100",
      borderColor: "border-rose-200",
    },
    {
      id: 2,
      title: "Intimate Setting",
      description:
        "Experience fine dining in the comfort of your home or a private venue.",
      icon: "🏠",
      color: "from-violet-100 to-purple-100",
      borderColor: "border-violet-200",
    },
    {
      id: 3,
      title: "Chef Stories",
      description:
        "Connect with passionate chefs and learn about their culinary journey.",
      icon: "👨‍🍳",
      color: "from-amber-100 to-orange-100",
      borderColor: "border-amber-200",
    },
    {
      id: 4,
      title: "Unique Flavors",
      description:
        "Discover authentic cuisines and traditional recipes from around the world.",
      icon: "🌍",
      color: "from-emerald-100 to-teal-100",
      borderColor: "border-emerald-200",
    },
  ];

  return (
    <section
      id="for-diners"
      className="relative overflow-hidden bg-white py-20 md:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-10 w-32 h-32 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-violet-200/20 to-purple-200/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Visual Content */}
          <motion.div
            variants={fadeInLeft}
            className="relative order-2 lg:order-1"
          >
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center text-4xl border-2 border-rose-200">
                  🍽️
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: playfairDisplay.style.fontFamily }}
                  >
                    Memorable Dining Experience
                  </h3>
                  <p
                    className="text-gray-600 mb-4"
                    style={{ fontFamily: inter.style.fontFamily }}
                  >
                    "The intimate setting and personalized menu made our
                    anniversary unforgettable. Chef Marco's authentic Italian
                    dishes transported us straight to Tuscany!"
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">
                          ⭐
                        </span>
                      ))}
                    </div>
                    <span
                      className="text-sm text-gray-500"
                      style={{ fontFamily: inter.style.fontFamily }}
                    >
                      - Sarah & Mike, Anniversary Dinner
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center text-2xl border-2 border-rose-200 shadow-lg">
              🍷
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full flex items-center justify-center text-2xl border-2 border-violet-200 shadow-lg">
              🎉
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={fadeInUp}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200/50 text-rose-800 shadow-sm">
                <span
                  className="text-sm md:text-base font-medium"
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  For Diners
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: playfairDisplay.style.fontFamily }}
              >
                Experience
                <span className="block bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  Culinary Magic
                </span>
              </h2>
              <p
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Discover unique dining experiences with talented local chefs.
                From intimate dinners to special celebrations, create
                unforgettable memories through food.
              </p>
            </div>

            <div className="space-y-6">
              <h3
                className="text-xl md:text-2xl font-bold text-gray-900"
                style={{ fontFamily: playfairDisplay.style.fontFamily }}
              >
                What Makes It Special?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={experience.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${experience.color} rounded-lg flex items-center justify-center text-xl border ${experience.borderColor} flex-shrink-0`}
                    >
                      {experience.icon}
                    </div>
                    <div>
                      <h4
                        className="font-semibold text-gray-900 mb-1"
                        style={{ fontFamily: inter.style.fontFamily }}
                      >
                        {experience.title}
                      </h4>
                      <p
                        className="text-sm text-gray-600"
                        style={{ fontFamily: inter.style.fontFamily }}
                      >
                        {experience.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary" icon="🍽️">
                Find a Chef
              </Button>
              <Button variant="secondary">Browse Menus</Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ForDiners;

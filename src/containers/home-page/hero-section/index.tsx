"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  fadeInRight,
} from "@/constants/AnimationSettings";
import { playfairDisplay, inter } from "@/constants/Fonts";
import Button from "@/components/ui/Button";
import { ChefHat, Utensils } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  // Sample chef and food images - replace with actual images
  const chefImages = [
    {
      id: 1,
      name: "Chef Marco",
      specialty: "Italian Cuisine",
      image:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Chef Sarah",
      specialty: "French Pastry",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Chef Alex",
      specialty: "Asian Fusion",
      image:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Chef Maria",
      specialty: "Mediterranean",
      image:
        "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const foodImages = [
    {
      id: 1,
      name: "Homemade Pasta",
      chef: "Chef Marco",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=150&h=150&fit=crop",
    },
    {
      id: 2,
      name: "Seafood Paella",
      chef: "Chef Maria",
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=150&h=150&fit=crop",
    },
    {
      id: 3,
      name: "Grilled Ribeye",
      chef: "Chef Alex",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=150&h=150&fit=crop",
    },
    {
      id: 4,
      name: "Chocolate Soufflé",
      chef: "Chef Sarah",
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=150&h=150&fit=crop",
    },
  ];

  // Trusted by users data
  const trustedUsers = [
    {
      id: 1,
      name: "Sarah M.",
      image:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=80&h=80&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Mike R.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Emma L.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "David K.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Lisa P.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "John D.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    },
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-neutral-50 to-slate-50 min-h-screen flex items-center py-20 pt-32 md:pt-40"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-36 h-36 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-violet-200/20 to-purple-200/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 md:py-12 lg:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <motion.div variants={fadeInUp} className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200/50 text-amber-800 shadow-sm">
                <span
                  className="text-xs md:text-sm lg:text-base font-medium"
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  Welcome to Gemutly
                </span>
              </div>
              <div className="space-y-2 md:space-y-4">
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 leading-tight"
                  style={{ fontFamily: playfairDisplay.style.fontFamily }}
                >
                  Where Passion
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4">
                  <div className="relative group inline-block">
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-orange-400/30 blur-2xl group-hover:blur-3xl transition-all duration-300" />
                    <span
                      className="relative text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                      style={{ fontFamily: playfairDisplay.style.fontFamily }}
                    >
                      Meets Plate
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              style={{ fontFamily: inter.style.fontFamily }}
              className="text-base md:text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Connect with local chefs for unforgettable private dining
              experiences. Share your culinary passion and earn flexible income.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4"
            >
              <Button
                variant="primary"
                icon={<ChefHat className="w-4 h-4 md:w-5 md:h-5" />}
              >
                Find a Chef
              </Button>

              <Button
                variant="secondary"
                icon={<Utensils className="w-4 h-4 md:w-5 md:h-5" />}
              >
                Become a Chef
              </Button>
            </motion.div>

            {/* Trusted By Section */}
            <motion.div
              variants={fadeInUp}
              className="pt-6 md:pt-8 border-t border-gray-200/50"
            >
              <p
                className="text-xs md:text-sm text-gray-500 mb-4"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Trusted by 100+ users
              </p>
              <div className="flex items-center justify-center lg:justify-start">
                {/* Stacked User Images */}
                <div className="flex -space-x-2 md:-space-x-3">
                  {trustedUsers.slice(0, 5).map((user, index) => (
                    <motion.div
                      key={user.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center text-sm md:text-base border-2 border-white shadow-md hover:scale-110 transition-transform duration-300 overflow-hidden">
                        <Image
                          width={100}
                          height={100}
                          src={user.image}
                          alt={user.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-2 h-2 md:w-3 md:h-3 border border-green-400"></div>
                    </motion.div>
                  ))}
                </div>
                <div className="ml-3 md:ml-4">
                  <p
                    className="text-xs md:text-sm font-medium text-gray-700"
                    style={{ fontFamily: inter.style.fontFamily }}
                  >
                    +95 more
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Chef & Food Gallery */}
          <motion.div
            variants={fadeInRight}
            className="relative mt-8 lg:mt-0 px-4 md:px-0"
          >
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                {/* Chef Section */}
                <div className="space-y-4 md:space-y-6">
                  <h3
                    className="text-base md:text-lg font-semibold text-gray-900 text-center"
                    style={{ fontFamily: playfairDisplay.style.fontFamily }}
                  >
                    Our Chefs
                  </h3>
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {chefImages.map((chef, index) => (
                      <motion.div
                        key={chef.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-white rounded-xl p-3 md:p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-amber-200"
                      >
                        <div className="text-center space-y-2 md:space-y-3">
                          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center text-2xl md:text-3xl border-2 border-amber-200 overflow-hidden">
                            <Image
                              width={100}
                              height={100}
                              src={chef.image}
                              alt={chef.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p
                              className="text-xs md:text-sm font-semibold text-gray-900"
                              style={{ fontFamily: inter.style.fontFamily }}
                            >
                              {chef.name}
                            </p>
                            <p
                              className="text-xs text-gray-500 mt-1"
                              style={{ fontFamily: inter.style.fontFamily }}
                            >
                              {chef.specialty}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Food Section */}
                <div className="space-y-4 md:space-y-6">
                  <h3
                    className="text-base md:text-lg font-semibold text-gray-900 text-center"
                    style={{ fontFamily: playfairDisplay.style.fontFamily }}
                  >
                    Delicious Food
                  </h3>
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {foodImages.map((food, index) => (
                      <motion.div
                        key={food.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (index + 4) * 0.1 }}
                        className="group relative bg-white rounded-xl p-3 md:p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-rose-200"
                      >
                        <div className="text-center space-y-2 md:space-y-3">
                          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center text-2xl md:text-3xl border-2 border-rose-200 overflow-hidden">
                            <Image
                              width={100}
                              height={100}
                              src={food.image}
                              alt={food.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p
                              className="text-xs md:text-sm font-semibold text-gray-900"
                              style={{ fontFamily: inter.style.fontFamily }}
                            >
                              {food.name}
                            </p>
                            <p
                              className="text-xs text-gray-500 mt-1"
                              style={{ fontFamily: inter.style.fontFamily }}
                            >
                              by {food.chef}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

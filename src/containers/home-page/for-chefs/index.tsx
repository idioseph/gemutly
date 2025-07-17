"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  fadeInRight,
} from "@/constants/AnimationSettings";
import { playfairDisplay, inter } from "@/constants/Fonts";
import Button from "@/components/ui/Button";
import { Clock, DollarSign, Star, Handshake, ChefHat } from "lucide-react";

const ForChefs = () => {
  const benefits = [
    {
      id: 1,
      title: "Flexible Schedule",
      description:
        "Choose your own hours and work when it suits your lifestyle.",
      icon: <Clock className="w-6 h-6" />,
      color: "from-amber-100 to-orange-100",
      borderColor: "border-amber-200",
    },
    {
      id: 2,
      title: "Higher Earnings",
      description:
        "Keep more of your profits with our transparent fee structure.",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-emerald-100 to-teal-100",
      borderColor: "border-emerald-200",
    },
    {
      id: 3,
      title: "Build Your Brand",
      description:
        "Showcase your culinary skills and build a loyal customer base.",
      icon: <Star className="w-6 h-6" />,
      color: "from-violet-100 to-purple-100",
      borderColor: "border-violet-200",
    },
    {
      id: 4,
      title: "Direct Connection",
      description: "Connect directly with diners who appreciate your craft.",
      icon: <Handshake className="w-6 h-6" />,
      color: "from-rose-100 to-pink-100",
      borderColor: "border-rose-200",
    },
  ];

  return (
    <section
      id="for-chefs"
      className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-neutral-50 to-slate-50 py-20 md:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div variants={fadeInUp} className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 text-emerald-800 shadow-sm">
                <span
                  className="text-sm md:text-base font-medium"
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  For Chefs
                </span>
              </div>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: playfairDisplay.style.fontFamily }}
              >
                Turn Your Passion
                <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Into Profit
                </span>
              </h2>
              <p
                className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Join our community of talented chefs and start earning flexible
                income while doing what you love. Share your culinary expertise
                with food enthusiasts in your area.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h3
                className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900"
                style={{ fontFamily: playfairDisplay.style.fontFamily }}
              >
                Why Choose Gemutly?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                  >
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center text-lg md:text-xl border ${benefit.borderColor} flex-shrink-0`}
                    >
                      {benefit.icon}
                    </div>
                    <div>
                      <h4
                        className="font-semibold text-gray-900 mb-1 text-sm md:text-base"
                        style={{ fontFamily: inter.style.fontFamily }}
                      >
                        {benefit.title}
                      </h4>
                      <p
                        className="text-xs md:text-sm text-gray-600"
                        style={{ fontFamily: inter.style.fontFamily }}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <Button
                variant="primary"
                icon={<ChefHat className="w-4 h-4 md:w-5 md:h-5" />}
              >
                Start Cooking
              </Button>
              <Button variant="secondary">Learn More</Button>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div variants={fadeInRight} className="relative">
            <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-gray-100">
              <div className="text-center space-y-4 md:space-y-6">
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center text-3xl md:text-4xl border-2 border-emerald-200">
                  <ChefHat className="w-10 h-10 md:w-12 md:h-12 text-emerald-600" />
                </div>
                <div>
                  <h3
                    className="text-xl md:text-2xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: playfairDisplay.style.fontFamily }}
                  >
                    Chef Success Story
                  </h3>
                  <p
                    className="text-sm md:text-base text-gray-600 mb-4"
                    style={{ fontFamily: inter.style.fontFamily }}
                  >
                    &ldquo;Gemutly helped me turn my home kitchen into a
                    thriving business. I now earn 3x more than my previous
                    restaurant job while having complete control over my
                    schedule.&rdquo;
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="text-yellow-400 text-base md:text-lg"
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                    <span
                      className="text-xs md:text-sm text-gray-500"
                      style={{ fontFamily: inter.style.fontFamily }}
                    >
                      - Chef Maria, Italian Cuisine
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center text-lg md:text-2xl border-2 border-amber-200 shadow-lg">
              <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />
            </div>
            <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center text-lg md:text-2xl border-2 border-rose-200 shadow-lg">
              <Star className="w-6 h-6 md:w-8 md:h-8 text-rose-600" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ForChefs;

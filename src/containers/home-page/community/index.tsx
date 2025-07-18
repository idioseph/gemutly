"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/constants/AnimationSettings";
import { playfairDisplay, inter } from "@/constants/Fonts";
import Button from "@/components/ui/Button";
import { ChefHat, Utensils } from "lucide-react";

const CommunitySection = () => {
  const stats = [
    {
      id: 1,
      number: "500+",
      label: "Talented Chefs",
      icon: "👨‍🍳",
      color: "from-amber-100 to-orange-100",
      borderColor: "border-amber-200",
    },
    {
      id: 2,
      number: "2,000+",
      label: "Happy Diners",
      icon: "🍽️",
      color: "from-rose-100 to-pink-100",
      borderColor: "border-rose-200",
    },
    {
      id: 3,
      number: "5,000+",
      label: "Meals Served",
      icon: "🎉",
      color: "from-emerald-100 to-teal-100",
      borderColor: "border-emerald-200",
    },
    {
      id: 4,
      number: "4.9★",
      label: "Average Rating",
      icon: "⭐",
      color: "from-violet-100 to-purple-100",
      borderColor: "border-violet-200",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Chef Marco",
      cuisine: "Italian Cuisine",
      rating: 5,
      text: "Gemutly has transformed my passion into a thriving business. The platform connects me with food lovers who truly appreciate authentic Italian cooking.",
      avatar: "👨‍🍳",
    },
    {
      id: 2,
      name: "Sarah & Mike",
      cuisine: "Dining Couple",
      rating: 5,
      text: "Our anniversary dinner was absolutely magical! The intimate setting and personalized menu exceeded all our expectations.",
      avatar: "💑",
    },
    {
      id: 3,
      name: "Chef Maria",
      cuisine: "Mediterranean",
      rating: 5,
      text: "I love the flexibility and the direct connection with my customers. It&apos;s like having a family dinner every night!",
      avatar: "👩‍🍳",
    },
  ];

  return (
    <section
      id="community"
      className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-neutral-50 to-slate-50 py-20 md:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-36 h-36 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 border border-violet-200/50 text-violet-800 shadow-sm mb-6">
            <span
              className="text-sm md:text-base font-medium"
              style={{ fontFamily: inter.style.fontFamily }}
            >
              Our Community
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: playfairDisplay.style.fontFamily }}
          >
            Join Our Growing
            <span className="block bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Culinary Family
            </span>
          </h2>
          <p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: inter.style.fontFamily }}
          >
            Connect with passionate chefs and food lovers who share your
            appreciation for exceptional dining experiences.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-xl md:text-2xl border-2 ${stat.borderColor} shadow-md group-hover:shadow-lg transition-all duration-300`}
              >
                {stat.icon}
              </div>
              <div className="space-y-1 md:space-y-2">
                <h3
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900"
                  style={{ fontFamily: playfairDisplay.style.fontFamily }}
                >
                  {stat.number}
                </h3>
                <p
                  className="text-xs md:text-sm lg:text-base text-gray-600"
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div variants={fadeInUp} className="space-y-6 md:space-y-8">
          <div className="text-center mb-8 md:mb-12">
            <h3
              className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: playfairDisplay.style.fontFamily }}
            >
              What Our Community Says
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-violet-200"
              >
                <div className="space-y-3 md:space-y-4">
                  {/* Avatar and Rating */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full flex items-center justify-center text-lg md:text-xl border-2 border-violet-200">
                      {testimonial.avatar}
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span
                          key={i}
                          className="text-yellow-400 text-base md:text-lg"
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p
                    className="text-sm md:text-base text-gray-600 leading-relaxed"
                    style={{ fontFamily: inter.style.fontFamily }}
                  >
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div>
                    <h4
                      className="font-semibold text-gray-900 text-sm md:text-base"
                      style={{ fontFamily: inter.style.fontFamily }}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className="text-xs md:text-sm text-gray-500"
                      style={{ fontFamily: inter.style.fontFamily }}
                    >
                      {testimonial.cuisine}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          className="text-center mt-12 md:mt-16 lg:mt-20"
        >
          <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-xl border-2 border-gray-100">
            <h3
              className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: playfairDisplay.style.fontFamily }}
            >
              Ready to Join Our Community?
            </h3>
            <p
              className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: inter.style.fontFamily }}
            >
              Whether you&apos;re a chef looking to share your passion or a
              diner seeking unique experiences, we&apos;d love to have you join
              our culinary family.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Button
                variant="primary"
                icon={<ChefHat className="w-4 h-4 md:w-5 md:h-5" />}
              >
                Become a Chef
              </Button>
              <Button
                variant="secondary"
                icon={<Utensils className="w-4 h-4 md:w-5 md:h-5" />}
              >
                Find a Chef
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CommunitySection;

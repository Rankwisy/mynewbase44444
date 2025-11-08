import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import TestimonialCard from "./TestimonialCard";
import { Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";

export default function TestimonialSection({ language }) {
  const { data: testimonials = [] } = useQuery({
    queryKey: ['testimonials', 'featured'],
    queryFn: async () => {
      const allTestimonials = await base44.entities.Testimonial.list();
      // Filter featured testimonials and sort by date
      return allTestimonials
        .filter(t => t.featured)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);
    },
    initialData: [],
  });

  // Calculate average rating
  const averageRating = testimonials.length > 0
    ? (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)
    : 0;

  const content = {
    en: {
      title: "What Our Customers Say",
      subtitle: "Trusted by thousands of satisfied customers across Brussels",
      viewAll: "View All Reviews",
      avgRating: "Average Rating",
      reviews: "reviews"
    },
    fr: {
      title: "Ce Que Disent Nos Clients",
      subtitle: "La confiance de milliers de clients satisfaits à Bruxelles",
      viewAll: "Voir Tous les Avis",
      avgRating: "Note Moyenne",
      reviews: "avis"
    }
  };

  const t = content[language];

  if (testimonials.length === 0) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">{averageRating}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              language={language}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to={createPageUrl("Testimonials")}>
            <Button size="lg" variant="outline" className="group">
              {t.viewAll}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
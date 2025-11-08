import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle, MapPin } from "lucide-react";

export default function TestimonialCard({ testimonial, index = 0, language = "en" }) {
  const quote = language === "en" ? testimonial.quote_en : testimonial.quote_fr;
  
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-blue-100">
        <Quote className="w-12 h-12" />
      </div>

      {/* Customer Photo or Avatar with lazy loading */}
      <div className="flex items-start gap-4 mb-6">
        {testimonial.customer_photo_url ? (
          <img
            src={testimonial.customer_photo_url}
            alt={testimonial.customer_name}
            loading="lazy"
            decoding="async"
            className="w-14 h-14 rounded-full object-cover"
            width="56"
            height="56"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
            {testimonial.customer_name.charAt(0)}
          </div>
        )}
        
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900">
              {testimonial.customer_name}
            </h3>
            {testimonial.verified && (
              <CheckCircle className="w-4 h-4 text-blue-600" title={language === "en" ? "Verified Customer" : "Client Vérifié"} />
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-3 h-3" />
            <span>{testimonial.customer_location}</span>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {renderStars(testimonial.rating)}
      </div>

      {/* Quote */}
      <p className="text-gray-700 leading-relaxed mb-4 relative z-10">
        "{quote}"
      </p>

      {/* Service Type & Date */}
      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
          {testimonial.service_type}
        </span>
        <span>
          {new Date(testimonial.date).toLocaleDateString(language === "en" ? "en-US" : "fr-FR", {
            year: "numeric",
            month: "short"
          })}
        </span>
      </div>
    </motion.div>
  );
}
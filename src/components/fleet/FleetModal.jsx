
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function FleetModal({ vehicle, onClose, language }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const translations = {
    en: {
      previous: "Previous",
      next: "Next",
      specifications: "Specifications",
      passengers: "Passengers",
      luggage: "Luggage",
      features: "Features",
      idealFor: "Ideal For",
      pricing: "Pricing",
      bookNow: "Request a Quote",
      allFeatures: "All Features"
    },
    fr: {
      previous: "Précédent",
      next: "Suivant",
      specifications: "Spécifications",
      passengers: "Passagers",
      luggage: "Bagages",
      features: "Caractéristiques",
      idealFor: "Idéal Pour",
      pricing: "Tarification",
      bookNow: "Demander un Devis",
      allFeatures: "Toutes les Caractéristiques"
    }
  };

  const t = translations[language];

  // The nextImage and prevImage functions are no longer needed
  // as their logic is inlined in the onClick handlers for the navigation buttons.

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative" // Added relative for absolute positioning of close button
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Image Gallery with lazy loading */}
        <div className="relative h-80 bg-gray-100">
          <img
            src={vehicle.images[currentImageIndex]}
            alt={`${vehicle.name} - Image ${currentImageIndex + 1}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            width="1200"
            height="800"
          />
          
          {/* Navigation Arrows */}
          {vehicle.images.length > 1 && (
            <>
              <button
                onClick={() => setCurrentImageIndex((prev) => 
                  prev === 0 ? vehicle.images.length - 1 : prev - 1
                )}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={() => setCurrentImageIndex((prev) => 
                  prev === vehicle.images.length - 1 ? 0 : prev + 1
                )}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          {vehicle.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {vehicle.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Vehicle name and capacity, moved from the removed header */}
          <h2 className="text-2xl font-bold text-gray-900">
            {vehicle.name}
          </h2>
          <p className="text-blue-600 font-medium mb-8">{vehicle.capacity}</p>

          {/* Description */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {vehicle.description}
            </p>
          </div>

          {/* All Features */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t.allFeatures}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {vehicle.features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Specifications */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t.specifications}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    {t.passengers}:
                  </p>
                  <p className="text-gray-600">{vehicle.specifications.passengers}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    {t.luggage}:
                  </p>
                  <p className="text-gray-600">{vehicle.specifications.luggage}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    {t.features}:
                  </p>
                  <ul className="space-y-2">
                    {vehicle.specifications.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t.idealFor}
              </h3>
              <div className="flex flex-wrap gap-2">
                {vehicle.specifications.idealFor.map((use, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {use}
                  </span>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  {t.pricing}:
                </p>
                <p className="text-2xl font-bold text-blue-600 mb-4">
                  {vehicle.pricing}
                </p>
                <Link to={createPageUrl("Contact")}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    {t.bookNow}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

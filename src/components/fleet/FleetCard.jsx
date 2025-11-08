import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eye, Users, ArrowRight } from "lucide-react";

export default function FleetCard({ vehicle, index, onViewDetails, language }) {
  const translations = {
    en: {
      viewDetails: "View Details",
      features: "Key Features"
    },
    fr: {
      viewDetails: "Voir Détails",
      features: "Caractéristiques Clés"
    }
  };

  const t = translations[language];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
    >
      {/* Image with lazy loading and optimization */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          width="800"
          height="600"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-1">
            {vehicle.name}
          </h3>
          <div className="flex items-center gap-2 text-white/90">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">{vehicle.capacity}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-6">
          {vehicle.shortDescription}
        </p>

        {/* Features */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-900 mb-3">{t.features}:</p>
          <div className="grid grid-cols-2 gap-3">
            {vehicle.features.slice(0, 4).map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                  <Icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* View Details Button */}
        <Button
          onClick={onViewDetails}
          className="w-full bg-blue-600 hover:bg-blue-700 group"
        >
          <Eye className="w-4 h-4 mr-2" />
          {t.viewDetails}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
}
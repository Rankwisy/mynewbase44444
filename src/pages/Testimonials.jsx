import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Star, Filter, Users } from "lucide-react";
import TestimonialCard from "../components/testimonials/TestimonialCard";
import SEO from "../components/SEO";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Testimonials() {
  const [language, setLanguage] = useState("en");
  const [filterRating, setFilterRating] = useState("all");
  const [filterService, setFilterService] = useState("all");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);

    const handleLanguageChange = (e) => {
      setLanguage(e.detail);
    };
    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  const { data: testimonials = [], isLoading } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const data = await base44.entities.Testimonial.list();
      return data.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
    initialData: [],
  });

  const content = {
    en: {
      hero: {
        title: "Customer Reviews",
        subtitle: "See what our customers say about their experience with RentBus Brussels"
      },
      stats: {
        avgRating: "Average Rating",
        totalReviews: "Total Reviews",
        satisfaction: "Satisfaction Rate"
      },
      filters: {
        title: "Filter Reviews",
        rating: "Rating",
        service: "Service Type",
        all: "All",
        allServices: "All Services"
      },
      noResults: "No reviews found matching your filters.",
      services: {
        "Airport Transfer": "Airport Transfer",
        "Corporate Event": "Corporate Event",
        "Wedding": "Wedding",
        "City Tour": "City Tour",
        "School Trip": "School Trip",
        "Other": "Other"
      }
    },
    fr: {
      hero: {
        title: "Avis Clients",
        subtitle: "Découvrez ce que nos clients disent de leur expérience avec RentBus Brussels"
      },
      stats: {
        avgRating: "Note Moyenne",
        totalReviews: "Total des Avis",
        satisfaction: "Taux de Satisfaction"
      },
      filters: {
        title: "Filtrer les Avis",
        rating: "Note",
        service: "Type de Service",
        all: "Tous",
        allServices: "Tous les Services"
      },
      noResults: "Aucun avis trouvé correspondant à vos filtres.",
      services: {
        "Airport Transfer": "Transfert Aéroport",
        "Corporate Event": "Événement Entreprise",
        "Wedding": "Mariage",
        "City Tour": "Visite Guidée",
        "School Trip": "Sortie Scolaire",
        "Other": "Autre"
      }
    }
  };

  const t = content[language];

  // Calculate statistics
  const averageRating = testimonials.length > 0
    ? (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)
    : 0;

  const satisfactionRate = testimonials.length > 0
    ? Math.round((testimonials.filter(t => t.rating >= 4).length / testimonials.length) * 100)
    : 0;

  // Filter testimonials
  const filteredTestimonials = testimonials.filter(testimonial => {
    const ratingMatch = filterRating === "all" || testimonial.rating === parseInt(filterRating);
    const serviceMatch = filterService === "all" || testimonial.service_type === filterService;
    return ratingMatch && serviceMatch;
  });

  const serviceTypes = ["Airport Transfer", "Corporate Event", "Wedding", "City Tour", "School Trip", "Other"];

  return (
    <div className="min-h-screen">
      <SEO language={language} page="testimonials" />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.hero.title}
            </h1>
            <p className="text-xl text-blue-100">
              {t.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {averageRating}
              </div>
              <div className="text-gray-600">{t.stats.avgRating}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {testimonials.length}+
              </div>
              <div className="text-gray-600">{t.stats.totalReviews}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">
                {satisfactionRate}%
              </div>
              <div className="text-gray-600">{t.stats.satisfaction}</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <Filter className="w-5 h-5" />
              <span className="font-semibold">{t.filters.title}:</span>
            </div>

            <Select value={filterRating} onValueChange={setFilterRating}>
              <SelectTrigger className="w-40 bg-white">
                <SelectValue placeholder={t.filters.rating} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.filters.all}</SelectItem>
                <SelectItem value="5">5 {language === "en" ? "stars" : "étoiles"}</SelectItem>
                <SelectItem value="4">4+ {language === "en" ? "stars" : "étoiles"}</SelectItem>
                <SelectItem value="3">3+ {language === "en" ? "stars" : "étoiles"}</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterService} onValueChange={setFilterService}>
              <SelectTrigger className="w-52 bg-white">
                <SelectValue placeholder={t.filters.service} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.filters.allServices}</SelectItem>
                {serviceTypes.map(service => (
                  <SelectItem key={service} value={service}>
                    {t.services[service]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {(filterRating !== "all" || filterService !== "all") && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setFilterRating("all");
                  setFilterService("all");
                }}
              >
                {language === "en" ? "Clear filters" : "Effacer les filtres"}
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : filteredTestimonials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">{t.noResults}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                  language={language}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
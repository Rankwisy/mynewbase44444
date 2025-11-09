
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Bus,
  Users,
  Briefcase,
  Wifi,
  Coffee,
  Snowflake,
  Volume2,
  Plug,
  Monitor,
  Shield,
  Award,
  CheckCircle,
  ArrowRight,
  Eye,
  MessageSquare
} from "lucide-react";
import FleetCard from "../components/fleet/FleetCard";
import FleetModal from "../components/fleet/FleetModal";
import SEO from "../components/SEO";

export default function Fleet() {
  const [language, setLanguage] = useState("en");
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);

    const handleLanguageChange = (e) => {
      setLanguage(e.detail);
    };
    window.addEventListener("languageChange", handleLanguageChange);

    // Add Vehicle and RentalService schema to page
    const baseUrl = window.location.origin;
    
    // Note: The 'language' variable in the schema will reflect the state at the time this useEffect first runs,
    // which is upon component mount and initial language load. It will not dynamically update if the language
    // is changed later via the languageChange event, as this effect has an empty dependency array [].
    const rentalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "RentalCarService",
      "name": "RentBus Brussels Vehicle Rental",
      "description": language === "en" 
        ? "Professional bus and coach rental service with a modern fleet of vehicles ranging from 9 to 60 passengers"
        : "Service professionnel de location de bus et autocars avec une flotte moderne de véhicules de 9 à 60 passagers",
      "provider": {
        "@type": "LocalBusiness",
        "name": "RentBus Brussels",
        "url": baseUrl
      },
      "areaServed": {
        "@type": "City",
        "name": "Brussels"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      }
    };

    let script = document.getElementById("schema-rental-service");
    if (!script) {
      script = document.createElement("script");
      script.id = "schema-rental-service";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(rentalServiceSchema);

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange);
      // Optionally, remove the schema script on unmount if it's dynamic,
      // but typically, static page schemas are left in the head.
      // For this implementation, the script remains if it was added.
    };
  }, [language]); // Added language to dependency array to ensure schema updates if language state changes,
  // but be aware that the initial setLanguage within this effect might cause a re-run.
  // A better approach for schema dynamic updates would be a separate useEffect hook for schema with [language] dependency.
  // However, following the outline for placing the code within this single useEffect, we make it react to language changes.
  // To avoid potential infinite loops if language changes frequently, consider splitting the concerns into two effects.
  // For the purpose of this exact change, we're making the schema dynamic.

  const content = {
    en: {
      hero: {
        title: "Our Fleet",
        subtitle: "Modern, comfortable vehicles for every group size"
      },
      intro: {
        title: "Premium Fleet for Every Occasion",
        description: "From intimate groups to large events, our diverse fleet of modern vehicles ensures comfortable, safe, and stylish transportation. All vehicles are regularly inspected, fully insured, and maintained to the highest standards."
      },
      fleet: [
        {
          id: "minibus",
          name: "Luxury Minibus",
          capacity: "9-16 Passengers",
          image: "https://ik.imagekit.io/by733ltn6/c4c712bd-48a3-45b0-a064-a21f222a4650.png?updatedAt=1753097472481",
          images: [
            "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2070",
            "https://ik.imagekit.io/by733ltn6/bus-blanche.png?updatedAt=1752974075819",
            "https://ik.imagekit.io/by733ltn6/Mercedes-Benz-Sprinter-517-Estonia_20042_5875811637.jpg?updatedAt=1753120867581"
          ],
          videoUrl: null,
          shortDescription: "Perfect for small groups, airport transfers, and city tours",
          description: "Our luxury minibuses are ideal for small to medium groups seeking comfort and flexibility. Perfect for airport transfers, corporate events, and intimate tours around Brussels.",
          features: [
            { icon: Users, text: "9-16 reclining seats" },
            { icon: Snowflake, text: "Climate control AC" },
            { icon: Briefcase, text: "Ample luggage space" },
            { icon: Plug, text: "USB charging ports" },
            { icon: Monitor, text: "Entertainment system" },
            { icon: Shield, text: "Safety certified" }
          ],
          specifications: {
            passengers: "9-16",
            luggage: "Large capacity rear storage",
            features: ["Air conditioning", "Reclining seats", "USB ports", "Audio system", "Tinted windows"],
            idealFor: ["Airport transfers", "Small corporate events", "City tours", "Wedding parties", "VIP transport"]
          },
          pricing: "Contact for quote"
        },
        {
          id: "midi-coach",
          name: "Midi Coach",
          capacity: "17-35 Passengers",
          image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
          images: [
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
            "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2070",
            "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2070"
          ],
          videoUrl: null,
          shortDescription: "Ideal for medium groups, conferences, and day trips",
          description: "Our midi coaches strike the perfect balance between capacity and comfort. Equipped with modern amenities, these vehicles are perfect for corporate shuttles, school trips, and group excursions.",
          features: [
            { icon: Users, text: "17-35 premium seats" },
            { icon: Snowflake, text: "Advanced AC system" },
            { icon: Briefcase, text: "Large luggage bay" },
            { icon: Plug, text: "Individual USB ports" },
            { icon: Monitor, text: "HD entertainment" },
            { icon: Wifi, text: "Wi-Fi available" }
          ],
          specifications: {
            passengers: "17-35",
            luggage: "Spacious underfloor luggage compartment",
            features: ["Premium air conditioning", "Reclining seats with armrests", "Individual reading lights", "PA system", "USB charging at every seat", "Tinted panoramic windows"],
            idealFor: ["Corporate events", "School trips", "Conference shuttles", "Multi-day tours", "Sports teams", "Music groups"]
          },
          pricing: "Contact for quote"
        },
        {
          id: "luxury-coach",
          name: "Luxury Full-Size Coach",
          capacity: "36-60 Passengers",
          image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2070",
          images: [
            "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2070",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
            "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2070"
          ],
          videoUrl: null,
          shortDescription: "Premium comfort for large groups and long-distance travel",
          description: "Our flagship luxury coaches provide the ultimate in comfort and amenities for large groups. Perfect for long-distance tours, major corporate events, and large-scale transportation needs.",
          features: [
            { icon: Users, text: "36-60 luxury seats" },
            { icon: Snowflake, text: "Multi-zone climate" },
            { icon: Coffee, text: "Onboard restroom" },
            { icon: Wifi, text: "High-speed Wi-Fi" },
            { icon: Monitor, text: "Premium entertainment" },
            { icon: Volume2, text: "Premium sound system" }
          ],
          specifications: {
            passengers: "36-60",
            luggage: "Extra-large underfloor storage compartments",
            features: ["Premium leather reclining seats", "Onboard WC", "Galley/refreshment area", "Multiple HD screens", "Professional audio system", "Individual climate control", "LED ambient lighting", "Panoramic windows"],
            idealFor: ["Long-distance tours", "Large corporate events", "Festival transport", "Airport group transfers", "International trips", "Convention shuttles"]
          },
          pricing: "Contact for quote"
        },
        {
          id: "vip-coach",
          name: "VIP Executive Coach",
          capacity: "20-30 Passengers",
          image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
          images: [
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
            "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2070",
            "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2070"
          ],
          videoUrl: null,
          shortDescription: "Ultimate luxury for executive travel and special occasions",
          description: "Our VIP executive coaches offer unparalleled luxury and comfort with spacious seating, premium amenities, and exclusive features. Perfect for executive travel, celebrity transport, and premium events.",
          features: [
            { icon: Users, text: "20-30 VIP seats" },
            { icon: Coffee, text: "Premium refreshments" },
            { icon: Wifi, text: "Starlink Wi-Fi" },
            { icon: Monitor, text: "4K entertainment" },
            { icon: Plug, text: "Power outlets & USB" },
            { icon: Award, text: "Concierge service" }
          ],
          specifications: {
            passengers: "20-30 (extra legroom configuration)",
            luggage: "Dedicated VIP luggage compartments",
            features: ["Executive leather seats with extra legroom", "Conference tables", "Refreshment bar", "Premium entertainment system", "Mood lighting", "Privacy curtains", "Insonorisation premium", "Onboard Wi-Fi", "Multiple charging options"],
            idealFor: ["Executive transport", "Celebrity tours", "Luxury weddings", "Premium corporate events", "VIP airport transfers", "High-profile occasions"]
          },
          pricing: "Premium rates - contact for quote"
        }
      ],
      why: {
        title: "Why Our Fleet Stands Out",
        points: [
          {
            icon: Shield,
            title: "Safety First",
            description: "All vehicles undergo rigorous safety inspections and maintenance schedules"
          },
          {
            icon: Award,
            title: "Premium Quality",
            description: "Modern, well-maintained vehicles with top-tier amenities"
          },
          {
            icon: CheckCircle,
            title: "Full Compliance",
            description: "Licensed, insured, and compliant with all EU transportation regulations"
          },
          {
            icon: Users,
            title: "Professional Drivers",
            description: "Experienced, multilingual drivers trained in customer service excellence"
          }
        ]
      },
      cta: {
        title: "Ready to Book Your Perfect Vehicle?",
        description: "Get a personalized quote based on your specific needs",
        button: "Request a Quote"
      }
    },
    fr: {
      hero: {
        title: "Notre Flotte",
        subtitle: "Véhicules modernes et confortables pour tous les groupes"
      },
      intro: {
        title: "Flotte Premium pour Toutes les Occasions",
        description: "Des petits groupes aux grands événements, notre flotte diversifiée de véhicules modernes garantit un transport confortable, sûr et élégant. Tous les véhicules sont régulièrement inspectés, entièrement assurés et entretenus selon les normes les plus élevées."
      },
      fleet: [
        {
          id: "minibus",
          name: "Minibus de Luxe",
          capacity: "9-16 Passagers",
          image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2070",
          images: [
            "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2070",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
            "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2070"
          ],
          videoUrl: null,
          shortDescription: "Parfait pour petits groupes, transferts aéroport et visites en ville",
          description: "Nos minibus de luxe sont idéaux pour les petits et moyens groupes recherchant confort et flexibilité. Parfaits pour transferts aéroport, événements d'entreprise et visites intimistes de Bruxelles.",
          features: [
            { icon: Users, text: "9-16 sièges inclinables" },
            { icon: Snowflake, text: "Climatisation" },
            { icon: Briefcase, text: "Grand espace bagages" },
            { icon: Plug, text: "Ports USB" },
            { icon: Monitor, text: "Système de divertissement" },
            { icon: Shield, text: "Certifié sécurité" }
          ],
          specifications: {
            passengers: "9-16",
            luggage: "Grand espace de rangement arrière",
            features: ["Climatisation", "Sièges inclinables", "Ports USB", "Système audio", "Vitres teintées"],
            idealFor: ["Transferts aéroport", "Petits événements d'entreprise", "Visites en ville", "Mariages", "Transport VIP"]
          },
          pricing: "Contactez-nous pour un devis"
        },
        {
          id: "midi-coach",
          name: "Autocar Moyen",
          capacity: "17-35 Passagers",
          image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
          images: [
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
            "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2070",
            "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2070"
          ],
          videoUrl: null,
          shortDescription: "Idéal pour groupes moyens, conférences et excursions d'un jour",
          description: "Nos autocars moyens offrent l'équilibre parfait entre capacité et confort. Équipés d'équipements modernes, ces véhicules sont parfaits pour navettes d'entreprise, sorties scolaires et excursions de groupe.",
          features: [
            { icon: Users, text: "17-35 sièges premium" },
            { icon: Snowflake, text: "Système AC avancé" },
            { icon: Briefcase, text: "Grande soute" },
            { icon: Plug, text: "Ports USB individuels" },
            { icon: Monitor, text: "Divertissement HD" },
            { icon: Wifi, text: "Wi-Fi disponible" }
          ],
          specifications: {
            passengers: "17-35",
            luggage: "Compartiment à bagages spacieux sous le plancher",
            features: ["Climatisation premium", "Sièges inclinables avec accoudoirs", "Liseuses individuelles", "Système PA", "Chargement USB à chaque siège", "Fenêtres panoramiques teintées"],
            idealFor: ["Événements d'entreprise", "Sorties scolaires", "Navettes de conférence", "Circuits de plusieurs jours", "Équipes sportives", "Groupes musicaux"]
          },
          pricing: "Contactez-nous pour un devis"
        },
        {
          id: "luxury-coach",
          name: "Autocar de Luxe Grand Format",
          capacity: "36-60 Passagers",
          image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2070",
          images: [
            "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2070",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
            "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2070"
          ],
          videoUrl: null,
          shortDescription: "Confort premium pour grands groupes et voyages longue distance",
          description: "Nos autocars de luxe phares offrent le summum du confort et des équipements pour les grands groupes. Parfaits pour circuits longue distance, grands événements d'entreprise et besoins de transport à grande échelle.",
          features: [
            { icon: Users, text: "36-60 sièges luxe" },
            { icon: Snowflake, text: "Climat multi-zones" },
            { icon: Coffee, text: "WC à bord" },
            { icon: Wifi, text: "Wi-Fi haut débit" },
            { icon: Monitor, text: "Divertissement premium" },
            { icon: Volume2, text: "Système son premium" }
          ],
          specifications: {
            passengers: "36-60",
            luggage: "Compartiments de stockage sous plancher extra-larges",
            features: ["Sièges inclinables en cuir premium", "WC à bord", "Coin cuisine/rafraîchissement", "Plusieurs écrans HD", "Système audio professionnel", "Contrôle climatique individuel", "Éclairage ambiant LED", "Fenêtres panoramiques"],
            idealFor: ["Circuits longue distance", "Grands événements d'entreprise", "Transport pour festivals", "Transferts aéroport en groupe", "Voyages internationaux", "Navettes de congrès"]
          },
          pricing: "Contactez-nous pour un devis"
        },
        {
          id: "vip-coach",
          name: "Autocar VIP Exécutif",
          capacity: "20-30 Passagers",
          image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
          images: [
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
            "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2070",
            "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2070"
          ],
          videoUrl: null,
          shortDescription: "Luxe ultime pour voyages d'affaires et occasions spéciales",
          description: "Nos autocars exécutifs VIP offrent un luxe et un confort inégalés avec sièges spacieux, équipements premium et fonctionnalités exclusives. Parfaits pour voyages d'affaires, transport de célébrités et événements premium.",
          features: [
            { icon: Users, text: "20-30 sièges VIP" },
            { icon: Coffee, text: "Rafraîchissements premium" },
            { icon: Wifi, text: "Wi-Fi Starlink" },
            { icon: Monitor, text: "Divertissement 4K" },
            { icon: Plug, text: "Prises & USB" },
            { icon: Award, text: "Service conciergerie" }
          ],
          specifications: {
            passengers: "20-30 (configuration espace supplémentaire)",
            luggage: "Compartiments bagages VIP dédiés",
            features: ["Sièges cuir exécutif avec espace jambes supplémentaire", "Tables de conférence", "Bar à rafraîchissements", "Système de divertissement premium", "Éclairage d'ambiance", "Rideaux d'intimité", "Insonorisation premium", "Wi-Fi à bord", "Multiples options de chargement"],
            idealFor: ["Transport exécutif", "Tournées de célébrités", "Mariages de luxe", "Événements d'entreprise premium", "VIP airport transfers", "Occasions prestigieuses"]
          },
          pricing: "Tarifs premium - contactez-nous"
        }
      ],
      why: {
        title: "Pourquoi Notre Flotte Se Distingue",
        points: [
          {
            icon: Shield,
            title: "Sécurité d'Abord",
            description: "Tous les véhicules subissent des inspections de sécurité rigoureuses et des calendriers d'entretien"
          },
          {
            icon: Award,
            title: "Qualité Premium",
            description: "Véhicules modernes et bien entretenus avec équipements haut de gamme"
          },
          {
            icon: CheckCircle,
            title: "Conformité Totale",
            description: "Licenciés, assurés et conformes à toutes les réglementations européennes"
          },
          {
            icon: Users,
            title: "Chauffeurs Professionnels",
            description: "Chauffeurs expérimentés et multilingues formés à l'excellence du service client"
          }
        ]
      },
      cta: {
        title: "Prêt à Réserver Votre Véhicule Idéal?",
        description: "Obtenez un devis personnalisé selon vos besoins spécifiques",
        button: "Demander un Devis"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      <SEO language={language} page="fleet" />
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Bus className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.hero.title}
            </h1>
            <p className="text-xl text-blue-100">
              {t.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.intro.title}
            </h2>
            <p className="text-lg text-gray-600">
              {t.intro.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {t.fleet.map((vehicle, index) => (
              <FleetCard
                key={vehicle.id}
                vehicle={vehicle}
                index={index}
                onViewDetails={() => setSelectedVehicle(vehicle)}
                language={language}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.why.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.why.points.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600">{point.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t.cta.description}
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-6">
              {t.cta.button} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Modal */}
      {selectedVehicle && (
        <FleetModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
          language={language}
        />
      )}
    </div>
  );
}

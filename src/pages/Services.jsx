
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import {
  Plane,
  Calendar,
  MapPin,
  Building2,
  GraduationCap,
  Check,
  Bus,
  Shield,
  Clock,
  Users,
  Star
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

export default function Services() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);

    const handleLanguageChange = (e) => {
      setLanguage(e.detail);
    };
    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  const content = {
    en: {
      hero: {
        title: "Our Services",
        description: "Comprehensive bus rental solutions for every occasion"
      },
      services: [
        {
          icon: Plane,
          title: "Airport Transfers",
          description: "Door-to-door transfers between Brussels Airport and any Brussels address. Reliable pick-ups, flight monitoring and friendly drivers.",
          features: [
            "Flight arrival monitoring",
            "Meet and greet service",
            "Luggage assistance",
            "24/7 availability",
            "Direct routes to all airports"
          ],
          image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074"
        },
        {
          icon: Calendar,
          title: "Events & Group Transport",
          description: "Weddings, conferences, concerts and festivals — we handle logistics so your group arrives together and on time.",
          features: [
            "Custom pickup schedules",
            "Multiple vehicle coordination",
            "VIP service available",
            "Professional, uniformed drivers",
            "Event coordination support"
          ],
          image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069"
        },
        {
          icon: MapPin,
          title: "City Tours & Excursions",
          description: "Custom Brussels tours and multi-day itineraries with comfortable, climate-controlled coaches.",
          features: [
            "Customizable itineraries",
            "Knowledgeable local drivers",
            "Multi-day tours available",
            "Scenic route planning",
            "Rest stop coordination"
          ],
          image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070"
        },
        {
          icon: Building2,
          title: "Corporate & Shuttle Services",
          description: "Daily shuttles, employee transport, and turnkey solutions for corporate events.",
          features: [
            "Regular scheduled routes",
            "Corporate event packages",
            "Professional service",
            "Flexible scheduling",
            "Volume discounts available"
          ],
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
        },
        {
          icon: GraduationCap,
          title: "School & Group Trips",
          description: "Safety-checked vehicles and experienced drivers for school outings and large groups.",
          features: [
            "Safety-certified vehicles",
            "Experienced drivers with clearances",
            "Seatbelts for all passengers",
            "Flexible payment options",
            "Educational trip specialists"
          ],
          image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
        }
      ],
      fleet: {
        title: "Our Fleet",
        description: "From 9-seat minibuses to full-size luxury coaches — all regularly inspected and equipped for comfort and luggage. Tell us your group size and itinerary; we'll recommend the best vehicle.",
        vehicles: [
          {
            name: "Minibus",
            capacity: "9-16 passengers",
            features: ["Air conditioning", "Luggage space", "Comfortable seating"]
          },
          {
            name: "Midi Coach",
            capacity: "17-35 passengers",
            features: ["Air conditioning", "Reclining seats", "Large luggage bay", "USB charging"]
          },
          {
            name: "Luxury Coach",
            capacity: "36-60 passengers",
            features: ["Premium seating", "Onboard WC", "Entertainment system", "Wi-Fi available"]
          }
        ]
      },
      whyChoose: {
        title: "Why choose our services?",
        points: [
          {
            icon: Shield,
            title: "Safety First",
            description: "All vehicles regularly inspected and fully insured"
          },
          {
            icon: Clock,
            title: "Always On Time",
            description: "Punctual service with real-time tracking"
          },
          {
            icon: Users,
            title: "Professional Drivers",
            description: "Licensed, experienced, and multilingual"
          },
          {
            icon: Star,
            title: "Premium Comfort",
            description: "Modern, well-maintained vehicles"
          }
        ]
      },
      cta: {
        title: "Ready to book your service?",
        description: "Get a free, no-obligation quote within 24 hours",
        button: "Get a quote"
      }
    },
    fr: {
      hero: {
        title: "Nos Services",
        description: "Solutions complètes de location de bus pour toutes les occasions"
      },
      services: [
        {
          icon: Plane,
          title: "Transferts aéroport",
          description: "Transferts ponctuels entre l'aéroport de Bruxelles et votre adresse — prise en charge fiable et suivi des vols.",
          features: [
            "Suivi des arrivées de vols",
            "Service de rencontre",
            "Assistance bagages",
            "Disponible 24h/24",
            "Routes directes vers tous les aéroports"
          ],
          image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074"
        },
        {
          icon: Calendar,
          title: "Événements & transport de groupe",
          description: "Mariages, conférences, concerts : nous coordonons la logistique pour que votre groupe arrive ensemble et à l'heure.",
          features: [
            "Horaires de prise en charge personnalisés",
            "Coordination de plusieurs véhicules",
            "Service VIP disponible",
            "Chauffeurs professionnels en uniforme",
            "Soutien à la coordination d'événements"
          ],
          image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069"
        },
        {
          icon: MapPin,
          title: "Visites & excursions",
          description: "Visites personnalisées de Bruxelles et excursions sur plusieurs jours avec véhicules confortables.",
          features: [
            "Itinéraires personnalisables",
            "Chauffeurs locaux expérimentés",
            "Voyages de plusieurs jours disponibles",
            "Planification d'itinéraires panoramiques",
            "Coordination des arrêts"
          ],
          image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070"
        },
        {
          icon: Building2,
          title: "Services entreprise & navettes",
          description: "Navettes quotidiennes, transport salarié et solutions clés en main pour événements professionnels.",
          features: [
            "Itinéraires réguliers programmés",
            "Forfaits événements d'entreprise",
            "Service professionnel",
            "Horaires flexibles",
            "Remises sur volume disponibles"
          ],
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
        },
        {
          icon: GraduationCap,
          title: "Sorties scolaires & groupes",
          description: "Véhicules contrôlés et chauffeurs expérimentés pour sorties scolaires et groupes.",
          features: [
            "Véhicules certifiés sécurité",
            "Chauffeurs expérimentés avec habilitations",
            "Ceintures de sécurité pour tous",
            "Options de paiement flexibles",
            "Spécialistes des voyages éducatifs"
          ],
          image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
        }
      ],
      fleet: {
        title: "Notre flotte",
        description: "Minibus 9 places jusqu'aux autocars de grande capacité — tous entretenus et équipés pour le confort. Indiquez-nous la taille du groupe et l'itinéraire ; nous vous conseillons.",
        vehicles: [
          {
            name: "Minibus",
            capacity: "9-16 passagers",
            features: ["Climatisation", "Espace bagages", "Sièges confortables"]
          },
          {
            name: "Autocar moyen",
            capacity: "17-35 passagers",
            features: ["Climatisation", "Sièges inclinables", "Grande soute", "Chargement USB"]
          },
          {
            name: "Autocar de luxe",
            capacity: "36-60 passagers",
            features: ["Sièges premium", "WC à bord", "Système de divertissement", "Wi-Fi disponible"]
          }
        ]
      },
      whyChoose: {
        title: "Pourquoi choisir nos services ?",
        points: [
          {
            icon: Shield,
            title: "Sécurité d'abord",
            description: "Tous les véhicules régulièrement inspectés et entièrement assurés"
          },
          {
            icon: Clock,
            title: "Toujours à l'heure",
            description: "Service ponctuel avec suivi en temps réel"
          },
          {
            icon: Users,
            title: "Chauffeurs professionnels",
            description: "Licenciés, expérimentés et multilingues"
          },
          {
            icon: Star,
            title: "Confort premium",
            description: "Véhicules modernes et bien entretenus"
          }
        ]
      },
      cta: {
        title: "Prêt à réserver votre service ?",
        description: "Obtenez un devis gratuit et sans engagement sous 24 heures",
        button: "Obtenir un devis"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      <SEO language={language} page="services" />
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.hero.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {t.services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.fleet.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.fleet.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.fleet.vehicles.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <Bus className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {vehicle.capacity}
                </p>
                <ul className="space-y-2">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.whyChoose.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.whyChoose.points.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
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
              {t.cta.button}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

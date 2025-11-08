
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { 
  Bus, 
  Shield, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  Check,
  Plane,
  Calendar,
  Building2,
  GraduationCap,
  MapPin,
  ChevronDown
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import TestimonialSection from "../components/testimonials/TestimonialSection";

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);

    // Listen for language changes
    const handleLanguageChange = (e) => {
      setLanguage(e.detail);
    };
    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  const content = {
    en: {
      hero: {
        title: "Comfortable, reliable bus rental in Brussels",
        subtitle: "with a professional driver",
        description: "Luxury coaches and minibuses for events, transfers and tours. Tailored routes, punctual service and clear pricing.",
        cta: "Get a free quote",
        ctaSecondary: "View our fleet"
      },
      why: {
        title: "Why RentBus Brussels?",
        description: "Since 2011, RentBus Brussels has provided safe, punctual and comfortable group transport across Brussels and beyond. Our bilingual drivers, modern fleet and personalized service make us the easy choice for corporate travel, events, airport transfers and tours.",
        points: [
          "Experienced, licensed drivers familiar with Brussels traffic and events",
          "Flexible vehicle choices — minibuses to luxury coaches",
          "Transparent quotes and attentive customer service"
        ]
      },
      services: {
        title: "Our Services",
        items: [
          {
            icon: Plane,
            title: "Airport Transfers",
            description: "Door-to-door transfers between Brussels Airport and any Brussels address. Reliable pick-ups, flight monitoring and friendly drivers."
          },
          {
            icon: Calendar,
            title: "Events & Group Transport",
            description: "Weddings, conferences, concerts and festivals — we handle logistics so your group arrives together and on time."
          },
          {
            icon: MapPin,
            title: "City Tours & Excursions",
            description: "Custom Brussels tours and multi-day itineraries with comfortable, climate-controlled coaches."
          },
          {
            icon: Building2,
            title: "Corporate & Shuttle Services",
            description: "Daily shuttles, employee transport, and turnkey solutions for corporate events."
          },
          {
            icon: GraduationCap,
            title: "School & Group Trips",
            description: "Safety-checked vehicles and experienced drivers for school outings and large groups."
          }
        ]
      },
      fleetPreview: {
        title: "Explore Our Fleet",
        description: "From luxury minibuses to full-size coaches — modern vehicles for every group size",
        minibusTitle: "Luxury Minibus",
        minibusCapacity: "9-16 passengers",
        midiCoachTitle: "Midi Coach",
        midiCoachCapacity: "17-35 passengers",
        luxuryCoachTitle: "Luxury Coach",
        luxuryCoachCapacity: "36-60 passengers",
        button: "View Full Fleet"
      },
      howItWorks: {
        title: "How it works",
        steps: [
          {
            number: "1",
            title: "Request a quote",
            description: "Tell us dates, passenger count and pick-up/drop-off points."
          },
          {
            number: "2",
            title: "Confirm booking",
            description: "Receive a clear quote and driver details."
          },
          {
            number: "3",
            title: "Travel with confidence",
            description: "Punctual service and local support on the day."
          }
        ]
      },
      usp: {
        title: "What makes us different",
        points: [
          {
            icon: MapPin,
            title: "Local experience",
            description: "Brussels specialists since 2011"
          },
          {
            icon: Star,
            title: "Tailored solutions",
            description: "Flexible routes and vehicle selection for every occasion"
          },
          {
            icon: Users,
            title: "Multilingual drivers",
            description: "Comfortable service for international groups"
          },
          {
            icon: Shield,
            title: "Transparent pricing",
            description: "No hidden fees — clear quotes before booking"
          }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            q: "How do I get a quote?",
            a: "Use our contact form or email info@rentbus.brussels with trip details (date, passenger count, route). We reply promptly."
          },
          {
            q: "Can you meet flights?",
            a: "Yes — we monitor flight arrival times and adjust pick-up as needed."
          },
          {
            q: "What payment methods do you accept?",
            a: "We accept bank transfer and card payments (details provided on invoice)."
          },
          {
            q: "What size groups can you accommodate?",
            a: "From 9-seat minibuses to full-size luxury coaches — we can accommodate groups of any size."
          }
        ]
      },
      cta: {
        title: "Ready to book?",
        description: "Email info@rentbus.brussels or use our contact form to request a free quote.",
        button: "Contact us now"
      }
    },
    fr: {
      hero: {
        title: "Location de bus confortable et fiable à Bruxelles",
        subtitle: "chauffeur inclus",
        description: "Autocars et minibus de luxe pour événements, transferts et excursions. Service ponctuel, tarifs transparents.",
        cta: "Obtenir un devis gratuit",
        ctaSecondary: "Voir notre flotte"
      },
      why: {
        title: "Pourquoi choisir RentBus Brussels ?",
        description: "Depuis 2011, RentBus Brussels offre des solutions de transport de groupe sûres et ponctuelles à Bruxelles et sa région. Nos chauffeurs bilingues, notre flotte moderne et notre service personnalisé font la différence.",
        points: [
          "Chauffeurs expérimentés et professionnels",
          "Flotte adaptée à tous les besoins — du minibus à l'autocar de luxe",
          "Devis clairs et service client attentif"
        ]
      },
      services: {
        title: "Nos services",
        items: [
          {
            icon: Plane,
            title: "Transferts aéroport",
            description: "Transferts ponctuels entre l'aéroport de Bruxelles et votre adresse — prise en charge fiable et suivi des vols."
          },
          {
            icon: Calendar,
            title: "Événements & transport de groupe",
            description: "Mariages, conférences, concerts : nous coordonnons la logistique pour que votre groupe arrive ensemble et à l'heure."
          },
          {
            icon: MapPin,
            title: "Visites & excursions",
            description: "Visites personnalisées de Bruxelles et excursions sur plusieurs jours avec véhicules confortables."
          },
          {
            icon: Building2,
            title: "Services entreprise & navettes",
            description: "Navettes quotidiennes, transport salarié et solutions clés en main pour événements professionnels."
          },
          {
            icon: GraduationCap,
            title: "Sorties scolaires & groupes",
            description: "Véhicules contrôlés et chauffeurs expérimentés pour sorties scolaires et groupes."
          }
        ]
      },
      fleetPreview: {
        title: "Découvrez Notre Flotte",
        description: "Des minibus de luxe aux autocars grand format — véhicules modernes pour tous les groupes",
        minibusTitle: "Minibus de Luxe",
        minibusCapacity: "9-16 passagers",
        midiCoachTitle: "Autocar Moyen",
        midiCoachCapacity: "17-35 passagers",
        luxuryCoachTitle: "Autocar de Luxe",
        luxuryCoachCapacity: "36-60 passagers",
        button: "Voir Toute la Flotte"
      },
      howItWorks: {
        title: "Mode d'emploi",
        steps: [
          {
            number: "1",
            title: "Demander un devis",
            description: "Précisez date, nombre de passagers et points de prise en charge/retour."
          },
          {
            number: "2",
            title: "Confirmer la réservation",
            description: "Réception d'un devis clair et des coordonnées du chauffeur."
          },
          {
            number: "3",
            title: "Voyager sereinement",
            description: "Service ponctuel et assistance locale le jour J."
          }
        ]
      },
      usp: {
        title: "Nos atouts distinctifs",
        points: [
          {
            icon: MapPin,
            title: "Expérience locale",
            description: "Spécialistes de Bruxelles depuis 2011"
          },
          {
            icon: Star,
            title: "Solutions sur mesure",
            description: "Itinéraires et véhicules adaptés à chaque besoin"
          },
          {
            icon: Users,
            title: "Chauffeurs multilingues",
            description: "Service confortable pour groupes internationaux"
          },
          {
            icon: Shield,
            title: "Tarifs transparents",
            description: "Devis sans frais cachés"
          }
        ]
      },
      faq: {
        title: "Questions fréquentes",
        items: [
          {
            q: "Comment obtenir un devis ?",
            a: "Contactez-nous via le formulaire ou par email à info@rentbus.brussels en indiquant les détails du trajet. Réponse rapide."
          },
          {
            q: "Pouvez-vous assurer la prise en charge de vols ?",
            a: "Oui — nous suivons les arrivées de vols et adaptons le pickup si nécessaire."
          },
          {
            q: "Quels moyens de paiement ?",
            a: "Virement bancaire et paiement par carte (modalités sur facture)."
          },
          {
            q: "Quelles tailles de groupes pouvez-vous accueillir ?",
            a: "Minibus 9 places jusqu'aux autocars de grande capacité — nous pouvons accueillir des groupes de toutes tailles."
          }
        ]
      },
      cta: {
        title: "Prêt à réserver ?",
        description: "Écrivez à info@rentbus.brussels ou utilisez notre formulaire de contact pour un devis gratuit.",
        button: "Contactez-nous"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      <SEO language={language} page="home" />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with optimization */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format"
            alt="Brussels cityscape"
            loading="eager"
            fetchpriority="high"
            className="w-full h-full object-cover"
            width="2069"
            height="1380"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t.hero.title}
              <span className="block text-blue-400 mt-2">{t.hero.subtitle}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  {t.hero.cta} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl("Services")}>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                  {t.hero.ctaSecondary}
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-white/80"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm">{language === "en" ? "Since 2011" : "Depuis 2011"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm">{language === "en" ? "Licensed & Insured" : "Licencié & Assuré"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-sm">{language === "en" ? "Multilingual Service" : "Service Multilingue"}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t.why.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t.why.description}
              </p>
              <div className="space-y-4">
                {t.why.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2070&auto=format"
                alt="Luxury bus interior"
                loading="lazy"
                decoding="async"
                className="rounded-2xl shadow-2xl"
                width="2070"
                height="1380"
              />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-600 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.services.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fleet Preview Section - NEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.fleetPreview.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              {t.fleetPreview.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-xl overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2070&auto=format"
                alt="Minibus"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                width="800"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold mb-1">
                  {t.fleetPreview.minibusTitle}
                </h3>
                <p className="text-sm text-white/90">{t.fleetPreview.minibusCapacity}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative h-64 rounded-xl overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format"
                alt="Coach"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                width="800"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold mb-1">
                  {t.fleetPreview.midiCoachTitle}
                </h3>
                <p className="text-sm text-white/90">{t.fleetPreview.midiCoachCapacity}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative h-64 rounded-xl overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2070&auto=format"
                alt="Luxury Coach"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                width="800"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold mb-1">
                  {t.fleetPreview.luxuryCoachTitle}
                </h3>
                <p className="text-sm text-white/90">{t.fleetPreview.luxuryCoachCapacity}</p>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <Link to={createPageUrl("Fleet")}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                {t.fleetPreview.button}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.howItWorks.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.howItWorks.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-blue-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.usp.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.usp.points.map((point, index) => {
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
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                  <p className="text-blue-100">{point.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section - NEW */}
      <TestimonialSection language={language} />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.faq.title}
            </h2>
          </div>

          <div className="space-y-4">
            {t.faq.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600">
                    {item.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t.cta.description}
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-10 py-6">
              {t.cta.button} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Bus, MapPin, Calendar, Building2, Phone } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Internal Linking Component - Strategic internal links to improve SEO and user navigation
 * 
 * SEO Benefits:
 * - Distributes page authority throughout the site
 * - Helps search engines discover and index pages
 * - Increases time on site and reduces bounce rate
 * - Improves crawlability and site structure understanding
 * 
 * Best Practices Implemented:
 * - Descriptive anchor text (keywords)
 * - Contextually relevant links
 * - Strategic placement (related content)
 * - Not excessive (3-5 links per component)
 */

export function ServiceLinks({ language }) {
  const links = language === "en" ? [
    { to: createPageUrl("Services"), icon: Bus, text: "Explore all our services", desc: "Airport transfers, events, tours & more" },
    { to: createPageUrl("Fleet"), icon: MapPin, text: "View our fleet", desc: "9 to 60 passenger vehicles" },
    { to: createPageUrl("Contact"), icon: Phone, text: "Get a free quote", desc: "24-hour response time" }
  ] : [
    { to: createPageUrl("Services"), icon: Bus, text: "Découvrez tous nos services", desc: "Transferts, événements, tours & plus" },
    { to: createPageUrl("Fleet"), icon: MapPin, text: "Voir notre flotte", desc: "Véhicules de 9 à 60 passagers" },
    { to: createPageUrl("Contact"), icon: Phone, text: "Obtenir un devis gratuit", desc: "Réponse sous 24 heures" }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {links.map((link, index) => {
        const Icon = link.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={link.to}
              className="block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {link.text}
                  </h3>
                  <p className="text-sm text-gray-600">{link.desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}

export function RelatedServices({ currentService, language }) {
  const allServices = language === "en" ? {
    airport: { title: "Airport Transfer Service", url: createPageUrl("Services"), icon: Bus },
    events: { title: "Corporate & Event Transport", url: createPageUrl("Services"), icon: Calendar },
    tours: { title: "City Tours & Excursions", url: createPageUrl("Services"), icon: MapPin },
    corporate: { title: "Corporate Shuttle Services", url: createPageUrl("Services"), icon: Building2 }
  } : {
    airport: { title: "Service de Transfert Aéroport", url: createPageUrl("Services"), icon: Bus },
    events: { title: "Transport Entreprise & Événements", url: createPageUrl("Services"), icon: Calendar },
    tours: { title: "Visites & Excursions", url: createPageUrl("Services"), icon: MapPin },
    corporate: { title: "Services Navette Entreprise", url: createPageUrl("Services"), icon: Building2 }
  };

  const services = Object.entries(allServices)
    .filter(([key]) => key !== currentService)
    .slice(0, 3);

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {language === "en" ? "Related Services" : "Services Connexes"}
      </h3>
      <div className="space-y-3">
        {services.map(([key, service]) => {
          const Icon = service.icon;
          return (
            <Link
              key={key}
              to={service.url}
              className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors group"
            >
              <Icon className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 group-hover:text-blue-600 transition-colors text-sm">
                {service.title}
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:translate-x-1 transition-transform" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function QuickNavigation({ language }) {
  const nav = language === "en" ? {
    title: "Quick Navigation",
    links: [
      { to: createPageUrl("Home"), text: "Home" },
      { to: createPageUrl("Services"), text: "Our Services" },
      { to: createPageUrl("Fleet"), text: "View Fleet" },
      { to: createPageUrl("About"), text: "About Us" },
      { to: createPageUrl("Contact"), text: "Contact & Quote" }
    ]
  } : {
    title: "Navigation Rapide",
    links: [
      { to: createPageUrl("Home"), text: "Accueil" },
      { to: createPageUrl("Services"), text: "Nos Services" },
      { to: createPageUrl("Fleet"), text: "Voir la Flotte" },
      { to: createPageUrl("About"), text: "À Propos" },
      { to: createPageUrl("Contact"), text: "Contact & Devis" }
    ]
  };

  return (
    <nav aria-label="Quick navigation">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">{nav.title}</h3>
      <ul className="space-y-2">
        {nav.links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.to}
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center gap-2"
            >
              <ArrowRight className="w-3 h-3" />
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
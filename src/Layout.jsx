
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Bus, Phone, Mail, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import FaviconLinks from "@/components/FaviconLinks";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    // Trigger a custom event to notify other components
    window.dispatchEvent(new CustomEvent("languageChange", { detail: newLang }));
  };

  const translations = {
    en: {
      home: "Home",
      services: "Services",
      fleet: "Fleet",
      about: "About",
      contact: "Contact",
      getQuote: "Get a Quote",
      footer: {
        tagline: "Luxury bus rental with professional drivers since 2011",
        quick: "Quick Links",
        contact: "Contact Us",
        hours: "Office Hours: Mon-Fri 9:00-18:00"
      }
    },
    fr: {
      home: "Accueil",
      services: "Services",
      fleet: "Flotte",
      about: "À Propos",
      contact: "Contact",
      getQuote: "Obtenir un Devis",
      footer: {
        tagline: "Location de bus de luxe avec chauffeurs professionnels depuis 2011",
        quick: "Liens Rapides",
        contact: "Contactez-nous",
        hours: "Heures d'ouverture: Lun-Ven 9h00-18h00"
      }
    }
  };

  const t = translations[language];

  const navigation = [
    { name: t.home, path: createPageUrl("Home") },
    { name: t.services, path: createPageUrl("Services") },
    { name: t.fleet, path: createPageUrl("Fleet") },
    { name: t.about, path: createPageUrl("About") },
    { name: t.contact, path: createPageUrl("Contact") }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF9] flex flex-col">
      <FaviconLinks />
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
                <Bus className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">RentBus</h1>
                <p className="text-xs text-gray-500">Brussels</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Language Toggle */}
              <button
                onClick={() => handleLanguageChange(language === "en" ? "fr" : "en")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors text-sm"
              >
                <Globe className="w-4 h-4" />
                {language.toUpperCase()}
              </button>

              <Link to={createPageUrl("Contact")}>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  {t.getQuote}
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gray-900 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-gray-900 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-gray-900 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block py-2 text-gray-700 hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  handleLanguageChange(language === "en" ? "fr" : "en");
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 py-2 text-gray-700 hover:text-blue-600"
              >
                <Globe className="w-4 h-4" />
                {language === "en" ? "Français" : "English"}
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Bus className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">RentBus Brussels</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm">{t.footer.tagline}</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">{t.footer.quick}</h4>
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Avenue de la Couronne, 1050 Brussels</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:info@rentbus.brussels" className="hover:text-white transition-colors">
                    info@rentbus.brussels
                  </a>
                </div>
                <p className="text-xs mt-4">{t.footer.hours}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} RentBus Brussels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

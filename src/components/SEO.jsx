import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SEO({ language, page = "home" }) {
  const location = useLocation();

  useEffect(() => {
    const baseUrl = window.location.origin;
    const currentPath = location.pathname;

    // SEO content for different pages
    const seoContent = {
      en: {
        home: {
          title: "Bus Rental Brussels | Luxury Coach & Minibus Hire with Driver",
          description: "Premium bus rental service in Brussels since 2011. Luxury coaches, minibuses for events, airport transfers, corporate shuttles. Professional drivers, transparent pricing. Get your free quote!",
          keywords: "bus rental Brussels, coach hire Brussels, minibus rental Belgium, airport transfer Brussels, corporate shuttle Brussels, event transport"
        },
        services: {
          title: "Our Services | Bus Rental Brussels - Airport Transfers, Tours, Events",
          description: "Comprehensive bus rental services in Brussels: airport transfers, corporate events, city tours, school trips, wedding transport. Modern fleet, professional drivers. Book now!",
          keywords: "Brussels airport transfer, corporate bus rental, city tours Brussels, wedding transport, school bus hire, event shuttle service"
        },
        fleet: {
          title: "Our Fleet | Luxury Buses & Coaches - 9 to 60 Passengers | RentBus Brussels",
          description: "Explore our modern fleet: luxury minibuses (9-16 seats), midi coaches (17-35), full-size coaches (36-60), VIP executive buses. All vehicles with AC, Wi-Fi, premium comfort. View specs!",
          keywords: "luxury bus fleet Brussels, minibus rental, coach hire, VIP bus rental, 16 seater bus, 50 seater coach, air conditioned buses"
        },
        about: {
          title: "About Us | Professional Bus Rental Brussels Since 2011",
          description: "Learn about RentBus Brussels - your trusted bus rental partner since 2011. Licensed drivers, modern fleet, 10,000+ satisfied customers. Safety first, punctual service, transparent pricing.",
          keywords: "bus rental company Brussels, licensed bus operators Belgium, professional coach hire, Brussels transport company"
        },
        contact: {
          title: "Contact & Get Free Quote | Bus Rental Brussels",
          description: "Request a free quote for bus rental in Brussels. Contact us via form or email info@rentbus.brussels. 24-hour response time. Avenue de la Couronne, 1050 Brussels.",
          keywords: "bus rental quote Brussels, contact RentBus Brussels, book bus Brussels, coach hire inquiry"
        }
      },
      fr: {
        home: {
          title: "Location Bus Bruxelles | Autocar & Minibus de Luxe avec Chauffeur",
          description: "Service premium de location de bus à Bruxelles depuis 2011. Autocars de luxe, minibus pour événements, transferts aéroport, navettes entreprise. Chauffeurs pros, tarifs clairs!",
          keywords: "location bus Bruxelles, location autocar Belgique, minibus avec chauffeur, transfert aéroport Bruxelles, navette entreprise"
        },
        services: {
          title: "Nos Services | Location Bus Bruxelles - Transferts, Tours, Événements",
          description: "Services complets de location de bus à Bruxelles: transferts aéroport, événements entreprise, visites guidées, sorties scolaires, transport mariage. Flotte moderne!",
          keywords: "transfert aéroport Bruxelles, location bus entreprise, tours Bruxelles, transport mariage, bus scolaire, navette événement"
        },
        fleet: {
          title: "Notre Flotte | Bus & Autocars de Luxe - 9 à 60 Passagers | RentBus Brussels",
          description: "Découvrez notre flotte moderne: minibus luxe (9-16 places), autocars moyens (17-35), grands autocars (36-60), bus VIP exécutif. Tous avec climatisation, Wi-Fi, confort premium!",
          keywords: "flotte bus Bruxelles, location minibus, location autocar, bus VIP, bus 16 places, autocar 50 places, bus climatisés"
        },
        about: {
          title: "À Propos | Location Bus Professionnelle Bruxelles Depuis 2011",
          description: "Découvrez RentBus Brussels - votre partenaire de confiance depuis 2011. Chauffeurs licenciés, flotte moderne, 10 000+ clients satisfaits. Sécurité, ponctualité, transparence.",
          keywords: "société location bus Bruxelles, opérateur bus agréé Belgique, location autocar professionnel, entreprise transport Bruxelles"
        },
        contact: {
          title: "Contact & Devis Gratuit | Location Bus Bruxelles",
          description: "Demandez un devis gratuit pour la location de bus à Bruxelles. Contactez-nous via formulaire ou email info@rentbus.brussels. Réponse sous 24h. Avenue de la Couronne, 1050 Bruxelles.",
          keywords: "devis location bus Bruxelles, contacter RentBus Brussels, réserver bus Bruxelles, demande location autocar"
        }
      }
    };

    const currentSeo = seoContent[language]?.[page] || seoContent.en.home;

    // Update title
    document.title = currentSeo.title;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Standard meta tags
    updateMetaTag("description", currentSeo.description);
    updateMetaTag("keywords", currentSeo.keywords);
    updateMetaTag("author", "RentBus Brussels");
    updateMetaTag("robots", "index, follow");

    // Open Graph tags
    updateMetaTag("og:title", currentSeo.title, true);
    updateMetaTag("og:description", currentSeo.description, true);
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:url", `${baseUrl}${currentPath}`, true);
    updateMetaTag("og:image", "https://ik.imagekit.io/by733ltn6/FAVICONS/favicon_io%20(14)/android-chrome-512x512.png?updatedAt=1762608068655", true);
    updateMetaTag("og:locale", language === "en" ? "en_US" : "fr_FR", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", currentSeo.title);
    updateMetaTag("twitter:description", currentSeo.description);
    updateMetaTag("twitter:image", "https://ik.imagekit.io/by733ltn6/FAVICONS/favicon_io%20(14)/android-chrome-512x512.png?updatedAt=1762608068655");

    // Hreflang tags
    const updateHreflang = (hreflang, href) => {
      let element = document.querySelector(`link[hreflang="${hreflang}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", "alternate");
        element.setAttribute("hreflang", hreflang);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    updateHreflang("en", `${baseUrl}${currentPath}`);
    updateHreflang("fr", `${baseUrl}${currentPath}`);
    updateHreflang("x-default", `${baseUrl}${currentPath}`);

    // Structured Data - LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${baseUrl}#business`,
      "name": "RentBus Brussels",
      "alternateName": "RentBus",
      "description": language === "en" 
        ? "Premium bus and coach rental service in Brussels with professional drivers since 2011"
        : "Service premium de location de bus et autocars à Bruxelles avec chauffeurs professionnels depuis 2011",
      "url": baseUrl,
      "telephone": "+32-2-XXX-XXXX",
      "email": "info@rentbus.brussels",
      "logo": "https://ik.imagekit.io/by733ltn6/FAVICONS/favicon_io%20(14)/android-chrome-512x512.png?updatedAt=1762608068655",
      "image": "https://ik.imagekit.io/by733ltn6/FAVICONS/favicon_io%20(14)/android-chrome-512x512.png?updatedAt=1762608068655",
      "foundingDate": "2011",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Avenue de la Couronne",
        "addressLocality": "Brussels",
        "addressRegion": "Brussels-Capital",
        "postalCode": "1050",
        "addressCountry": "BE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "50.8355",
        "longitude": "4.3665"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Brussels"
        },
        {
          "@type": "Country",
          "name": "Belgium"
        }
      ],
      "sameAs": [],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": language === "en" ? "Bus Rental Services" : "Services de Location de Bus",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": language === "en" ? "Airport Transfer Service" : "Service de Transfert Aéroport"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": language === "en" ? "Corporate Event Transport" : "Transport Événements Entreprise"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": language === "en" ? "City Tours" : "Visites Guidées"
            }
          }
        ]
      }
    };

    // Structured Data - VehicleRental Schema
    const vehicleRentalSchema = {
      "@context": "https://schema.org",
      "@type": "VehicleRental",
      "@id": `${baseUrl}#rental`,
      "name": "RentBus Brussels - Bus & Coach Rental",
      "description": language === "en"
        ? "Professional bus and coach rental service offering luxury minibuses, midi coaches, and full-size coaches for all occasions"
        : "Service professionnel de location de bus et autocars proposant minibus de luxe, autocars moyens et grands autocars pour toutes occasions",
      "provider": {
        "@id": `${baseUrl}#business`
      },
      "serviceType": language === "en" ? "Bus Rental Service" : "Service de Location de Bus",
      "areaServed": [
        {
          "@type": "City",
          "name": "Brussels"
        },
        {
          "@type": "Country", 
          "name": "Belgium"
        }
      ],
      "vehicle": [
        {
          "@type": "Bus",
          "name": language === "en" ? "Luxury Minibus" : "Minibus de Luxe",
          "description": language === "en" ? "9-16 passenger luxury minibus" : "Minibus de luxe 9-16 passagers",
          "numberOfSeats": "9-16",
          "vehicleSeatingCapacity": 16,
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Air Conditioning" },
            { "@type": "LocationFeatureSpecification", "name": "USB Charging Ports" },
            { "@type": "LocationFeatureSpecification", "name": "Luggage Storage" }
          ]
        },
        {
          "@type": "Bus",
          "name": language === "en" ? "Midi Coach" : "Autocar Moyen",
          "description": language === "en" ? "17-35 passenger midi coach" : "Autocar moyen 17-35 passagers",
          "numberOfSeats": "17-35",
          "vehicleSeatingCapacity": 35,
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Air Conditioning" },
            { "@type": "LocationFeatureSpecification", "name": "Wi-Fi" },
            { "@type": "LocationFeatureSpecification", "name": "Entertainment System" },
            { "@type": "LocationFeatureSpecification", "name": "Reclining Seats" }
          ]
        },
        {
          "@type": "Bus",
          "name": language === "en" ? "Luxury Full-Size Coach" : "Autocar de Luxe Grand Format",
          "description": language === "en" ? "36-60 passenger luxury coach" : "Autocar de luxe 36-60 passagers",
          "numberOfSeats": "36-60",
          "vehicleSeatingCapacity": 60,
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Onboard Restroom" },
            { "@type": "LocationFeatureSpecification", "name": "Wi-Fi" },
            { "@type": "LocationFeatureSpecification", "name": "Premium Entertainment" },
            { "@type": "LocationFeatureSpecification", "name": "Climate Control" }
          ]
        }
      ]
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        }
      ]
    };

    if (page !== "home") {
      breadcrumbSchema.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": page.charAt(0).toUpperCase() + page.slice(1),
        "item": `${baseUrl}${currentPath}`
      });
    }

    // Add or update JSON-LD script
    const addOrUpdateJsonLd = (id, data) => {
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement("script");
        script.id = id;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };

    addOrUpdateJsonLd("schema-local-business", localBusinessSchema);
    addOrUpdateJsonLd("schema-vehicle-rental", vehicleRentalSchema);
    addOrUpdateJsonLd("schema-breadcrumb", breadcrumbSchema);

    // Cleanup function
    return () => {
      // Optional: Remove schemas when component unmounts
      // Generally not needed as they'll be updated on next render
    };
  }, [language, page, location.pathname]);

  return null;
}
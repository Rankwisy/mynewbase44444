import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Heart, Users, Target, Shield, Clock } from "lucide-react";

export default function About() {
  const [language] = useState("en");

  const content = {
    en: {
      hero: {
        title: "About RentBus Brussels",
        subtitle: "Your trusted partner for group transportation since 2011"
      },
      story: {
        title: "Our Story",
        text: "Since 2011, RentBus Brussels has been providing safe, reliable, and comfortable group transportation services across Brussels and beyond. What started as a small family business has grown into one of Brussels' most trusted bus rental companies, serving thousands of satisfied customers each year. Our commitment to excellence, punctuality, and customer service has made us the preferred choice for corporate events, weddings, school trips, and tours."
      },
      values: {
        title: "Our Values",
        items: [
          {
            icon: Shield,
            title: "Safety First",
            description: "Every vehicle undergoes regular safety inspections and maintenance. All drivers are fully licensed and trained to the highest standards."
          },
          {
            icon: Clock,
            title: "Reliability",
            description: "We pride ourselves on punctuality and dependability. Your schedule is our priority, and we ensure you arrive on time, every time."
          },
          {
            icon: Heart,
            title: "Customer Care",
            description: "From your first inquiry to the end of your journey, we provide personalized attention and support to ensure a seamless experience."
          },
          {
            icon: Target,
            title: "Excellence",
            description: "We continuously invest in our fleet and training to maintain the highest standards of comfort and service quality."
          }
        ]
      },
      team: {
        title: "Our Team",
        description: "Our professional drivers are the heart of our service. Each driver is carefully selected for their experience, professionalism, and local knowledge. All are multilingual, licensed, and trained in customer service excellence."
      },
      commitment: {
        title: "Our Commitment",
        points: [
          "Modern, well-maintained fleet with regular inspections",
          "Professional, multilingual drivers",
          "Transparent pricing with no hidden fees",
          "24/7 customer support",
          "Flexible scheduling to meet your needs",
          "Environmentally conscious operations"
        ]
      },
      stats: [
        { number: "2011", label: "Established" },
        { number: "50+", label: "Vehicles" },
        { number: "10,000+", label: "Happy Customers" },
        { number: "100%", label: "Licensed & Insured" }
      ]
    },
    fr: {
      hero: {
        title: "À Propos de RentBus Brussels",
        subtitle: "Votre partenaire de confiance pour le transport de groupe depuis 2011"
      },
      story: {
        title: "Notre Histoire",
        text: "Depuis 2011, RentBus Brussels fournit des services de transport de groupe sûrs, fiables et confortables à Bruxelles et au-delà. Ce qui a commencé comme une petite entreprise familiale est devenu l'une des sociétés de location de bus les plus fiables de Bruxelles, au service de milliers de clients satisfaits chaque année. Notre engagement envers l'excellence, la ponctualité et le service client nous a fait le choix privilégié pour les événements d'entreprise, les mariages, les sorties scolaires et les excursions."
      },
      values: {
        title: "Nos Valeurs",
        items: [
          {
            icon: Shield,
            title: "Sécurité d'abord",
            description: "Chaque véhicule fait l'objet d'inspections et d'entretiens réguliers. Tous les chauffeurs sont entièrement licenciés et formés aux normes les plus élevées."
          },
          {
            icon: Clock,
            title: "Fiabilité",
            description: "Nous sommes fiers de notre ponctualité et de notre fiabilité. Votre horaire est notre priorité, et nous veillons à ce que vous arriviez à l'heure, à chaque fois."
          },
          {
            icon: Heart,
            title: "Service client",
            description: "De votre première demande à la fin de votre voyage, nous fournissons une attention et un soutien personnalisés pour assurer une expérience sans faille."
          },
          {
            icon: Target,
            title: "Excellence",
            description: "Nous investissons continuellement dans notre flotte et notre formation pour maintenir les normes les plus élevées de confort et de qualité de service."
          }
        ]
      },
      team: {
        title: "Notre Équipe",
        description: "Nos chauffeurs professionnels sont au cœur de notre service. Chaque chauffeur est soigneusement sélectionné pour son expérience, son professionnalisme et sa connaissance locale. Tous sont multilingues, licenciés et formés à l'excellence du service client."
      },
      commitment: {
        title: "Notre Engagement",
        points: [
          "Flotte moderne et bien entretenue avec inspections régulières",
          "Chauffeurs professionnels et multilingues",
          "Tarifs transparents sans frais cachés",
          "Support client 24h/24 7j/7",
          "Planification flexible pour répondre à vos besoins",
          "Opérations respectueuses de l'environnement"
        ]
      },
      stats: [
        { number: "2011", label: "Établi" },
        { number: "50+", label: "Véhicules" },
        { number: "10 000+", label: "Clients satisfaits" },
        { number: "100%", label: "Licencié et assuré" }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
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
            <p className="text-xl text-blue-100">
              {t.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              {t.story.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.story.text}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.values.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.values.items.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.team.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.team.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.commitment.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.commitment.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-start gap-3"
              >
                <Award className="w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-blue-50">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
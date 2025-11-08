
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function Contact() {
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    passengers: "",
    pickup: "",
    dropoff: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        title: "Get a Free Quote",
        subtitle: "Tell us about your journey and we'll respond within 24 hours"
      },
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        date: "Travel Date",
        passengers: "Number of Passengers",
        pickup: "Pick-up Location",
        dropoff: "Drop-off Location",
        message: "Additional Details",
        messagePlaceholder: "Please provide any additional information about your trip (type of event, special requirements, etc.)",
        submit: "Send Quote Request",
        submitting: "Sending..."
      },
      contact: {
        title: "Contact Information",
        address: "Avenue de la Couronne, 1050 Brussels",
        email: "info@rentbus.brussels",
        hours: "Office Hours",
        hoursDetail: "Monday - Friday: 9:00 - 18:00"
      },
      success: "Quote request sent successfully! We'll get back to you within 24 hours.",
      error: "Please fill in all required fields"
    },
    fr: {
      hero: {
        title: "Obtenir un Devis Gratuit",
        subtitle: "Parlez-nous de votre voyage et nous vous répondrons dans les 24 heures"
      },
      form: {
        name: "Nom Complet",
        email: "Adresse Email",
        phone: "Numéro de Téléphone",
        date: "Date du Voyage",
        passengers: "Nombre de Passagers",
        pickup: "Lieu de Prise en Charge",
        dropoff: "Lieu de Dépose",
        message: "Détails Supplémentaires",
        messagePlaceholder: "Veuillez fournir toute information supplémentaire sur votre voyage (type d'événement, exigences spéciales, etc.)",
        submit: "Envoyer la Demande",
        submitting: "Envoi en cours..."
      },
      contact: {
        title: "Informations de Contact",
        address: "Avenue de la Couronne, 1050 Bruxelles",
        email: "info@rentbus.brussels",
        hours: "Heures d'Ouverture",
        hoursDetail: "Lundi - Vendredi: 9h00 - 18h00"
      },
      success: "Demande de devis envoyée avec succès ! Nous vous répondrons dans les 24 heures.",
      error: "Veuillez remplir tous les champs obligatoires"
    }
  };

  const t = content[language];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.passengers) {
      toast.error(t.error);
      return;
    }

    setIsSubmitting(true);

    // Simulate sending - in production, integrate with your email service
    setTimeout(() => {
      toast.success(t.success);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        passengers: "",
        pickup: "",
        dropoff: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">{t.form.name} *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{t.form.email} *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">{t.form.phone} *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="date">{t.form.date} *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="passengers">{t.form.passengers} *</Label>
                    <Input
                      id="passengers"
                      type="number"
                      min="1"
                      value={formData.passengers}
                      onChange={(e) => handleChange("passengers", e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="pickup">{t.form.pickup}</Label>
                      <Input
                        id="pickup"
                        value={formData.pickup}
                        onChange={(e) => handleChange("pickup", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dropoff">{t.form.dropoff}</Label>
                      <Input
                        id="dropoff"
                        value={formData.dropoff}
                        onChange={(e) => handleChange("dropoff", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">{t.form.message}</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder={t.form.messagePlaceholder}
                      className="mt-2 h-32"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        {t.form.submitting}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t.form.submit}
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.contact.title}
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Address</p>
                      <p className="text-gray-600">{t.contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Email</p>
                      <a
                        href={`mailto:${t.contact.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {t.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">{t.contact.hours}</p>
                      <p className="text-gray-600">{t.contact.hoursDetail}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden h-64"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.5207545!2d4.3665!3d50.8355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDUwJzA3LjgiTiA0wrAyMScyOC42IkU!5e0!3m2!1sen!2sbe!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

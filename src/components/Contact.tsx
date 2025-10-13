import { motion } from 'framer-motion';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-br from-ivory via-sand to-henna-light/20 dark:from-dark-bg dark:via-dark-surface dark:to-henna-dark/10 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-semibold text-charcoal dark:text-dark-text mb-6">
            {t('contact.title')}
          </h2>
          <p className="font-inter text-lg text-charcoal/70 dark:text-dark-text/70 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.a
            href="https://wa.me/918420153353?text=Hi%2C%20I%20am%20interested%20in%20your%20henna%20services.%20Could%20you%20please%20provide%20more%20information%20about%20your%20packages%20and%20availability%3F"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm rounded-lg p-8 text-center border border-henna-light/30 dark:border-henna-dark/30 hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-henna-brown to-henna-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-charcoal dark:text-dark-text mb-2">
              {t('contact.whatsapp')}
            </h3>
            <p className="font-inter text-sm text-charcoal/70 dark:text-dark-text/70">
              {t('contact.whatsappDesc')}
            </p>
            <p className="font-inter text-henna-brown dark:text-henna-gold mt-3 font-medium">
              {t('contact.clickToMessage')}
            </p>
            <p className="font-inter text-sm text-charcoal/60 dark:text-dark-text/60 mt-1">
              +91 8420153353
            </p>
          </motion.a>

          <motion.a
            href="mailto:guptasupriya333@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm rounded-lg p-8 text-center border border-henna-light/30 dark:border-henna-dark/30 hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-henna-brown to-henna-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-charcoal dark:text-dark-text mb-2">
              {t('contact.email')}
            </h3>
            <p className="font-inter text-sm text-charcoal/70 dark:text-dark-text/70">
              {t('contact.emailDesc')}
            </p>
            <p className="font-inter text-henna-brown dark:text-henna-gold mt-3">
              guptasupriya333@gmail.com
            </p>
          </motion.a>

          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm rounded-lg p-8 text-center border border-henna-light/30 dark:border-henna-dark/30 hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-henna-brown to-henna-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-charcoal dark:text-dark-text mb-2">
              {t('contact.instagram')}
            </h3>
            <p className="font-inter text-sm text-charcoal/70 dark:text-dark-text/70">
              {t('contact.instagramDesc')}
            </p>
            <p className="font-inter text-henna-brown dark:text-henna-gold mt-3">
              @nordicsoulhenna
            </p>
          </motion.a>
        </div>

        {/* Pricing Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-white/60 dark:bg-dark-surface/60 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-henna-light/30 dark:border-henna-dark/30"
        >
          <h3 className="font-playfair text-3xl font-semibold text-charcoal dark:text-dark-text mb-8 text-center">
            {t('contact.pricingTitle')}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Mini/Saver Tier */}
            <div className="bg-white dark:bg-dark-surface rounded-lg p-6 border-2 border-henna-light/30 dark:border-henna-dark/30 hover:border-henna-brown dark:hover:border-henna-gold transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">✨</span>
                <h4 className="font-playfair text-xl font-semibold text-charcoal dark:text-dark-text">
                  {t('contact.pricing.mini.title')}
                </h4>
              </div>
              <p className="font-inter text-sm text-charcoal/60 dark:text-dark-text/60 mb-3">
                {t('contact.pricing.mini.duration')}
              </p>
              <p className="font-playfair text-3xl font-bold text-henna-brown dark:text-henna-gold mb-3">
                {t('contact.pricing.mini.price')}
              </p>
              <p className="font-inter text-sm text-charcoal/70 dark:text-dark-text/70">
                {t('contact.pricing.mini.description')}
              </p>
            </div>

            {/* Standard Tier */}
            <div className="bg-white dark:bg-dark-surface rounded-lg p-6 border-2 border-henna-light/30 dark:border-henna-dark/30 hover:border-henna-brown dark:hover:border-henna-gold transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🌿</span>
                <h4 className="font-playfair text-xl font-semibold text-charcoal dark:text-dark-text">
                  {t('contact.pricing.standard.title')}
                </h4>
              </div>
              <p className="font-inter text-sm text-charcoal/60 dark:text-dark-text/60 mb-3">
                {t('contact.pricing.standard.duration')}
              </p>
              <p className="font-playfair text-3xl font-bold text-henna-brown dark:text-henna-gold mb-3">
                {t('contact.pricing.standard.price')}
              </p>
              <p className="font-inter text-sm text-charcoal/70 dark:text-dark-text/70">
                {t('contact.pricing.standard.description')}
              </p>
            </div>

            {/* Premium Tier */}
            <div className="bg-white dark:bg-dark-surface rounded-lg p-6 border-2 border-henna-light/30 dark:border-henna-dark/30 hover:border-henna-brown dark:hover:border-henna-gold transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🌺</span>
                <h4 className="font-playfair text-xl font-semibold text-charcoal dark:text-dark-text">
                  {t('contact.pricing.premium.title')}
                </h4>
              </div>
              <p className="font-inter text-sm text-charcoal/60 dark:text-dark-text/60 mb-3">
                {t('contact.pricing.premium.duration')}
              </p>
              <p className="font-playfair text-3xl font-bold text-henna-brown dark:text-henna-gold mb-3">
                {t('contact.pricing.premium.price')}
              </p>
              <p className="font-inter text-sm text-charcoal/70 dark:text-dark-text/70">
                {t('contact.pricing.premium.description')}
              </p>
            </div>

            {/* Bridal/Custom Tier */}
            <div className="bg-gradient-to-br from-henna-light/20 to-henna-gold/20 dark:from-henna-dark/20 dark:to-henna-gold/10 rounded-lg p-6 border-2 border-henna-brown/50 dark:border-henna-gold/50">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💍</span>
                <h4 className="font-playfair text-xl font-semibold text-charcoal dark:text-dark-text">
                  {t('contact.pricing.bridal.title')}
                </h4>
              </div>
              <p className="font-inter text-sm text-charcoal/60 dark:text-dark-text/60 mb-3">
                {t('contact.pricing.bridal.duration')}
              </p>
              <p className="font-playfair text-3xl font-bold text-henna-brown dark:text-henna-gold mb-3">
                {t('contact.pricing.bridal.price')}
              </p>
              <p className="font-inter text-sm text-charcoal/70 dark:text-dark-text/70">
                {t('contact.pricing.bridal.description')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Booking Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center bg-white/60 dark:bg-dark-surface/60 backdrop-blur-sm rounded-lg p-8 border border-henna-light/30 dark:border-henna-dark/30"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-semibold text-charcoal dark:text-dark-text mb-6">
              {t('contact.bookingTitle')}
            </h3>
            <div className="space-y-3 font-inter text-charcoal/80 dark:text-dark-text/80 text-left">
              <p>📍 {t('contact.serviceArea')}</p>
              <p>🏠 {t('contact.homeVisit')}</p>
              <p>🎉 {t('contact.eventsDesc')}</p>
              <p>📅 {t('contact.leadTime')}</p>
            </div>
          </div>
        </motion.div>

        {/* Google Calendar Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 bg-white/60 dark:bg-dark-surface/60 backdrop-blur-sm rounded-lg p-8 border border-henna-light/30 dark:border-henna-dark/30"
        >
          <h3 className="font-playfair text-2xl font-semibold text-charcoal dark:text-dark-text mb-6 text-center">
            {t('contact.scheduleTitle')}
          </h3>
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1_5KSnFfNJ9p-gLAiuSDo_56OU8HahyJ8DY31f0mK4A9GokaWFIer1gTB6ciw01puhJGhb7KeB?gv=true"
                className="absolute top-0 left-0 w-full h-full border-0"
                frameBorder="0"
                title="Book Appointment"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="font-playfair text-2xl italic text-henna-dark dark:text-henna-gold">
            {t('contact.tagline')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

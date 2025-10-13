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
            href="https://instagram.com"
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

          <motion.a
            href="https://wa.me/46700000000"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
            <p className="font-inter text-henna-brown dark:text-henna-gold mt-3">
              +91 8420153353
            </p>
          </motion.a>

          <motion.a
            href="mailto:guptasupriya333@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center bg-white/60 dark:bg-dark-surface/60 backdrop-blur-sm rounded-lg p-12 border border-henna-light/30 dark:border-henna-dark/30"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="font-playfair text-3xl font-semibold text-charcoal dark:text-dark-text mb-6">
              {t('contact.bookingTitle')}
            </h3>
            <div className="space-y-4 font-inter text-charcoal/80 dark:text-dark-text/80">
              <p>{t('contact.bridalConsultations')}</p>
              <p>{t('contact.travel')}</p>
              <p>{t('contact.eventsDesc')}</p>
              <p>{t('contact.leadTime')}</p>
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

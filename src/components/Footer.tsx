import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-charcoal dark:bg-dark-bg text-white py-16 px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-3xl font-semibold mb-4">
              {t('footer.title')}
            </h3>
            <p className="font-inter text-white/70 leading-relaxed">
              {t('footer.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-inter font-semibold mb-4 text-henna-gold">
              {t('footer.connect')}
            </h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-henna-gold transition-colors group"
              >
                <Instagram className="w-5 h-5" />
                <span className="font-inter">@nordicsoulhenna</span>
              </a>
              <a
                href="mailto:hello@nordicsoulhenna.com"
                className="flex items-center gap-3 text-white/70 hover:text-henna-gold transition-colors group"
              >
                <Mail className="w-5 h-5" />
                <span className="font-inter">hello@nordicsoulhenna.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5" />
                <span className="font-inter">{t('footer.location')}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-inter font-semibold mb-4 text-henna-gold">
              {t('footer.services')}
            </h4>
            <ul className="space-y-2 font-inter text-white/70">
              <li>{t('footer.bridalHenna')}</li>
              <li>{t('footer.festival')}</li>
              <li>{t('footer.fashion')}</li>
              <li>{t('footer.privateParties')}</li>
              <li>{t('footer.corporateEvents')}</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-inter text-sm text-white/50">
            {t('footer.copyright')}
          </p>
          <p className="font-inter text-sm text-white/50 flex items-center gap-2">
            {t('footer.madeWith')} <Heart className="w-4 h-4 text-henna-gold fill-henna-gold" /> {t('footer.madeIn')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-block">
            <svg
              className="w-16 h-16 mx-auto opacity-30"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="45" fill="none" stroke="#C97E5A" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="#C19A6B" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="#E6D2B5" strokeWidth="0.5" />
              <path
                d="M50,10 L50,25 M50,75 L50,90 M10,50 L25,50 M75,50 L90,50"
                stroke="#C19A6B"
                strokeWidth="1"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

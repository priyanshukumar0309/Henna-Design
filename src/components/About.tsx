import { motion } from 'framer-motion';
import { Sparkles, Heart, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 px-6 relative overflow-hidden dark:bg-dark-bg transition-colors duration-500">
      <div className="absolute top-0 right-0 w-96 h-96 bg-henna-light/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-henna-light to-sand rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <Sparkles className="w-16 h-16 text-henna-brown mx-auto mb-4" />
                    <p className="font-playfair text-2xl text-henna-dark dark:text-henna-gold italic">
                      {t('about.artistAtWork')}
                    </p>
                    <p className="font-inter text-sm text-charcoal/60 dark:text-dark-text/60 mt-2">
                      {t('about.replaceImage')}
                    </p>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-8 -right-8 w-32 h-32 opacity-30"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#C97E5A" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#C19A6B" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="#E6D2B5" strokeWidth="0.5" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-playfair text-5xl md:text-6xl font-semibold text-charcoal dark:text-dark-text mb-6">
              {t('about.title')}
            </h2>

            <div className="space-y-6 font-inter text-lg text-charcoal/80 dark:text-dark-text/80 leading-relaxed">
              <p>{t('about.paragraph1')}</p>
              <p>{t('about.paragraph2')}</p>
              <p>{t('about.paragraph3')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/50 dark:bg-dark-surface/50 backdrop-blur-sm rounded-lg p-6 border border-henna-light/30 dark:border-henna-dark/30"
              >
                <Heart className="w-8 h-8 text-henna-brown mb-3" />
                <h3 className="font-playfair text-xl font-semibold text-charcoal dark:text-dark-text mb-2">
                  {t('about.philosophy')}
                </h3>
                <p className="font-inter text-sm text-charcoal/70 dark:text-dark-text/70">
                  {t('about.philosophyText')}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/50 dark:bg-dark-surface/50 backdrop-blur-sm rounded-lg p-6 border border-henna-light/30 dark:border-henna-dark/30"
              >
                <MapPin className="w-8 h-8 text-henna-brown mb-3" />
                <h3 className="font-playfair text-xl font-semibold text-charcoal dark:text-dark-text mb-2">
                  {t('about.location')}
                </h3>
                <p className="font-inter text-sm text-charcoal/70 dark:text-dark-text/70">
                  {t('about.locationText')}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center max-w-3xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-henna-light/30" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-ivory dark:bg-dark-bg px-6 font-playfair text-xl italic text-henna-brown dark:text-henna-gold">
                {t('about.tagline')}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

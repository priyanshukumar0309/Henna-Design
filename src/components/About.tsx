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
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/assets/about/Supriya.jpg" 
                  alt="Supriya Gupta - Professional Henna Artist in Stockholm"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay for Better Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Info Card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/95 dark:bg-dark-surface/95 backdrop-blur-sm rounded-lg p-4 border border-henna-light/30 dark:border-henna-dark/30">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-6 h-6 text-henna-brown flex-shrink-0" />
                      <div>
                        <p className="font-playfair text-lg font-semibold text-charcoal dark:text-dark-text">
                          {t('about.artistAtWork')}
                        </p>
                        <p className="font-inter text-sm text-charcoal/70 dark:text-dark-text/70">
                          {t('about.experience')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Edge Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full text-henna-brown">
                  <path d="M20,20 Q30,10 40,20 Q50,30 60,20 Q70,10 80,20 L80,80 Q70,90 60,80 Q50,70 40,80 Q30,90 20,80 Z" 
                        fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse" />
                </svg>
              </div>

              <div className="absolute -bottom-6 -right-6 w-20 h-20 opacity-15">
                <svg viewBox="0 0 100 100" className="w-full h-full text-henna-light">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.3" />
                </svg>
              </div>

              {/* Rotating Mandala Element */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-8 -right-8 w-16 h-16 opacity-20"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-henna-gold">
                  <path d="M50,10 L60,30 L80,30 L65,45 L70,65 L50,55 L30,65 L35,45 L20,30 L40,30 Z" 
                        fill="none" stroke="currentColor" strokeWidth="2" />
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
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-charcoal dark:text-dark-text mb-6">
              {t('about.title')}
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <h3 className="font-playfair text-2xl md:text-3xl font-medium text-henna-brown dark:text-henna-gold italic">
                {t('about.artistName')}
              </h3>
            </motion.div>

            <div className="space-y-6 font-inter text-lg text-charcoal/80 dark:text-dark-text/80 leading-relaxed">
              <p>{t('about.paragraph1')}</p>
              <p>{t('about.paragraph2')}</p>
              <p>{t('about.paragraph3')}</p>
            </div>

            <div className="mt-12">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/50 dark:bg-dark-surface/50 backdrop-blur-sm rounded-lg p-6 border border-henna-light/30 dark:border-henna-dark/30 max-w-md mx-auto"
              >
                <MapPin className="w-8 h-8 text-henna-brown mb-3 mx-auto" />
                <h3 className="font-playfair text-xl font-semibold text-charcoal dark:text-dark-text mb-2 text-center">
                  {t('about.location')}
                </h3>
                <p className="font-inter text-sm text-charcoal/70 dark:text-dark-text/70 text-center">
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

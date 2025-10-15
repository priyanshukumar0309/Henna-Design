import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { IndianMandala } from './IndianMandala';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center bg-ivory dark:bg-dark-bg overflow-hidden transition-colors duration-500 pt-20">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="hennaPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path
                d="M100,50 Q120,70 100,90 Q80,70 100,50 M85,70 Q85,80 95,80 M105,80 Q115,80 115,70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-henna-brown"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hennaPattern)" />
        </svg>
      </div>


      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-playfair text-4xl md:text-8xl lg:text-9xl font-semibold text-charcoal dark:text-dark-text mb-6 tracking-tight">
            {t('hero.title')}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="font-inter text-xl md:text-2xl text-henna-dark dark:text-henna-gold mb-8 tracking-wide">
            {t('hero.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative inline-block mb-8"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto mb-6">
            <IndianMandala />
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.2 }}
            className="block font-playfair italic text-henna-brown dark:text-henna-gold text-lg md:text-xl"
          >
            {t('hero.mehndi')}
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="font-inter text-base md:text-lg text-charcoal/70 dark:text-dark-text/70 max-w-2xl mx-auto mt-12 leading-relaxed"
        >
          {t('hero.description')}
        </motion.p>
      </div>

      {/* Scroll indicator - visible on all devices */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-10 h-10 md:w-8 md:h-8 text-henna-brown dark:text-henna-gold" />
      </motion.div>
    </div>
  );
};

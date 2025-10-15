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
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-semibold text-charcoal dark:text-dark-text mb-6 tracking-tight">
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

      {/* Desktop scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
        className="hidden md:block absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-henna-brown dark:text-henna-gold" />
      </motion.div>

      {/* Mobile scroll indicator with hand animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="md:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        {/* Animated hand icon */}
        <motion.div
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-henna-brown dark:text-henna-gold"
          >
            <path 
              d="M9 11V6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6V11M9 11V16.5C9 17.8807 10.1193 19 11.5 19C12.8807 19 14 17.8807 14 16.5V11M9 11H6.5C5.67157 11 5 11.6716 5 12.5C5 13.3284 5.67157 14 6.5 14H9M14 11V8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5V11M14 11H17M17 11V12.5C17 13.3284 17.6716 14 18.5 14C19.3284 14 20 13.3284 20 12.5V11.5C20 10.6716 19.3284 10 18.5 10H17" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
        
        {/* Swipe text */}
        <motion.p
          animate={{ 
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-xs font-inter text-henna-brown dark:text-henna-gold tracking-wider uppercase"
        >
          Scroll Down
        </motion.p>

        {/* Swipe down arrow */}
        <motion.div
          animate={{ 
            y: [0, 5, 0],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
        >
          <ChevronDown className="w-5 h-5 text-henna-brown dark:text-henna-gold" />
        </motion.div>
      </motion.div>
    </div>
  );
};

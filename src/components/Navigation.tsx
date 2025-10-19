import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Languages, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (isLangMenuOpen && !(e.target as Element).closest('.lang-menu-container')) {
        setIsLangMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isLangMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: t('nav.portfolio'), id: 'portfolio' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.careGuide'), id: 'care' },
    { label: t('nav.testimonials'), id: 'testimonials' },
    { label: t('nav.pricing'), id: 'pricing' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setIsLangMenuOpen(false);
    setIsMobileMenuOpen(false); // Close mobile menu when language is changed
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-ivory/95 dark:bg-dark-surface/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 font-playfair text-2xl font-semibold text-charcoal dark:text-dark-text hover:text-henna-brown transition-colors group"
          >
            <img 
              src="/favicon.png" 
              alt="Svensk Henna" 
              className="w-8 h-8 group-hover:scale-110 transition-transform duration-300 dark:filter dark:invert"
            />
            Svensk Henna
          </button>

          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-inter text-sm text-charcoal dark:text-dark-text hover:text-henna-brown transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-henna-brown group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-henna-brown text-white rounded-full hover:bg-henna-dark transition-colors font-inter text-sm"
            >
              {t('nav.getInTouch')}
            </button>

            <div className="relative lang-menu-container">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="p-2 text-charcoal dark:text-dark-text hover:text-henna-brown transition-colors"
              >
                <Languages className="w-5 h-5" />
              </button>
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 py-2 w-40 bg-white dark:bg-dark-surface rounded-lg shadow-xl border border-henna-light/30 dark:border-henna-dark/30">
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-henna-light/20 dark:hover:bg-henna-dark/20 transition-colors ${
                      i18n.language === 'en' ? 'text-henna-brown font-semibold' : 'text-charcoal dark:text-dark-text'
                    }`}
                  >
                    <span>🇬🇧</span> English
                  </button>
                  <button
                    onClick={() => changeLanguage('sv')}
                    className={`flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-henna-light/20 dark:hover:bg-henna-dark/20 transition-colors ${
                      i18n.language === 'sv' ? 'text-henna-brown font-semibold' : 'text-charcoal dark:text-dark-text'
                    }`}
                  >
                    <span>🇸🇪</span> Svenska
                  </button>
                  <button
                    onClick={() => changeLanguage('hi')}
                    className={`flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-henna-light/20 dark:hover:bg-henna-dark/20 transition-colors ${
                      i18n.language === 'hi' ? 'text-henna-brown font-semibold' : 'text-charcoal dark:text-dark-text'
                    }`}
                  >
                    <span>🇮🇳</span> हिंदी
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 text-charcoal dark:text-dark-text hover:text-henna-brown transition-colors"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-charcoal dark:text-dark-text hover:text-henna-brown transition-colors"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal dark:text-dark-text hover:text-henna-brown transition-colors"
              title="Language Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Languages className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 right-0 bg-ivory/98 dark:bg-dark-surface/98 backdrop-blur-md z-30 md:hidden shadow-xl"
          >
            <div className="px-6 py-6">
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-playfair text-lg font-semibold text-charcoal dark:text-dark-text mb-4"
              >
                Select Language
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-3"
              >
                <button
                  onClick={() => changeLanguage('en')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border transition-colors ${
                    i18n.language === 'en'
                      ? 'bg-henna-brown text-white border-henna-brown'
                      : 'bg-transparent text-charcoal dark:text-dark-text border-henna-light dark:border-henna-dark hover:bg-henna-light/10 dark:hover:bg-henna-dark/10'
                  }`}
                >
                  <span className="text-xl">🇬🇧</span>
                  <span className="font-inter">English</span>
                  {i18n.language === 'en' && <span className="ml-auto text-sm">✓</span>}
                </button>
                <button
                  onClick={() => changeLanguage('sv')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border transition-colors ${
                    i18n.language === 'sv'
                      ? 'bg-henna-brown text-white border-henna-brown'
                      : 'bg-transparent text-charcoal dark:text-dark-text border-henna-light dark:border-henna-dark hover:bg-henna-light/10 dark:hover:bg-henna-dark/10'
                  }`}
                >
                  <span className="text-xl">🇸🇪</span>
                  <span className="font-inter">Svenska</span>
                  {i18n.language === 'sv' && <span className="ml-auto text-sm">✓</span>}
                </button>
                <button
                  onClick={() => changeLanguage('hi')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border transition-colors ${
                    i18n.language === 'hi'
                      ? 'bg-henna-brown text-white border-henna-brown'
                      : 'bg-transparent text-charcoal dark:text-dark-text border-henna-light dark:border-henna-dark hover:bg-henna-light/10 dark:hover:bg-henna-dark/10'
                  }`}
                >
                  <span className="text-xl">🇮🇳</span>
                  <span className="font-inter">हिंदी</span>
                  {i18n.language === 'hi' && <span className="ml-auto text-sm">✓</span>}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

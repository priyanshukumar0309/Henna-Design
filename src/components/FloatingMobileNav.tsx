import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, User, BookOpen, Star, Mail } from 'lucide-react';

export const FloatingMobileNav = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  // Section refs for intersection observer
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3 });
  const { ref: portfolioRef, inView: portfolioInView } = useInView({ threshold: 0.3 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.3 });
  const { ref: careRef, inView: careInView } = useInView({ threshold: 0.3 });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({ threshold: 0.3 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.3 });

  // Update active section based on scroll position
  useEffect(() => {
    if (contactInView) setActiveSection('contact');
    else if (testimonialsInView) setActiveSection('testimonials');
    else if (careInView) setActiveSection('care');
    else if (aboutInView) setActiveSection('about');
    else if (portfolioInView) setActiveSection('portfolio');
    else if (heroInView) setActiveSection('hero');
  }, [heroInView, portfolioInView, aboutInView, careInView, testimonialsInView, contactInView]);

  // Show/hide navigation based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { id: 'hero', icon: 'favicon', labelKey: 'nav.home', ref: heroRef },
    { id: 'portfolio', icon: Image, labelKey: 'nav.portfolio', ref: portfolioRef },
    { id: 'about', icon: User, labelKey: 'nav.about', ref: aboutRef },
    { id: 'care', icon: BookOpen, labelKey: 'nav.careGuide', ref: careRef },
    { id: 'testimonials', icon: Star, labelKey: 'nav.testimonials', ref: testimonialsRef },
    { id: 'contact', icon: Mail, labelKey: 'nav.getInTouch', ref: contactRef },
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Animation values
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.1], [50, 0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 50
      }}
      transition={{ duration: 0.3 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 block sm:hidden"
    >
      <div className="bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md rounded-xl p-1.5 shadow-2xl border border-henna-light/30 dark:border-henna-dark/30">
        <div className="flex flex-col gap-1">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative group p-2 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'bg-henna-brown text-white shadow-lg' 
                    : 'text-charcoal dark:text-dark-text hover:bg-henna-light/20 dark:hover:bg-henna-dark/20'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.icon === 'favicon' ? (
                  <img 
                    src="/favicon.png" 
                    alt="Home" 
                    className={`w-4 h-4 ${isActive ? 'brightness-0 invert' : 'dark:brightness-0 dark:invert'}`}
                    style={{ filter: isActive ? 'brightness(0) invert(1)' : '' }}
                  />
                ) : (
                  <item.icon className="w-4 h-4" />
                )}
                
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-henna-brown rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                
                {/* Label tooltip */}
                <div className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap transition-opacity duration-300 ${
                  isActive 
                    ? 'bg-henna-brown text-white' 
                    : 'bg-charcoal dark:bg-dark-surface text-white dark:text-dark-text'
                } opacity-0 group-hover:opacity-100 pointer-events-none`}>
                  {t(item.labelKey)}
                  <div className={`absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-transparent ${
                    isActive ? 'border-t-4 border-b-4 border-t-henna-brown border-b-henna-brown' 
                    : 'border-t-4 border-b-4 border-t-charcoal dark:border-t-dark-surface border-b-charcoal dark:border-b-dark-surface'
                  }`} />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

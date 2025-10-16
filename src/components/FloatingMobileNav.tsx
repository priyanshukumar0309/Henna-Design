import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, User, BookOpen, Star, Mail, Menu, X } from 'lucide-react';

export const FloatingMobileNav = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

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
    { id: 'hero', icon: null, labelKey: 'nav.home', ref: heroRef, isFavicon: true },
    { id: 'portfolio', icon: Image, labelKey: 'nav.portfolio', ref: portfolioRef, isFavicon: false },
    { id: 'about', icon: User, labelKey: 'nav.about', ref: aboutRef, isFavicon: false },
    { id: 'care', icon: BookOpen, labelKey: 'nav.careGuide', ref: careRef, isFavicon: false },
    { id: 'testimonials', icon: Star, labelKey: 'nav.testimonials', ref: testimonialsRef, isFavicon: false },
    { id: 'contact', icon: Mail, labelKey: 'nav.getInTouch', ref: contactRef, isFavicon: false },
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Set navigating flag to prevent menu close during programmatic scroll
      setIsNavigating(true);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Clear navigating flag after scroll completes
      setTimeout(() => {
        setIsNavigating(false);
      }, 1000); // Match typical smooth scroll duration
    }
  };

  // Close menu only when user manually scrolls (not during navigation)
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScrollCollapse = () => {
      // Don't close menu if we're currently navigating
      if (isNavigating) {
        lastScrollY = window.scrollY;
        return;
      }
      
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);
      
      // Clear any existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Only close if user manually scrolls (significant delta)
      if (isExpanded && scrollDelta > 50) {
        // Add small delay to differentiate user scroll from programmatic scroll
        scrollTimeout = setTimeout(() => {
          if (!isNavigating) {
            setIsExpanded(false);
          }
        }, 100);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScrollCollapse);
    return () => {
      window.removeEventListener('scroll', handleScrollCollapse);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isExpanded, isNavigating]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 100
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 block sm:hidden"
    >
      <div className="flex flex-col items-end gap-3">
        {/* Expanded Menu - Vertical Layout */}
        <motion.div
          initial={false}
          animate={{ 
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0,
            scaleY: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ originY: 1 }}
          className="overflow-hidden"
        >
          <div className="bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md rounded-xl p-1.5 shadow-2xl border border-henna-light/30 dark:border-henna-dark/30">
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      scrollToSection(item.id);
                    }}
                    className={`relative group flex items-center gap-2 p-2.5 rounded-lg transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'bg-henna-brown text-white shadow-lg' 
                        : 'text-charcoal dark:text-dark-text hover:bg-henna-light/20 dark:hover:bg-henna-dark/20'
                    }`}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.isFavicon ? (
                      <img 
                        src="/favicon.png" 
                        alt="Home" 
                        className="w-5 h-5 flex-shrink-0 object-contain" 
                      />
                    ) : (
                      item.icon && <item.icon className="w-5 h-5 flex-shrink-0" />
                    )}
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute left-1 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full bg-white"
                        layoutId="mobileActiveIndicator"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    
                    {/* Label tooltip on hover */}
                    <div className={`absolute right-full mr-3 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-opacity duration-300 ${
                      isActive 
                        ? 'bg-henna-brown text-white' 
                        : 'bg-charcoal dark:bg-dark-surface text-white dark:text-dark-text'
                    } opacity-0 group-hover:opacity-100 pointer-events-none`}>
                      {t(item.labelKey)}
                      <div className={`absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent ${
                        isActive ? 'border-l-henna-brown' : 'border-l-charcoal dark:border-l-dark-surface'
                      }`} />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Hamburger Toggle Button */}
        <motion.button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="bg-henna-brown text-white p-4 rounded-full shadow-2xl hover:bg-henna-dark transition-colors duration-300 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
};

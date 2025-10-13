import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export const ScrollHennaBorder = () => {
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();
  const [currentSection, setCurrentSection] = useState(0);

  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.3 });
  const { ref: galleryRef, inView: galleryInView } = useInView({ threshold: 0.3 });
  const { ref: testimonialRef, inView: testimonialInView } = useInView({ threshold: 0.3 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (heroInView) setCurrentSection(0);
    else if (aboutInView) setCurrentSection(1);
    else if (galleryInView) setCurrentSection(2);
    else if (testimonialInView) setCurrentSection(3);
    else if (contactInView) setCurrentSection(4);
  }, [heroInView, aboutInView, galleryInView, testimonialInView, contactInView]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sections = document.querySelectorAll('section');
      if (sections.length > 0 && heroRef) (sections[0] as any).ref = heroRef;
      if (sections.length > 1 && aboutRef) (sections[1] as any).ref = aboutRef;
      if (sections.length > 2 && galleryRef) (sections[2] as any).ref = galleryRef;
      if (sections.length > 3 && testimonialRef) (sections[3] as any).ref = testimonialRef;
      if (sections.length > 4 && contactRef) (sections[4] as any).ref = contactRef;
    }
  }, []);

  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const leftY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const rightY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);

  const strokeColor = theme === 'dark' ? '#C19A6B' : '#C97E5A';
  const fillColor = theme === 'dark' ? '#8B5A3C' : '#E6D2B5';
  const accentColor = theme === 'dark' ? '#D4AF37' : '#B8956A';

  const getSectionPattern = (side: 'left' | 'right') => {
    switch (currentSection) {
      case 0:
        return 'hero';
      case 1:
        return 'about';
      case 2:
        return 'gallery';
      case 3:
        return 'testimonial';
      case 4:
        return 'contact';
      default:
        return 'hero';
    }
  };

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 h-full w-16 sm:w-20 md:w-28 lg:w-36 pointer-events-none z-0 hidden sm:block overflow-hidden"
        style={{ opacity }}
      >
        <motion.svg
          className="w-full h-[120%]"
          viewBox="0 0 120 1000"
          preserveAspectRatio="none"
          style={{ y: leftY }}
        >
          <defs>
            <linearGradient id="leftGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={strokeColor} stopOpacity="0.2" />
              <stop offset="50%" stopColor={strokeColor} stopOpacity="0.8" />
              <stop offset="100%" stopColor={strokeColor} stopOpacity="0.2" />
            </linearGradient>
          </defs>

          <motion.path
            d="M 30,0 Q 40,50 35,100 Q 30,150 40,200 Q 50,250 40,300 Q 30,350 35,400 Q 40,450 35,500 Q 30,550 40,600 Q 45,650 40,700 Q 35,750 40,800 Q 45,850 40,900 Q 35,950 40,1000"
            fill="none"
            stroke="url(#leftGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <motion.g
              key={`left-pattern-${i}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: Math.abs(currentSection - (i % 5)) < 2 ? 1 : 0.3,
                scale: Math.abs(currentSection - (i % 5)) < 2 ? 1 : 0.8
              }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <motion.path
                d={`M 35,${80 + i * 125} Q 20,${90 + i * 125} 15,${105 + i * 125} Q 20,${120 + i * 125} 35,${130 + i * 125} Q 50,${120 + i * 125} 55,${105 + i * 125} Q 50,${90 + i * 125} 35,${80 + i * 125} Z`}
                fill={fillColor}
                fillOpacity="0.3"
                stroke={strokeColor}
                strokeWidth="1.2"
              />
              <motion.circle
                cx="35"
                cy={105 + i * 125}
                r="4"
                fill={accentColor}
                fillOpacity="0.7"
              />
              {[0, 1, 2, 3].map((j) => (
                <motion.circle
                  key={`dot-${i}-${j}`}
                  cx={35 + Math.cos((j * Math.PI * 2) / 4 + Math.PI / 4) * 12}
                  cy={105 + i * 125 + Math.sin((j * Math.PI * 2) / 4 + Math.PI / 4) * 12}
                  r="1.5"
                  fill={strokeColor}
                  fillOpacity="0.6"
                />
              ))}
            </motion.g>
          ))}

          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.g
              key={`left-vine-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <motion.path
                d={`M 55,${150 + i * 150} Q 65,${165 + i * 150} 60,${180 + i * 150} Q 55,${195 + i * 150} 65,${210 + i * 150}`}
                fill="none"
                stroke={strokeColor}
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.5"
              />
              <motion.circle
                cx="60"
                cy={180 + i * 150}
                r="2.5"
                fill={fillColor}
              />
            </motion.g>
          ))}

          {[0, 1, 2, 3, 4].map((i) => (
            <motion.path
              key={`left-leaf-${i}`}
              d={`M 15,${220 + i * 180} Q 10,${230 + i * 180} 15,${245 + i * 180} Q 22,${240 + i * 180} 15,${220 + i * 180} Z`}
              fill={fillColor}
              fillOpacity="0.4"
              stroke={strokeColor}
              strokeWidth="0.8"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 0.7, x: 0 }}
              transition={{ duration: 0.6, delay: 1 + i * 0.15 }}
            />
          ))}
        </motion.svg>
      </motion.div>

      <motion.div
        className="fixed right-0 top-0 h-full w-16 sm:w-20 md:w-28 lg:w-36 pointer-events-none z-0 hidden sm:block overflow-hidden"
        style={{ opacity }}
      >
        <motion.svg
          className="w-full h-[120%]"
          viewBox="0 0 120 1000"
          preserveAspectRatio="none"
          style={{ y: rightY }}
        >
          <defs>
            <linearGradient id="rightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={strokeColor} stopOpacity="0.2" />
              <stop offset="50%" stopColor={strokeColor} stopOpacity="0.8" />
              <stop offset="100%" stopColor={strokeColor} stopOpacity="0.2" />
            </linearGradient>
          </defs>

          <motion.path
            d="M 90,0 Q 80,50 85,100 Q 90,150 80,200 Q 70,250 80,300 Q 90,350 85,400 Q 80,450 85,500 Q 90,550 80,600 Q 75,650 80,700 Q 85,750 80,800 Q 75,850 80,900 Q 85,950 80,1000"
            fill="none"
            stroke="url(#rightGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <motion.g
              key={`right-paisley-${i}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: Math.abs(currentSection - (i % 5)) < 2 ? 1 : 0.3,
                scale: Math.abs(currentSection - (i % 5)) < 2 ? 1 : 0.8
              }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <motion.path
                d={`M 85,${100 + i * 125} Q 95,${110 + i * 125} 90,${130 + i * 125} Q 80,${140 + i * 125} 70,${130 + i * 125} Q 75,${110 + i * 125} 85,${100 + i * 125} Z`}
                fill={fillColor}
                fillOpacity="0.35"
                stroke={strokeColor}
                strokeWidth="1.2"
              />
              <motion.ellipse
                cx="82"
                cy={120 + i * 125}
                rx="5"
                ry="8"
                fill={accentColor}
                fillOpacity="0.6"
              />
            </motion.g>
          ))}

          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <motion.g
              key={`right-flower-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.12 }}
            >
              <motion.circle
                cx="70"
                cy={180 + i * 140}
                r="10"
                fill="none"
                stroke={strokeColor}
                strokeWidth="1.2"
              />
              {[0, 1, 2, 3, 4, 5].map((j) => (
                <motion.ellipse
                  key={`petal-${i}-${j}`}
                  cx={70 + Math.cos((j * Math.PI * 2) / 6) * 12}
                  cy={180 + i * 140 + Math.sin((j * Math.PI * 2) / 6) * 12}
                  rx="3.5"
                  ry="6"
                  fill={fillColor}
                  fillOpacity="0.5"
                  stroke={strokeColor}
                  strokeWidth="0.5"
                  transform={`rotate(${j * 60}, ${70 + Math.cos((j * Math.PI * 2) / 6) * 12}, ${180 + i * 140 + Math.sin((j * Math.PI * 2) / 6) * 12})`}
                />
              ))}
              <motion.circle
                cx="70"
                cy={180 + i * 140}
                r="3"
                fill={accentColor}
              />
            </motion.g>
          ))}

          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.path
              key={`right-curve-${i}`}
              d={`M 60,${250 + i * 150} Q 50,${265 + i * 150} 55,${280 + i * 150} Q 60,${295 + i * 150} 50,${310 + i * 150}`}
              fill="none"
              stroke={strokeColor}
              strokeWidth="1"
              strokeDasharray="3 5"
              opacity="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1.2 + i * 0.2 }}
            />
          ))}

          {[0, 1, 2, 3, 4].map((i) => (
            <motion.g key={`right-peacock-${i}`}>
              <motion.path
                d={`M 95,${330 + i * 180} L 85,${355 + i * 180} Q 90,${362 + i * 180} 95,${355 + i * 180} Z`}
                fill={fillColor}
                fillOpacity="0.45"
                stroke={strokeColor}
                strokeWidth="1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.7, delay: 1.5 + i * 0.2 }}
              />
              <motion.circle
                cx="90"
                cy={355 + i * 180}
                r="3.5"
                fill={accentColor}
                fillOpacity="0.8"
              />
            </motion.g>
          ))}
        </motion.svg>
      </motion.div>
    </>
  );
};

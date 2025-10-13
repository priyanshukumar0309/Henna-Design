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
  const leftY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const rightY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  // Nordic-inspired color palette
  const strokeColor = theme === 'dark' ? '#C19A6B' : '#C97E5A';
  const fillColor = theme === 'dark' ? '#8B5A3C' : '#E6D2B5';
  const accentColor = theme === 'dark' ? '#D4AF37' : '#B8956A';
  const nordicBlue = theme === 'dark' ? '#4A5568' : '#A0AEC0';
  const nordicSilver = theme === 'dark' ? '#718096' : '#CBD5E0';

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

  // Helper function to create symmetric Nordic mandala elements
  const createNordicMandala = (centerX: number, centerY: number, radius: number, petals: number) => {
    const elements = [];
    for (let i = 0; i < petals; i++) {
      const angle = (i * 360) / petals;
      const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
      const y = centerY + radius * Math.sin((angle * Math.PI) / 180);
      
      elements.push(
        <motion.ellipse
          key={`petal-${i}`}
          cx={x}
          cy={y}
          rx="4"
          ry="8"
          fill={fillColor}
          fillOpacity="0.4"
          stroke={strokeColor}
          strokeWidth="1"
          transform={`rotate(${angle}, ${x}, ${y})`}
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }}
        />
      );
    }
    return elements;
  };

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 h-full w-12 sm:w-20 md:w-28 lg:w-36 pointer-events-none z-0 overflow-hidden hidden sm:block"
        style={{ opacity }}
      >
        <motion.svg
          className="w-full h-[120%]"
          viewBox="0 0 120 1000"
          preserveAspectRatio="xMidYMid meet"
          style={{ y: leftY }}
        >
          <defs>
            <radialGradient id="leftGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={strokeColor} stopOpacity="0.8" />
              <stop offset="70%" stopColor={nordicBlue} stopOpacity="0.4" />
              <stop offset="100%" stopColor={nordicSilver} stopOpacity="0.2" />
            </radialGradient>
            <linearGradient id="leftLinear" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={accentColor} stopOpacity="0.6" />
              <stop offset="50%" stopColor={strokeColor} stopOpacity="0.8" />
              <stop offset="100%" stopColor={nordicBlue} stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Central spine with symmetric curves */}
          <motion.path
            d="M 60,0 Q 50,50 60,100 Q 70,150 60,200 Q 50,250 60,300 Q 70,350 60,400 Q 50,450 60,500 Q 70,550 60,600 Q 50,650 60,700 Q 70,750 60,800 Q 50,850 60,900 Q 70,950 60,1000"
            fill="none"
            stroke="url(#leftLinear)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />

          {/* Symmetric Nordic Mandala Elements */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <motion.g
              key={`left-mandala-${i}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: Math.abs(currentSection - (i % 5)) < 2 ? 1 : 0.4,
                scale: Math.abs(currentSection - (i % 5)) < 2 ? 1 : 0.7
              }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              {/* Outer ring - 8 symmetric elements */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((j) => {
                const angle = (j * 45); // 45 degrees each for 8 elements
                const radius = 25;
                const x = 60 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 100 + i * 125 + radius * Math.sin((angle * Math.PI) / 180);
                
                return (
                  <motion.circle
                    key={`outer-ring-${i}-${j}`}
                    cx={x}
                    cy={y}
                    r="3"
                    fill={accentColor}
                    fillOpacity="0.7"
                    stroke={strokeColor}
                    strokeWidth="1"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ 
                      scale: [0, 1, 1.2, 1],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 2,
                      delay: j * 0.1,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                );
              })}

              {/* Inner Nordic cross pattern */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.rect
                  x="55"
                  y={95 + i * 125}
                  width="10"
                  height="3"
                  fill={strokeColor}
                  fillOpacity="0.6"
                />
                <motion.rect
                  x="58.5"
                  y={90 + i * 125}
                  width="3"
                  height="15"
                  fill={strokeColor}
                  fillOpacity="0.6"
                />
              </motion.g>

              {/* Center circle with Nordic rune-inspired pattern */}
              <motion.circle
                cx="60"
                cy={100 + i * 125}
                r="8"
                fill="url(#leftGradient)"
                stroke={strokeColor}
                strokeWidth="1.5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />

              {/* Symmetric connecting lines */}
              {[0, 1, 2, 3].map((k) => {
                const angle = k * 90; // 90 degrees each for 4 lines
                const endRadius = 35;
                const endX = 60 + endRadius * Math.cos((angle * Math.PI) / 180);
                const endY = 100 + i * 125 + endRadius * Math.sin((angle * Math.PI) / 180);
                
                return (
                  <motion.line
                    key={`connecting-line-${i}-${k}`}
                    x1="60"
                    y1={100 + i * 125}
                    x2={endX}
                    y2={endY}
                    stroke={nordicBlue}
                    strokeWidth="1"
                    strokeDasharray="2 3"
                    opacity="0.6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 + k * 0.2 }}
                  />
                );
              })}
            </motion.g>
          ))}

          {/* Nordic geometric patterns between mandalas */}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <motion.g
              key={`left-geometric-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.6, delay: 1.2 + i * 0.15 }}
            >
              {/* Diamond pattern */}
              <motion.path
                d={`M 60,${160 + i * 125} L 55,${165 + i * 125} L 60,${170 + i * 125} L 65,${165 + i * 125} Z`}
                fill={fillColor}
                fillOpacity="0.4"
                stroke={strokeColor}
                strokeWidth="1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
              
              {/* Side diamonds */}
              <motion.path
                d={`M 45,${162 + i * 125} L 40,${167 + i * 125} L 45,${172 + i * 125} L 50,${167 + i * 125} Z`}
                fill={nordicBlue}
                fillOpacity="0.3"
                stroke={strokeColor}
                strokeWidth="0.8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              />
              
              <motion.path
                d={`M 75,${162 + i * 125} L 70,${167 + i * 125} L 75,${172 + i * 125} L 80,${167 + i * 125} Z`}
                fill={nordicBlue}
                fillOpacity="0.3"
                stroke={strokeColor}
                strokeWidth="0.8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              />
            </motion.g>
          ))}
        </motion.svg>
      </motion.div>

      <motion.div
        className="fixed right-0 top-0 h-full w-12 sm:w-20 md:w-28 lg:w-36 pointer-events-none z-10 overflow-hidden"
        style={{ opacity }}
      >
        <motion.svg
          className="w-full h-[120%]"
          viewBox="0 0 120 1000"
          preserveAspectRatio="xMidYMid meet"
          style={{ y: rightY }}
        >
          <defs>
            <radialGradient id="rightGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={strokeColor} stopOpacity="0.8" />
              <stop offset="70%" stopColor={nordicBlue} stopOpacity="0.4" />
              <stop offset="100%" stopColor={nordicSilver} stopOpacity="0.2" />
            </radialGradient>
            <linearGradient id="rightLinear" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={accentColor} stopOpacity="0.6" />
              <stop offset="50%" stopColor={strokeColor} stopOpacity="0.8" />
              <stop offset="100%" stopColor={nordicBlue} stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Central spine with symmetric curves (mirrored from left) */}
          <motion.path
            d="M 60,0 Q 70,50 60,100 Q 50,150 60,200 Q 70,250 60,300 Q 50,350 60,400 Q 70,450 60,500 Q 50,550 60,600 Q 70,650 60,700 Q 50,750 60,800 Q 70,850 60,900 Q 50,950 60,1000"
            fill="none"
            stroke="url(#rightLinear)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />

          {/* Symmetric Nordic Mandala Elements (mirrored) */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <motion.g
              key={`right-mandala-${i}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: Math.abs(currentSection - (i % 5)) < 2 ? 1 : 0.4,
                scale: Math.abs(currentSection - (i % 5)) < 2 ? 1 : 0.7
              }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              {/* Outer ring - 8 symmetric elements */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((j) => {
                const angle = (j * 45); // 45 degrees each for 8 elements
                const radius = 25;
                const x = 60 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 100 + i * 125 + radius * Math.sin((angle * Math.PI) / 180);
                
                return (
                  <motion.circle
                    key={`right-outer-ring-${i}-${j}`}
                    cx={x}
                    cy={y}
                    r="3"
                    fill={accentColor}
                    fillOpacity="0.7"
                    stroke={strokeColor}
                    strokeWidth="1"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ 
                      scale: [0, 1, 1.2, 1],
                      rotate: [0, -360] // Counter-rotate for visual balance
                    }}
                    transition={{ 
                      duration: 2,
                      delay: j * 0.1,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                );
              })}

              {/* Inner Nordic cross pattern */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.rect
                  x="55"
                  y={95 + i * 125}
                  width="10"
                  height="3"
                  fill={strokeColor}
                  fillOpacity="0.6"
                />
                <motion.rect
                  x="58.5"
                  y={90 + i * 125}
                  width="3"
                  height="15"
                  fill={strokeColor}
                  fillOpacity="0.6"
                />
              </motion.g>

              {/* Center circle with Nordic rune-inspired pattern */}
              <motion.circle
                cx="60"
                cy={100 + i * 125}
                r="8"
                fill="url(#rightGradient)"
                stroke={strokeColor}
                strokeWidth="1.5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />

              {/* Symmetric connecting lines */}
              {[0, 1, 2, 3].map((k) => {
                const angle = k * 90; // 90 degrees each for 4 lines
                const endRadius = 35;
                const endX = 60 + endRadius * Math.cos((angle * Math.PI) / 180);
                const endY = 100 + i * 125 + endRadius * Math.sin((angle * Math.PI) / 180);
                
                return (
                  <motion.line
                    key={`right-connecting-line-${i}-${k}`}
                    x1="60"
                    y1={100 + i * 125}
                    x2={endX}
                    y2={endY}
                    stroke={nordicBlue}
                    strokeWidth="1"
                    strokeDasharray="2 3"
                    opacity="0.6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 + k * 0.2 }}
                  />
                );
              })}
            </motion.g>
          ))}

          {/* Nordic geometric patterns between mandalas */}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <motion.g
              key={`right-geometric-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.6, delay: 1.2 + i * 0.15 }}
            >
              {/* Diamond pattern */}
              <motion.path
                d={`M 60,${160 + i * 125} L 65,${165 + i * 125} L 60,${170 + i * 125} L 55,${165 + i * 125} Z`}
                fill={fillColor}
                fillOpacity="0.4"
                stroke={strokeColor}
                strokeWidth="1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
              
              {/* Side diamonds */}
              <motion.path
                d={`M 75,${162 + i * 125} L 80,${167 + i * 125} L 75,${172 + i * 125} L 70,${167 + i * 125} Z`}
                fill={nordicBlue}
                fillOpacity="0.3"
                stroke={strokeColor}
                strokeWidth="0.8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              />
              
              <motion.path
                d={`M 45,${162 + i * 125} L 40,${167 + i * 125} L 45,${172 + i * 125} L 50,${167 + i * 125} Z`}
                fill={nordicBlue}
                fillOpacity="0.3"
                stroke={strokeColor}
                strokeWidth="0.8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              />
            </motion.g>
          ))}

          {/* Additional Nordic rune-inspired elements */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.g
              key={`right-runes-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.8, delay: 1.5 + i * 0.2 }}
            >
              {/* Rune-like lines */}
              <motion.line
                x1="65"
                y1={200 + i * 140}
                x2="65"
                y2={220 + i * 140}
                stroke={strokeColor}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: i * 0.1 }}
              />
              <motion.line
                x1="60"
                y1={210 + i * 140}
                x2="70"
                y2={210 + i * 140}
                stroke={strokeColor}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
              />
              <motion.line
                x1="62"
                y1={205 + i * 140}
                x2="68"
                y2={215 + i * 140}
                stroke={nordicBlue}
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
              />
            </motion.g>
          ))}
        </motion.svg>
      </motion.div>
    </>
  );
};

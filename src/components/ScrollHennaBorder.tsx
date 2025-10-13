import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export const ScrollHennaBorder = () => {
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();

  const leftOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9], [0, 1, 1]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9], [0, 1, 1]);
  const leftY = useTransform(scrollYProgress, [0.1, 1], [0, -100]);
  const rightY = useTransform(scrollYProgress, [0.1, 1], [0, -150]);

  const strokeColor = theme === 'dark' ? '#C19A6B' : '#C97E5A';
  const fillColor = theme === 'dark' ? '#8B5A3C' : '#E6D2B5';

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 h-screen w-24 md:w-32 lg:w-40 pointer-events-none z-0 hidden sm:block"
        style={{ opacity: leftOpacity }}
      >
        <motion.svg
          className="w-full h-full"
          viewBox="0 0 100 800"
          preserveAspectRatio="xMinYMin slice"
          style={{ y: leftY }}
        >
          <motion.path
            d="M 20,50 Q 30,70 25,90 Q 20,110 30,130 Q 40,150 30,170 Q 20,190 25,210"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />

          <motion.g>
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.g key={`left-peacock-${i}`}>
                <motion.path
                  d={`M 25,${100 + i * 150} Q 15,${110 + i * 150} 10,${120 + i * 150} Q 15,${130 + i * 150} 25,${140 + i * 150} Q 35,${130 + i * 150} 40,${120 + i * 150} Q 35,${110 + i * 150} 25,${100 + i * 150} Z`}
                  fill={fillColor}
                  fillOpacity="0.3"
                  stroke={strokeColor}
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1 + i * 0.2 }}
                />
                <motion.circle
                  cx="25"
                  cy={120 + i * 150}
                  r="3"
                  fill={strokeColor}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 + i * 0.2 }}
                />
              </motion.g>
            ))}
          </motion.g>

          <motion.g>
            {[0, 1, 2, 3].map((i) => (
              <motion.g key={`left-vine-${i}`}>
                <motion.path
                  d={`M 40,${200 + i * 180} Q 50,${210 + i * 180} 45,${220 + i * 180} Q 40,${230 + i * 180} 50,${240 + i * 180}`}
                  fill="none"
                  stroke={strokeColor}
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.5 + i * 0.3 }}
                />
                <motion.circle
                  cx="45"
                  cy={220 + i * 180}
                  r="2"
                  fill={fillColor}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 2 + i * 0.3 }}
                />
              </motion.g>
            ))}
          </motion.g>

          <motion.g>
            {[0, 1, 2].map((i) => (
              <motion.path
                key={`left-leaf-${i}`}
                d={`M 15,${300 + i * 220} Q 10,${310 + i * 220} 15,${320 + i * 220} Q 20,${315 + i * 220} 15,${300 + i * 220} Z`}
                fill={fillColor}
                fillOpacity="0.4"
                stroke={strokeColor}
                strokeWidth="0.8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 2 + i * 0.4 }}
              />
            ))}
          </motion.g>
        </motion.svg>
      </motion.div>

      <motion.div
        className="fixed right-0 top-0 h-screen w-24 md:w-32 lg:w-40 pointer-events-none z-0 hidden sm:block"
        style={{ opacity: rightOpacity }}
      >
        <motion.svg
          className="w-full h-full"
          viewBox="0 0 100 800"
          preserveAspectRatio="xMaxYMin slice"
          style={{ y: rightY }}
        >
          <motion.path
            d="M 80,80 Q 70,100 75,120 Q 80,140 70,160 Q 60,180 70,200 Q 80,220 75,240"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
          />

          <motion.g>
            {[0, 1, 2, 3].map((i) => (
              <motion.g key={`right-paisley-${i}`}>
                <motion.path
                  d={`M 75,${120 + i * 170} Q 85,${130 + i * 170} 80,${145 + i * 170} Q 70,${150 + i * 170} 65,${140 + i * 170} Q 70,${125 + i * 170} 75,${120 + i * 170} Z`}
                  fill={fillColor}
                  fillOpacity="0.35"
                  stroke={strokeColor}
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 + i * 0.25 }}
                />
                <motion.ellipse
                  cx="75"
                  cy={135 + i * 170}
                  rx="4"
                  ry="6"
                  fill={strokeColor}
                  fillOpacity="0.6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 + i * 0.25 }}
                />
              </motion.g>
            ))}
          </motion.g>

          <motion.g>
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.g key={`right-flower-${i}`}>
                <motion.circle
                  cx="60"
                  cy={250 + i * 140}
                  r="8"
                  fill="none"
                  stroke={strokeColor}
                  strokeWidth="1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 + i * 0.2 }}
                />
                {[0, 1, 2, 3, 4].map((j) => (
                  <motion.ellipse
                    key={`petal-${i}-${j}`}
                    cx={60 + Math.cos((j * Math.PI * 2) / 5) * 10}
                    cy={250 + i * 140 + Math.sin((j * Math.PI * 2) / 5) * 10}
                    rx="3"
                    ry="5"
                    fill={fillColor}
                    fillOpacity="0.5"
                    transform={`rotate(${j * 72}, ${60 + Math.cos((j * Math.PI * 2) / 5) * 10}, ${250 + i * 140 + Math.sin((j * Math.PI * 2) / 5) * 10})`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.8 + i * 0.2 + j * 0.05 }}
                  />
                ))}
                <motion.circle
                  cx="60"
                  cy={250 + i * 140}
                  r="2"
                  fill={strokeColor}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 2.2 + i * 0.2 }}
                />
              </motion.g>
            ))}
          </motion.g>

          <motion.g>
            {[0, 1, 2, 3].map((i) => (
              <motion.path
                key={`right-curve-${i}`}
                d={`M 55,${350 + i * 160} Q 65,${360 + i * 160} 70,${375 + i * 160} Q 65,${390 + i * 160} 55,${400 + i * 160}`}
                fill="none"
                stroke={strokeColor}
                strokeWidth="1"
                strokeDasharray="2 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, delay: 2 + i * 0.3 }}
              />
            ))}
          </motion.g>

          <motion.g>
            {[0, 1, 2].map((i) => (
              <motion.g key={`right-peacock-feather-${i}`}>
                <motion.path
                  d={`M 85,${450 + i * 200} L 75,${470 + i * 200} Q 80,${475 + i * 200} 85,${470 + i * 200} Z`}
                  fill={fillColor}
                  fillOpacity="0.4"
                  stroke={strokeColor}
                  strokeWidth="0.8"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 2.5 + i * 0.4 }}
                />
                <motion.circle
                  cx="80"
                  cy={470 + i * 200}
                  r="3"
                  fill={strokeColor}
                  fillOpacity="0.7"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 3 + i * 0.4 }}
                />
              </motion.g>
            ))}
          </motion.g>
        </motion.svg>
      </motion.div>
    </>
  );
};

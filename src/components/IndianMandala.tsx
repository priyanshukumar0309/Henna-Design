import { motion } from 'framer-motion';

export const IndianMandala = () => {
  // Central point for perfect alignment
  const centerX = 200;
  const centerY = 200;

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 400"
      style={{ maxWidth: '100%', maxHeight: '100%' }}
    >
      <defs>
        <radialGradient id="mandalaGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C97E5A" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#C19A6B" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#E6D2B5" stopOpacity="0.5" />
        </radialGradient>
        <linearGradient id="petalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#C97E5A" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Outer Ring - 16 elements for perfect symmetry */}
      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: `${centerX}px ${centerY}px` }}
      >
        {[...Array(16)].map((_, i) => {
          const angle = (i * 360) / 16; // 22.5 degrees each
          const radius = 180;
          const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
          const y = centerY + radius * Math.sin((angle * Math.PI) / 180);
          
          return (
            <motion.g key={`outer-ring-${i}`}>
              <motion.circle
                cx={x}
                cy={y}
                r="6"
                fill="#C19A6B"
                fillOpacity="0.4"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1.1, 1] }}
                transition={{ 
                  duration: 2, 
                  delay: i * 0.1, 
                  repeat: Infinity, 
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
            </motion.g>
          );
        })}
      </motion.g>

      {/* Large Petals - 8 elements */}
      <motion.g
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: [0, 360, 0] }}
        transition={{ duration: 30, delay: 0.5, ease: "easeInOut", repeat: Infinity }}
        style={{ transformOrigin: `${centerX}px ${centerY}px` }}
      >
        {[...Array(8)].map((_, i) => {
          const angle = (i * 360) / 8; // 45 degrees each
          return (
            <motion.g key={`large-petal-${i}`} transform={`rotate(${angle} ${centerX} ${centerY})`}>
              <motion.path
                d={`M ${centerX},${centerY} Q ${centerX - 10},${centerY - 80} ${centerX},${centerY - 130} Q ${centerX + 25},${centerY - 120} ${centerX + 45},${centerY - 95} Q ${centerX + 50},${centerY - 65} ${centerX + 45},${centerY - 35} Q ${centerX + 25},${centerY - 5} ${centerX},${centerY} Z`}
                fill="url(#petalGradient)"
                fillOpacity="0.5"
                stroke="#C97E5A"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ 
                  duration: 2.5, 
                  delay: 0.8 + i * 0.15, 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  repeatDelay: 4,
                  ease: "easeInOut"
                }}
              />
              <motion.path
                d={`M ${centerX},${centerY} Q ${centerX + 10},${centerY - 80} ${centerX},${centerY - 130} Q ${centerX - 25},${centerY - 120} ${centerX - 45},${centerY - 95} Q ${centerX - 50},${centerY - 65} ${centerX - 45},${centerY - 35} Q ${centerX - 25},${centerY - 5} ${centerX},${centerY} Z`}
                fill="#E6D2B5"
                fillOpacity="0.4"
                stroke="#C19A6B"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ 
                  duration: 2.5, 
                  delay: 1 + i * 0.15, 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  repeatDelay: 4,
                  ease: "easeInOut"
                }}
              />
              <motion.ellipse
                cx={centerX}
                cy={centerY - 95}
                rx="8"
                ry="12"
                fill="#D4AF37"
                fillOpacity="0.7"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1.1, 1] }}
                transition={{ 
                  duration: 2, 
                  delay: 1.5 + i * 0.15, 
                  repeat: Infinity, 
                  repeatDelay: 4,
                  ease: "easeInOut"
                }}
              />
            </motion.g>
          );
        })}
      </motion.g>

      {/* Second Ring - 16 elements */}
      <motion.g
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: `${centerX}px ${centerY}px` }}
      >
        {[...Array(16)].map((_, i) => {
          const angle = (i * 360) / 16; // 22.5 degrees each
          const radius = 140;
          const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
          const y = centerY + radius * Math.sin((angle * Math.PI) / 180);
          
          return (
            <motion.g key={`second-ring-${i}`}>
              <motion.circle
                cx={x}
                cy={y}
                r="5"
                fill="#C97E5A"
                fillOpacity="0.5"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1.1, 1] }}
                transition={{ 
                  duration: 1.8, 
                  delay: 1.2 + i * 0.08, 
                  repeat: Infinity, 
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
            </motion.g>
          );
        })}
      </motion.g>

      {/* Medium Petals - 8 elements */}
      <motion.g
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: [0, -360, 0] }}
        transition={{ duration: 25, delay: 1, ease: "easeInOut", repeat: Infinity }}
        style={{ transformOrigin: `${centerX}px ${centerY}px` }}
      >
        {[...Array(8)].map((_, i) => {
          const angle = (i * 360) / 8; // 45 degrees each
          return (
            <motion.g key={`medium-petal-${i}`} transform={`rotate(${angle} ${centerX} ${centerY})`}>
              <motion.path
                d={`M ${centerX},${centerY} Q ${centerX - 8},${centerY - 60} ${centerX},${centerY - 100} Q ${centerX + 15},${centerY - 92} ${centerX + 25},${centerY - 72} Q ${centerX + 28},${centerY - 52} ${centerX + 25},${centerY - 32} Q ${centerX + 15},${centerY - 12} ${centerX},${centerY} Z`}
                fill="#C19A6B"
                fillOpacity="0.6"
                stroke="#C97E5A"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ 
                  duration: 2, 
                  delay: 1.5 + i * 0.12, 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
              <motion.path
                d={`M ${centerX},${centerY} Q ${centerX + 8},${centerY - 60} ${centerX},${centerY - 100} Q ${centerX - 15},${centerY - 92} ${centerX - 25},${centerY - 72} Q ${centerX - 28},${centerY - 52} ${centerX - 25},${centerY - 32} Q ${centerX - 15},${centerY - 12} ${centerX},${centerY} Z`}
                fill="#E6D2B5"
                fillOpacity="0.5"
                stroke="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.8, 1] }}
                transition={{ 
                  duration: 2, 
                  delay: 1.7 + i * 0.12, 
                  repeat: Infinity, 
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
              <motion.ellipse
                cx={centerX}
                cy={centerY - 75}
                rx="6"
                ry="10"
                fill="#D4AF37"
                fillOpacity="0.7"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1.1, 1] }}
                transition={{ 
                  duration: 1.8, 
                  delay: 2 + i * 0.12, 
                  repeat: Infinity, 
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
            </motion.g>
          );
        })}
      </motion.g>

      {/* Third Ring - 16 elements */}
      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: `${centerX}px ${centerY}px` }}
      >
        {[...Array(16)].map((_, i) => {
          const angle = (i * 360) / 16; // 22.5 degrees each
          const radius = 100;
          const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
          const y = centerY + radius * Math.sin((angle * Math.PI) / 180);
          
          return (
            <motion.g key={`third-ring-${i}`}>
              <motion.circle
                cx={x}
                cy={y}
                r="4"
                fill="#C19A6B"
                fillOpacity="0.6"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1.1, 1] }}
                transition={{ 
                  duration: 1.5, 
                  delay: 2.2 + i * 0.06, 
                  repeat: Infinity, 
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
            </motion.g>
          );
        })}
      </motion.g>

      {/* Inner Petals - 8 elements */}
      <motion.g
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: [0, 360, 0] }}
        transition={{ duration: 20, delay: 1.5, ease: "easeInOut", repeat: Infinity }}
        style={{ transformOrigin: `${centerX}px ${centerY}px` }}
      >
        {[...Array(8)].map((_, i) => {
          const angle = (i * 360) / 8; // 45 degrees each
          return (
            <motion.g key={`inner-petal-${i}`} transform={`rotate(${angle} ${centerX} ${centerY})`}>
              <motion.path
                d={`M ${centerX},${centerY} Q ${centerX - 6},${centerY - 40} ${centerX},${centerY - 70} Q ${centerX + 12},${centerY - 65} ${centerX + 18},${centerY - 50} Q ${centerX + 20},${centerY - 35} ${centerX + 18},${centerY - 20} Q ${centerX + 12},${centerY - 5} ${centerX},${centerY} Z`}
                fill="url(#petalGradient)"
                fillOpacity="0.7"
                stroke="#C97E5A"
                strokeWidth="1.2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ 
                  duration: 1.8, 
                  delay: 2.5 + i * 0.1, 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
              <motion.path
                d={`M ${centerX},${centerY} Q ${centerX + 6},${centerY - 40} ${centerX},${centerY - 70} Q ${centerX - 12},${centerY - 65} ${centerX - 18},${centerY - 50} Q ${centerX - 20},${centerY - 35} ${centerX - 18},${centerY - 20} Q ${centerX - 12},${centerY - 5} ${centerX},${centerY} Z`}
                fill="#E6D2B5"
                fillOpacity="0.6"
                stroke="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.9, 1] }}
                transition={{ 
                  duration: 1.8, 
                  delay: 2.7 + i * 0.1, 
                  repeat: Infinity, 
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
            </motion.g>
          );
        })}
      </motion.g>

      {/* Central Ring */}
      <motion.circle
        cx={centerX}
        cy={centerY}
        r="75"
        fill="none"
        stroke="#C97E5A"
        strokeWidth="2"
        strokeDasharray="3 6"
        initial={{ pathLength: 0, opacity: 0, rotate: 0 }}
        animate={{ pathLength: 1, opacity: 0.6, rotate: 360 }}
        transition={{
          pathLength: { duration: 3, delay: 2.8 },
          opacity: { duration: 3, delay: 2.8 },
          rotate: { duration: 30, repeat: Infinity, ease: "linear" }
        }}
      />

      {/* Fourth Ring - 16 elements */}
      <motion.g
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: `${centerX}px ${centerY}px` }}
      >
        {[...Array(16)].map((_, i) => {
          const angle = (i * 360) / 16; // 22.5 degrees each
          const radius = 60;
          const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
          const y = centerY + radius * Math.sin((angle * Math.PI) / 180);
          
          return (
            <motion.g key={`fourth-ring-${i}`}>
              <motion.circle
                cx={x}
                cy={y}
                r="3"
                fill="#D4AF37"
                fillOpacity="0.7"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1.1, 1] }}
                transition={{ 
                  duration: 1.3, 
                  delay: 3 + i * 0.05, 
                  repeat: Infinity, 
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
            </motion.g>
          );
        })}
      </motion.g>

      {/* Central Detail Lines - 16 elements */}
      <motion.g
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: [0, -360, 0] }}
        transition={{ duration: 18, delay: 2, ease: "easeInOut", repeat: Infinity }}
        style={{ transformOrigin: `${centerX}px ${centerY}px` }}
      >
        {[...Array(16)].map((_, i) => {
          const angle = (i * 360) / 16; // 22.5 degrees each
          return (
            <motion.g key={`detail-line-${i}`} transform={`rotate(${angle} ${centerX} ${centerY})`}>
              <motion.line
                x1={centerX}
                y1={centerY}
                x2={centerX}
                y2={centerY - 45}
                stroke="#8B5A3C"
                strokeWidth="1"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 3.2 + i * 0.03, 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
            </motion.g>
          );
        })}
      </motion.g>

      {/* Inner Circle */}
      <motion.circle
        cx={centerX}
        cy={centerY}
        r="35"
        fill="none"
        stroke="#8B5A3C"
        strokeWidth="2.5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 1.05, 1], opacity: [0, 0.8, 0.8, 0.8] }}
        transition={{ 
          duration: 2, 
          delay: 3.5, 
          repeat: Infinity, 
          repeatDelay: 3,
          ease: "easeInOut"
        }}
      />

      {/* Core Ring - 8 elements */}
      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: `${centerX}px ${centerY}px` }}
      >
        {[...Array(8)].map((_, i) => {
          const angle = (i * 360) / 8; // 45 degrees each
          const radius = 25;
          const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
          const y = centerY + radius * Math.sin((angle * Math.PI) / 180);
          
          return (
            <motion.g key={`core-ring-${i}`}>
              <motion.circle
                cx={x}
                cy={y}
                r="2.5"
                fill="#C97E5A"
                fillOpacity="0.8"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1.1, 1] }}
                transition={{ 
                  duration: 1.2, 
                  delay: 3.7 + i * 0.06, 
                  repeat: Infinity, 
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
            </motion.g>
          );
        })}
      </motion.g>

      {/* Center Circle */}
      <motion.circle
        cx={centerX}
        cy={centerY}
        r="15"
        fill="#C97E5A"
        fillOpacity="0.6"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.05, 1] }}
        transition={{ 
          duration: 1.5, 
          delay: 3.9, 
          repeat: Infinity, 
          repeatDelay: 3,
          ease: "easeInOut"
        }}
      />

      {/* Center Dots - 6 elements for perfect symmetry */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 1.1, 1], opacity: [0, 1, 1, 1] }}
        transition={{ 
          duration: 1.2, 
          delay: 4.1, 
          repeat: Infinity, 
          repeatDelay: 3,
          ease: "easeInOut"
        }}
      >
        {[...Array(6)].map((_, i) => {
          const angle = (i * 360) / 6; // 60 degrees each
          const radius = 8;
          const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
          const y = centerY + radius * Math.sin((angle * Math.PI) / 180);
          
          return (
            <motion.circle
              key={`center-dot-${i}`}
              cx={x}
              cy={y}
              r="1.5"
              fill="#FAF8F4"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.2, 1] }}
              transition={{ 
                duration: 0.8, 
                delay: 4.3 + i * 0.05, 
                repeat: Infinity, 
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </motion.g>
    </svg>
  );
};

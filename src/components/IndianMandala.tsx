import { motion } from 'framer-motion';

export const IndianMandala = () => {
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

      {/* Outermost Scalloped Border - 8 large scallops */}
      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 200px" }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.g key={`outermost-scallop-${i}`} transform={`rotate(${i * 45} 200 200)`}>
            <motion.path
              d="M 200,20 Q 220,15 240,20 Q 250,40 240,60 Q 220,70 200,60 Q 180,70 160,60 Q 150,40 160,20 Q 180,15 200,20 Z"
              fill="#C19A6B"
              fillOpacity="0.3"
              stroke="#C97E5A"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: i * 0.05, repeat: Infinity, repeatType: "reverse", repeatDelay: 8 }}
            />
            <motion.circle
              cx="200"
              cy="40"
              r="3"
              fill="#D4AF37"
              fillOpacity="0.7"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.2, 1] }}
              transition={{ duration: 1.5, delay: 0.5 + i * 0.05, repeat: Infinity, repeatDelay: 8 }}
            />
          </motion.g>
        ))}
      </motion.g>

      {/* Third Petal Ring - 8 elongated petals with dots */}
      <motion.g
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: [0, -360, 0] }}
        transition={{ duration: 25, delay: 0.5, ease: "easeInOut", repeat: Infinity }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.g key={`third-petal-${i}`} transform={`rotate(${i * 45} 200 200)`}>
            <motion.path
              d="M 200,200 L 195,80 L 200,70 L 205,80 L 200,200 Z"
              fill="#E6D2B5"
              fillOpacity="0.6"
              stroke="#C97E5A"
              strokeWidth="1.2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 1 + i * 0.08, repeat: Infinity, repeatType: "reverse", repeatDelay: 7 }}
            />
            <motion.circle
              cx="200"
              cy="75"
              r="2"
              fill="#8B5A3C"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.3, 1] }}
              transition={{ duration: 1.2, delay: 1.5 + i * 0.08, repeat: Infinity, repeatDelay: 7 }}
            />
          </motion.g>
        ))}
      </motion.g>

      {/* Third Patterned Ring - Semi-circular scallops with arcs */}
      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 200px" }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.g key={`third-pattern-${i}`} transform={`rotate(${i * 45} 200 200)`}>
            <motion.path
              d="M 200,95 Q 210,85 220,95 Q 210,105 200,95 Z"
              fill="none"
              stroke="#C97E5A"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 1.5, delay: 2 + i * 0.06, repeat: Infinity, repeatType: "reverse", repeatDelay: 6 }}
            />
            <motion.circle
              cx="205"
              cy="90"
              r="1"
              fill="#8B5A3C"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.2, 1] }}
              transition={{ duration: 1, delay: 2.2 + i * 0.06, repeat: Infinity, repeatDelay: 6 }}
            />
            <motion.circle
              cx="210"
              cy="95"
              r="1"
              fill="#8B5A3C"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.2, 1] }}
              transition={{ duration: 1, delay: 2.4 + i * 0.06, repeat: Infinity, repeatDelay: 6 }}
            />
            <motion.circle
              cx="205"
              cy="100"
              r="1"
              fill="#8B5A3C"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.2, 1] }}
              transition={{ duration: 1, delay: 2.6 + i * 0.06, repeat: Infinity, repeatDelay: 6 }}
            />
          </motion.g>
        ))}
      </motion.g>

      {/* Second Petal Ring - 8 larger petals with cross-hatch */}
      <motion.g
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: [0, 360, 0] }}
        transition={{ duration: 20, delay: 1, ease: "easeInOut", repeat: Infinity }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.g key={`second-petal-${i}`} transform={`rotate(${i * 45} 200 200)`}>
            <motion.path
              d="M 200,200 Q 198,120 200,100 Q 220,110 240,130 Q 245,150 240,170 Q 220,190 200,200 Z"
              fill="#C19A6B"
              fillOpacity="0.6"
              stroke="#C97E5A"
              strokeWidth="1.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.2, delay: 2.5 + i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 6 }}
            />
            <motion.path
              d="M 200,200 Q 202,120 200,100 Q 180,110 160,130 Q 155,150 160,170 Q 180,190 200,200 Z"
              fill="#E6D2B5"
              fillOpacity="0.5"
              stroke="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.8, 1] }}
              transition={{ duration: 2.5, delay: 2.7 + i * 0.1, repeat: Infinity, repeatDelay: 6 }}
            />
            {/* Cross-hatch pattern */}
            <motion.line
              x1="200"
              y1="120"
              x2="220"
              y2="140"
              stroke="#8B5A3C"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, delay: 3 + i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 6 }}
            />
            <motion.line
              x1="200"
              y1="140"
              x2="220"
              y2="160"
              stroke="#8B5A3C"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, delay: 3.1 + i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 6 }}
            />
            <motion.ellipse
              cx="200"
              cy="130"
              rx="4"
              ry="6"
              fill="#D4AF37"
              fillOpacity="0.8"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.15, 1] }}
              transition={{ duration: 1.8, delay: 3.2 + i * 0.1, repeat: Infinity, repeatDelay: 6 }}
            />
          </motion.g>
        ))}
      </motion.g>

      {/* Second Patterned Ring - Decorative band with dots and circles */}
      <motion.g
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 200px" }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.g key={`second-pattern-${i}`} transform={`rotate(${i * 45} 200 200)`}>
            <motion.circle
              cx="200"
              cy="160"
              r="2"
              fill="#8B5A3C"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.2, 1] }}
              transition={{ duration: 1.2, delay: 3.5 + i * 0.04, repeat: Infinity, repeatDelay: 5 }}
            />
            <motion.circle
              cx="200"
              cy="165"
              r="1.5"
              fill="#D4AF37"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.3, 1] }}
              transition={{ duration: 1, delay: 3.7 + i * 0.04, repeat: Infinity, repeatDelay: 5 }}
            />
            <motion.circle
              cx="200"
              cy="170"
              r="2.5"
              fill="#8B5A3C"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.1, 1] }}
              transition={{ duration: 1.4, delay: 3.9 + i * 0.04, repeat: Infinity, repeatDelay: 5 }}
            />
          </motion.g>
        ))}
      </motion.g>

      {/* First Petal Ring - 8 white elongated petals with center lines */}
      <motion.g
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: [0, -360, 0] }}
        transition={{ duration: 18, delay: 1.5, ease: "easeInOut", repeat: Infinity }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.g key={`first-petal-${i}`} transform={`rotate(${i * 45} 200 200)`}>
            <motion.path
              d="M 200,200 Q 197,160 200,140 Q 215,150 225,170 Q 220,190 200,200 Z"
              fill="#E6D2B5"
              fillOpacity="0.7"
              stroke="#C97E5A"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 4 + i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
            />
            <motion.path
              d="M 200,200 Q 203,160 200,140 Q 185,150 175,170 Q 180,190 200,200 Z"
              fill="#C19A6B"
              fillOpacity="0.5"
              stroke="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.9, 1] }}
              transition={{ duration: 2.2, delay: 4.2 + i * 0.1, repeat: Infinity, repeatDelay: 5 }}
            />
            {/* Center line with dot */}
            <motion.line
              x1="200"
              y1="200"
              x2="200"
              y2="150"
              stroke="#8B5A3C"
              strokeWidth="1"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 1.5, delay: 4.5 + i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
            />
            <motion.circle
              cx="200"
              cy="155"
              r="1.5"
              fill="#8B5A3C"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.2, 1] }}
              transition={{ duration: 1, delay: 4.7 + i * 0.1, repeat: Infinity, repeatDelay: 5 }}
            />
          </motion.g>
        ))}
      </motion.g>

      {/* First Patterned Ring - Solid black ring */}
      <motion.circle
        cx="200"
        cy="200"
        r="25"
        fill="none"
        stroke="#8B5A3C"
        strokeWidth="3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.8 }}
        transition={{ duration: 2.5, delay: 5 }}
      />

      {/* Central 8 black teardrop petals */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 1.1, 1], opacity: [0, 1, 1, 1] }}
        transition={{ duration: 1.5, delay: 5.5, repeat: Infinity, repeatDelay: 5 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.g key={`center-teardrop-${i}`} transform={`rotate(${i * 45} 200 200)`}>
            <motion.path
              d="M 200,200 L 195,185 L 200,175 L 205,185 L 200,200 Z"
              fill="#8B5A3C"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 5.7 + i * 0.08, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
            />
          </motion.g>
        ))}
      </motion.g>

      {/* Central solid black circle */}
      <motion.circle
        cx="200"
        cy="200"
        r="8"
        fill="#8B5A3C"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.1, 1] }}
        transition={{ duration: 1.2, delay: 6, repeat: Infinity, repeatDelay: 5 }}
      />
    </svg>
  );
};

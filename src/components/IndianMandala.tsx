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

      <motion.circle
        cx="200"
        cy="200"
        r="185"
        fill="none"
        stroke="url(#mandalaGradient)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
      />

      <motion.g
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: [0, 360, 0] }}
        transition={{ duration: 8, delay: 0.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.g key={`outer-petal-${i}`} transform={`rotate(${i * 30} 200 200)`}>
            <motion.path
              d="M 200,200 Q 200,130 200,90 Q 215,110 220,140 Q 200,165 200,200 Z"
              fill="url(#petalGradient)"
              fillOpacity="0.4"
              stroke="#C97E5A"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 + i * 0.08, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
            />
            <motion.path
              d="M 200,200 Q 185,130 180,140 Q 190,165 200,200 Z"
              fill="#E6D2B5"
              fillOpacity="0.3"
              stroke="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, delay: 1.5 + i * 0.08, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.circle
              cx="200"
              cy="110"
              r="6"
              fill="#D4AF37"
              fillOpacity="0.7"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.2, 1] }}
              transition={{ duration: 2, delay: 2 + i * 0.08, repeat: Infinity, repeatDelay: 4 }}
            />
          </motion.g>
        ))}
      </motion.g>

      <motion.g
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: [0, -360, 0] }}
        transition={{ duration: 10, delay: 1.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
      >
        {[...Array(16)].map((_, i) => (
          <motion.g key={`lotus-${i}`} transform={`rotate(${i * 22.5} 200 200)`}>
            <motion.ellipse
              cx="200"
              cy="145"
              rx="10"
              ry="18"
              fill="#C19A6B"
              fillOpacity="0.5"
              stroke="#C97E5A"
              strokeWidth="1"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.1, 1] }}
              transition={{ duration: 2, delay: 1.5 + i * 0.06, repeat: Infinity, repeatDelay: 4 }}
            />
          </motion.g>
        ))}
      </motion.g>

      <motion.circle
        cx="200"
        cy="200"
        r="130"
        fill="none"
        stroke="#C19A6B"
        strokeWidth="1.5"
        strokeDasharray="8 4"
        initial={{ pathLength: 0, opacity: 0, rotate: 0 }}
        animate={{ pathLength: 1, opacity: 0.6, rotate: 360 }}
        transition={{
          pathLength: { duration: 2.5, delay: 1.8 },
          opacity: { duration: 2.5, delay: 1.8 },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      />

      <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.1, 1] }}
        transition={{ duration: 2, delay: 2, repeat: Infinity, repeatDelay: 4 }}
      >
        {[...Array(24)].map((_, i) => (
          <motion.g key={`dot-ring-${i}`} transform={`rotate(${i * 15} 200 200)`}>
            <motion.circle
              cx="200"
              cy="75"
              r="2.5"
              fill="#C97E5A"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1, 1.2, 1], opacity: [0, 1, 1, 1] }}
              transition={{ duration: 1, delay: 2.2 + i * 0.03, repeat: Infinity, repeatDelay: 5 }}
            />
          </motion.g>
        ))}
      </motion.g>

      <motion.g
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: [0, 180, 0] }}
        transition={{ duration: 12, delay: 1.5, ease: "easeInOut", repeat: Infinity }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.g key={`paisley-${i}`} transform={`rotate(${i * 45} 200 200)`}>
            <motion.path
              d="M 200,125 Q 218,120 225,128 Q 220,145 210,155 Q 200,150 200,125 Z"
              fill="#E6D2B5"
              fillOpacity="0.5"
              stroke="#8B5A3C"
              strokeWidth="1.2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 2 + i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 4 }}
            />
            <motion.circle
              cx="212"
              cy="135"
              r="4"
              fill="#D4AF37"
              fillOpacity="0.8"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.2, 1] }}
              transition={{ duration: 1.5, delay: 2.5 + i * 0.1, repeat: Infinity, repeatDelay: 4 }}
            />
          </motion.g>
        ))}
      </motion.g>

      <motion.circle
        cx="200"
        cy="200"
        r="95"
        fill="none"
        stroke="#C97E5A"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 2, delay: 2.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
      />

      <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.05, 1] }}
        transition={{ duration: 2, delay: 2.8, repeat: Infinity, repeatDelay: 4 }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.g key={`inner-petal-${i}`} transform={`rotate(${i * 30} 200 200)`}>
            <motion.ellipse
              cx="200"
              cy="165"
              rx="9"
              ry="16"
              fill="#E6D2B5"
              fillOpacity="0.7"
              stroke="#C19A6B"
              strokeWidth="0.8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1, 1.1, 1], opacity: [0, 1, 1, 1] }}
              transition={{ duration: 1, delay: 3 + i * 0.06, repeat: Infinity, repeatDelay: 5 }}
            />
          </motion.g>
        ))}
      </motion.g>

      <motion.circle
        cx="200"
        cy="200"
        r="60"
        fill="none"
        stroke="#8B5A3C"
        strokeWidth="1"
        strokeDasharray="4 6"
        initial={{ pathLength: 0, opacity: 0, rotate: 0 }}
        animate={{
          pathLength: 1,
          opacity: 0.5,
          rotate: -360
        }}
        transition={{
          pathLength: { duration: 2, delay: 3.2 },
          opacity: { duration: 2, delay: 3.2 },
          rotate: { duration: 25, repeat: Infinity, ease: "linear" }
        }}
      />

      <motion.g
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: [0, 360, 0] }}
        transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.g key={`center-petal-${i}`} transform={`rotate(${i * 45} 200 200)`}>
            <motion.path
              d="M 200,200 Q 200,175 200,160 Q 205,170 208,185 Q 200,195 200,200 Z"
              fill="url(#petalGradient)"
              fillOpacity="0.6"
              stroke="#C97E5A"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 1, 1] }}
              transition={{ duration: 1.2, delay: 3.4 + i * 0.08, repeat: Infinity, repeatType: "reverse", repeatDelay: 4 }}
            />
          </motion.g>
        ))}
      </motion.g>

      <motion.circle
        cx="200"
        cy="200"
        r="30"
        fill="none"
        stroke="#8B5A3C"
        strokeWidth="2.5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 1.05, 1], opacity: [0, 0.9, 0.9, 0.9] }}
        transition={{ duration: 1.5, delay: 3.5, repeat: Infinity, repeatDelay: 4 }}
      />

      <motion.circle
        cx="200"
        cy="200"
        r="18"
        fill="#C97E5A"
        fillOpacity="0.6"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.1, 1] }}
        transition={{ duration: 1.2, delay: 3.8, repeat: Infinity, repeatDelay: 4 }}
      />

      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 1.2, 1], opacity: [0, 1, 1, 1] }}
        transition={{ duration: 1, delay: 4, repeat: Infinity, repeatDelay: 5 }}
      >
        <motion.path
          d="M 200,188 L 200,212 M 188,200 L 212,200"
          stroke="#FAF8F4"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 4, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
        />
      </motion.g>

      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 200px" }}
      >
        <circle
          cx="200"
          cy="200"
          r="155"
          fill="none"
          stroke="#C19A6B"
          strokeWidth="0.5"
          opacity="0.3"
          strokeDasharray="3 10"
        />
      </motion.g>

      <motion.g
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 200px" }}
      >
        <circle
          cx="200"
          cy="200"
          r="170"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="0.5"
          opacity="0.2"
          strokeDasharray="2 12"
        />
      </motion.g>
    </svg>
  );
};

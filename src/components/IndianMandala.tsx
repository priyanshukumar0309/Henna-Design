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

      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 200px" }}
      >
        {[...Array(16)].map((_, i) => (
          <motion.g key={`outermost-scallop-${i}`} transform={`rotate(${i * 22.5} 200 200)`}>
            <motion.circle
              cx="200"
              cy="15"
              r="8"
              fill="#C19A6B"
              fillOpacity="0.3"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.1, 1] }}
              transition={{ duration: 2, delay: i * 0.02, repeat: Infinity, repeatDelay: 5 }}
            />
          </motion.g>
        ))}
      </motion.g>

      <motion.g
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: [0, 360, 0] }}
        transition={{ duration: 20, delay: 0.5, ease: "easeInOut", repeat: Infinity }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.g key={`large-petal-${i}`} transform={`rotate(${i * 45} 200 200)`}>
            <motion.path
              d="M 200,200 Q 195,120 200,80 Q 220,90 235,110 Q 240,130 235,150 Q 220,170 200,200 Z"
              fill="url(#petalGradient)"
              fillOpacity="0.5"
              stroke="#C97E5A"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.8 + i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 6 }}
            />
            <motion.path
              d="M 200,200 Q 205,120 200,80 Q 180,90 165,110 Q 160,130 165,150 Q 180,170 200,200 Z"
              fill="#E6D2B5"
              fillOpacity="0.4"
              stroke="#C19A6B"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 1 + i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 6 }}
            />
            <motion.path
              d="M 200,120 Q 210,110 215,120 Q 212,135 205,140 Q 200,135 200,120"
              fill="none"
              stroke="#8B5A3C"
              strokeWidth="0.8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1.5 + i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 6 }}
            />
            <motion.ellipse
              cx="200"
              cy="105"
              rx="6"
              ry="9"
              fill="#D4AF37"
              fillOpacity="0.7"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.15, 1] }}
              transition={{ duration: 1.8, delay: 1.8 + i * 0.1, repeat: Infinity, repeatDelay: 5 }}
            />
          </motion.g>
        ))}
      </motion.g>

      <motion.g
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 200px" }}
      >
        {[...Array(16)].map((_, i) => (
          <motion.g key={`outer-scallop-${i}`} transform={`rotate(${i * 22.5} 200 200)`}>
            <motion.circle
              cx="200"
              cy="60"
              r="6"
              fill="#C97E5A"
              fillOpacity="0.4"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.15, 1] }}
              transition={{ duration: 1.8, delay: 1.2 + i * 0.03, repeat: Infinity, repeatDelay: 5 }}
            />
          </motion.g>
        ))}
      </motion.g>

      <motion.g
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: [0, -360, 0] }}
        transition={{ duration: 25, delay: 1, ease: "easeInOut", repeat: Infinity }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.g key={`mid-petal-${i}`} transform={`rotate(${i * 30} 200 200)`}>
            <motion.path
              d="M 200,200 Q 198,155 200,130 Q 215,138 222,150 Q 218,165 200,200 Z"
              fill="#C19A6B"
              fillOpacity="0.6"
              stroke="#C97E5A"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.8, delay: 1.5 + i * 0.08, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
            />
            <motion.path
              d="M 200,200 Q 202,155 200,130 Q 185,138 178,150 Q 182,165 200,200 Z"
              fill="#E6D2B5"
              fillOpacity="0.5"
              stroke="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.8, 1] }}
              transition={{ duration: 2, delay: 1.7 + i * 0.08, repeat: Infinity, repeatDelay: 5 }}
            />
            <motion.ellipse
              cx="200"
              cy="150"
              rx="5"
              ry="8"
              fill="#D4AF37"
              fillOpacity="0.7"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.2, 1] }}
              transition={{ duration: 1.5, delay: 2 + i * 0.08, repeat: Infinity, repeatDelay: 5 }}
            />
          </motion.g>
        ))}
      </motion.g>

      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 200px" }}
      >
        {[...Array(16)].map((_, i) => (
          <motion.g key={`inner-scallop-${i}`} transform={`rotate(${i * 22.5} 200 200)`}>
            <motion.circle
              cx="200"
              cy="100"
              r="5"
              fill="#C19A6B"
              fillOpacity="0.5"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.1, 1] }}
              transition={{ duration: 1.5, delay: 2.2 + i * 0.05, repeat: Infinity, repeatDelay: 5 }}
            />
          </motion.g>
        ))}
      </motion.g>

      <motion.g
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: [0, 360, 0] }}
        transition={{ duration: 18, delay: 1.5, ease: "easeInOut", repeat: Infinity }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.g key={`inner-petal-${i}`} transform={`rotate(${i * 45} 200 200)`}>
            <motion.path
              d="M 200,200 Q 197,175 200,160 Q 210,165 215,175 Q 210,185 200,200 Z"
              fill="url(#petalGradient)"
              fillOpacity="0.7"
              stroke="#C97E5A"
              strokeWidth="1.2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 2.5 + i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
            />
            <motion.path
              d="M 200,200 Q 203,175 200,160 Q 190,165 185,175 Q 190,185 200,200 Z"
              fill="#E6D2B5"
              fillOpacity="0.6"
              stroke="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.9, 1] }}
              transition={{ duration: 1.8, delay: 2.7 + i * 0.1, repeat: Infinity, repeatDelay: 5 }}
            />
          </motion.g>
        ))}
      </motion.g>

      <motion.circle
        cx="200"
        cy="200"
        r="75"
        fill="none"
        stroke="#C97E5A"
        strokeWidth="2"
        strokeDasharray="2 4"
        initial={{ pathLength: 0, opacity: 0, rotate: 0 }}
        animate={{ pathLength: 1, opacity: 0.6, rotate: 360 }}
        transition={{
          pathLength: { duration: 2.5, delay: 2.8 },
          opacity: { duration: 2.5, delay: 2.8 },
          rotate: { duration: 25, repeat: Infinity, ease: "linear" }
        }}
      />

      <motion.g
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 200px" }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.g key={`center-scallop-${i}`} transform={`rotate(${i * 30} 200 200)`}>
            <motion.circle
              cx="200"
              cy="145"
              r="4"
              fill="#D4AF37"
              fillOpacity="0.6"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.15, 1] }}
              transition={{ duration: 1.3, delay: 3 + i * 0.06, repeat: Infinity, repeatDelay: 5 }}
            />
          </motion.g>
        ))}
      </motion.g>

      <motion.g
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: [0, -360, 0] }}
        transition={{ duration: 15, delay: 2, ease: "easeInOut", repeat: Infinity }}
      >
        {[...Array(16)].map((_, i) => (
          <motion.g key={`center-detail-${i}`} transform={`rotate(${i * 22.5} 200 200)`}>
            <motion.line
              x1="200"
              y1="200"
              x2="200"
              y2="170"
              stroke="#8B5A3C"
              strokeWidth="0.8"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 1.2, delay: 3.2 + i * 0.04, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
            />
          </motion.g>
        ))}
      </motion.g>

      <motion.circle
        cx="200"
        cy="200"
        r="35"
        fill="none"
        stroke="#8B5A3C"
        strokeWidth="2.5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 1.05, 1], opacity: [0, 0.8, 0.8, 0.8] }}
        transition={{ duration: 1.5, delay: 3.5, repeat: Infinity, repeatDelay: 5 }}
      />

      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 200px" }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.g key={`core-scallop-${i}`} transform={`rotate(${i * 45} 200 200)`}>
            <motion.circle
              cx="200"
              cy="175"
              r="3"
              fill="#C97E5A"
              fillOpacity="0.7"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.2, 1] }}
              transition={{ duration: 1.2, delay: 3.7 + i * 0.08, repeat: Infinity, repeatDelay: 5 }}
            />
          </motion.g>
        ))}
      </motion.g>

      <motion.circle
        cx="200"
        cy="200"
        r="15"
        fill="#C97E5A"
        fillOpacity="0.6"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.08, 1] }}
        transition={{ duration: 1.2, delay: 3.9, repeat: Infinity, repeatDelay: 5 }}
      />

      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 1.15, 1], opacity: [0, 1, 1, 1] }}
        transition={{ duration: 1, delay: 4.1, repeat: Infinity, repeatDelay: 5 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={`center-dot-${i}`}
            cx={200 + 8 * Math.cos((i * Math.PI) / 3)}
            cy={200 + 8 * Math.sin((i * Math.PI) / 3)}
            r="1.5"
            fill="#FAF8F4"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 1.3, 1] }}
            transition={{ duration: 0.8, delay: 4.3 + i * 0.08, repeat: Infinity, repeatDelay: 5 }}
          />
        ))}
      </motion.g>
    </svg>
  );
};

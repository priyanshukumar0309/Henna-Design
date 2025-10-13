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
          <stop offset="0%" stopColor="#C97E5A" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#C19A6B" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#E6D2B5" stopOpacity="0.4" />
        </radialGradient>
      </defs>

      <motion.circle
        cx="200"
        cy="200"
        r="180"
        fill="none"
        stroke="url(#mandalaGradient)"
        strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      <motion.g
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 3, delay: 0.8, ease: "easeOut" }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.g key={`petal-${i}`} transform={`rotate(${i * 45} 200 200)`}>
            <motion.path
              d="M 200,200 Q 200,140 200,100 Q 210,120 220,140 Q 200,160 200,200 Z"
              fill="none"
              stroke="#C97E5A"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1 + i * 0.1 }}
            />
            <motion.path
              d="M 200,200 Q 190,140 180,140 Q 195,160 200,200 Z"
              fill="#C19A6B"
              fillOpacity="0.2"
              stroke="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 + i * 0.1 }}
            />
          </motion.g>
        ))}
      </motion.g>

      <motion.g
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: -360 }}
        transition={{ duration: 3.5, delay: 1.2, ease: "easeOut" }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.g key={`lotus-${i}`} transform={`rotate(${i * 30} 200 200)`}>
            <motion.path
              d="M 200,200 Q 200,150 200,130 Q 205,145 210,160 Q 200,170 200,200"
              fill="none"
              stroke="#E6D2B5"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 1.5 + i * 0.08 }}
            />
          </motion.g>
        ))}
      </motion.g>

      <motion.circle
        cx="200"
        cy="200"
        r="120"
        fill="none"
        stroke="#C19A6B"
        strokeWidth="1"
        strokeDasharray="4 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 2.5, delay: 1.8 }}
      />

      <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, delay: 2 }}
      >
        {[...Array(16)].map((_, i) => (
          <motion.g key={`dot-${i}`} transform={`rotate(${i * 22.5} 200 200)`}>
            <motion.circle
              cx="200"
              cy="80"
              r="3"
              fill="#C97E5A"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 2.2 + i * 0.05 }}
            />
          </motion.g>
        ))}
      </motion.g>

      <motion.g
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 180 }}
        transition={{ duration: 3, delay: 1.5, ease: "easeOut" }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.g key={`paisley-${i}`} transform={`rotate(${i * 60} 200 200)`}>
            <motion.path
              d="M 200,130 Q 210,125 215,130 Q 210,140 205,145 Q 200,140 200,130 Z"
              fill="none"
              stroke="#8B5A3C"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 2 + i * 0.1 }}
            />
          </motion.g>
        ))}
      </motion.g>

      <motion.circle
        cx="200"
        cy="200"
        r="90"
        fill="none"
        stroke="#C97E5A"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 2, delay: 2.5 }}
      />

      <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 2.8 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.g key={`inner-petal-${i}`} transform={`rotate(${i * 45 + 22.5} 200 200)`}>
            <motion.ellipse
              cx="200"
              cy="160"
              rx="8"
              ry="15"
              fill="#E6D2B5"
              fillOpacity="0.6"
              stroke="#C19A6B"
              strokeWidth="0.5"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 3 + i * 0.08 }}
            />
          </motion.g>
        ))}
      </motion.g>

      <motion.circle
        cx="200"
        cy="200"
        r="25"
        fill="none"
        stroke="#8B5A3C"
        strokeWidth="2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 1, delay: 3.5 }}
      />

      <motion.circle
        cx="200"
        cy="200"
        r="12"
        fill="#C97E5A"
        fillOpacity="0.5"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 3.8 }}
      />

      <motion.path
        d="M 200,188 L 200,212 M 188,200 L 212,200"
        stroke="#FAF8F4"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 4 }}
      />

      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 200px" }}
      >
        <circle cx="200" cy="200" r="150" fill="none" stroke="#C19A6B" strokeWidth="0.5" opacity="0.2" strokeDasharray="2 8" />
      </motion.g>
    </svg>
  );
};

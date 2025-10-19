import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export const Pricing = () => {
  const { t } = useTranslation();
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const designTypes = [
    {
      id: 'simple',
      icon: '🌿',
      name: t('pricing.designs.simple.name'),
      description: t('pricing.designs.simple.description'),
      details: t('pricing.designs.simple.details'),
      price: '100 SEK',
      examples: [t('pricing.designs.simple.example1'), t('pricing.designs.simple.example2'), t('pricing.designs.simple.example3')],
      image: '/assets/gallery/traditional-diamond-hand-design.jpg'
    },
    {
      id: 'medium',
      name: t('pricing.designs.medium.name'),
      icon: '/assets/icons/medium.png',
      description: t('pricing.designs.medium.description'),
      details: t('pricing.designs.medium.details'),
      price: '150 SEK',
      examples: [t('pricing.designs.medium.example1'), t('pricing.designs.medium.example2'), t('pricing.designs.medium.example3')],
      image: '/assets/gallery/medium-hand-art.jpg'
    },
    {
      id: 'intricate',
      name: t('pricing.designs.intricate.name'),
      icon: '/assets/icons/intricate.png',
      description: t('pricing.designs.intricate.description'),
      details: t('pricing.designs.intricate.details'),
      price: '350 SEK',
      examples: [t('pricing.designs.intricate.example1'), t('pricing.designs.intricate.example2'), t('pricing.designs.intricate.example3')],
      image: '/assets/gallery/intricate-hand-mandala.jpg'
    },
    {
      id: 'bridal',
      name: t('pricing.designs.bridal.name'),
      icon: '💍',
      description: t('pricing.designs.bridal.description'),
      details: t('pricing.designs.bridal.details'),
      price: '3,500 SEK',
      startsFrom: t('pricing.startsFrom'),
      examples: [t('pricing.designs.bridal.example1'), t('pricing.designs.bridal.example2'), t('pricing.designs.bridal.example3')],
      image: '/assets/gallery/full-arm-darkest-stain.jpg'
    }
  ];

  const pricingMatrix = [
    { design: 'Simple', palm: 100, wrist: 150, bangle: 200, halfHand: 250, threeQuarter: 300, elbow: 350 },
    { design: 'Medium', palm: 150, wrist: 200, bangle: 250, halfHand: 300, threeQuarter: 350, elbow: 400 },
    { design: 'Intricate', palm: 350, wrist: 400, bangle: 500, halfHand: 650, threeQuarter: 800, elbow: 1000 }
  ];

  return (
    <section id="pricing" className="py-32 px-6 bg-gradient-to-br from-sand via-ivory to-henna-light/10 dark:from-dark-surface dark:via-dark-bg dark:to-henna-dark/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Section 1: Design Type Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-semibold text-charcoal dark:text-dark-text mb-4">
            {t('pricing.title')}
          </h2>
          <p className="font-inter text-lg text-charcoal/70 dark:text-dark-text/70 max-w-3xl mx-auto mb-2">
            {t('pricing.subtitle')}
          </p>
          <p className="font-playfair text-xl italic text-henna-brown dark:text-henna-gold">
            {t('pricing.tagline')}
          </p>
        </motion.div>

        {/* Design Type Flip Cards */}
        <div className="mb-20">
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {designTypes.map((design, index) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-96 perspective-1000"
                onMouseEnter={() => setFlippedCard(design.id)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flippedCard === design.id ? 'rotate-y-180' : ''}`}>
                  {/* Front of Card */}
                  <div className="absolute w-full h-full backface-hidden bg-white dark:bg-dark-surface rounded-2xl p-6 border-2 border-henna-light/40 dark:border-henna-dark/40 shadow-xl flex flex-col justify-between">
                    <div>
                      <div className="mb-4 text-center">
                        {design.icon.startsWith('/') ? (
                          <img 
                            src={design.icon} 
                            alt={`${design.name} icon`}
                            className="w-12 h-12 mx-auto object-contain"
                          />
                        ) : (
                          <div className="text-4xl">{design.icon}</div>
                        )}
                      </div>
                      <h4 className="font-playfair text-2xl font-bold text-charcoal dark:text-dark-text mb-3 text-center">
                        {design.name}
                      </h4>
                      <p className="font-inter text-sm text-charcoal/60 dark:text-dark-text/60 mb-2 text-center">
                        {design.description}
                      </p>
                      <p className="font-inter text-sm text-henna-brown dark:text-henna-gold mb-4 text-center italic">
                        {design.details}
                      </p>
                    </div>
                    <div>
                      {design.id === 'bridal' ? (
                        <div className="text-center">
                          <p className="font-inter text-xs text-charcoal/60 dark:text-dark-text/60 mb-1">
                            {t('pricing.startsFrom')}
                          </p>
                          <p className="font-playfair text-4xl font-bold text-henna-brown dark:text-henna-gold mb-3">
                            {design.price}
                          </p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <p className="font-inter text-xs text-charcoal/60 dark:text-dark-text/60 mb-1">
                            {t('pricing.startsFrom')}
                          </p>
                          <p className="font-playfair text-4xl font-bold text-henna-brown dark:text-henna-gold mb-3">
                            {design.price}
                          </p>
                        </div>
                      )}
                      <p className="font-inter text-xs text-charcoal/50 dark:text-dark-text/50 text-center italic">
                        {t('pricing.hoverToSee')}
                      </p>
                    </div>
                  </div>
                  
                  {/* Back of Card */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-xl">
                    <div className="relative w-full h-full">
                      <img 
                        src={design.image}
                        alt={`${design.name} example`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent flex flex-col justify-end p-6">
                        <h4 className="font-playfair text-2xl font-bold text-white mb-3">
                          {design.name}
                        </h4>
                        <ul className="space-y-2">
                          {design.examples.map((example, i) => (
                            <li key={i} className="font-inter text-sm text-white/90">
                              ✨ {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Section 2: Pricing Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="font-playfair text-3xl md:text-4xl font-semibold text-charcoal dark:text-dark-text mb-10 text-center">
            {t('pricing.matrix.title')}
          </h3>
          
          
          {/* Responsive Table - Desktop */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
              <thead>
                <tr className="bg-gradient-to-r from-henna-brown to-henna-gold text-white">
                  <th className="font-playfair text-lg p-4 text-left">
                    {t('pricing.matrix.designType')}
                  </th>
                  <th className="font-inter text-base p-4 text-center">
                    {t('pricing.matrix.palm')}
                  </th>
                  <th className="font-inter text-base p-4 text-center">
                    {t('pricing.matrix.wrist')}
                  </th>
                  <th className="font-inter text-base p-4 text-center">
                    {t('pricing.matrix.bangle')}
                  </th>
                  <th className="font-inter text-base p-4 text-center">
                    {t('pricing.matrix.halfHand')}
                  </th>
                  <th className="font-inter text-base p-4 text-center">
                    {t('pricing.matrix.threeQuarter')}
                  </th>
                  <th className="font-inter text-base p-4 text-center">
                    {t('pricing.matrix.elbow')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingMatrix.map((row, index) => (
                  <motion.tr
                    key={row.design}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`border-b border-henna-light/20 dark:border-henna-dark/20 hover:bg-henna-light/20 dark:hover:bg-henna-dark/20 transition-colors duration-300 ${
                      index % 2 === 0 ? 'bg-sand/20 dark:bg-dark-bg/20' : ''
                    }`}
                  >
                    <td className="font-playfair text-lg font-semibold p-4 text-charcoal dark:text-dark-text">
                      {row.design}
                    </td>
                    <td className="font-inter text-base p-4 text-center text-charcoal/80 dark:text-dark-text/80">
                      {row.palm} SEK
                    </td>
                    <td className="font-inter text-base p-4 text-center text-charcoal/80 dark:text-dark-text/80">
                      {row.wrist} SEK
                    </td>
                    <td className="font-inter text-base p-4 text-center text-charcoal/80 dark:text-dark-text/80">
                      {row.bangle} SEK
                    </td>
                    <td className="font-inter text-base p-4 text-center text-charcoal/80 dark:text-dark-text/80">
                      {row.halfHand} SEK
                    </td>
                    <td className="font-inter text-base p-4 text-center text-charcoal/80 dark:text-dark-text/80">
                      {row.threeQuarter} SEK
                    </td>
                    <td className="font-inter text-base p-4 text-center text-charcoal/80 dark:text-dark-text/80">
                      {row.elbow} SEK
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tablet View - Horizontal Scroll */}
          <div className="hidden md:block lg:hidden">
            <div className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-henna-brown to-henna-gold text-white">
                      <th className="font-playfair text-base p-3 text-left sticky left-0 bg-gradient-to-r from-henna-brown to-henna-gold">
                        {t('pricing.matrix.designType')}
                      </th>
                      <th className="font-inter text-sm p-3 text-center">
                        {t('pricing.matrix.palm')}
                      </th>
                      <th className="font-inter text-sm p-3 text-center">
                        {t('pricing.matrix.wrist')}
                      </th>
                      <th className="font-inter text-sm p-3 text-center">
                        {t('pricing.matrix.bangle')}
                      </th>
                      <th className="font-inter text-sm p-3 text-center">
                        {t('pricing.matrix.halfHand')}
                      </th>
                      <th className="font-inter text-sm p-3 text-center">
                        {t('pricing.matrix.threeQuarter')}
                      </th>
                      <th className="font-inter text-sm p-3 text-center">
                        {t('pricing.matrix.elbow')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingMatrix.map((row, index) => (
                      <motion.tr
                        key={row.design}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`border-b border-henna-light/20 dark:border-henna-dark/20 hover:bg-henna-light/20 dark:hover:bg-henna-dark/20 transition-colors duration-300 ${
                          index % 2 === 0 ? 'bg-sand/20 dark:bg-dark-bg/20' : ''
                        }`}
                      >
                        <td className="font-playfair text-base font-semibold p-3 text-charcoal dark:text-dark-text sticky left-0 bg-inherit">
                          {row.design}
                        </td>
                        <td className="font-inter text-sm p-3 text-center text-charcoal/80 dark:text-dark-text/80">
                          {row.palm} SEK
                        </td>
                        <td className="font-inter text-sm p-3 text-center text-charcoal/80 dark:text-dark-text/80">
                          {row.wrist} SEK
                        </td>
                        <td className="font-inter text-sm p-3 text-center text-charcoal/80 dark:text-dark-text/80">
                          {row.bangle} SEK
                        </td>
                        <td className="font-inter text-sm p-3 text-center text-charcoal/80 dark:text-dark-text/80">
                          {row.halfHand} SEK
                        </td>
                        <td className="font-inter text-sm p-3 text-center text-charcoal/80 dark:text-dark-text/80">
                          {row.threeQuarter} SEK
                        </td>
                        <td className="font-inter text-sm p-3 text-center text-charcoal/80 dark:text-dark-text/80">
                          {row.elbow} SEK
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-center text-xs text-charcoal/60 dark:text-dark-text/60 mt-3">
                ← {t('pricing.scrollHint')} →
              </p>
            </div>
          </div>

          {/* Mobile Cards - Simplified */}
          <div className="md:hidden space-y-6">
            {pricingMatrix.map((row, index) => (
              <motion.div
                key={row.design}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm rounded-xl p-5 border border-henna-light/30 dark:border-henna-dark/30 shadow-lg"
              >
                <div className="text-center mb-4">
                  <h4 className="font-playfair text-xl font-bold text-charcoal dark:text-dark-text mb-2">
                    {row.design}
                  </h4>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-henna-brown to-henna-gold mx-auto"></div>
                </div>
                
                {/* Simplified 3-column grid for better mobile readability */}
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-gradient-to-br from-henna-light/20 to-henna-gold/10 rounded-lg border border-henna-light/20">
                      <p className="font-inter text-xs text-charcoal/70 dark:text-dark-text/70 mb-1 font-medium">
                        {t('pricing.matrix.palm')}
                      </p>
                      <p className="font-playfair text-lg font-bold text-henna-brown dark:text-henna-gold">
                        {row.palm} SEK
                      </p>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-henna-light/20 to-henna-gold/10 rounded-lg border border-henna-light/20">
                      <p className="font-inter text-xs text-charcoal/70 dark:text-dark-text/70 mb-1 font-medium">
                        {t('pricing.matrix.wrist')}
                      </p>
                      <p className="font-playfair text-lg font-bold text-henna-brown dark:text-henna-gold">
                        {row.wrist} SEK
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-gradient-to-br from-henna-light/20 to-henna-gold/10 rounded-lg border border-henna-light/20">
                      <p className="font-inter text-xs text-charcoal/70 dark:text-dark-text/70 mb-1 font-medium">
                        {t('pricing.matrix.bangle')}
                      </p>
                      <p className="font-playfair text-lg font-bold text-henna-brown dark:text-henna-gold">
                        {row.bangle} SEK
                      </p>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-henna-light/20 to-henna-gold/10 rounded-lg border border-henna-light/20">
                      <p className="font-inter text-xs text-charcoal/70 dark:text-dark-text/70 mb-1 font-medium">
                        {t('pricing.matrix.halfHand')}
                      </p>
                      <p className="font-playfair text-lg font-bold text-henna-brown dark:text-henna-gold">
                        {row.halfHand} SEK
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-gradient-to-br from-henna-light/20 to-henna-gold/10 rounded-lg border border-henna-light/20">
                      <p className="font-inter text-xs text-charcoal/70 dark:text-dark-text/70 mb-1 font-medium">
                        {t('pricing.matrix.threeQuarter')}
                      </p>
                      <p className="font-playfair text-lg font-bold text-henna-brown dark:text-henna-gold">
                        {row.threeQuarter} SEK
                      </p>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-henna-light/20 to-henna-gold/10 rounded-lg border border-henna-light/20">
                      <p className="font-inter text-xs text-charcoal/70 dark:text-dark-text/70 mb-1 font-medium">
                        {t('pricing.matrix.elbow')}
                      </p>
                      <p className="font-playfair text-lg font-bold text-henna-brown dark:text-henna-gold">
                        {row.elbow} SEK
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hand Lengths Reference Image - Moved below table */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm rounded-2xl p-6 border border-henna-light/30 dark:border-henna-dark/30 shadow-lg max-w-2xl mx-auto">
              <div className="relative">
                <img 
                  src="/assets/about/handlengths.png" 
                  alt={t('pricing.lengthGuide.alt')}
                  className="w-full max-w-md mx-auto rounded-lg shadow-md"
                />
              </div>
              <p className="font-inter text-xs text-charcoal/60 dark:text-dark-text/60 mt-4 italic">
                {t('pricing.lengthGuide.note')}
              </p>
            </div>
          </motion.div>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 bg-white/60 dark:bg-dark-surface/60 backdrop-blur-sm rounded-xl p-6 border border-henna-light/30 dark:border-henna-dark/30"
          >
            <h4 className="font-playfair text-xl font-semibold text-charcoal dark:text-dark-text mb-4 text-center">
              {t('pricing.notes.title')}
            </h4>
            <div className="grid md:grid-cols-2 gap-4 font-inter text-sm text-charcoal/70 dark:text-dark-text/70">
              <p>✨ {t('pricing.notes.point1')}</p>
              <p>🎨 {t('pricing.notes.point2')}</p>
              <p>⏱️ {t('pricing.notes.point3')}</p>
              <p>👐 {t('pricing.notes.point4')}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Book Now CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://wa.me/918420153353?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20henna%20appointment.%20Could%20you%20please%20provide%20more%20information%20about%20pricing%20and%20availability%3F"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-henna-brown to-henna-gold text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
            {t('pricing.bookNow')}
          </motion.a>
          <p className="font-inter text-sm text-charcoal/60 dark:text-dark-text/60 mt-4">
            {t('pricing.bookNowDesc')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};


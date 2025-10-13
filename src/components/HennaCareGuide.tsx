import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Droplet, Sun, Moon, ChevronDown } from 'lucide-react';

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const steps: Step[] = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'First 24 Hours',
    description: 'The foundation for a deep, rich stain',
    details: [
      'Keep the paste on for at least 6-8 hours (overnight is ideal)',
      'Gently scrape off the dried paste—never wash with water',
      'Apply a mixture of lemon juice and sugar to seal the design',
      'Avoid water contact for the first 24 hours',
    ],
  },
  {
    icon: <Droplet className="w-6 h-6" />,
    title: 'Color Development',
    description: 'Watch your henna darken beautifully',
    details: [
      'Initial color will be light orange',
      'Over 48-72 hours, it will deepen to rich mahogany',
      'Avoid excessive sweating during this period',
      'The palm develops the darkest stain',
    ],
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: 'Care & Maintenance',
    description: 'Preserve your art for 2-3 weeks',
    details: [
      'Minimize water exposure on the design',
      'Apply natural oils (coconut, olive) to protect the stain',
      'Avoid chlorinated water and harsh soaps',
      'Exfoliation will fade the design faster',
    ],
  },
  {
    icon: <Moon className="w-6 h-6" />,
    title: 'Longevity Tips',
    description: 'Make your henna last longer',
    details: [
      'Wear gloves when doing dishes or cleaning',
      'Apply oil before bathing to create a protective barrier',
      'Avoid scrubbing the area',
      'Natural fading is part of the beauty',
    ],
  },
];

const faqs = [
  {
    question: 'How long does henna last?',
    answer: 'Typically 2-3 weeks, depending on care and body placement. Hands and feet stain darkest and last longest.',
  },
  {
    question: 'Is your henna 100% natural?',
    answer: 'Yes. I use only pure, natural henna powder with essential oils. No chemicals, no PPD, completely safe for skin.',
  },
  {
    question: 'Can I shower after getting henna?',
    answer: 'Wait at least 24 hours before the first shower. After that, minimize water exposure and apply oil beforehand.',
  },
  {
    question: 'Why is my henna orange at first?',
    answer: 'This is completely normal. Henna oxidizes over 48-72 hours, deepening from orange to brown to rich mahogany.',
  },
];

export const HennaCareGuide = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-semibold text-charcoal mb-4">
            Henna Care Guide
          </h2>
          <p className="font-inter text-lg text-charcoal/70 max-w-2xl mx-auto">
            Proper aftercare ensures your henna develops beautifully and lasts longer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-ivory rounded-lg p-8 border border-henna-light/30 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-henna-brown text-white p-3 rounded-lg">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-1">
                    {step.title}
                  </h3>
                  <p className="font-inter text-sm text-henna-brown">
                    {step.description}
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mt-6">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 font-inter text-sm text-charcoal/80">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-henna-gold flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="font-playfair text-3xl font-semibold text-charcoal mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-ivory rounded-lg border border-henna-light/30 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-sand/30 transition-colors"
                >
                  <span className="font-inter font-medium text-charcoal pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-henna-brown flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 font-inter text-charcoal/70">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-henna-light/30 to-sage/30 rounded-lg p-8"
        >
          <p className="font-playfair text-xl italic text-henna-dark">
            "The beauty of henna lies not just in the design,
            <br />
            but in the ritual of caring for it."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

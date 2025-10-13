import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Droplet, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const HennaCareGuide = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const { t } = useTranslation();

  const steps = [
    {
      icon: <Clock className="w-6 h-6" />,
      titleKey: 'care.step1Title',
      descKey: 'care.step1Desc',
      detailKeys: ['care.step1Detail1', 'care.step1Detail2', 'care.step1Detail3', 'care.step1Detail4'],
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      titleKey: 'care.step2Title',
      descKey: 'care.step2Desc',
      detailKeys: ['care.step2Detail1', 'care.step2Detail2', 'care.step2Detail3', 'care.step2Detail4'],
    },
    {
      icon: <Sun className="w-6 h-6" />,
      titleKey: 'care.step3Title',
      descKey: 'care.step3Desc',
      detailKeys: ['care.step3Detail1', 'care.step3Detail2', 'care.step3Detail3', 'care.step3Detail4'],
    },
    {
      icon: <Moon className="w-6 h-6" />,
      titleKey: 'care.step4Title',
      descKey: 'care.step4Desc',
      detailKeys: ['care.step4Detail1', 'care.step4Detail2', 'care.step4Detail3', 'care.step4Detail4'],
    },
  ];

  const faqs = [
    {
      questionKey: 'care.faq1Question',
      answerKey: 'care.faq1Answer',
    },
    {
      questionKey: 'care.faq2Question',
      answerKey: 'care.faq2Answer',
    },
    {
      questionKey: 'care.faq3Question',
      answerKey: 'care.faq3Answer',
    },
    {
      questionKey: 'care.faq4Question',
      answerKey: 'care.faq4Answer',
    },
  ];

  return (
    <section className="py-32 px-6 bg-white/50 dark:bg-dark-bg/50 backdrop-blur-sm transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-semibold text-charcoal dark:text-dark-text mb-4">
            {t('care.title')}
          </h2>
          <p className="font-inter text-lg text-charcoal/70 dark:text-dark-text/80 max-w-2xl mx-auto">
            {t('care.subtitle')}
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
              className="bg-white rounded-lg p-8 border border-henna-light/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-henna-brown text-white p-3 rounded-lg">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-1">
                    {t(step.titleKey)}
                  </h3>
                  <p className="font-inter text-sm text-henna-brown">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mt-6">
                {step.detailKeys.map((detailKey, i) => (
                  <li key={i} className="flex items-start gap-3 font-inter text-sm text-charcoal/80">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-henna-gold flex-shrink-0" />
                    {t(detailKey)}
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
          <h3 className="font-playfair text-3xl font-semibold text-charcoal dark:text-dark-text mb-8 text-center">
            {t('care.faqTitle')}
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg border border-henna-light/30 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-sand/30 transition-colors"
                >
                  <span className="font-inter font-medium text-charcoal pr-8">
                    {t(faq.questionKey)}
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
                        {t(faq.answerKey)}
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
          className="mt-16 text-center bg-gradient-to-r from-henna-light/30 to-sage/30 dark:from-henna-dark/20 dark:to-sage/10 rounded-lg p-8"
        >
          <p className="font-playfair text-xl italic text-henna-dark dark:text-henna-gold">
            {t('care.quote')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

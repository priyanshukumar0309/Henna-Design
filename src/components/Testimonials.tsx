import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';
import { Testimonial } from '../types';

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_published', true)
        .order('display_order', { ascending: true })
        .order('created_at', { ascending: false });

      if (error) throw error;

      // If Supabase returns no data, use local fallback testimonials
      if (!data || data.length === 0) {
        const fallbackTestimonials: Testimonial[] = [
          {
            id: '1',
            client_name: 'Priya Sharma',
            client_initial: 'P.S.',
            testimonial_text: 'Supriya\'s henna artistry is absolutely breathtaking! The Nordic-inspired designs she created for my wedding were elegant and unique. Every guest complimented my henna.',
            occasion: 'bridal',
            rating: 5,
            image_url: null,
            is_featured: true,
            display_order: 1,
            is_published: true,
            created_at: new Date().toISOString()
          },
          {
            id: '2',
            client_name: 'Emma Andersson',
            client_initial: 'E.A.',
            testimonial_text: 'As someone who loves minimalism, I was amazed by how Supriya blended traditional henna with Scandinavian aesthetics. The result was perfect for my festival celebration.',
            occasion: 'festival',
            rating: 5,
            image_url: null,
            is_featured: true,
            display_order: 2,
            is_published: true,
            created_at: new Date().toISOString()
          },
          {
            id: '3',
            client_name: 'Aisha Patel',
            client_initial: 'A.P.',
            testimonial_text: 'The attention to detail in Supriya\'s work is incredible. My photoshoot henna designs were not only beautiful but also told a story. Highly recommend her services!',
            occasion: 'photoshoot',
            rating: 5,
            image_url: null,
            is_featured: true,
            display_order: 3,
            is_published: true,
            created_at: new Date().toISOString()
          },
          {
            id: '4',
            client_name: 'Lisa Johansson',
            client_initial: 'L.J.',
            testimonial_text: 'Working with Supriya was a wonderful experience. Her fusion of Indian heritage with Nordic minimalism created something truly special for my private party.',
            occasion: 'private party',
            rating: 5,
            image_url: null,
            is_featured: true,
            display_order: 4,
            is_published: true,
            created_at: new Date().toISOString()
          }
        ];
        setTestimonials(fallbackTestimonials);
      } else {
        setTestimonials(data);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      // On error, also use fallback testimonials
      const fallbackTestimonials: Testimonial[] = [
        {
          id: '1',
          client_name: 'Priya Sharma',
          client_initial: 'P.S.',
          testimonial_text: 'Supriya\'s henna artistry is absolutely breathtaking! The Nordic-inspired designs she created for my wedding were elegant and unique. Every guest complimented my henna.',
          occasion: 'bridal',
          rating: 5,
          image_url: null,
          is_featured: true,
          display_order: 1,
          is_published: true,
          created_at: new Date().toISOString()
        },
        {
          id: '2',
          client_name: 'Emma Andersson',
          client_initial: 'E.A.',
          testimonial_text: 'As someone who loves minimalism, I was amazed by how Supriya blended traditional henna with Scandinavian aesthetics. The result was perfect for my festival celebration.',
          occasion: 'festival',
          rating: 5,
          image_url: null,
          is_featured: true,
          display_order: 2,
          is_published: true,
          created_at: new Date().toISOString()
        },
        {
          id: '3',
          client_name: 'Aisha Patel',
          client_initial: 'A.P.',
          testimonial_text: 'The attention to detail in Supriya\'s work is incredible. My photoshoot henna designs were not only beautiful but also told a story. Highly recommend her services!',
          occasion: 'photoshoot',
          rating: 5,
          image_url: null,
          is_featured: true,
          display_order: 3,
          is_published: true,
          created_at: new Date().toISOString()
        },
        {
          id: '4',
          client_name: 'Lisa Johansson',
          client_initial: 'L.J.',
          testimonial_text: 'Working with Supriya was a wonderful experience. Her fusion of Indian heritage with Nordic minimalism created something truly special for my private party.',
          occasion: 'private party',
          rating: 5,
          image_url: null,
          is_featured: true,
          display_order: 4,
          is_published: true,
          created_at: new Date().toISOString()
        }
      ];
      setTestimonials(fallbackTestimonials);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-henna-gold text-henna-gold' : 'text-henna-light'
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-sand animate-pulse rounded-lg h-64" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-ivory dark:bg-dark-bg transition-colors duration-500">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-henna-light/10 dark:bg-henna-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-sage/10 dark:bg-sage/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-semibold text-charcoal dark:text-dark-text mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="font-inter text-lg text-charcoal/70 dark:text-dark-text/80 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-henna-light/30 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <Quote className="w-10 h-10 text-henna-light mb-4" />

              <p className="font-inter text-charcoal/80 leading-relaxed mb-6 flex-grow">
                {testimonial.testimonial_text}
              </p>

              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-henna-light/30">
                {testimonial.image_url ? (
                  <img
                    src={testimonial.image_url}
                    alt={testimonial.client_name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-henna-light to-henna-gold flex items-center justify-center">
                    <span className="font-playfair text-white text-lg">
                      {testimonial.client_initial || testimonial.client_name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-inter font-medium text-charcoal">
                    {testimonial.client_name}
                  </p>
                  <p className="font-inter text-sm text-charcoal/60 capitalize">
                    {testimonial.occasion}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="font-playfair text-2xl italic text-henna-dark dark:text-henna-gold">
            {t('testimonials.tagline')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';
import { PortfolioImage, Category } from '../types';

export const Gallery = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [images, setImages] = useState<PortfolioImage[]>([]);
  const [filteredImages, setFilteredImages] = useState<PortfolioImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const categories: { value: Category; labelKey: string }[] = [
    { value: 'all', labelKey: 'gallery.allWork' },
    { value: 'bridal', labelKey: 'gallery.nordicBridal' },
    { value: 'minimalist', labelKey: 'gallery.minimalist' },
    { value: 'festival', labelKey: 'gallery.festival' },
    { value: 'fusion', labelKey: 'gallery.fusionArt' },
    { value: 'photoshoot', labelKey: 'gallery.photoshoot' },
  ];

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory, images]);

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_images')
        .select('*')
        .order('display_order', { ascending: true })
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // If Supabase returns no data, use local fallback images
      if (!data || data.length === 0) {
        const fallbackImages: PortfolioImage[] = [
          {
            id: '1',
            title: 'Nordic Bridal Henna Design',
            description: 'Elegant minimalist bridal henna with Scandinavian influences',
            image_url: '../public/assets/gallery/henna-bridal-001.jpg',
            thumbnail_url: '../public/assets/gallery/thumbnails/henna-bridal-001.jpg',
            category: 'bridal',
            tags: ['bridal', 'minimalist', 'nordic'],
            featured: true,
            display_order: 1,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '2',
            title: 'Contemporary Festival Design',
            description: 'Modern henna art for celebrations and festivals',
            image_url: '../public/assets/gallery/henna-festival-001.jpg',
            thumbnail_url: '../public/assets/gallery/thumbnails/henna-festival-001.jpg',
            category: 'festival',
            tags: ['festival', 'modern', 'celebration'],
            featured: true,
            display_order: 2,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '3',
            title: 'Minimalist Fusion Art',
            description: 'Clean lines meeting traditional motifs',
            image_url: '../public/assets/gallery/henna-minimalist-001.jpg',
            thumbnail_url: '../public/assets/gallery/thumbnails/henna-minimalist-001.jpg',
            category: 'minimalist',
            tags: ['minimalist', 'fusion', 'contemporary'],
            featured: true,
            display_order: 3,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '4',
            title: 'Photoshoot Ready Design',
            description: 'Fashion-forward henna perfect for editorial shoots',
            image_url: '../public/assets/gallery/henna-photoshoot-001.jpg',
            thumbnail_url: '../public/assets/gallery/thumbnails/henna-photoshoot-001.jpg',
            category: 'photoshoot',
            tags: ['photoshoot', 'fashion', 'editorial'],
            featured: true,
            display_order: 4,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ];
        setImages(fallbackImages);
      } else {
        setImages(data);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
      // On error, also use fallback images
      const fallbackImages: PortfolioImage[] = [
        {
          id: '1',
          title: 'Nordic Bridal Henna Design',
          description: 'Elegant minimalist bridal henna with Scandinavian influences',
          image_url: '../public/assets/gallery/henna-bridal-001.jpg',
          thumbnail_url: '../public/assets/gallery/thumbnails/henna-bridal-001.jpg',
          category: 'bridal',
          tags: ['bridal', 'minimalist', 'nordic'],
          featured: true,
          display_order: 1,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: '2',
          title: 'Contemporary Festival Design',
          description: 'Modern henna art for celebrations and festivals',
          image_url: '../public/assets/gallery/henna-festival-001.jpg',
          thumbnail_url: '../public/assets/gallery/thumbnails/henna-festival-001.jpg',
          category: 'festival',
          tags: ['festival', 'modern', 'celebration'],
          featured: true,
          display_order: 2,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: '3',
          title: 'Minimalist Fusion Art',
          description: 'Clean lines meeting traditional motifs',
          image_url: '../public/assets/gallery/henna-minimalist-001.jpg',
          thumbnail_url: '../public/assets/gallery/thumbnails/henna-minimalist-001.jpg',
          category: 'minimalist',
          tags: ['minimalist', 'fusion', 'contemporary'],
          featured: true,
          display_order: 3,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: '4',
          title: 'Photoshoot Ready Design',
          description: 'Fashion-forward henna perfect for editorial shoots',
          image_url: '../public/assets/gallery/henna-photoshoot-001.jpg',
          thumbnail_url: '../public/assets/gallery/thumbnails/henna-photoshoot-001.jpg',
          category: 'photoshoot',
          tags: ['photoshoot', 'fashion', 'editorial'],
          featured: true,
          display_order: 4,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ];
      setImages(fallbackImages);
    } finally {
      setLoading(false);
    }
  };

  const openLightbox = (image: PortfolioImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-semibold text-charcoal dark:text-dark-text mb-4">
            {t('gallery.title')}
          </h2>
          <p className="font-inter text-lg text-charcoal/70 dark:text-dark-text/80 max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-3 rounded-full font-inter text-sm transition-all duration-300 ${
                selectedCategory === category.value
                  ? 'bg-henna-brown text-white shadow-lg'
                  : 'bg-white text-charcoal hover:bg-sand border border-henna-light'
              }`}
            >
              {t(category.labelKey)}
            </button>
          ))}
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-sand animate-pulse rounded-lg" />
            ))}
          </div>
        ) : filteredImages.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-inter text-lg text-charcoal/50 dark:text-dark-text/50">
              {t('gallery.noImages')}
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-sand"
                  onClick={() => openLightbox(image, index)}
                >
                  <img
                    src={image.image_url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-playfair text-xl text-white mb-2">{image.title}</h3>
                      {image.description && (
                        <p className="font-inter text-sm text-white/80 line-clamp-2">
                          {image.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white rounded-full" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-henna-gold transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-6 text-white hover:text-henna-gold transition-colors z-10"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-6 text-white hover:text-henna-gold transition-colors z-10"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-6xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image_url}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-6 text-center">
                <h3 className="font-playfair text-2xl text-white mb-2">
                  {selectedImage.title}
                </h3>
                {selectedImage.description && (
                  <p className="font-inter text-white/70">{selectedImage.description}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

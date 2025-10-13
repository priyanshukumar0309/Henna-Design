import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';
import { PortfolioImage, Category } from '../types';

export const Gallery = () => {
  const { t, i18n } = useTranslation();
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
    { value: 'stain_progression', labelKey: 'gallery.stainProgression' },
  ];

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory, images]);

  const fetchImages = async () => {
    try {
        const fallbackImages: PortfolioImage[] = [
          {
            id: '1',
            title: 'Nordic Bridal Henna Design',
            description: 'Elegant minimalist bridal henna with Scandinavian influences',
            descriptionKey: 'gallery.image1description',
            image_url: './assets/gallery/henna-bridal-001.jpg',
            thumbnail_url: './assets/gallery/thumbnails/henna-bridal-001.jpg',
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
            description: t('gallery.image2description'),
            image_url: '/assets/gallery/henna-festival-001.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/henna-festival-001.jpg',
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
            description: t('gallery.image3description'),
            image_url: '/assets/gallery/henna-minimalist-001.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/henna-minimalist-001.jpg',
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
            description: t('gallery.image4description'),
            image_url: '/assets/gallery/henna-photoshoot-001.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/henna-photoshoot-001.jpg',
            category: 'photoshoot',
            tags: ['photoshoot', 'fashion', 'editorial'],
            featured: true,
            display_order: 4,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '5',
            title: 'Intricate Half-Mandala Design',
            description: t('gallery.image5description'),
            image_url: '/assets/gallery/PHOTO-2025-07-16-11-59-37.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/PHOTO-2025-07-16-11-59-37.jpg',
            category: 'minimalist',
            tags: ['mandala', 'geometric', 'detailed', 'forearm'],
            featured: true,
            display_order: 5,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '6',
            title: 'Majestic Peacock & Lotus Design',
            description: t('gallery.image6description'),
            image_url: '/assets/gallery/WhatsApp Image 2025-10-13 at 18.50.48.jpeg',
            thumbnail_url: '/assets/gallery/thumbnails/WhatsApp Image 2025-10-13 at 18.50.48.jpeg',
            category: 'bridal',
            tags: ['peacock', 'lotus', 'bridal', 'traditional', 'detailed'],
            featured: true,
            display_order: 6,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '7',
            title: 'Intricate Hand Mandala Design',
            description: t('gallery.image7description'),
            image_url: '/assets/gallery/WhatsApp Image 2025-10-13 at 18.50.49.jpeg',
            thumbnail_url: '/assets/gallery/thumbnails/WhatsApp Image 2025-10-13 at 18.50.49.jpeg',
            category: 'minimalist',
            tags: ['mandala', 'hand', 'palm', 'traditional', 'intricate'],
            featured: true,
            display_order: 7,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '8',
            title: 'Full Arm Design - Darkest Stain Stage',
            description: t('gallery.image8description'),
            image_url: '/assets/gallery/WhatsApp Image 2025-10-13 at 18.50.50 (1).jpeg',
            thumbnail_url: '/assets/gallery/thumbnails/WhatsApp Image 2025-10-13 at 18.50.50 (1).jpeg',
            category: 'stain_progression',
            tags: ['stain-progression', 'darkest', 'peacock', 'elephant', 'personalized', 'full-arm'],
            featured: true,
            display_order: 1,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '9',
            title: 'Festival Hand Design Collection',
            description: t('gallery.image9description'),
            image_url: '/assets/gallery/WhatsApp Image 2025-10-13 at 18.50.54.jpeg',
            thumbnail_url: '/assets/gallery/thumbnails/WhatsApp Image 2025-10-13 at 18.50.54.jpeg',
            category: 'festival',
            tags: ['festival', 'hands', 'mandala', 'symmetrical', 'traditional'],
            featured: true,
            display_order: 9,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '10',
            title: 'Elegant Arm Mandala Design',
            description: t('gallery.image10description'),
            image_url: '/assets/gallery/photo_6087126964323338495_y.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/photo_6087126964323338495_y.jpg',
            category: 'bridal',
            tags: ['mandala', 'arm', 'geometric', 'elegant', 'detailed', 'bridal'],
            featured: true,
            display_order: 10,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '11',
            title: 'Traditional Hand Henna Art',
            description: t('gallery.image11description'),
            image_url: '/assets/gallery/photo_6087126964323338496_y.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/photo_6087126964323338496_y.jpg',
            category: 'festival',
            tags: ['traditional', 'palm', 'hand', 'classic', 'detailed'],
            featured: true,
            display_order: 11,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '12',
            title: 'Contemporary Wrist Design',
            description: t('gallery.image12description'),
            image_url: '/assets/gallery/photo_6087126964323338509_y.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/photo_6087126964323338509_y.jpg',
            category: 'fusion',
            tags: ['minimalist', 'wrist', 'contemporary', 'modern', 'elegant', 'fusion'],
            featured: true,
            display_order: 12,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '13',
            title: 'Artistic Forearm Henna',
            description: t('gallery.image13description'),
            image_url: '/assets/gallery/photo_6089378764137022110_y (1).jpg',
            thumbnail_url: '/assets/gallery/thumbnails/photo_6089378764137022110_y (1).jpg',
            category: 'photoshoot',
            tags: ['artistic', 'forearm', 'creative', 'flowing', 'expression'],
            featured: true,
            display_order: 13,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '14',
            title: 'Dark Hand Design with Ring',
            description: t('gallery.image14description'),
            image_url: '/assets/gallery/photo_6087126964323338505_y.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/photo_6087126964323338505_y.jpg',
            category: 'stain_progression',
            tags: ['stain-progression', 'dark', 'hand', 'ring', 'traditional'],
            featured: true,
            display_order: 2,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '15',
            title: 'Traditional Palm Mandala',
            description: t('gallery.image15description'),
            image_url: '/assets/gallery/PHOTO-2025-07-19-19-21-15.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/PHOTO-2025-07-19-19-21-15.jpg',
            category: 'festival',
            tags: ['traditional', 'palm', 'mandala', 'classic', 'intricate'],
            featured: true,
            display_order: 15,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '16',
            title: 'Nordic-Inspired Hand Design',
            description: t('gallery.image16description'),
            image_url: '/assets/gallery/PHOTO-2025-09-19-19-34-54.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/PHOTO-2025-09-19-19-34-54.jpg',
            category: 'minimalist',
            tags: ['nordic', 'minimalist', 'modern', 'fusion', 'clean'],
            featured: true,
            display_order: 16,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '17',
            title: 'Medium-Dark Arm Design',
            description: t('gallery.image17description'),
            image_url: '/assets/gallery/WhatsApp Image 2025-10-13 at 18.50.35.jpeg',
            thumbnail_url: '/assets/gallery/thumbnails/WhatsApp Image 2025-10-13 at 18.50.35.jpeg',
            category: 'stain_progression',
            tags: ['stain-progression', 'medium-dark', 'peacock', 'traditional', 'arm-design'],
            featured: true,
            display_order: 4,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '18',
            title: 'Light-Medium Hand Patterns',
            description: t('gallery.image18description'),
            image_url: '/assets/gallery/WhatsApp Image 2025-10-13 at 18.50.36 (2).jpeg',
            thumbnail_url: '/assets/gallery/thumbnails/WhatsApp Image 2025-10-13 at 18.50.36 (2).jpeg',
            category: 'stain_progression',
            tags: ['stain-progression', 'light-medium', 'traditional', 'hand-patterns'],
            featured: true,
            display_order: 7,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '19',
            title: 'Medium Wrist Art',
            description: t('gallery.image19description'),
            image_url: '/assets/gallery/WhatsApp Image 2025-10-13 at 18.50.36 (1).jpeg',
            thumbnail_url: '/assets/gallery/thumbnails/WhatsApp Image 2025-10-13 at 18.50.36 (1).jpeg',
            category: 'stain_progression',
            tags: ['stain-progression', 'medium', 'vibrant', 'traditional', 'detailed'],
            featured: true,
            display_order: 6,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '20',
            title: 'Medium Hand Art',
            description: t('gallery.image20description'),
            image_url: '/assets/gallery/WhatsApp Image 2025-10-13 at 18.50.36.jpeg',
            thumbnail_url: '/assets/gallery/thumbnails/WhatsApp Image 2025-10-13 at 18.50.36.jpeg',
            category: 'stain_progression',
            tags: ['stain-progression', 'medium', 'traditional', 'indian', 'mehndi'],
            featured: true,
            display_order: 5,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '21',
            title: 'Intricate Palm Design',
            description: t('gallery.image21description'),
            image_url: '/assets/gallery/WhatsApp Image 2025-10-13 at 18.50.49 (2).jpeg',
            thumbnail_url: '/assets/gallery/thumbnails/WhatsApp Image 2025-10-13 at 18.50.49 (2).jpeg',
            category: 'bridal',
            tags: ['intricate', 'palm', 'geometric', 'floral', 'detailed'],
            featured: true,
            display_order: 21,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '22',
            title: 'Lightest Stain Stage',
            description: t('gallery.image22description'),
            image_url: '/assets/gallery/WhatsApp Image 2025-10-13 at 18.50.56 (2).jpeg',
            thumbnail_url: '/assets/gallery/thumbnails/WhatsApp Image 2025-10-13 at 18.50.56 (2).jpeg',
            category: 'stain_progression',
            tags: ['stain-progression', 'lightest', 'forearm', 'early-stage', 'fading'],
            featured: true,
            display_order: 8,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '23',
            title: 'Dark Hand Design - Stage 3',
            description: t('gallery.image23description'),
            image_url: '/assets/gallery/WhatsApp Image 2025-10-13 at 18.51.00 (1).jpeg',
            thumbnail_url: '/assets/gallery/thumbnails/WhatsApp Image 2025-10-13 at 18.51.00 (1).jpeg',
            category: 'stain_progression',
            tags: ['stain-progression', 'dark', 'hand', 'traditional', 'dense-patterns'],
            featured: true,
            display_order: 3,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
        ];
        setImages(fallbackImages);
    } catch (error) {
      console.error('Error fetching images:', error);
      // On error, also use fallback images
      const fallbackImages: PortfolioImage[] = [
        {
          id: '1',
          title: 'Nordic Bridal Henna Design',
          description: t('gallery.image1description'),
          image_url: '/assets/gallery/henna-bridal-001.jpg',
          thumbnail_url: '/assets/gallery/thumbnails/henna-bridal-001.jpg',
          category: 'bridal',
          tags: ['bridal', 'minimalist', 'nordic'],
          featured: true,
          display_order: 1,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        
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
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center" title={t('gallery.viewImage')}>
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
              title={t('gallery.closeImage')}
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-6 text-white hover:text-henna-gold transition-colors z-10"
              title={t('gallery.previousImage')}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-6 text-white hover:text-henna-gold transition-colors z-10"
              title={t('gallery.nextImage')}
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

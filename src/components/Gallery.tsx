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
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [lightboxImageLoaded, setLightboxImageLoaded] = useState(false);

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
      // Sort by ID descending (newest to oldest)
      const sortedImages = [...images].sort((a, b) => {
        const idA = parseInt(a.id);
        const idB = parseInt(b.id);
        return idB - idA;
      });
      setFilteredImages(sortedImages);
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
            image_url: '/assets/gallery/nordic-bridal-henna.jpg',
            thumbnail_url: null,
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
            image_url: '/assets/gallery/contemporary-festival-design.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/contemporary-festival-design.jpg',
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
            image_url: '/assets/gallery/minimalist-fusion-art.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/minimalist-fusion-art.jpg',
            category: 'minimalist',
            tags: ['minimalist', 'fusion', 'contemporary'],
            featured: true,
            display_order: 3,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '4',
            title: 'Dark Hand Design - Stage 3',
            description: t('gallery.image23description'),
            image_url: '/assets/gallery/dark-hand-stage3.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/dark-hand-stage3.jpg',
            category: 'stain_progression',
            tags: ['stain-progression', 'dark', 'hand', 'traditional', 'dense-patterns'],
            featured: true,
            display_order: 4,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '5',
            title: 'Intricate Half-Mandala Design',
            description: t('gallery.image5description'),
            image_url: '/assets/gallery/intricate-half-mandala.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/intricate-half-mandala.jpg',
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
            image_url: '/assets/gallery/peacock-lotus-bridal.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/peacock-lotus-bridal.jpg',
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
            image_url: '/assets/gallery/intricate-hand-mandala.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/intricate-hand-mandala.jpg',
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
            image_url: '/assets/gallery/full-arm-darkest-stain.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/full-arm-darkest-stain.jpg',
            category: 'stain_progression',
            tags: ['stain-progression', 'darkest', 'peacock', 'elephant', 'personalized', 'full-arm'],
            featured: true,
            display_order: 3,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '9',
            title: 'Festival Hand Design Collection',
            description: t('gallery.image9description'),
            image_url: '/assets/gallery/festival-hand-collection.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/festival-hand-collection.jpg',
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
            image_url: '/assets/gallery/elegant-arm-mandala.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/elegant-arm-mandala.jpg',
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
            image_url: '/assets/gallery/traditional-hand-art.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/traditional-hand-art.jpg',
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
            image_url: '/assets/gallery/contemporary-wrist-design.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/contemporary-wrist-design.jpg',
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
            image_url: '/assets/gallery/artistic-forearm-henna.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/artistic-forearm-henna.jpg',
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
            image_url: '/assets/gallery/dark-hand-with-ring.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/dark-hand-with-ring.jpg',
            category: 'stain_progression',
            tags: ['stain-progression', 'dark', 'hand', 'ring', 'traditional'],
            featured: true,
            display_order: 4,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '15',
            title: 'Traditional Palm Mandala',
            description: t('gallery.image15description'),
            image_url: '/assets/gallery/traditional-palm-mandala.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/traditional-palm-mandala.jpg',
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
            image_url: '/assets/gallery/nordic-inspired-hand.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/nordic-inspired-hand.jpg',
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
            image_url: '/assets/gallery/medium-dark-arm-peacock.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/medium-dark-arm-peacock.jpg',
            category: 'stain_progression',
            tags: ['stain-progression', 'medium-dark', 'peacock', 'traditional', 'arm-design'],
            featured: true,
            display_order: 6,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '18',
            title: 'Light-Medium Hand Patterns',
            description: t('gallery.image18description'),
            image_url: '/assets/gallery/light-medium-hand-patterns.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/light-medium-hand-patterns.jpg',
            category: 'stain_progression',
            tags: ['stain-progression', 'light-medium', 'traditional', 'hand-patterns'],
            featured: true,
            display_order: 2,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '19',
            title: 'Medium Wrist Art',
            description: t('gallery.image19description'),
            image_url: '/assets/gallery/medium-wrist-art.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/medium-wrist-art.jpg',
            category: 'stain_progression',
            tags: ['stain-progression', 'medium', 'vibrant', 'traditional', 'detailed'],
            featured: true,
            display_order: 8,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '20',
            title: 'Medium Hand Art',
            description: t('gallery.image20description'),
            image_url: '/assets/gallery/medium-hand-art.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/medium-hand-art.jpg',
            category: 'stain_progression',
            tags: ['stain-progression', 'medium', 'traditional', 'indian', 'mehndi'],
            featured: true,
            display_order: 7,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '21',
            title: 'Intricate Palm Design',
            description: t('gallery.image21description'),
            image_url: '/assets/gallery/intricate-palm-design.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/intricate-palm-design.jpg',
            category: 'bridal',
            tags: ['intricate', 'palm', 'geometric', 'floral', 'detailed'],
            featured: true,
            display_order: 21,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '22',
            title: 'Deepest Stain Stage',
            description: t('gallery.image22description'),
            image_url: '/assets/gallery/lightest-stain-stage.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/lightest-stain-stage.jpg',
            category: 'stain_progression',
            tags: ['stain-progression', 'deepest', 'forearm', 'dark-stage', 'intense'],
            featured: true,
            display_order: 1,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '23',
            title: 'Traditional Diamond Hand Design',
            description: 'Intricate traditional henna featuring geometric diamond patterns and floral motifs on the back of hand',
            descriptionKey: 'gallery.image23description',
            image_url: '/assets/gallery/traditional-diamond-hand-design.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/traditional-diamond-hand-design.jpg',
            category: 'festival',
            tags: ['traditional', 'hand', 'intricate', 'dense-patterns', 'diamond-design', 'geometric', 'floral'],
            featured: true,
            display_order: 23,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '24',
            title: 'Elaborate Forearm Mandala Bridal Design',
            description: 'Intricate bridal henna featuring elaborate mandala patterns, floral motifs, and dense traditional designs extending from wrist to elbow',
            descriptionKey: 'gallery.image24description',
            image_url: '/assets/gallery/elaborate-forearm-mandala-bridal.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/elaborate-forearm-mandala-bridal.jpg',
            category: 'bridal',
            tags: ['traditional', 'forearm', 'mandala', 'floral', 'intricate', 'dense-patterns', 'bridal', 'elaborate'],
            featured: true,
            display_order: 24,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '25',
            title: 'Complex Forearm Floral Bridal Design',
            description: 'Sophisticated bridal henna with complex layered patterns, multiple floral motifs, and intricate geometric elements covering the forearm',
            descriptionKey: 'gallery.image25description',
            image_url: '/assets/gallery/complex-forearm-floral-bridal.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/complex-forearm-floral-bridal.jpg',
            category: 'bridal',
            tags: ['traditional', 'forearm', 'intricate', 'floral', 'geometric', 'dense-patterns', 'bridal', 'complex'],
            featured: true,
            display_order: 25,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
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
          image_url: '/assets/gallery/nordic-bridal-henna.jpg',
          thumbnail_url: '/assets/gallery/thumbnails/nordic-bridal-henna.jpg',
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
    setLightboxImageLoaded(false); // Reset load state for new image
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setLightboxImageLoaded(false);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
    setLightboxImageLoaded(false); // Reset for next image
  };

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
    setLightboxImageLoaded(false); // Reset for previous image
  };

  const nextCategory = () => {
    const newIndex = Math.min(carouselIndex + 1, categories.length - 1);
    setCarouselIndex(newIndex);
    setSelectedCategory(categories[newIndex].value);
  };

  const prevCategory = () => {
    const newIndex = Math.max(carouselIndex - 1, 0);
    setCarouselIndex(newIndex);
    setSelectedCategory(categories[newIndex].value);
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

        {/* Desktop: Wrapped tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-3 rounded-full font-inter text-sm transition-all duration-300 ${
                selectedCategory === category.value
                  ? 'bg-henna-brown text-white shadow-lg'
                  : 'bg-white dark:bg-dark-surface text-charcoal dark:text-dark-text hover:bg-sand dark:hover:bg-henna-dark/20 border border-henna-light dark:border-henna-dark'
              }`}
            >
              {t(category.labelKey)}
            </button>
          ))}
        </motion.div>

        {/* Mobile: Carousel with arrows and swipe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:hidden mb-16 relative"
        >
          <div className="flex items-center justify-center gap-2">
            {/* Left Arrow */}
            <button
              onClick={prevCategory}
              disabled={carouselIndex === 0}
              className={`p-2 rounded-full transition-all ${
                carouselIndex === 0
                  ? 'text-charcoal/30 dark:text-dark-text/30 cursor-not-allowed'
                  : 'text-henna-brown dark:text-henna-gold hover:bg-henna-light/20 dark:hover:bg-henna-dark/20'
              }`}
              aria-label="Previous category"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Visible tabs container with swipe support */}
            <div className="overflow-hidden flex-1 max-w-xs">
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  
                  // Swipe left (next)
                  if (swipe < -500 && carouselIndex < categories.length - 1) {
                    nextCategory();
                  }
                  // Swipe right (previous)
                  else if (swipe > 500 && carouselIndex > 0) {
                    prevCategory();
                  }
                }}
                animate={{ x: `-${carouselIndex * 100}%` }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex cursor-grab active:cursor-grabbing"
              >
                {categories.map((category, index) => (
                  <button
                    key={category.value}
                    onClick={() => {
                      setSelectedCategory(category.value);
                      setCarouselIndex(index);
                    }}
                    className={`flex-shrink-0 w-full px-6 py-3 rounded-full font-inter text-sm transition-all duration-300 ${
                      selectedCategory === category.value
                        ? 'bg-henna-brown text-white shadow-lg'
                        : 'bg-white dark:bg-dark-surface text-charcoal dark:text-dark-text hover:bg-sand dark:hover:bg-henna-dark/20 border border-henna-light dark:border-henna-dark'
                    }`}
                  >
                    {t(category.labelKey)}
                  </button>
                ))}
              </motion.div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextCategory}
              disabled={carouselIndex >= categories.length - 1}
              className={`p-2 rounded-full transition-all ${
                carouselIndex >= categories.length - 1
                  ? 'text-charcoal/30 dark:text-dark-text/30 cursor-not-allowed'
                  : 'text-henna-brown dark:text-henna-gold hover:bg-henna-light/20 dark:hover:bg-henna-dark/20'
              }`}
              aria-label="Next category"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-1 mt-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setCarouselIndex(index);
                  setSelectedCategory(category.value);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === carouselIndex
                    ? 'bg-henna-brown dark:bg-henna-gold w-6'
                    : 'bg-henna-light/50 dark:bg-henna-dark/50'
                }`}
                aria-label={`Go to category ${index + 1}`}
              />
            ))}
          </div>
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
                    src={image.thumbnail_url || image.image_url}
                    alt={image.title}
                    loading="lazy"
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
              className="flex flex-col items-center justify-center w-full h-full px-4 sm:px-8 md:px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-center max-w-7xl max-h-[75vh] w-full relative">
                {/* Loading placeholder - show thumbnail while full image loads */}
                {!lightboxImageLoaded && selectedImage.thumbnail_url && (
                  <img
                    src={selectedImage.thumbnail_url}
                    alt={selectedImage.title}
                    className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-lg mx-auto blur-sm"
                  />
                )}
                {/* Full resolution image */}
                <img
                  src={selectedImage.image_url}
                  alt={selectedImage.title}
                  onLoad={() => setLightboxImageLoaded(true)}
                  className={`max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-lg mx-auto transition-opacity duration-300 ${
                    lightboxImageLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                />
                {/* Loading spinner */}
                {!lightboxImageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
              <div className="mt-6 text-center max-w-2xl">
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

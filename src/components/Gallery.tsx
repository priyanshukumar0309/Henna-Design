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
  const [isZoomed, setIsZoomed] = useState(false);
  const [lastTap, setLastTap] = useState(0);

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
            description: 'Modern henna art for celebrations and festivals',
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
            description: 'Clean lines meeting traditional motifs',
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
            description: 'Fashion-forward henna perfect for editorial shoots',
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
            description: 'Detailed forearm henna featuring layered floral and geometric patterns with Nordic-inspired symmetry',
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
            description: 'Elaborate bridal henna featuring a stunning peacock with fanned tail feathers and lotus flower motif',
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
            description: 'Detailed palm mandala with concentric patterns, finger decorations, and traditional motifs',
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
            description: 'Complete arm and hand design showing the darkest stage of henna stain progression with deep reddish-brown to almost black color on palms/fingers',
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
            description: 'Symmetrical hand designs with mandala patterns, floral motifs, and intricate finger decorations',
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
            description: 'Beautiful mandala pattern extending from wrist to forearm with intricate geometric details',
            image_url: '/assets/gallery/photo_6087126964323338495_y.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/photo_6087126964323338495_y.jpg',
            category: 'minimalist',
            tags: ['mandala', 'arm', 'geometric', 'elegant', 'detailed'],
            featured: true,
            display_order: 10,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '11',
            title: 'Traditional Hand Henna Art',
            description: 'Classic palm design with traditional motifs and intricate finger patterns',
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
            description: 'Modern minimalist henna design perfect for everyday wear and special occasions',
            image_url: '/assets/gallery/photo_6087126964323338509_y.jpg',
            thumbnail_url: '/assets/gallery/thumbnails/photo_6087126964323338509_y.jpg',
            category: 'minimalist',
            tags: ['minimalist', 'wrist', 'contemporary', 'modern', 'elegant'],
            featured: true,
            display_order: 12,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '13',
            title: 'Artistic Forearm Henna',
            description: 'Creative henna artistry featuring flowing patterns and artistic expression',
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
            description: 'Rich, dark reddish-brown henna design showing second darkest stage of stain progression with intricate patterns',
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
            description: 'Classic palm design with traditional mandala patterns and intricate details',
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
            description: 'Modern henna design blending traditional motifs with Scandinavian minimalism',
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
            description: 'Prominent peacock design showing medium-dark stage of stain progression with reddish-brown henna',
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
            description: 'Henna design showing light-medium stage of stain progression with lighter reddish-brown color',
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
            description: 'Vibrant reddish-brown henna design showing medium stage of stain progression with detailed traditional patterns',
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
            description: 'Traditional henna patterns showing medium stage of stain progression with well-developed reddish-brown color',
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
            description: 'Detailed palm henna featuring complex geometric and floral patterns',
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
            description: 'Henna design showing the lightest stage of stain progression with lighter henna color, possibly early stage or fading',
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
            description: 'Deep reddish-brown mehndi design showing third darkest stage of stain progression with dense traditional patterns',
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
          image_url: '/assets/gallery/henna-bridal-001.jpg',
          thumbnail_url: '/assets/gallery/thumbnails/henna-bridal-001.jpg',
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
          description: 'Clean lines meeting traditional motifs',
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
          description: 'Fashion-forward henna perfect for editorial shoots',
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
          description: 'Detailed forearm henna featuring layered floral and geometric patterns with Nordic-inspired symmetry',
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
          description: 'Elaborate bridal henna featuring a stunning peacock with fanned tail feathers and lotus flower motif',
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
          description: 'Detailed palm mandala with concentric patterns, finger decorations, and traditional motifs',
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
          description: 'Complete arm and hand design showing the darkest stage of henna stain progression with deep reddish-brown to almost black color on palms/fingers',
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
          description: 'Symmetrical hand designs with mandala patterns, floral motifs, and intricate finger decorations',
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
          description: 'Beautiful mandala pattern extending from wrist to forearm with intricate geometric details',
          image_url: '/assets/gallery/photo_6087126964323338495_y.jpg',
          thumbnail_url: '/assets/gallery/thumbnails/photo_6087126964323338495_y.jpg',
          category: 'minimalist',
          tags: ['mandala', 'arm', 'geometric', 'elegant', 'detailed'],
          featured: true,
          display_order: 10,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: '11',
          title: 'Traditional Hand Henna Art',
          description: 'Classic palm design with traditional motifs and intricate finger patterns',
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
          description: 'Modern minimalist henna design perfect for everyday wear and special occasions',
          image_url: '/assets/gallery/photo_6087126964323338509_y.jpg',
          thumbnail_url: '/assets/gallery/thumbnails/photo_6087126964323338509_y.jpg',
          category: 'minimalist',
          tags: ['minimalist', 'wrist', 'contemporary', 'modern', 'elegant'],
          featured: true,
          display_order: 12,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: '13',
          title: 'Artistic Forearm Henna',
          description: 'Creative henna artistry featuring flowing patterns and artistic expression',
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
          description: 'Rich, dark reddish-brown henna design showing second darkest stage of stain progression with intricate patterns',
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
          description: 'Classic palm design with traditional mandala patterns and intricate details',
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
          description: 'Modern henna design blending traditional motifs with Scandinavian minimalism',
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
          description: 'Prominent peacock design showing medium-dark stage of stain progression with reddish-brown henna',
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
          description: 'Henna design showing light-medium stage of stain progression with lighter reddish-brown color',
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
          description: 'Vibrant reddish-brown henna design showing medium stage of stain progression with detailed traditional patterns',
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
          description: 'Traditional henna patterns showing medium stage of stain progression with well-developed reddish-brown color',
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
          description: 'Detailed palm henna featuring complex geometric and floral patterns',
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
          description: 'Henna design showing the lightest stage of stain progression with lighter henna color, possibly early stage or fading',
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
          description: 'Deep reddish-brown mehndi design showing third darkest stage of stain progression with dense traditional patterns',
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
    setIsZoomed(false);
  };

  const handleDoubleTap = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    
    if (tapLength < 500 && tapLength > 0) {
      // Double tap detected
      setIsZoomed(!isZoomed);
    }
    setLastTap(currentTime);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
    setIsZoomed(false); // Reset zoom when navigating
  };

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
    setIsZoomed(false); // Reset zoom when navigating
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
              <motion.img
                src={selectedImage.image_url}
                alt={selectedImage.title}
                className={`object-contain rounded-lg transition-transform duration-300 ${
                  isZoomed 
                    ? 'max-w-none max-h-none w-auto h-auto cursor-zoom-out' 
                    : 'max-w-full max-h-[80vh] cursor-zoom-in'
                }`}
                animate={{ 
                  scale: isZoomed ? 1.5 : 1,
                  x: isZoomed ? 0 : 0,
                  y: isZoomed ? 0 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={handleDoubleTap}
                onTouchEnd={handleDoubleTap}
                style={{
                  transformOrigin: 'center center'
                }}
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

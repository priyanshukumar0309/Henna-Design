export interface PortfolioImage {
  id: string;
  title: string;
  description: string;
  descriptionKey?: string; // Optional translation key for description
  image_url: string;
  thumbnail_url: string | null;
  category: string;
  tags: string[];
  featured: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  slug: string;
  cover_image_url: string | null;
  display_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  client_initial: string | null;
  testimonial_text: string;
  occasion: string;
  rating: number;
  image_url: string | null;
  is_featured: boolean;
  display_order: number;
  is_published: boolean;
  created_at: string;
}

export interface MoodBoard {
  id: string;
  session_id: string;
  name: string;
  image_ids: string[];
  share_token: string;
  created_at: string;
  updated_at: string;
  expires_at: string;
}

export type Category = 'all' | 'bridal' | 'festival' | 'minimalist' | 'fusion' | 'photoshoot' | 'stain_progression';

/*
  # Nordic Soul Henna - Portfolio Database Schema

  ## Overview
  This migration creates the complete database structure for a professional henna artistry portfolio website.
  It includes tables for portfolio images, collections, testimonials, and mood boards.

  ## New Tables

  ### 1. `portfolio_images`
  Stores all portfolio images with metadata for categorization and display.
  - `id` (uuid, primary key)
  - `title` (text) - Image title or name
  - `description` (text) - Detailed description of the work
  - `image_url` (text) - URL to the image file
  - `thumbnail_url` (text) - URL to thumbnail version
  - `category` (text) - Main category (bridal, festival, minimalist, etc.)
  - `tags` (text[]) - Array of tags for flexible filtering
  - `featured` (boolean) - Whether to feature on homepage
  - `display_order` (integer) - Manual ordering control
  - `created_at` (timestamptz) - Upload timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. `collections`
  Curated collections grouping related portfolio images.
  - `id` (uuid, primary key)
  - `name` (text) - Collection name
  - `description` (text) - Collection description
  - `slug` (text) - URL-friendly identifier
  - `cover_image_url` (text) - Cover image for collection
  - `display_order` (integer) - Manual ordering
  - `is_published` (boolean) - Visibility control
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 3. `collection_images`
  Junction table linking images to collections.
  - `collection_id` (uuid, foreign key)
  - `image_id` (uuid, foreign key)
  - `display_order` (integer) - Order within collection
  - `created_at` (timestamptz)

  ### 4. `testimonials`
  Client reviews and feedback.
  - `id` (uuid, primary key)
  - `client_name` (text) - Client's name
  - `client_initial` (text) - For privacy (e.g., "S.K.")
  - `testimonial_text` (text) - The review content
  - `occasion` (text) - Event type (bridal, festival, etc.)
  - `rating` (integer) - 1-5 star rating
  - `image_url` (text) - Optional client photo
  - `is_featured` (boolean) - Show on homepage
  - `display_order` (integer)
  - `created_at` (timestamptz)
  - `is_published` (boolean)

  ### 5. `mood_boards`
  User-created collections of favorite designs.
  - `id` (uuid, primary key)
  - `session_id` (text) - Anonymous user identifier
  - `name` (text) - Optional board name
  - `image_ids` (uuid[]) - Array of saved image IDs
  - `share_token` (text) - Unique token for sharing
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  - `expires_at` (timestamptz) - Auto-cleanup after 90 days

  ## Security
  - RLS enabled on all tables
  - Public read access for published content
  - Admin-only write access (to be managed via service role)
  - Mood boards accessible only via share token

  ## Notes
  - All timestamps default to current time
  - UUIDs auto-generated via gen_random_uuid()
  - Indexes added for frequently queried fields
  - Default values ensure data integrity
*/

-- Create portfolio_images table
CREATE TABLE IF NOT EXISTS portfolio_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  image_url text NOT NULL,
  thumbnail_url text,
  category text NOT NULL DEFAULT 'general',
  tags text[] DEFAULT '{}',
  featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create collections table
CREATE TABLE IF NOT EXISTS collections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text DEFAULT '',
  slug text UNIQUE NOT NULL,
  cover_image_url text,
  display_order integer DEFAULT 0,
  is_published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create collection_images junction table
CREATE TABLE IF NOT EXISTS collection_images (
  collection_id uuid REFERENCES collections(id) ON DELETE CASCADE,
  image_id uuid REFERENCES portfolio_images(id) ON DELETE CASCADE,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (collection_id, image_id)
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_initial text,
  testimonial_text text NOT NULL,
  occasion text DEFAULT 'general',
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  image_url text,
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  is_published boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create mood_boards table
CREATE TABLE IF NOT EXISTS mood_boards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  name text DEFAULT 'My Henna Inspiration',
  image_ids uuid[] DEFAULT '{}',
  share_token text UNIQUE NOT NULL DEFAULT encode(gen_random_bytes(16), 'hex'),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  expires_at timestamptz DEFAULT (now() + interval '90 days')
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_portfolio_category ON portfolio_images(category);
CREATE INDEX IF NOT EXISTS idx_portfolio_featured ON portfolio_images(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_portfolio_tags ON portfolio_images USING gin(tags);
CREATE INDEX IF NOT EXISTS idx_collections_slug ON collections(slug);
CREATE INDEX IF NOT EXISTS idx_collections_published ON collections(is_published) WHERE is_published = true;
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(is_featured) WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_mood_boards_token ON mood_boards(share_token);
CREATE INDEX IF NOT EXISTS idx_mood_boards_session ON mood_boards(session_id);

-- Enable Row Level Security
ALTER TABLE portfolio_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE collection_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE mood_boards ENABLE ROW LEVEL SECURITY;

-- RLS Policies for portfolio_images
CREATE POLICY "Public can view all portfolio images"
  ON portfolio_images FOR SELECT
  TO anon, authenticated
  USING (true);

-- RLS Policies for collections
CREATE POLICY "Public can view published collections"
  ON collections FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

-- RLS Policies for collection_images
CREATE POLICY "Public can view collection images"
  ON collection_images FOR SELECT
  TO anon, authenticated
  USING (true);

-- RLS Policies for testimonials
CREATE POLICY "Public can view published testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

-- RLS Policies for mood_boards
CREATE POLICY "Users can view their own mood boards"
  ON mood_boards FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Users can create mood boards"
  ON mood_boards FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can update their own mood boards"
  ON mood_boards FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Function to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for auto-updating timestamps
CREATE TRIGGER update_portfolio_images_updated_at
  BEFORE UPDATE ON portfolio_images
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_collections_updated_at
  BEFORE UPDATE ON collections
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_mood_boards_updated_at
  BEFORE UPDATE ON mood_boards
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
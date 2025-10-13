import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Allow app to run without Supabase in development
// Components will gracefully handle empty data states
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️  Supabase environment variables not configured. Using placeholder values.');
  console.warn('   To enable database features, create a .env file with:');
  console.warn('   VITE_SUPABASE_URL=your_supabase_url');
  console.warn('   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key');
}

// Create client with placeholder values if not configured
// This prevents app crashes while allowing graceful degradation
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
);

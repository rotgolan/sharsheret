import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/supabase'

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T]

// Use these types for your Supabase client
export type SupabaseClient = ReturnType<typeof createClient<Database>> 
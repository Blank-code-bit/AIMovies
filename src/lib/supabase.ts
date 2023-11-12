import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uhsktgduuxhtzmdgbgfi.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoc2t0Z2R1dXhodHptZGdiZ2ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3NTExNzcsImV4cCI6MjAxNTMyNzE3N30.lnT_2RmzJeUIxyeJ4UHH7aARicDjJg_zvfxNlZZsJA8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

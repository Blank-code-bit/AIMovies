import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uhsktgduuxhtzmdgbgfi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoc2t0Z2R1dXhodHptZGdiZ2ZpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTc1MTE3NywiZXhwIjoyMDE1MzI3MTc3fQ.vHwq8byIS49ucWPslqXf7iIMZlwV9dMd9isU-3mSgpI";

export const supabase = createClient(supabaseUrl, supabaseKey);

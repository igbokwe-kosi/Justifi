import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wlfcmqrdgcpjuubnepfa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsZmNtcXJkZ2NwanV1Ym5lcGZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExODczMDYsImV4cCI6MjA0Njc2MzMwNn0.iwmumgRTJ1ymJxI9yCDl5u3ONkXoDttH4XkiW1d8aRE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

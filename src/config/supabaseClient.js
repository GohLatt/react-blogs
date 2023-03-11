import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ymmkmgewwnizydmcjlly.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltbWttZ2V3d25penlkbWNqbGx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwNjkwNjksImV4cCI6MTk5MzY0NTA2OX0.01eE6XixKrhWkBRTIG0KQ0NnMKeaEVZv3ZgLIWOz9uU";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

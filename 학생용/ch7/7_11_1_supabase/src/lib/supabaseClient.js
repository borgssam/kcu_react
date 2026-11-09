// src/lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// .env.local에 적은 값을 읽어 온다(VITE_로 시작하는 이름만 읽을 수 있다)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabaseClient = createClient(supabaseUrl, supabaseKey);


import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://hjfnybdgppqfkqrsyrab.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_c345AxTubOAe56l0mXo44Q_O1SYVWap";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

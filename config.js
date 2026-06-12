// Supabase connection — these are public client-side values, protected by Row-Level Security.
const SUPABASE_URL = "https://ianacrjyiqariazpxhoh.supabase.co";
const SUPABASE_KEY = "sb_publishable_ILCmRdEgK9unR1oBxW9eDg_fHHK54C_";
const ADMIN_EMAILS = ["alexis.almeida@icloud.com", "yvette@yalmeida.com"];

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

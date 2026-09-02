// Supabase connection — these are public client-side values, protected by Row-Level Security.
const SUPABASE_URL = "https://ianacrjyiqariazpxhoh.supabase.co";
const SUPABASE_KEY = "sb_publishable_ILCmRdEgK9unR1oBxW9eDg_fHHK54C_";
const ADMIN_EMAILS = ["alexis.almeida@icloud.com", "yvette@yalmeida.com"];
// Fallback contact used when a dog has no contact email/phone of its own.
const DEFAULT_CONTACT_EMAIL = "yvette@yalmeida.com";
const DEFAULT_CONTACT_PHONE = "3059059051";
const DEFAULT_CONTACT_PHONE_DISPLAY = "(305) 905-9051";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Supabase connection — these are public client-side values, protected by Row-Level Security.
const SUPABASE_URL = "https://ibrxiftyyjstmbykyvfe.supabase.co";
const SUPABASE_KEY = "sb_publishable_KusHMOFV01jy431WtBuQbg_1uKfKMfC";
const ADMIN_EMAILS = ["alexis.almeida@icloud.com", "yvette@yalmeida.com"];
// Fallback contact used when a dog has no contact email/phone of its own.
const DEFAULT_CONTACT_EMAIL = "yvette@yalmeida.com";
const DEFAULT_CONTACT_PHONE = "3059059051";
const DEFAULT_CONTACT_PHONE_DISPLAY = "(305) 905-9051";
// Optional: Web3Forms access key to also email a copy of each application.
// Leave empty to skip email (applications still save to the database). Get a free key at web3forms.com.
const WEB3FORMS_KEY = "4c3ee824-58c7-4b5c-90a9-4323cfc0679b";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

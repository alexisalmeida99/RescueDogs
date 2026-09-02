-- ============================================================
-- Piper's Pals Pet Rescue — one-time database setup
-- Run this in the NEW Supabase project:
--   Dashboard → SQL Editor → New query → paste all → Run
-- ============================================================

-- ---------- Dogs available for adoption ----------
create table if not exists public.dogs (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  breed text,
  age text,
  sex text check (sex in ('male','female','unknown')) default 'unknown',
  size text check (size in ('small','medium','large','unknown')) default 'unknown',
  description text,
  status text check (status in ('available','pending','adopted')) default 'available',
  photo_urls text[] default '{}',
  contact_email text,
  contact_phone text,
  created_at timestamptz default now()
);
alter table public.dogs enable row level security;

create policy "dogs are publicly viewable"
  on public.dogs for select using (true);
create policy "admins can insert dogs"
  on public.dogs for insert to authenticated
  with check (auth.jwt()->>'email' in ('alexis.almeida@icloud.com','yvette@yalmeida.com'));
create policy "admins can update dogs"
  on public.dogs for update to authenticated
  using (auth.jwt()->>'email' in ('alexis.almeida@icloud.com','yvette@yalmeida.com'));
create policy "admins can delete dogs"
  on public.dogs for delete to authenticated
  using (auth.jwt()->>'email' in ('alexis.almeida@icloud.com','yvette@yalmeida.com'));

-- ---------- Adoption applications ----------
create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  dog_name text,
  applicant_name text,
  applicant_email text,
  applicant_phone text,
  answers jsonb not null default '{}',
  status text default 'new',
  created_at timestamptz default now()
);
alter table public.applications enable row level security;

-- Anyone (a visitor) may SUBMIT an application...
create policy "anyone can submit an application"
  on public.applications for insert to anon, authenticated
  with check (true);
-- ...but only admins can read / manage them.
create policy "admins can read applications"
  on public.applications for select to authenticated
  using (auth.jwt()->>'email' in ('alexis.almeida@icloud.com','yvette@yalmeida.com'));
create policy "admins can update applications"
  on public.applications for update to authenticated
  using (auth.jwt()->>'email' in ('alexis.almeida@icloud.com','yvette@yalmeida.com'));
create policy "admins can delete applications"
  on public.applications for delete to authenticated
  using (auth.jwt()->>'email' in ('alexis.almeida@icloud.com','yvette@yalmeida.com'));

-- ---------- Photo storage ----------
insert into storage.buckets (id, name, public)
values ('dog-photos','dog-photos', true)
on conflict (id) do nothing;

create policy "dog photos publicly viewable"
  on storage.objects for select using (bucket_id = 'dog-photos');
create policy "admins can upload dog photos"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'dog-photos' and auth.jwt()->>'email' in ('alexis.almeida@icloud.com','yvette@yalmeida.com'));
create policy "admins can update dog photos"
  on storage.objects for update to authenticated
  using (bucket_id = 'dog-photos' and auth.jwt()->>'email' in ('alexis.almeida@icloud.com','yvette@yalmeida.com'));
create policy "admins can delete dog photos"
  on storage.objects for delete to authenticated
  using (bucket_id = 'dog-photos' and auth.jwt()->>'email' in ('alexis.almeida@icloud.com','yvette@yalmeida.com'));

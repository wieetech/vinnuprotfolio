/*
# Portfolio contact messages & visitor counter

1. New Tables
- `contact_messages`: messages submitted via the contact form.
  - id (uuid, pk)
  - name (text, not null)
  - email (text, not null)
  - message (text, not null)
  - created_at (timestamptz, default now())
- `visitors`: simple global visit counter.
  - id (int, pk, = 1)
  - count (bigint, default 0)

2. Security
- RLS enabled on both tables.
- contact_messages: anyone may INSERT (contact form is public); only authenticated can SELECT/UPDATE/DELETE (owner reads submissions in Supabase dashboard).
- visitors: anyone may SELECT and UPDATE (increment) — intentionally public counter.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_messages" ON contact_messages;
CREATE POLICY "anon_insert_messages" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_messages" ON contact_messages;
CREATE POLICY "auth_select_messages" ON contact_messages FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_messages" ON contact_messages;
CREATE POLICY "auth_update_messages" ON contact_messages FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_messages" ON contact_messages;
CREATE POLICY "auth_delete_messages" ON contact_messages FOR DELETE
  TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS visitors (
  id int PRIMARY KEY DEFAULT 1,
  count bigint NOT NULL DEFAULT 0,
  CONSTRAINT visitors_single_row CHECK (id = 1)
);

INSERT INTO visitors (id, count) VALUES (1, 0)
  ON CONFLICT (id) DO NOTHING;

ALTER TABLE visitors ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_visitors" ON visitors;
CREATE POLICY "anon_select_visitors" ON visitors FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_update_visitors" ON visitors;
CREATE POLICY "anon_update_visitors" ON visitors FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

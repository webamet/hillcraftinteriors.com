/*
# Create enquiries table for Hillcraft Interiors

1. New Tables
- `enquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — customer name
  - `phone` (text, not null) — customer phone number
  - `location` (text) — customer location (e.g. Tuensang Town)
  - `service` (text) — requested service
  - `product` (text) — requested product (optional)
  - `message` (text) — customer message
  - `created_at` (timestamptz, default now)

2. Security
- Enable RLS on `enquiries`.
- This is a no-auth public enquiry form (single-tenant, no sign-in), so anon + authenticated
  can INSERT new enquiries. SELECT/UPDATE/DELETE are restricted to authenticated only so
  site visitors cannot read or modify other people's enquiries.

3. Notes
- The frontend uses the anon Supabase key to submit the "Request a Quote" form.
- Only INSERT is open to anon; all other verbs require an authenticated session.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  location text,
  service text,
  product text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries" ON enquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_enquiries" ON enquiries;
CREATE POLICY "auth_select_enquiries" ON enquiries FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_enquiries" ON enquiries;
CREATE POLICY "auth_update_enquiries" ON enquiries FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_enquiries" ON enquiries;
CREATE POLICY "auth_delete_enquiries" ON enquiries FOR DELETE
  TO authenticated USING (true);

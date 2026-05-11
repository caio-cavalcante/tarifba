-- Create carpoolers table
CREATE TABLE carpoolers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create trips table
CREATE TABLE trips (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date TIMESTAMPTZ DEFAULT NOW(),
  total_cost NUMERIC NOT NULL,
  outbound_dist NUMERIC NOT NULL,
  outbound_eff NUMERIC NOT NULL,
  outbound_count INT NOT NULL,
  return_dist NUMERIC NOT NULL,
  return_eff NUMERIC NOT NULL,
  return_count INT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create trip_participants table to store who participated and their costs
CREATE TABLE trip_participants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  trip_id UUID REFERENCES trips(id) ON DELETE CASCADE,
  carpooler_id UUID REFERENCES carpoolers(id) ON DELETE CASCADE,
  cost_total NUMERIC NOT NULL,
  cost_ida NUMERIC NOT NULL,
  cost_volta NUMERIC NOT NULL,
  cost_extra NUMERIC NOT NULL,
  present_ida BOOLEAN DEFAULT false,
  present_volta BOOLEAN DEFAULT false
);

-- Enable Row Level Security (RLS) on all tables
ALTER TABLE carpoolers ENABLE ROW LEVEL SECURITY;
ALTER TABLE trips ENABLE ROW LEVEL SECURITY;
ALTER TABLE trip_participants ENABLE ROW LEVEL SECURITY;

-- Create policies to allow all operations for anonymous users 
-- (Security is handled client-side via the Join Code)
CREATE POLICY "Allow anonymous SELECT on carpoolers" ON carpoolers FOR SELECT TO anon USING (true);
CREATE POLICY "Allow anonymous INSERT on carpoolers" ON carpoolers FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anonymous UPDATE on carpoolers" ON carpoolers FOR UPDATE TO anon USING (true);
CREATE POLICY "Allow anonymous DELETE on carpoolers" ON carpoolers FOR DELETE TO anon USING (true);

CREATE POLICY "Allow anonymous SELECT on trips" ON trips FOR SELECT TO anon USING (true);
CREATE POLICY "Allow anonymous INSERT on trips" ON trips FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anonymous UPDATE on trips" ON trips FOR UPDATE TO anon USING (true);
CREATE POLICY "Allow anonymous DELETE on trips" ON trips FOR DELETE TO anon USING (true);

CREATE POLICY "Allow anonymous SELECT on trip_participants" ON trip_participants FOR SELECT TO anon USING (true);
CREATE POLICY "Allow anonymous INSERT on trip_participants" ON trip_participants FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anonymous UPDATE on trip_participants" ON trip_participants FOR UPDATE TO anon USING (true);
CREATE POLICY "Allow anonymous DELETE on trip_participants" ON trip_participants FOR DELETE TO anon USING (true);

-- Ensure Cascade Delete is set up for trips (migration safety)
ALTER TABLE trip_participants
DROP CONSTRAINT IF EXISTS trip_participants_trip_id_fkey,
ADD CONSTRAINT trip_participants_trip_id_fkey
   FOREIGN KEY (trip_id)
   REFERENCES trips(id)
   ON DELETE CASCADE;

ALTER TABLE trip_participants
DROP CONSTRAINT IF EXISTS trip_participants_carpooler_id_fkey,
ADD CONSTRAINT trip_participants_carpooler_id_fkey
   FOREIGN KEY (carpooler_id)
   REFERENCES carpoolers(id)
   ON DELETE CASCADE;

-- Create the payments ledger table
CREATE TABLE payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  carpooler_id UUID REFERENCES carpoolers(id) ON DELETE CASCADE,
  amount NUMERIC(10, 2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS (Even if you haven't set up Auth yet, it's good practice)
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Allow public access for now (since we skipped Step 5: Auth)
CREATE POLICY "Allow public read/write on payments" 
ON payments FOR ALL USING (true) WITH CHECK (true);
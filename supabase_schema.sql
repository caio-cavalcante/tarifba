-- Create carpoolers table
CREATE TABLE carpoolers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  total_paid NUMERIC DEFAULT 0,
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

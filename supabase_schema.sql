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

-- Create a view or just let the application handle the joins
-- Note: Remember to enable Row Level Security (RLS) if you plan to make it public,
-- but for now, based on the requirements, it's left open for the client-side Join Code logic.

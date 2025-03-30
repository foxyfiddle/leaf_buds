import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qbtrcpbwvrqlpckiqdth.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFidHJjcGJ3dnJxbHBja2lxZHRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNzAxNDUsImV4cCI6MjA1ODc0NjE0NX0.8VSLkbD1AyvjSuiuXXMkPLbkLf-rfjOW2F1OZjD59cE'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
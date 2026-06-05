import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  plan: "free" | "pro" | "enterprise";
  usage: Record<string, number>;
  created_at: string;
  stripe_customer_id?: string;
}

export interface ToolUsage {
  id: string;
  user_id: string;
  tool: string;
  input_tokens: number;
  output_tokens: number;
  created_at: string;
}

// Get or create user profile
export async function getOrCreateUserProfile(
  userId: string,
  email: string,
  name: string
) {
  const { data, error } = await supabaseAdmin
    .from("user_profiles")
    .upsert({
      id: userId,
      email,
      name,
      plan: "free",
      usage: {},
    })
    .select()
    .single();

  if (error) throw error;
  return data as UserProfile;
}

// Log tool usage
export async function logToolUsage(
  userId: string,
  tool: string,
  inputTokens: number,
  outputTokens: number
) {
  const { error } = await supabaseAdmin.from("tool_usage").insert({
    user_id: userId,
    tool,
    input_tokens: inputTokens,
    output_tokens: outputTokens,
  });

  if (error) throw error;
}

// Check if user has access to premium feature
export async function checkPremiumAccess(userId: string): Promise<boolean> {
  const { data } = await supabaseAdmin
    .from("user_profiles")
    .select("plan")
    .eq("id", userId)
    .single();

  return data?.plan === "pro" || data?.plan === "enterprise";
}

// Update subscription plan
export async function updateUserPlan(
  userId: string,
  plan: "free" | "pro" | "enterprise",
  stripeCustomerId: string
) {
  const { error } = await supabaseAdmin
    .from("user_profiles")
    .update({ plan, stripe_customer_id: stripeCustomerId })
    .eq("id", userId);

  if (error) throw error;
}

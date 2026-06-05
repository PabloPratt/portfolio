import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { updateUserPlan } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = (await headers()).get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  try {
    // In production, verify signature with process.env.STRIPE_WEBHOOK_SECRET
    const event = JSON.parse(body);

    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;
        const userId = session.metadata?.userId;
        const priceId = session.line_items?.data[0]?.price?.id;

        if (userId && priceId) {
          let plan: "pro" | "enterprise" = "pro";
          if (priceId === process.env.STRIPE_PRICE_ENTERPRISE) {
            plan = "enterprise";
          }

          await updateUserPlan(userId, plan, session.customer);
        }
        break;

      case "customer.subscription.deleted":
        const subscription = event.data.object;
        // Downgrade to free tier
        if (subscription.metadata?.userId) {
          await updateUserPlan(subscription.metadata.userId, "free", subscription.customer);
        }
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }
}

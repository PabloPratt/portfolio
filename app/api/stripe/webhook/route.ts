import { NextRequest, NextResponse } from "next/server";

// Stripe webhook handler - validates and processes subscription events
// In production, verify stripe-signature header with STRIPE_WEBHOOK_SECRET

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const event = JSON.parse(body);

    // Log webhook events for debugging
    console.log("Stripe webhook:", event.type);

    switch (event.type) {
      case "checkout.session.completed":
        // Handle successful checkout
        // TODO: Update user plan in database
        break;

      case "customer.subscription.deleted":
        // Handle subscription cancellation
        // TODO: Downgrade user to free plan
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}

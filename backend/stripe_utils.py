import os
import stripe

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

PLANS = {
    "basic_monthly": "price_1SQFzlFJsi9vOkdoJ7wRifha",
    "basic_yearly": "price_1SQG0FFJsi9vOkdoqDGDYxHK",
}

def create_checkout_session(plan_key: str, email: str):
    """Create a Stripe checkout session for the given plan and email."""
    try:
        session = stripe.checkout.Session.create(
            success_url="https://quicksuite-ai.vercel.app/success?session_id={CHECKOUT_SESSION_ID}",
            cancel_url="https://quicksuite-ai.vercel.app/cancel",
            payment_method_types=["card"],
            mode="subscription",
            customer_email=email,
            line_items=[{"price": PLANS[plan_key], "quantity": 1}],
        )
        return session
    except Exception as e:
        raise

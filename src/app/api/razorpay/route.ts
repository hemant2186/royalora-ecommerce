import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, currency = 'INR', receipt, notes } = body;

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    // Check if live or sandbox credentials are provided in env
    if (!keyId || !keySecret || keyId === 'rzp_test_placeholder') {
      // Clean test mode response without hardcoding secrets
      return NextResponse.json({
        mode: 'test_demo',
        status: 'created',
        orderId: `order_demo_${Date.now()}`,
        amount: Math.round(amount * 100), // in paise
        currency,
        receipt: receipt || `rcpt_${Date.now()}`,
        notes: notes || {},
        message: 'Running in ROYALORA Sandbox Demo Mode. Set RAZORPAY_KEY_ID & RAZORPAY_KEY_SECRET for live payments.',
      });
    }

    // If live credentials exist, we would call Razorpay Orders API securely on the server
    const authHeader = 'Basic ' + Buffer.from(`${keyId}:${keySecret}`).toString('base64');
    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader,
      },
      body: JSON.stringify({
        amount: Math.round(amount * 100),
        currency,
        receipt: receipt || `rcpt_${Date.now()}`,
        notes,
      }),
    });

    const data = await response.json();
    return NextResponse.json({
      mode: 'live',
      keyId,
      ...data,
    });
  } catch (error: any) {
    console.error('Razorpay order creation error:', error);
    return NextResponse.json(
      { error: 'Failed to initialize payment gateway', details: error.message },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { ReservationPayload } from "@/lib/reservation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, partySize, notes } = body;

    // Validate required fields
    if (!name || !email || !phone || !date || !time || !partySize) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required reservation fields.",
        },
        { status: 400 }
      );
    }

    const webhookUrl =
      process.env.MAKE_WEBHOOK_URL ||
      process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL ||
      "https://hook.eu1.make.com/2oi1dd771jmybj2funk155264syw2t8s";

    const payload: ReservationPayload = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      date: String(date).trim(),
      time: String(time).trim(),
      partySize: String(partySize).trim(),
      notes: notes ? String(notes).trim() : "",
      submittedAt: new Date().toISOString(),
      source: "little-coast-web",
    };

    // Forward reservation payload to Make webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const responseText = await response.text().catch(() => "");
      console.error(
        `Make webhook failed with status: ${response.status} ${response.statusText} - ${responseText}`
      );

      if (response.status === 410) {
        return NextResponse.json(
          {
            success: false,
            error:
              "The Make.com scenario is currently inactive or not listening. Please turn the scenario ON (Scheduling: ON) in Make.com or click 'Run once'.",
          },
          { status: 502 }
        );
      }

      return NextResponse.json(
        {
          success: false,
          error: `Webhook returned status ${response.status}: ${responseText || response.statusText}`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your table reservation request has been received.",
    });
  } catch (error: unknown) {
    console.error("Error processing reservation in /api/reservations:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred while processing your reservation.",
      },
      { status: 500 }
    );
  }
}

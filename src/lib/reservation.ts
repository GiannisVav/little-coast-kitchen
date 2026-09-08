export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: string;
  notes: string;
}

export interface ReservationPayload extends ReservationFormData {
  submittedAt: string;
  source: string;
}

export interface ReservationResult {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Submits reservation data to the /api/reservations endpoint,
 * which forwards the payload securely to Make.com.
 */
export async function submitReservation(
  formData: ReservationFormData
): Promise<ReservationResult> {
  try {
    const response = await fetch("/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to submit reservation.");
    }

    return {
      success: true,
      message: data.message || "Your table reservation request has been received.",
    };
  } catch (err: unknown) {
    console.error("Failed to submit reservation:", err);
    return {
      success: false,
      error:
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while sending your reservation.",
    };
  }
}


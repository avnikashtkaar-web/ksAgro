// app/api/subscribe/route.js
export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Invalid email address" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // TODO: Here you can store the email in a database, Mailchimp, etc.
    console.log("New subscription:", email);

    return new Response(
      JSON.stringify({ success: true, message: "Subscribed!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

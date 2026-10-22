
const API_BASE = "https://tempinbox-api.tempmail-imad.workers.dev";

exports.handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  };

  const send = (statusCode, data) => ({
    statusCode,
    headers,
    body: JSON.stringify(data)
  });

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        ...headers,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      },
      body: ""
    };
  }

  if (event.httpMethod !== "POST") {
    return send(405, { error: "Method not allowed" });
  }

  const apiKey = process.env.TRYTEMPINBOX_API_KEY;
  if (!apiKey) {
    return send(500, { error: "TRYTEMPINBOX_API_KEY is missing in Netlify environment variables." });
  }

  try {
    const input = JSON.parse(event.body || "{}");
    const apiHeaders = {
      "X-API-Key": apiKey,
      "Content-Type": "application/json"
    };

    let response;

    if (input.action === "create") {
      response = await fetch(`${API_BASE}/api/addresses`, {
        method: "POST",
        headers: apiHeaders
      });
    } else if (input.action === "messages") {
      if (!input.token) return send(400, { error: "Inbox token is required." });
      response = await fetch(
        `${API_BASE}/api/addresses/${encodeURIComponent(input.token)}/messages`,
        { method: "GET", headers: apiHeaders }
      );
    } else if (input.action === "deleteMessage") {
      if (!input.token || !input.id) {
        return send(400, { error: "Inbox token and message ID are required." });
      }
      response = await fetch(
        `${API_BASE}/api/addresses/${encodeURIComponent(input.token)}/messages/${encodeURIComponent(input.id)}`,
        { method: "DELETE", headers: apiHeaders }
      );
    } else {
      return send(400, { error: "Unknown action." });
    }

    const raw = await response.text();
    let data;
    try {
      data = raw ? JSON.parse(raw) : {};
    } catch {
      data = { error: raw || "The API returned an invalid response." };
    }

    if (!response.ok) {
      return send(response.status, {
        error: data.error || data.message || `Email API returned status ${response.status}.`
      });
    }

    return send(200, data);
  } catch (error) {
    return send(502, { error: error.message || "Could not connect to the email API." });
  }
};

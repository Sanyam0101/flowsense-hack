const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000"; // fallback for dev

export async function fetchInsights() {
  try {
    const res = await fetch(`${BASE_URL}/api/insights`);
    if (!res.ok) throw new Error("Failed to fetch insights");
    return await res.json();
  } catch (err) {
    console.error("Error fetching insights:", err);
    return null;
  }
}

export async function fetchSessionData() {
  try {
    const res = await fetch(`${BASE_URL}/api/sessions`);
    if (!res.ok) throw new Error("Failed to fetch session data");
    return await res.json();
  } catch (err) {
    console.error("Error fetching sessions:", err);
    return null;
  }
}

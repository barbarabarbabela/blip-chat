export async function getContacts() {
  const token = localStorage.getItem("token");
  const apiKey = localStorage.getItem("apiKey");

  if (!apiKey) {
    throw new Error("API key not found");
  }

  const response = await fetch("http://localhost:3000/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      apiKey: apiKey,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch contacts");
  }

  const data = await response.json();

  return data;
}

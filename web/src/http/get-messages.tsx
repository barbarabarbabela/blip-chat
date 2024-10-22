export async function getMessages(id: string) {
  const token = localStorage.getItem("token");
  const apiKey = localStorage.getItem("apiKey");

  if (!apiKey) {
    throw new Error("API key not found");
  }

  if (!id) {
    throw new Error("ID is required");
  }

  const response = await fetch(`http://localhost:3000/contato/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      apiKey: apiKey,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch messages");
  }

  const data = await response.json();

  return data;
}

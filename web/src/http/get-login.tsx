interface LoginRequest {
  apiKey: string;
}

export async function login({ apiKey }: LoginRequest) {
  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      apiKey,
    }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  const token = data.token;

  localStorage.setItem("token", token);
  localStorage.setItem("apiKey", apiKey);

  return data;
}

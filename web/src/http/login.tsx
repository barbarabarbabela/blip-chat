interface LoginRequest {
  apiKey: string;
}

export async function login({ apiKey }: LoginRequest) {
  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      apiKey,
    }),
  });

  if (response.ok === false) {
    throw new Error("Login failed");
  }
}


export async function getContacts() {
  const response = await fetch("http://localhost:3000/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

return response

}

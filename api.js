const API_URL = "http://localhost:3000/ask";

async function ask(question) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question })
  });

  const data = await res.json();
  return data.answer;
}

export default { ask };

export default async function handler(req, res) {
  const userMsg = req.body.message;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {role:"system", content:"You are a B.Com study assistant"},
        {role:"user", content:userMsg}
      ]
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}

export default async function handler(req, res) {
  res.status(200).json({
    choices: [
      { message: { content: "AI working now ✅" } }
    ]
  });
}

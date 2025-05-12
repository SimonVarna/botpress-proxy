export default async function handler(req, res) {
  const response = await fetch('https://hook.eu2.make.com/YOUR-WEBHOOK-ID', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)
  });

  const text = await response.text();
  res.status(200).send(text);
}

export default async function handler(req, res) {
  const response = await fetch('https://hook.eu2.make.com/uuh1vcpooq3w8up7bq809kva2vkg8n99', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)
  });

  const text = await response.text();
  res.status(200).send(text);
}

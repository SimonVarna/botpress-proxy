export const config = {
  api: {
    bodyParser: true
  }
};

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).send('Method Not Allowed');
    }

    const data = req.body;  // ✅ now actually contains the payload

    const response = await fetch('https://hook.eu2.make.com/uuh1vcpooq3w8up7bq809kva2vkg8n99', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const text = await response.text();

    if (!response.ok) {
      console.error("Make.com response failed:", response.status, text);
    }

    res.status(200).send(text);
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).send("Proxy failure: " + err.message);
  }
}

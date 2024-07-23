import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { data } = req.body;

    try {
      const response = await axios.post(
        ` https://api.airtable.com/v0/appIEhVJVYhaRDs6J/tbl08GRrX1G1yPz8t`,
        { fields: data },
        {
          headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      res.status(200).json(response.data);
    } catch (error) {
      res
        .status(error.response?.status || 500)
        .json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

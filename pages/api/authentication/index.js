import Jwt from "jsonwebtoken";

export default async function handler(req, res) {
  const token = req.query.token;
  const decodedToken = Jwt.verify(token, "bibliophile");
  const id = decodedToken.id;
  res.json({ id: id });
}

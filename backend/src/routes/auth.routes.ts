import { Router } from "express";

const router = Router();

router.post("/register", (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  return res.status(501).json({ message: "Not implemented yet" });
});

export default router;

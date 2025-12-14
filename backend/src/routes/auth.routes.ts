import { Router } from "express";

const router = Router();

router.post("/register", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  return res.status(501).json({ message: "Not implemented yet" });
});

export default router;

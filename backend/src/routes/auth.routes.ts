import { Router } from "express";

const router = Router();

router.post("/register", (req, res) => {
  return res.status(201).json({ message: "User registered" });
});

export default router;

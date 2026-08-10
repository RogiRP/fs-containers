import express from "express";
import samurais from "../utils/samurais.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(samurais.getAll());
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const samurai = samurais.getById(id);
  if (samurai) {
    res.json(samurai);
  } else {
    res.status(404).end();
  }
});

router.post("/", (req, res) => {
  const { name, clan, weapon } = req.body;
  if (!name || !clan || !weapon) {
    return res
      .status(400)
      .json({ error: "name, clan and weapon are required" });
  }
  const newSamurai = samurais.create({ name, clan, weapon });
  res.status(201).json(newSamurai);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, clan, weapon } = req.body;
  const updated = samurais.update(id, { name, clan, weapon });
  if (updated) {
    res.json(updated);
  } else {
    res.status(404).end();
  }
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  samurais.remove(id);
  res.status(204).end();
});

export default router;

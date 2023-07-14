import { Router } from "express";

const router = Router();

/**
 * Product routes
 */
router.get("/product", (req, res) => {
    res.json({ message: "message" });
});
router.get("/product/:id", () => {});
router.post("/product", () => {});
router.put("/product/:id", () => {});
router.delete("/product/:id", () => {});

/**
 * Update routes
 */
router.get("/update", (req, res) => {
    res.json({ message: "update" });
});
router.get("/update/:id", () => {});
router.post("/update", () => {});
router.put("/update/:id", () => {});
router.delete("/update/:id", () => {});

/**
 * UpdatePoint routes
 */
router.get("/updatepoint", (req, res) => {
    res.json({ message: "update point" });
});
router.get("/updatepoint/:id", () => {});
router.post("/updatepoint", () => {});
router.put("/updatepoint/:id", () => {});
router.delete("/updatepoint/:id", () => {});

export default router;

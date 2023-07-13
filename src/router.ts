import { Router } from "express";

const router = Router();

/**
 * Product routes
 */
router.get("/product", (res, req) => {
    res.json({ message: "product" });
});

router.get("/product/:id", () => {});

router.post("/product", () => {});

router.put("/product/:id", () => {});

router.delete("/product/:id", () => {});

/**
 * Update routes
 */
router.get("/product", (res, req) => {
    res.json({ message: "update" });
});

router.get("/update/:id", () => {});

router.post("/update", () => {});

router.put("/update/:id", () => {});

router.delete("/update/:id", () => {});

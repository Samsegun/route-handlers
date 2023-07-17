import { Router } from "express";
import { body, oneOf } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

/**
 * Product routes
 */
router.get("/product", (req, res) => {
    res.json({ message: "product message" });
});
router.get("/product/:id", () => {});
router.post(
    "/product",
    body("name").isString(),
    handleInputErrors,
    (req, res) => {
        res.json({ product: req.body.name, user: req.user });
    }
);
router.put(
    "/product/:id",
    body("name").isString(),
    handleInputErrors,
    (req, res) => {
        res.json({ product: req.body.name, user: req.user });
    }
);
router.delete("/product/:id", () => {});

/**
 * Update routes
 */
router.get("/update", (req, res) => {
    res.json({ message: "update" });
});
router.get("/update/:id", () => {});
router.post(
    "/update",
    body("title").exists().isString(),
    body("body").exists().isString(),
    handleInputErrors,
    (req, res) => {
        res.json({ message: req.body });
    }
);
router.put(
    "/update/:id",
    body("title").optional(),
    body("body").optional().isString(),
    body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
    body("version").optional(),
    handleInputErrors,
    (req, res) => {
        res.json({ message: req.body });
    }
);
router.delete("/update/:id", () => {});

/**
 * UpdatePoint routes
 */
router.get("/updatepoint", (req, res) => {
    res.json({ message: "update point" });
});
router.get("/updatepoint/:id", () => {});
router.post(
    "/updatepoint",
    body("name").isString(),
    body("description").isString(),
    body("updateId").isString(),
    handleInputErrors,
    (req, res) => {
        res.json({ message: req.body });
    }
);
router.put(
    "/updatepoint/:id",
    body("name").optional().isString(),
    body("description").optional().isString(),
    handleInputErrors,
    (req, res) => {
        res.json({ message: req.body });
    }
);
router.delete("/updatepoint/:id", () => {});

export default router;

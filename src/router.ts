import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import {
    createProduct,
    deleteProduct,
    getOneProduct,
    getProducts,
    updateProduct,
} from "./handlers/product";
import {
    createUpdate,
    deleteUpdate,
    getOneUpdate,
    getUpdates,
    updateUpdate,
} from "./handlers/update";

const router = Router();

/**
 * Product routes
 */
router.get("/product", getProducts);
router.get("/product/:id", getOneProduct);
router.post(
    "/product",
    body("name").isString(),
    handleInputErrors,
    createProduct
);
router.put(
    "/product/:id",
    body("name").isString(),
    handleInputErrors,
    updateProduct
);
router.delete("/product/:id", deleteProduct);

/**
 * Update routes
 */
router.get("/update", getUpdates);
router.get("/update/:id", getOneUpdate);
router.post(
    "/update",
    body("title").exists().isString(),
    body("body").exists().isString(),
    body("productId").exists().isString(),
    handleInputErrors,
    createUpdate
);
router.put(
    "/update/:id",
    body("title").optional(),
    body("body").optional(),
    body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
    body("version").optional(),
    handleInputErrors,
    updateUpdate
);
router.delete("/update/:id", deleteUpdate);

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

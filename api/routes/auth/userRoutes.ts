import express from "express";
import { authenticateUser, authorizeRoles } from "../../middlewares/authMiddleware";
import { getUser, getUserById, getUsersPaginate, updateUser, deleteUser } from "../../controllers/auth/userController";

const router = express.Router();

router.get("/", authenticateUser, authorizeRoles(["admin"]), getUser);
router.get("/:id", authenticateUser, getUserById);
router.get('/users/paginate', authenticateUser, authorizeRoles(["admin"]), getUsersPaginate);
router.put("/:id", authenticateUser, authorizeRoles(["admin"]), updateUser);
router.delete("/:id", authenticateUser, authorizeRoles(["admin"]), deleteUser);

export default router;

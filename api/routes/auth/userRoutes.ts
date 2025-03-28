import express from "express";
// import { authenticateUser, authorizeRoles } from "../../middlewares/authMiddleware";
import { getUser, getUserById, getUsersPaginate, updateUser, deleteUser } from "../../controllers/auth/userController";

const router = express.Router();

router.get("/", getUser);
router.get("/:id", getUserById);
router.get('/users/paginate', getUsersPaginate);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;

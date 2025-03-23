import express from "express";
const router = express.Router();
<<<<<<< HEAD
import {createQuestion, getAllQuestions, getQuestionById, updateQuestion, deleteQuestion} from "../controllers/questionController.js";

router.post('/', createQuestion);
router.get('/', getAllQuestions);
router.get('/:id', getQuestionById);
router.put('/:id', updateQuestion);
router.delete('/:id', deleteQuestion);
=======
import { createQuestion, getAllQuestions, getQuestionById, updateQuestion, deleteQuestion } from "../controllers/questionController.js";
import { verifyToken, verifyAdmin, verifyStaff } from "../middlewares/authMiddleware.js";

// Chỉ admin hoặc staff mới có thể thêm câu hỏi
router.post('/', verifyToken, verifyStaff, createQuestion);

// Lấy danh sách câu hỏi (không yêu cầu xác thực)
router.get('/', getAllQuestions);

// Lấy một câu hỏi cụ thể
router.get('/:id', getQuestionById);

// Chỉ admin hoặc staff mới có thể cập nhật câu hỏi
router.put('/:id', verifyToken, verifyStaff, updateQuestion);

// Chỉ admin mới có thể xóa câu hỏi
router.delete('/:id', verifyToken, verifyAdmin, deleteQuestion);
>>>>>>> 8073ffd (add ui)

export default router;

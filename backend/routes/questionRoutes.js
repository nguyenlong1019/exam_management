import express from "express";
const router = express.Router();
import {createQuestion, getAllQuestions, getQuestionById, updateQuestion, deleteQuestion} from "../controllers/questionController.js";

router.post('/', createQuestion);
router.get('/', getAllQuestions);
router.get('/:id', getQuestionById);
router.put('/:id', updateQuestion);
router.delete('/:id', deleteQuestion);

export default router;

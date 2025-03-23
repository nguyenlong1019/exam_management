import express from "express";
const router = express.Router();
import {createSubject, getAllSubjects, getSubjectById, updateSubject, deleteSubject} from "../controllers/subjectController.js";

router.post('/', createSubject);
router.get('/', getAllSubjects);
router.get('/:id', getSubjectById);
router.put('/:id', updateSubject);
router.delete('/:id', deleteSubject);

export default router;

import db from '../config.js';

const ExamQuestion = {
    create: (examId, questionId, callback) => {
        db.query(
            `INSERT INTO exam_questions (exam_id, question_id) VALUES (?, ?)`,
            [examId, questionId],
            callback
        );
    },

    findByExamId: (examId, callback) => {
        db.query(
            `SELECT eq.*, q.question_text, q.level 
            FROM exam_questions eq 
            JOIN questions q ON eq.question_id = q.id
            WHERE eq.exam_id = ?`,
            [examId],
            callback
        );
    },

    delete: (examId, questionId, callback) => {
        db.query(
            `DELETE FROM exam_questions WHERE exam_id = ? AND question_id = ?`,
            [examId, questionId],
            callback
        );
    }
};

export default ExamQuestion;

import db from '../config.js';

const UserAnswer = {
    create: (userId, examId, questionId, answerId, isCorrect, callback) => {
        db.query(
            `INSERT INTO user_answers (user_id, exam_id, question_id, answer_id, is_correct) VALUES (?, ?, ?, ?, ?)`,
            [userId, examId, questionId, answerId, isCorrect],
            callback
        );
    },

    findByExamAndUser: (userId, examId, callback) => {
        db.query(
            `SELECT ua.*, q.question_text, a.answer_text 
            FROM user_answers ua
            JOIN questions q ON ua.question_id = q.id
            LEFT JOIN answers a ON ua.answer_id = a.id
            WHERE ua.user_id = ? AND ua.exam_id = ?`,
            [userId, examId],
            callback
        );
    },

    deleteByExam: (userId, examId, callback) => {
        db.query(
            `DELETE FROM user_answers WHERE user_id = ? AND exam_id = ?`,
            [userId, examId],
            callback
        );
    }
};

export default UserAnswer;

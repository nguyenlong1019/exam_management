import db from '../config.js';

const ExamResult = {
    create: (userId, examId, score, status, callback) => {
        db.query(
            `INSERT INTO exam_results (user_id, exam_id, score, status) VALUES (?, ?, ?, ?)`,
            [userId, examId, score, status],
            callback
        );
    },

    findByUserId: (userId, callback) => {
        db.query(
            `SELECT er.*, e.exam_name, e.exam_code 
            FROM exam_results er 
            JOIN exams e ON er.exam_id = e.id
            WHERE er.user_id = ?`,
            [userId],
            callback
        );
    },

    updateScore: (resultId, score, status, callback) => {
        db.query(
            `UPDATE exam_results SET score = ?, status = ?, completed_at = NOW() WHERE id = ?`,
            [score, status, resultId],
            callback
        );
    }
};

export default ExamResult;

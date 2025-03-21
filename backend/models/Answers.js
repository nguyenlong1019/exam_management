import db from '../config.js';

const Answer = {
    create: (answerData, callback) => {
        db.query(`INSERT INTO answers (q_id, answer_text, is_correct) VALUES (?, ?, ?)`,
        [answerData.q_id, answerData.answer_text, answerData.is_correct], callback);
    },

    findAll: (callback) => {
        db.query(`SELECT * FROM answers`, callback);
    },

    findByQuestionId: (questionId, callback) => {
        db.query(`SELECT * FROM answers WHERE q_id = ?`, [questionId], callback);
    },

    findById: (answerId, callback) => {
        db.query(`SELECT * FROM answers WHERE id = ?`, [answerId], callback);
    },

    update: (answerId, answerData, callback) => {
        db.query(`UPDATE answers SET answer_text = ?, is_correct = ? WHERE id = ?`,
        [answerData.answer_text, answerData.is_correct, answerId], callback);
    },

    delete: (answerId, callback) => {
        db.query(`DELETE FROM answers WHERE id = ?`, [answerId], callback);
    }
};

export default Answer;

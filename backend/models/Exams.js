import db from '../config.js';

const Exam = {
    create: (examData, callback) => {
        db.query(`INSERT INTO exams (exam_code, exam_name, created_by, start_time, finish_time, exam_type, total_question, easy_question, medium_question, hard_question, status) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [examData.exam_code, examData.exam_name, examData.created_by, examData.start_time, examData.finish_time, examData.exam_type, 
        examData.total_question, examData.easy_question, examData.medium_question, examData.hard_question, examData.status], callback);
    },

    findAll: (callback) => {
        db.query(`SELECT e.*, u.username FROM exams e JOIN users u ON e.created_by = u.id ORDER BY e.created_at DESC`, callback);
    },

    findById: (examId, callback) => {
        db.query(`SELECT e.*, u.username FROM exams e JOIN users u ON e.created_by = u.id WHERE e.id = ?`, [examId], callback);
    },

    update: (examId, examData, callback) => {
        db.query(`UPDATE exams SET exam_name = ?, start_time = ?, finish_time = ?, exam_type = ?, total_question = ?, easy_question = ?, medium_question = ?, hard_question = ?, status = ? WHERE id = ?`,
        [examData.exam_name, examData.start_time, examData.finish_time, examData.exam_type, 
        examData.total_question, examData.easy_question, examData.medium_question, examData.hard_question, examData.status, examId], callback);
    },

    delete: (examId, callback) => {
        db.query(`DELETE FROM exams WHERE id = ?`, [examId], callback);
    }
};

export default Exam;

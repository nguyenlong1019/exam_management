import db from '../config.js';

const ExamRoom = {
    create: (roomData, callback) => {
        db.query(`INSERT INTO exam_rooms (name, subject_id, exam_id, type) VALUES (?, ?, ?, ?)`,
        [roomData.name, roomData.subject_id, roomData.exam_id, roomData.type], callback);
    },

    findAll: (callback) => {
        db.query(`SELECT er.*, s.subject_name, e.exam_name FROM exam_rooms er 
                  JOIN subjects s ON er.subject_id = s.id
                  JOIN exams e ON er.exam_id = e.id`, callback);
    },

    findById: (roomId, callback) => {
        db.query(`SELECT er.*, s.subject_name, e.exam_name FROM exam_rooms er 
                  JOIN subjects s ON er.subject_id = s.id
                  JOIN exams e ON er.exam_id = e.id WHERE er.id = ?`, [roomId], callback);
    },

    update: (roomId, roomData, callback) => {
        db.query(`UPDATE exam_rooms SET name = ?, subject_id = ?, exam_id = ?, type = ? WHERE id = ?`,
        [roomData.name, roomData.subject_id, roomData.exam_id, roomData.type, roomId], callback);
    },

    delete: (roomId, callback) => {
        db.query(`DELETE FROM exam_rooms WHERE id = ?`, [roomId], callback);
    }
};

export default ExamRoom;

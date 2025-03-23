import Subject from "../models/Subjects.js";


const createSubject = (req, res) => {
    const {subject_name, credit, status, theory_hour, practice_hour} = req.body;

    Subject.create({subject_name, credit, status, theory_hour, practice_hour}, (err, result) => {
        if (err) return res.status(500).send(err);

        res.send({'message': 'Subject created successfully!'});
    });
}

const getAllSubjects = (req, res) => {
    Subject.findAll((err, subjects) => {
       if (err) return res.status(500).send(err);

       res.send(subjects);
    });
};

const getSubjectById = (req, res) => {
    const subId = req.params.id;
    Subject.findById(subId, (err, subject) => {
        if (err) return res.status(500).send(err);

        res.send(subject);
    });
};

const updateSubject = (req, res) => {
    const subId = req.params.id;
    const {subject_name, credit, status, theory_hour, practice_hour} = req.body;

    Subject.update(subId, {subject_name, credit, status, theory_hour, practice_hour}, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({'message': 'Subject updated successfully!'});
    });
};

const deleteSubject = (req, res) => {
    const subId = req.params.id;
    Subject.delete(subId, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({'message': 'Subject deleted successfully!'});
    });
};

export {createSubject, getAllSubjects, getSubjectById, updateSubject, deleteSubject};
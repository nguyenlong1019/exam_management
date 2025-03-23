import Question from "../models/Questions.js";

const createQuestion = (req, res) => {
    const {q_text, level, s_id, created_by, status} = req.body;

    Question.create({q_text, level, s_id, created_by, status}, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({'message': 'Question created successfully!'});
    });
};

const getAllQuestions = (req, res) => {
    Question.findAll((err, questions) => {
        if (err) return res.status(500).send(err);
        res.send(questions);
    });
};

const getQuestionById = (req, res) => {
    const qId = req.params.id;
    Question.findAll(qId,(err, question) => {
        if (err) return res.status(500).send(err);
        res.send(question);
    });
};

const updateQuestion = (req, res) => {
    const qId = req.params.id;
    const {q_text, level, s_id, created_by, status} = req.body;
    Question.findAll(qId, {q_text, level, s_id, created_by, status}, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({'message': 'Question updated successfully!'});
    });
};

const deleteQuestion = (req, res) => {
    const qId = req.params.id;
    Question.findAll(qId,(err, result) => {
        if (err) return res.status(500).send(err);
        res.send({'message': 'Question deleted successfully!'});
    });
};

export {createQuestion, getAllQuestions, getQuestionById, updateQuestion, deleteQuestion};
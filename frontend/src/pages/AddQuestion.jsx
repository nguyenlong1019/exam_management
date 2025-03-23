import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const AddQuestion = ({ closeModal }) => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([{ text: "", correct: false }]);

  const addAnswer = () => {
    setAnswers([...answers, { text: "", correct: false }]);
  };

  const handleAnswerChange = (index, text) => {
    const newAnswers = [...answers];
    newAnswers[index].text = text;
    setAnswers(newAnswers);
  };

  const toggleCorrect = (index) => {
    const newAnswers = [...answers];
    newAnswers[index].correct = !newAnswers[index].correct;
    setAnswers(newAnswers);
  };

  const saveQuestion = () => {
    console.log("Câu hỏi:", question);
    console.log("Đáp án:", answers);
    closeModal();
  };

  return (
    <div className="modal show d-block bg-dark bg-opacity-50">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">Thêm Câu Hỏi</h5>
            <button className="btn-close" onClick={closeModal}></button>
          </div>

          {/* Body */}
          <div className="modal-body">
            <div className="row">
              <div className="col-md-4">
                <label className="form-label">Môn học</label>
                <select className="form-select">
                  <option>Choose one...</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Chương</label>
                <select className="form-select">
                  <option>Choose one...</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Độ khó</label>
                <select className="form-select">
                  <option>Choose one...</option>
                </select>
              </div>
            </div>

            {/* Nội dung câu hỏi */}
            <div className="mt-3">
              <label className="form-label">Nội dung câu hỏi</label>
              <textarea
                className="form-control"
                rows="3"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>

            {/* Danh sách đáp án */}
            <div className="mt-3">
              <label className="form-label">Danh sách đáp án</label>
              {answers.map((answer, index) => (
                <div key={index} className="d-flex align-items-center mb-2">
                  <input
                    type="text"
                    className="form-control me-2"
                    placeholder={`Đáp án ${index + 1}`}
                    value={answer.text}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                  />
                  <button
                    className={`btn ${answer.correct ? "btn-success" : "btn-outline-secondary"}`}
                    onClick={() => toggleCorrect(index)}
                  >
                    <i className="fas fa-check"></i>
                  </button>
                </div>
              ))}
              <button className="btn btn-primary mt-2" onClick={addAnswer}>
                + Thêm Câu Trả Lời
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={closeModal}>
              Hủy
            </button>
            <button className="btn btn-primary" onClick={saveQuestion}>
              Lưu Câu Hỏi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;

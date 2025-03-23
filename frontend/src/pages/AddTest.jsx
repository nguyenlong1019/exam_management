import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateExam = () => {
  const [examName, setExamName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [duration, setDuration] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedChapters, setSelectedChapters] = useState([]);
  const [easyCount, setEasyCount] = useState("");
  const [mediumCount, setMediumCount] = useState("");
  const [hardCount, setHardCount] = useState("");

  return (
    <div className="container mt-4">
      <h4>Tạo mới đề thi</h4>

      {/* Nhập thông tin đề thi */}
      <input type="text" className="form-control my-2" placeholder="Nhập tên đề kiểm tra" value={examName} onChange={(e) => setExamName(e.target.value)} />
      
      <div className="d-flex gap-2">
        <input type="datetime-local" className="form-control" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        <input type="datetime-local" className="form-control" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      </div>

      <input type="number" className="form-control my-2" placeholder="Thời gian làm bài (phút)" value={duration} onChange={(e) => setDuration(e.target.value)} />

      {/* Chọn nhóm học phần */}
      <select className="form-control my-2" value={selectedGroup} onChange={(e) => setSelectedGroup(e.target.value)}>
        <option value="">Chọn nhóm học phần...</option>
        <option value="Nhóm 1">Nhóm 1</option>
        <option value="Nhóm 2">Nhóm 2</option>
      </select>

      {/* Chọn chương */}
      <select multiple className="form-control my-2" value={selectedChapters} onChange={(e) => setSelectedChapters([...e.target.selectedOptions].map(o => o.value))}>
        <option value="Chương 1">Chương 1</option>
        <option value="Chương 2">Chương 2</option>
      </select>

      {/* Số lượng câu hỏi */}
      <div className="d-flex gap-2 my-2">
        <input type="number" className="form-control" placeholder="Số câu dễ" value={easyCount} onChange={(e) => setEasyCount(e.target.value)} />
        <input type="number" className="form-control" placeholder="Số câu trung bình" value={mediumCount} onChange={(e) => setMediumCount(e.target.value)} />
        <input type="number" className="form-control" placeholder="Số câu khó" value={hardCount} onChange={(e) => setHardCount(e.target.value)} />
      </div>

      {/* Cấu hình đề */}
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="autoFetch" />
        <label className="form-check-label" htmlFor="autoFetch">Tự động lấy từ ngân hàng đề</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="shuffleQuestions" />
        <label className="form-check-label" htmlFor="shuffleQuestions">Đảo câu hỏi</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="autoSubmit" />
        <label className="form-check-label" htmlFor="autoSubmit">Tự động nộp bài khi chuyển tab</label>
      </div>

      {/* Nút tạo đề */}
      <button className="btn btn-primary mt-3">+ Tạo đề</button>
    </div>
  );
};

export default CreateExam;

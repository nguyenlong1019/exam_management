import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const exams = [
  {
    id: 1,
    title: "test1111111",
    subject: "Lập trình hướng đối tượng - NH2022 - HK1",
    startTime: "05/08/2023, 04:11 PM",
    endTime: "05/08/2023, 04:30 PM",
    status: "Đã đóng",
  },
  {
    id: 2,
    title: "Đề tạo thủ công",
    subject: "Lập trình hướng đối tượng - NH2022 - HK1",
    startTime: "05/09/2023, 12:00 PM",
    endTime: "05/09/2023, 12:00 PM",
    status: "Đã đóng",
  },
  {
    id: 3,
    title: "Đề kiểm tra Lập trình web và Ứng Dụng CK",
    subject: "Lập trình web và ứng dụng nâng cao - NH2022 - HK2",
    startTime: "04/28/2023, 05:00 PM",
    endTime: "05/10/2023, 12:00 PM",
    status: "Đã đóng",
  },
];

const ExamList = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between">
        <h4>Danh sách đề kiểm tra</h4>
        <button className="btn btn-primary">+ Tạo đề thi</button>
      </div>

      {/* Ô tìm kiếm */}
      <input
        type="text"
        className="form-control mt-3"
        placeholder="Tìm kiếm đề thi..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Danh sách đề thi */}
      <div className="mt-3">
        {exams
          .filter((exam) => exam.title.toLowerCase().includes(search.toLowerCase()))
          .map((exam) => (
            <div key={exam.id} className="card p-3 mb-2">
              <h5>{exam.title}</h5>
              <p>
                🏫 Giao cho học phần: <strong>{exam.subject}</strong>
              </p>
              <p>📅 Diễn ra từ {exam.startTime} đến {exam.endTime}</p>
              <span className="badge bg-danger">{exam.status}</span>
              <div className="mt-2">
                <button className="btn btn-success btn-sm me-2">Xem chi tiết</button>
                <button className="btn btn-primary btn-sm me-2">Chỉnh sửa</button>
                <button className="btn btn-danger btn-sm">Xóa đề</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExamList;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ExamResults = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Đào Ngọc Linh", studentId: "3120410277", score: 0, time: "2023-05-07 19:29:23", duration: "00:00:08", escapes: 1 },
    { id: 2, name: "Nguyễn Trường Tấn Lộc", studentId: "3120410293", score: 0, time: "2023-05-07 19:31:04", duration: "00:02:03", escapes: 0 },
    { id: 3, name: "Bùi Minh Ngọc", studentId: "3120410347", score: 4.5, time: "2023-05-07 19:34:54", duration: "00:02:00", escapes: 14 },
  ]);

  return (
    <div className="container mt-4">
      <h4>Bảng điểm</h4>

      <div className="d-flex gap-2 my-2">
        <select className="form-control">
          <option value="all">Tất cả</option>
          <option value="submitted">Đã nộp bài</option>
        </select>
        <input type="text" className="form-control" placeholder="Tìm kiếm sinh viên..." />
      </div>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>MSSV</th>
            <th>Họ tên</th>
            <th>Điểm</th>
            <th>Thời gian vào thi</th>
            <th>Thời gian thi</th>
            <th>Số lần thoát</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.studentId}</td>
              <td>{student.name}</td>
              <td>{student.score}</td>
              <td>{student.time}</td>
              <td>{student.duration}</td>
              <td>{student.escapes}</td>
              <td>
                <button className="btn btn-sm btn-outline-primary mx-1">👁️</button>
                <button className="btn btn-sm btn-outline-secondary">🖨️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-success">📥 Xuất bảng điểm</button>
    </div>
  );
};

export default ExamResults;

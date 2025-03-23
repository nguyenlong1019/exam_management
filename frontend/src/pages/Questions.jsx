import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Questions = () => {
  const questions = [
    { id: 1, content: "OOP là viết tắt của:", subject: "Lập trình hướng đối tượng", level: "Cơ bản" },
    { id: 2, content: "Đặc điểm cơ bản của lập trình hướng đối tượng thể hiện ở:", subject: "Lập trình hướng đối tượng", level: "Trung bình" },
    { id: 3, content: "Lập trình hướng đối tượng là:", subject: "Lập trình hướng đối tượng", level: "Nâng cao" },
    { id: 4, content: "Thế nào được gọi là hiện tượng nạp chồng?", subject: "Lập trình hướng đối tượng", level: "Cơ bản" },
    { id: 5, content: "Trong Java, khi khai báo một thuộc tính hoặc một hàm mà không có từ khóa quyền truy cập thì mặc định quyền truy cập là gì?", subject: "Lập trình hướng đối tượng", level: "Trung bình" },
    { id: 6, content: "Đối với quyền truy cập nào thì cho phép truy cập các lớp con trong cùng gói với lớp cha?", subject: "Lập trình hướng đối tượng", level: "Nâng cao" },
    { id: 7, content: "Khi xây dựng phương thức khởi tạo (constructor), việc thường làm là:", subject: "Lập trình hướng đối tượng", level: "Cơ bản" },
    { id: 8, content: "Phương thức khởi tạo (constructor) là phương thức được thực thi:", subject: "Lập trình hướng đối tượng", level: "Trung bình" },
    { id: 9, content: "Tên của phương thức khởi tạo:", subject: "Lập trình hướng đối tượng", level: "Nâng cao" },
    { id: 10, content: "Đối tượng sống kể từ khi:", subject: "Lập trình hướng đối tượng", level: "Cơ bản" },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav className="col-md-2 d-none d-md-block sidebar bg-light vh-100 pt-3">
          <div className="position-sticky">
            <h5 className="text-primary ms-3">SGU <span className="fw-bold">Test</span></h5>
            <ul className="nav flex-column">
              <li className="nav-item"><a className="nav-link" href="#"><i className="fas fa-home"></i> Tổng quan</a></li>
              <li className="nav-item"><a className="nav-link" href="#"><i className="fas fa-layer-group"></i> Nhóm học phần</a></li>
              <li className="nav-item"><a className="nav-link active" href="#"><i className="fas fa-question-circle"></i> Câu hỏi</a></li>
              <li className="nav-item"><a className="nav-link" href="#"><i className="fas fa-users"></i> Người dùng</a></li>
              <li className="nav-item"><a className="nav-link" href="#"><i className="fas fa-book"></i> Môn học</a></li>
              <li className="nav-item"><a className="nav-link" href="#"><i className="fas fa-tasks"></i> Phân công</a></li>
              <li className="nav-item"><a className="nav-link" href="#"><i className="fas fa-file-alt"></i> Đề kiểm tra</a></li>
              <li className="nav-item"><a className="nav-link" href="#"><i className="fas fa-bell"></i> Thông báo</a></li>
              <li className="nav-item"><a className="nav-link" href="#"><i className="fas fa-users-cog"></i> Nhóm quyền</a></li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4 content">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Tất cả câu hỏi</h1>
            <button className="btn btn-primary"><i className="fas fa-plus"></i> Thêm Câu Hỏi Mới</button>
          </div>

          {/* Bộ lọc */}
          <div className="row mb-3">
            <div className="col-md-3">
              <select className="form-select">
                <option>Chọn môn học</option>
              </select>
            </div>
            <div className="col-md-3">
              <select className="form-select">
                <option>Chọn chương</option>
              </select>
            </div>
            <div className="col-md-3">
              <select className="form-select">
                <option>Tất cả</option>
              </select>
            </div>
            <div className="col-md-3">
              <input type="text" className="form-control" placeholder="Nội dung câu hỏi..." />
            </div>
          </div>

          {/* Bảng danh sách câu hỏi */}
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nội dung câu hỏi</th>
                <th>Môn học</th>
                <th>Độ khó</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((q) => (
                <tr key={q.id}>
                  <td>{q.id}</td>
                  <td>{q.content}</td>
                  <td>{q.subject}</td>
                  <td>{q.level}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2"><i className="fas fa-edit"></i></button>
                    <button className="btn btn-sm btn-outline-danger"><i className="fas fa-trash"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Phân trang */}
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">...</a></li>
              <li className="page-item"><a className="page-link" href="#">54</a></li>
            </ul>
          </nav>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer bg-light py-3 text-center">
        <div className="container">
          <span className="text-muted">SGU Test © 2023</span>
          <span className="text-muted float-end">
            Crafted with <i className="fas fa-heart text-danger"></i> by{" "}
            <span className="text-primary">SGU</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Questions;

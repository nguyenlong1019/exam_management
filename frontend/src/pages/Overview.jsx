import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Overview = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav className="col-md-2 d-none d-md-block sidebar bg-light vh-100 pt-3">
          <div className="position-sticky">
            <h5 className="text-primary ms-3">
              SGU <span className="fw-bold">Test</span>
            </h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <i className="fas fa-home"></i> Tổng quan
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-layer-group"></i> Nhóm học phần
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-question-circle"></i> Câu hỏi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-users"></i> Người dùng
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-book"></i> Môn học
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-tasks"></i> Phân công
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-file-alt"></i> Đề kiểm tra
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-bell"></i> Thông báo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-users-cog"></i> Nhóm quyền
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4 content">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Tổng quan</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="fas fa-ellipsis-h"></i>
                </button>
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="fas fa-cog"></i>
                </button>
              </div>
              <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                <i className="fas fa-user-circle"></i>
              </button>
            </div>
          </div>
          <img
            src="https://placehold.co/1200x600"
            alt="A beautiful building with a sunset in the background"
            className="img-fluid"
          />
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

export default Overview;

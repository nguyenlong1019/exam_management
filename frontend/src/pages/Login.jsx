import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Login = () => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Mã sinh viên:", studentId);
    console.log("Mật khẩu:", password);
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Cột bên trái: Form đăng nhập */}
        <div className="col-md-6 d-flex justify-content-center align-items-center bg-white">
          <div className="login-form w-100" style={{ maxWidth: "400px", padding: "20px" }}>
            <h1>
              SGU <span style={{ color: "#007bff" }}>Test</span>
            </h1>
            <p>ĐĂNG NHẬP</p>
            <input
              className="form-control"
              type="text"
              placeholder="Mã sinh viên"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
            <input
              className="form-control"
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary w-100" onClick={handleLogin}>
              <i className="fas fa-sign-in-alt"></i> ĐĂNG NHẬP
            </button>
            <button className="btn btn-google w-100 mt-2">
              <i className="fab fa-google"></i> Đăng nhập với Google
            </button>
            <div className="d-flex justify-content-between mt-3">
              <a className="form-text" href="#">
                <i className="fas fa-exclamation-triangle"></i> Quên mật khẩu
              </a>
              <a className="form-text" href="#">
                <i className="fas fa-user-plus"></i> New Account
              </a>
            </div>
          </div>
        </div>

        {/* Cột bên phải: Hình ảnh + Chào mừng */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-white" style={{ backgroundColor: "#007bff" }}>
          <img src="https://placehold.co/600x400" alt="Background" className="img-fluid" />
          <h2>Welcome to the SGU Test</h2>
          <p>Copyright © 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

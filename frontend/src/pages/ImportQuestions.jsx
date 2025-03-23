import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ImportQuestions = ({ closeModal }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Vui lòng chọn file để tải lên!");
      return;
    }
    console.log("Tệp đã chọn:", file.name);
    // Thêm logic xử lý tải lên file tại đây
    closeModal();
  };

  return (
    <div className="modal show d-block bg-dark bg-opacity-50">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">Thêm Câu Hỏi từ File</h5>
            <button className="btn-close" onClick={closeModal}></button>
          </div>

          {/* Body */}
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Môn học</label>
              <select className="form-select">
                <option>Choose one...</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Chương</label>
              <select className="form-select">
                <option>Choose one...</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Nội dung</label>
              <input type="file" className="form-control" onChange={handleFileChange} />
            </div>

            <p className="text-muted">
              Vui lòng soạn câu hỏi theo đúng định dạng.{" "}
              <a href="/sample.docx" download>Tải về file mẫu Docx</a>
            </p>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={closeModal}>
              Hủy
            </button>
            <button className="btn btn-primary" onClick={handleUpload}>
              <i className="fas fa-upload"></i> Thêm File Excel
            </button>
            <button className="btn btn-success" onClick={handleUpload}>
              <i className="fas fa-cloud-upload-alt"></i> Thêm vào hệ thống
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportQuestions;

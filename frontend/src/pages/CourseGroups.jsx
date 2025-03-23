import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faQuestionCircle,
  faUser,
  faBook,
  faTasks,
  faFileAlt,
  faBell,
  faUserShield,
  faCog,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar p-3 text-white" style={{ backgroundColor: "#2c7be5", height: "100vh" }}>
      <h4>SGU Test</h4>
      <nav className="nav flex-column">
        <a className="nav-link text-white" href="#"><FontAwesomeIcon icon={faHome} /> Tổng quan</a>
        <a className="nav-link active text-white" href="#"><FontAwesomeIcon icon={faUsers} /> Nhóm học phần</a>
        <a className="nav-link text-white" href="#"><FontAwesomeIcon icon={faQuestionCircle} /> Câu hỏi</a>
        <a className="nav-link text-white" href="#"><FontAwesomeIcon icon={faUser} /> Người dùng</a>
        <a className="nav-link text-white" href="#"><FontAwesomeIcon icon={faBook} /> Môn học</a>
        <a className="nav-link text-white" href="#"><FontAwesomeIcon icon={faTasks} /> Phân công</a>
        <a className="nav-link text-white" href="#"><FontAwesomeIcon icon={faFileAlt} /> Đề kiểm tra</a>
        <a className="nav-link text-white" href="#"><FontAwesomeIcon icon={faBell} /> Thông báo</a>
        <a className="nav-link text-white" href="#"><FontAwesomeIcon icon={faUserShield} /> Nhóm quyền</a>
      </nav>
    </div>
  );
};

const GroupCard = ({ groupName, schedule, size }) => {
  return (
    <div className="col-md-3">
      <div className="card shadow-sm mb-3">
        <div className="card-header d-flex justify-content-between align-items-center">
          {groupName}
          <FontAwesomeIcon icon={faCog} />
        </div>
        <div className="card-body">
          {schedule} <br />
          Sĩ số: {size}
        </div>
      </div>
    </div>
  );
};

const TeachingGroups = () => {
  const groups = [
    {
      title: "841059 - Lập trình hướng đối tượng - NH2022 - HK1",
      list: [
        { name: "Nhóm 1", schedule: "Chiều thứ 2", size: 17 },
        { name: "Nhóm 2", schedule: "Chiều thứ 3", size: 0 },
      ],
    },
    {
      title: "841464 - Lập trình web và ứng dụng nâng cao - NH2022 - HK2",
      list: [
        { name: "Nhóm 1", schedule: "a", size: 1 },
        { name: "Nhóm 2", schedule: "b", size: 0 },
        { name: "Nhóm 3", schedule: "c", size: 21 },
      ],
    },
    {
      title: "841107 - Lập trình Java - NH2022 - HK2",
      list: [
        { name: "Nhóm 1", schedule: "q", size: 1 },
        { name: "Nhóm 2", schedule: "w", size: 0 },
        { name: "Nhóm 3", schedule: "e", size: 0 },
      ],
    },
  ];

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5>Đang giảng dạy</h5>
        <div className="input-group" style={{ maxWidth: "300px" }}>
          <input type="text" className="form-control" placeholder="Tìm kiếm nhóm..." />
          <button className="btn btn-outline-secondary">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      {groups.map((group, index) => (
        <div key={index} className="mb-4">
          <h6>{group.title}</h6>
          <div className="row">
            {group.list.map((g, idx) => (
              <GroupCard key={idx} groupName={g.name} schedule={g.schedule} size={g.size} />
            ))}
          </div>
        </div>
      ))}
      <div className="footer text-center text-muted p-2" style={{ backgroundColor: "#f8f9fc" }}>
        SGU Test © 2023
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <TeachingGroups />
      </div>
    </div>
  );
};

export default App;

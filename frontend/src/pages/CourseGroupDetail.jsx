import React from "react";

const StudentList = () => {
  // Giả sử đây là danh sách sinh viên lấy từ API hoặc state
  const students = [
    { id: 1, code: "SV001", name: "Nguyễn Văn A", class: "KTPM2021", score: 8.5 },
    { id: 2, code: "SV002", name: "Trần Thị B", class: "KTPM2021", score: 7.8 },
    { id: 3, code: "SV003", name: "Lê Văn C", class: "KTPM2021", score: 9.0 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Danh sách sinh viên</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Mã SV</th>
            <th className="border p-2">Tên sinh viên</th>
            <th className="border p-2">Lớp</th>
            <th className="border p-2">Điểm</th>
            <th className="border p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border">
              <td className="border p-2">{student.code}</td>
              <td className="border p-2">{student.name}</td>
              <td className="border p-2">{student.class}</td>
              <td className="border p-2">{student.score}</td>
              <td className="border p-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Sửa</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;

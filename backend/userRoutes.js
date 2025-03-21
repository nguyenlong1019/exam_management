import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Lấy tất cả người dùng
router.get("/", (req, res) => {
  User.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Lấy người dùng theo ID
router.get("/:id", (req, res) => {
  User.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
});

// Thêm người dùng mới
router.post("/", (req, res) => {
  User.create(req.body, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "User added!", id: results.insertId });
  });
});

// Cập nhật thông tin người dùng
router.put("/:id", (req, res) => {
  User.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "User updated!" });
  });
});

// Xóa người dùng
router.delete("/:id", (req, res) => {
  User.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "User deleted!" });
  });
});

export default router;

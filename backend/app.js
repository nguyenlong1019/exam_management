import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json())
app.use(cors());

app.use("/users", userRoutes); // Định tuyến API User

const PORT = 8888 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

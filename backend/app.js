import express from "express";
import cors from "cors";
import userRoutes from "./userRoutes.js";
import auth from "./routes/auth.js";
import subjectRoutes from "./routes/subjectRoutes.js";
import questionRoutes from "./routes/questionRoutes.js";

const app = express();
app.use(express.json())
app.use(cors());


app.use('/api/auth', auth);
app.use('/api/users', userRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/questions', questionRoutes);


const PORT = 8888 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

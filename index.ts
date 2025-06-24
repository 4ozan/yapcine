import express from "express";
import cors from "cors";
import { quotesRouter } from "./routes/quotes";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "API is working" });
});

app.use("/api/quote", quotesRouter);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

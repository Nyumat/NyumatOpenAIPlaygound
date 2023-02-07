import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { OpenAIApi, Configuration } from "openai";


dotenv.config();

if (!process.env.PORT) {
      process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
      console.log(`\n\n [⚡️ Server ⚡️]: Listening on port ${PORT}`);
});

interface User {
      message: string;
      image: string;
      username: string;
      name: string;
}

// Example: Get a user from GitHub
app.get("/api/user", async (req, res) => {
      res.status(200).json({
            message: "User fetched successfully",
            image: "https://avatars.githubusercontent.com/u/46255836?v=4",
            username: "Nyumat",
            name: "Tom",
      });
});
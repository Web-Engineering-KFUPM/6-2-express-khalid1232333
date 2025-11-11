import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

/* write code for cors */
const app = express();
app.use(cors());

/* write code to define routes */

/* write code to create server */
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

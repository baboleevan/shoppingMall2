import dotenv from "dotenv";
import "./db";
import app from "./app";

import "./models/Products";

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () => {
  console.log(`✔️ Listening on : http://localohost:${PORT}`);
};

app.listen(PORT, handleListening);

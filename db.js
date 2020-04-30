import mongoose from "mongoose";
import dotenv from "dotenv";

// dotenv를 이용해 .env파일로 특정 상수를 은닉 및 보관

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ connected to DB");

//에러 발생 시
const handleError = (error) =>
  console.log(`❌Error on DB connection: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

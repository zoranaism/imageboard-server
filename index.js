const express = require("express");
const imageRouter = require("./routers/image");
const userRouter = require("./routers/user");
const authRouter = require("./routers/auth");

const PORT = process.env.PORT || 4000;
const app = express();

const jsonParser = express.json();
app.use(jsonParser);


app.use("/images", imageRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);

app.listen(PORT, () => console.log("App listening"));
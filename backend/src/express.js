import compression from "compression";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import cors from "cors"
import userRoutes from "./routes/user.routes"
import authRoutes from "./routes/auth.routes"
import publisherRoutes from "./routes/publisher.routes"
import booksRoutes from "./routes/books.routes"
import authorRoutes from "./routes/authors.routes"



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());
app.use(helmet())
app.use(cors())
app.use("/", userRoutes)
app.use("/", authRoutes)
app.use("/", publisherRoutes)
app.use("/", booksRoutes)
app.use("/", authorRoutes)

export default app;
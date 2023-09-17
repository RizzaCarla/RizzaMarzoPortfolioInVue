import path from 'path';
import express from 'express';
import homepageRouter from './homepageRouter.js';
const distPath = path.join(path.resolve(), "dist");
// import mongoose from 'mongoose';

const publicPath = path.join(path.resolve(), "public");
const port = process.env.PORT || 5000;
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(distPath));
} else {
  app.use("/", express.static(publicPath));
}

app.use(homepageRouter);

app.listen(port);
console.log("Server started!")
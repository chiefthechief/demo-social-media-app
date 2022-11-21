import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.evv.PORT || 5000;
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
mongoose.connect(process.env.url, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
      app.listen(port, () => {
         console.log(`server running on port ${port}`)
      })
   })
   .catch(err => console.log(err));

mongoose.set("useFindAndModify", false);
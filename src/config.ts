import Store from "./services/store";
import dotenv from "dotenv";
import path from "path";
import winston from "winston";

dotenv.config({
  path: path.resolve(__dirname, "../", process.env.NODE_ENV + ".env"),
});

const { HOST, PORT, NODE_ENV, LOG_LEVEL } = process.env;

// Database
const db = new Store();

const baseUrl = "http://" + HOST + ":" + PORT;

// Logs
const { combine, timestamp, printf } = winston.format;
const customLogFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}] ${message}`;
});
const logger = winston.createLogger({
  level: LOG_LEVEL || "info",
  format: combine(timestamp(), customLogFormat),
  transports: [
    new winston.transports.File({ filename: "ts-express-api-boilerplate-error.log", level: "error" }),
    new winston.transports.File({ filename: "ts-express-api-boilerplate.log" }),
  ],
});
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

export { db, NODE_ENV, HOST, PORT, baseUrl, logger };

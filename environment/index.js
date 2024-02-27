const env = process.env.Node_ENV || "development";
import config from "./config/config";

const database = config[env].DB_NAME;
console.log(`Baza de date folosita este ${database}`);

// import "dotenv/config";
// console.log(process.env);
// console.log(process.env.LOG_LEVEL) || "info";
// console.log(LOG_LEVEL);

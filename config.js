import { config } from "dotenv";
config();


// const username = "newUser"
// const pass = "4sGiHVU3BK10Y0K6"
// const databaseName = "newData"
// const uri = `mongodb+srv://${username}:${pass}@cluster0.z65cprz.mongodb.net/?retryWrites=true&w=majority`

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/notesdb";
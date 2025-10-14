import express from 'express';

let name : string = "Erick";

const app = express();
const PORT= "4000";

app.get("/health", (_, res) => res.send("Server OK"));

app.listen(PORT, ()=>{
  console.log("Server ready  at http://localhost:4000 !!");
});
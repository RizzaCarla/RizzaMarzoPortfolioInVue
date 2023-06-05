import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express'
const port = process.env.PORT || 5173;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
    res.sendFile(__dirname + "/dist/index.html");
})

app.listen(port);
console.log("Server started!")
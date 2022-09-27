const express = require("express");
const path = require("path");
const fs = require("fs")
var files = []
fs.readdir("src", (err, files) => {
    files.forEach(file => {
        if (file.endsWith(".ts")) files.push("src/" + file)
    })
})

require('esbuild').build({
    entryPoints: files,
    bundle: true,
    keepNames: true,
    target: "es6",
    outfile: 'dist/dist.js',
    watch: true
}).catch(() => process.exit(1))

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, ".", "index.html"));
});

app.use("/dist", express.static(path.join(__dirname, "./dist")));
app.use("/sounds", express.static(path.join(__dirname, "./sounds")))
app.use("/sprites", express.static(path.join(__dirname, "./sprites")))

app.listen(8000, () => {
    console.log("Started server! http://localhost:8000");
});
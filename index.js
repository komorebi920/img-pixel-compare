const path = require("path");
const compareImg = require("./src/compareImg");
const createLog = require("./src/createLog");
const diff = compareImg(
  path.resolve(__dirname, "./assets/a2521879-d4b6-47d2-9b01-eefcbbf41e12.png"),
  path.resolve(__dirname, "./assets/33d43111-77ea-49b6-82fa-a1a0af78f509.png")
);
createLog(diff)
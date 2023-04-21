const fs = require("fs");
const path = require("path");
const dayjs = require("dayjs");

function makeDir(path) {
  if (fs.existsSync(path)) {
    return true;
  }
  if (makeDir(path.dirname(path))) {
    fs.mkdirSync(path);
    return true;
  }
}

function createLog(diff) {
  const resultDir = path.resolve(__dirname, "../result/");
  const resultPath = `${resultDir}/diff.log`;
  makeDir(resultDir);

  const time = dayjs().format("YYYY-MM-DD HH:mm:ss");
  const content = `${time} 像素对比差异值: ${diff}px`;
  const file = fs.createWriteStream(resultPath, { flags: "a+" });
  const logger = new console.Console(file, file);
  logger.log(content);
  file.close();
}

module.exports = createLog;

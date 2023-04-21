const fs = require("fs");
const path = require("path");
const PNG = require("pngjs").PNG;
const pixelmatch = require("pixelmatch");

function getImageData(imagePath) {
  return PNG.sync.read(fs.readFileSync(imagePath));
}

/**
 * @param imagePathOne 图片一的绝对地址
 * @param imagePathTwo 图片二的绝对地址
 */
function compareImg(imagePathOne, imagePathTwo) {
  const resultPath = path.resolve(__dirname, `../result/diff.png`);
  const imageOneData = getImageData(imagePathOne);
  const imageTwoData = getImageData(imagePathTwo);
  const { width, height } = imageOneData;
  const diff = new PNG({ width, height });

  const compareResult = pixelmatch(
    imageOneData.data,
    imageTwoData.data,
    diff.data,
    width,
    height,
    { threshold: 0.1 }
  );

  fs.writeFileSync(resultPath, PNG.sync.write(diff));

  return compareResult;
}

module.exports = compareImg;
